import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),

    dts({
      include: ['src/'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vite-components',
      formats: ['es', 'umd'],
      fileName: (format) => `vite-components.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    target: 'esnext',
  },
  test: {
    environment: 'jsdom',
    include: ['**/*.test.ts', '**/*.test.tsx'],
    globals: true,
    setupFiles: './setupVitest.ts',
    coverage: {
      provider: 'c8',
      statements: 95,
      branches: 90,
      functions: 90,
      lines: 95,
      thresholdAutoUpdate: true,
    },
  },
}));
