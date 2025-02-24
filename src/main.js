import Vue from "vue";
import App from "./App.vue";
import Router from "./router";
import ElementUI from "element-ui";
import '@/styles/index.less'
import '@/styles/app.less'
import '@/styles/icon.less'
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router: Router,
  render: (h) => h(App),
}).$mount("#app");
