import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// <username>.github.io 저장소(User Site)는 루트에서 서빙되므로 base는 "/".
// 다른 이름의 저장소(Project Site)로 배포한다면 "/<repo-name>/"으로 바꿔주세요.
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
});
