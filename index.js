const Fontmin = require("fontmin");
const { text } = require("./3500.js");

const fontmin = new Fontmin()
  .src("./original_font/SourceHanSansCN-Normal.ttf")
  .use(Fontmin.glyph({ text }))
  .dest("minify_font");

fontmin.run(function (err, files) {
  if (err) console.log(err);
});
