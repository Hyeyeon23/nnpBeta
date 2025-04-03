import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/nnpBeta/', // 실제 호스팅될 깃허브 리파지토리 네임 
  plugins: [react()],
  publicDir: 'public' // static 파일 설정 유지 
})
