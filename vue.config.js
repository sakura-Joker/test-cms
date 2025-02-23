const path = require("path");
module.exports = {
  publicPath: "/cms-manage/",
  outputDir: "dist",
  devServer: {
    host: "127.0.0.1",
    port: 3011,
    open: true,
    openPage: "cms-manage/", //打开路径
  },
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );
    //设置别名
    config.resolve.alias.set("@", path.resolve(__dirname, "./src"));
  },
};
//公共样式文件提取 在每次编译时 就会进行导入
//__dirname 与src同级目录
function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/mixin.less")],
    });
}
