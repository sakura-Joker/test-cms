<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <!-- 没有子菜单 -->
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <app-link>
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          class="submenu-title-noDropdown"
        >
          <i class="el-icon-tickets" />
          {{ onlyOneChild.meta.title }}
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <Item
          :icon="item.meta && item.meta.icon"
          :title="item.meta && item.meta.title"
        />
      </template>
      <!-- 递归本组件 -->
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>
<script>
import path from "path";
import AppLink from "./Link.vue";
import { Validator } from "@bigbighu/cms-utils";
import Item from "./item.vue";
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      require: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  components: {
    AppLink,
    Item,
  },
  data() {
    return {
      onlyOneChild: "",
    };
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => !item.hidden);
      if (showingChildren.length > 0) {
        return false;
      } else {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
    },
    resolvePath(routePath) {
      //判断跳换链接是否存在
      if (Validator.isExternal(routePath)) {
        return routePath;
      }
      //判断父级菜单的路径
      if (Validator.isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>
