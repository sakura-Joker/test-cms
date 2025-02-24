<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-contaienr" />
    <div>
      <navbar />
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import { AppMain, Sidebar, Navbar } from "@/components";
export default {
  name: "layout",
  components: {
    Sidebar,
    Navbar,
    AppMain,
  },
  data() {
    return {};
  },
};
</script>
