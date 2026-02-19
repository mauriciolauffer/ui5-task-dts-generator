declare module '@ui5/fs' {
  export const resourceFactory: any;
}

declare module '@ui5/logger' {
  export function getLogger(name: string): any;
}

declare module '@ui5/dts-generator' {
  export interface IDirectives {
    badSymbols: string[];
    badMethods: string[];
    badInterfaces: string[];
    typeTyposMap: Record<string, string>;
    namespacesToInterfaces: Record<string, true | [true] | [true, 'keep_original_ns']>;
    fqnToIgnore: Record<string, string>;
  }

  export function jsonToDTS(
    json: any,
    options: {
      directives: IDirectives;
      dependencies: any[];
      topLevelNamespaceSymbol?: string;
    }
  ): {library: string; dtsText: string};
}
