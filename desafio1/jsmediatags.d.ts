// jsmediatags.d.ts
declare module 'jsmediatags' {
    type Tag = {
      tags: {
        title?: string;
        artist?: string;
        album?: string;
        year?: string;
        [key: string]: any;
      };
    };
  
    type ReaderOptions = {
      onSuccess: (tag: Tag) => void;
      onError: (error: any) => void;
    };
  
    export function read(file: string, options: ReaderOptions): void;
  }
  