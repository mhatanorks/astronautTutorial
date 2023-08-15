import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  /*
  SSRを活用する場合
  output: 'server'
      SGにしたいページに↓を入れる
      `// export const prerender = true;`
  */
});
