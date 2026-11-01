import { defineConfig, transformWithEsbuild } from 'vite';

export default defineConfig({
  esbuild: { jsx: 'automatic' },
  optimizeDeps: { esbuildOptions: { loader: { '.js': 'jsx' } } },
  // Permite manter o nome App.js solicitado no enunciado e escrever JSX nele.
  plugins: [{
    name: 'jsx-em-app-js',
    enforce: 'pre',
    async transform(code, id) {
      if (id.split('?')[0].endsWith('/src/App.js')) {
        return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' });
      }
    },
  }],
});
