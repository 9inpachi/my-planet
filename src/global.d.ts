// Images
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg?raw';
declare module '*.svg?url';
declare module '*.ico';

// Geometries
declare module '*.gltf';
declare module '*.obj';

// Template
declare module '*.html?raw' {
  const content: string;
  export default content;
}

declare module '*.css?raw' {
  const content: string;
  export default content;
}
