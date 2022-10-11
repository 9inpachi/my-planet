import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.gltf', '**/*.css'],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
    },
  },
});
