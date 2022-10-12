import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.gltf'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          const extension = asset.name?.split('.').pop() ?? '';
          let directory: string;

          if (/png|jpe?g|svg|gif/i.test(extension)) {
            directory = 'images';
          } else if (/gltf/i.test(extension)) {
            directory = 'geometries';
          } else if (/css/i.test(extension)) {
            directory = 'css';
          } else {
            directory = '.';
          }

          return `assets/${directory}/[name][extname]`;
        },
      },
    },
  },
});
