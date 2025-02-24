<template>
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>
<script>
import { Validator } from "@bigbighu/cms-utils";
export default {
  name: "Applink",
  props: {
    to: {
      type: String,
      require: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    linkProps(url) {
      if (Validator.isExternal(url)) {
        return {
          is: "a",
          href: url,
          target: "_blank",
        };
      } else {
        return {
          is: "router-link",
          to: url,
        };
      }
    },
  },
};
</script>
