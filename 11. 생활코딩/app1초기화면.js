const http = require("http");
const url = require("url");
const fs = require("fs");
const qs = require("querystring");
const view = require("./view/index");

http
  .createServer((req, res) => {
    /* F12 network request header에 들어가있는 모든 데이터 */
    let pathName = url.parse(req.url).pathname;

    switch (pathName) {
      case "/":
        /* 폴더 안의 파일들을 불러오는 메소드 */
        fs.readdir("data", (e, filelist) => {
          let list = "";
          for (let file of filelist) {
            let filename = file.substring(0, file.length - 4);
            list += `<li><a href="/?id=${filename}">${filename}</a></li>`;
          }
          let html = view.index(list);
          res.end(html);
        });
        break;

      default:
        res.writeHead(404, { "Content-type": "text/html" });
        res.end();
    }
  })
  .listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });
