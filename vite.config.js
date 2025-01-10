import { defineConfig } from "vite"
export default defineConfig({
    root: './src',
    base: '/test-vite',
    publicDir: '../public',
    server: {
        port :3000,
    },
    build: {
        outDir: '../dist'
    }
});