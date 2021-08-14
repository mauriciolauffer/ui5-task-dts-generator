'use strict';

const {jsonToDTS} = require('@ui5/dts-generator');
const {resourceFactory} = require('@ui5/fs');
const loggger = require('@ui5/logger').getLogger('builder:tasks:dtsGenerator');
// Directives help the DTS Generator handle typos and other inconsistencies in api.json files.
const directives = require('./directives');

/**
 * Task to copy resources without any changes, just move from one place to another
 *
 * @param {object} parameters Parameters
 * @param {module:@ui5/fs.DuplexCollection} parameters.workspace DuplexCollection to read and write files
 * @param {module:@ui5/fs.AbstractReader} parameters.dependencies Reader or Collection to read dependency files
 * @param {module:@ui5/builder.tasks.TaskUtil} parameters.taskUtil Options
 * @param {object} parameters.options Options
 * @param {string} parameters.options.projectName Project name
 * @param {string} [parameters.options.projectNamespace] Project namespace if available
 * @param {object} [parameters.options.configuration] Task configuration if given in ui5.yaml
 * @returns {Promise<any>} Promise resolving once data has been written
 */
module.exports = async function({workspace, dependencies, taskUtil, options}) {
  let apiJsonData;
  const resources = await workspace.byGlob('**/designtime/api.json');
  const namespace = options.projectNamespace?.split('/')[0];
  try {
    apiJsonData = JSON.parse(await resources[0].getString());
  } catch (err) {
    loggger.error(err);
    return;
  }

  const dtsText = jsonToDTS(apiJsonData, {
    directives,
    dependencies: [], // Array of api.json dependencies as plain JavaScript objects
    topLevelNamespaceSymbol: namespace // The first part of the namespace to analyze defaults to 'sap'
  });

  const dtsResource = resourceFactory.createResource({
    path: `/resources/${options.projectNamespace}/index.d.ts`,
    string: dtsText.dtsText
  });
  return workspace.write(dtsResource);
};
