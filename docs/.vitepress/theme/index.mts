import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import HeroImage from "./components/HeroImage.vue";
import UserArticles from "./components/UserArticles.vue";
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "home-hero-image": () => h(HeroImage),
    });
  },
  enhanceApp({ app }) {
    app.component("UserArticles", UserArticles);
  },
};
