const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/z/Desktop/Team-12/website-core/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/z/Desktop/Team-12/website-core/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/z/Desktop/Team-12/website-core/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/z/Desktop/Team-12/website-core/src/pages/index.js"))),
  "component---src-pages-startgame-js": hot(preferDefault(require("/Users/z/Desktop/Team-12/website-core/src/pages/startgame.js")))
}

