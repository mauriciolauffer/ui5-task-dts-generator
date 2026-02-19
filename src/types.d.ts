declare module '@ui5/fs' {
  export interface Resource {
    getBuffer(): Promise<Buffer>;
    getString(): Promise<string>;
    getStream(): import('node:stream').Readable;
    setBuffer(buffer: Buffer): void;
    setString(string: string): void;
    setStream(stream: import('node:stream').Readable | (() => import('node:stream').Readable)): void;
    getPath(): string;
    setPath(path: string): void;
    getName(): string;
    getStatInfo(): any;
    getSize(): Promise<number>;
    pushCollection(name: string): void;
    clone(): Promise<Resource>;
    getProject(): any;
    setProject(project: any): void;
    hasProject(): boolean;
    isModified(): boolean;
    getPathTree(): any;
    getSourceMetadata(): any;
  }

  export interface AbstractReader {
    byPath(path: string, options?: any): Promise<Resource | null>;
    byGlob(glob: string, options?: any): Promise<Resource[]>;
  }

  export interface DuplexCollection extends AbstractReader {
    write(resource: Resource): Promise<void>;
  }

  export const resourceFactory: {
    createResource(parameters: {
      path: string;
      buffer?: Buffer;
      string?: string;
      stream?: import('node:stream').Readable;
      createStream?: () => import('node:stream').Readable;
      project?: any;
      sourceMetadata?: any;
      statInfo?: any;
    }): Resource;
    createAdapter(parameters: any): any;
    createReader(parameters: any): AbstractReader;
    createReaderCollection(parameters: any): AbstractReader;
    createReaderCollectionPrioritized(parameters: any): AbstractReader;
    createWriterCollection(parameters: any): any;
    createWorkspace(parameters: any): DuplexCollection;
    createFilterReader(parameters: any): AbstractReader;
    createLinkReader(parameters: any): AbstractReader;
    createFlatReader(parameters: any): AbstractReader;
  };
}

declare module '@ui5/logger' {
  export interface Logger {
    silly(...args: any[]): void;
    verbose(...args: any[]): void;
    perf(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
  }

  export function getLogger(name: string): Logger;
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
