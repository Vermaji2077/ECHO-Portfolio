// Comprehensive type declarations for React, WebGL (OGL), CSS, and animation libraries

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'react' {
  export type CSSProperties = Record<string, any>;
  export type ReactNode = any;
  export type ReactElement = any;
  export type FC<P = {}> = (props: P) => any;
  export type RefObject<T> = { current: T };

  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function useRef<T = undefined>(): { current: T | undefined };
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prev: T) => T)) => void];

  export type TouchEvent<T = Element> = any;
  export type WheelEvent<T = Element> = any;
  export type MouseEvent<T = Element> = any;
  export type KeyboardEvent<T = Element> = any;
  export type PointerEvent<T = Element> = any;

  const React: any;
  export default React;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare namespace JSX {
  interface Element extends any {}
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'ogl' {
  export class Renderer {
    constructor(options?: {
      dpr?: number;
      alpha?: boolean;
      premultipliedAlpha?: boolean;
      antialias?: boolean;
      depth?: boolean;
      [key: string]: any;
    });
    gl: WebGL2RenderingContext & {
      canvas: HTMLCanvasElement;
    };
    isWebgl2: boolean;
    dpr: number;
    setSize(width: number, height: number): void;
    render(options: { scene: any; camera?: any; target?: any; clear?: boolean }): void;
    bindFramebuffer(target?: any): void;
    getExtension(name: string): any;
  }

  export class Program {
    constructor(gl: any, options: {
      vertex: string;
      fragment: string;
      transparent?: boolean;
      depthTest?: boolean;
      depthWrite?: boolean;
      uniforms?: Record<string, { value: any }>;
      [key: string]: any;
    });
    uniforms: Record<string, { value: any }>;
    setBlendFunc(src: number, dst: number): void;
  }

  export class Mesh {
    constructor(gl: any, options: {
      geometry: any;
      program: any;
      [key: string]: any;
    });
    geometry: any;
    program: any;
    draw(options?: { camera?: any }): void;
  }

  export class Triangle {
    constructor(gl: any);
  }

  export class Plane {
    constructor(gl: any);
  }

  export class Texture {
    constructor(gl: any, options?: any);
    image: any;
    needsUpdate: boolean;
    texture: any;
    update(): void;
    bind(): void;
    destroy(): void;
  }

  export class RenderTarget {
    constructor(gl: any, options?: {
      width?: number;
      height?: number;
      depth?: boolean;
      minFilter?: number;
      magFilter?: number;
      [key: string]: any;
    });
    texture: Texture;
    width: number;
    height: number;
    setSize(width: number, height: number): void;
    destroy(): void;
  }
}

declare module 'next/image' {
  const Image: any;
  export default Image;
}

declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
}
