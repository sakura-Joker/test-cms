<template>
  <div class="app-wrapper">
    <Sidebar />
    <div>
      <Navbar />
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
// import { AppMain, Navbar, Sidebar } from "@/components";
import AppMain from '@/components/AppMain'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
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
