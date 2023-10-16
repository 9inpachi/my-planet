import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  base: './',
  assetsInclude: ['**/*.gltf'],
  plugins: process.env.SSL === 'true' ? [basicSsl()] : undefined,
  esbuild: {
    // This is to be able to use ComponentClass.name in `registerComponent`.
    // See src/web/components/component/util/register-component.ts.
    keepNames: true,
  },
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
