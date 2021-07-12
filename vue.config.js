const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "./", dir);
}

module.exports = {
  chainWebpack: (config) => {
    // svg 规则
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.exclude.add(/node_modules/);
    svgRule
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });

    const imagesRule = config.module.rule("images");
    imagesRule.exclude.add(resolve("src/assets/svg"));
    config.module.rule("images").test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
  },
};
