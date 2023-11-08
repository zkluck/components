import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import typescript from "@rollup/plugin-typescript";
import path, { resolve } from "path";
const resolvePath = (str: string) => resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'vite-react-swc',
      fileName: (format) => `vite-react-swc.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
      plugins: [
        typescript({
          target: "es2015",
          rootDir: resolvePath("src/"),
          declaration: true,
          declarationDir: resolvePath("dist"),
          exclude: resolvePath("node_modules/**"),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
    
  }
})
