<script>
export default {
  name: "item",
  functional: true,
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  //context 接收父组件传入的数据
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = [];
    const classStr = "iconfont icon-" + icon;
    //判断icon是否存在
    if (icon) {
      vnodes.push(<i class={classStr} />);
    }
    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }
    return vnodes;
  },
};
</script>
