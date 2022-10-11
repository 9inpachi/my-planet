import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.gltf'],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
    },
  },
});
