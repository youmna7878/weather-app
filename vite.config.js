import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
})