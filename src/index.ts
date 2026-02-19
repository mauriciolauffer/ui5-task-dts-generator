import {jsonToDTS} from '@ui5/dts-generator';
import {resourceFactory} from '@ui5/fs';
import {getLogger} from '@ui5/logger';
import directives from './directives';

const logger = getLogger('builder:tasks:dtsGenerator');

interface TaskParameters {
  workspace: any;
  dependencies: any;
  taskUtil: any;
  options: {
    projectName: string;
    projectNamespace?: string;
    configuration?: any;
  };
}

/**
 * Task to copy resources without any changes, just move from one place to another
 * @param {TaskParameters} parameters Parameters
 * @returns {Promise<void>} Promise resolving once data has been written
 */
async function dtsGenerator({workspace, options}: TaskParameters): Promise<void> {
  let apiJsonData;
  const resources = await workspace.byGlob('**/designtime/api.json');
  const namespace = options.projectNamespace?.split('/')[0];
  try {
    apiJsonData = JSON.parse(await resources[0].getString());
  } catch (err) {
    logger.error(err);
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
}

export = dtsGenerator;
