import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/iDoc/",
  lang: "zh-CN",
  title: "IDoc",
  description: "nyf 的博客演示",
  theme,
});
