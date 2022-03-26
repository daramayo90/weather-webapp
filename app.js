const express = require('express');
const path = require('path');
const app = express();

var pages = require("node-github-pages")(app, {
    static: "public", // Static directory path(css, js...)
    path: "docs" // Output path
  });
  pages.renderFiles([{
    "view": "index",
    "url": "",
    "options": { title: "Express" }
  },
  {
    "view": "second",
    "url": "/second",
    "options": { title: "second page" }
  },
  ]);

app.use(express.static(path.join(__dirname, './src/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});