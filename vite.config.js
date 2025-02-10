import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
// DEV NOTES: Not needed use to @import being depcrecated and now using @use and @forward
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@styles': path.resolve(__dirname, 'src/styles'),
//     },
//   },
// });
