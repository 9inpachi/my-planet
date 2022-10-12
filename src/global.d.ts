// Images
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

// Geometries
declare module '*.gltf';
declare module '*.obj';

// Template
declare module '*.html?raw' {
  const content: string;
  export default content;
}

declare module '*.css?url' {
  const content: string;
  export default content;
}
