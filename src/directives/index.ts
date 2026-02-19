import {badInterfaces, badMethods, badSymbols} from './excluded-elements';
import {typeTyposMap} from './typos';
import {namespacesToInterfaces} from './namespaces-to-interfaces';
import {fqnToIgnore} from './ts-ignore';

const directives = {
  badSymbols,
  badMethods,
  badInterfaces,
  typeTyposMap,
  namespacesToInterfaces,
  fqnToIgnore
};

export default directives;
