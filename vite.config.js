import { splitVendorChunkPlugin, defineConfig } from 'vite';
import { dependencies } from './package.json';

function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if ([].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

export default defineConfig({
    plugins: [splitVendorChunkPlugin()],
    base: "/quoting/",
    build: {
        sourcemap: false,
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: [],
              ...renderChunks(dependencies),
            },
          },
        },
      },
  })