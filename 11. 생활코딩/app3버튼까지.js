const http = require("http");
const url = require("url");
const fs = require("fs");
const qs = require("querystring");
const view = require("./view/index");
const templete = require('./view/template')

http
  .createServer((req, res) => {
    let query = url.parse(req.url, true).query;
    /* request에서 url 속성만 가지고 오고 싶다. */
    /* query를 parse해서 /?id=CSS 부분을 가져오기 위해서*/
    let pathName = url.parse(req.url).pathname;

    switch (pathName) {
      case "/":
        let title = query.id
        /* 얘가 index.js에서의 타이틀이 되는 것 */
        if (!query.id) {
          /* 처음에 루트만 나와 있을 때, 즉 id를 가진 버튼을 아무것도 누르지 않았을 때 */
          fs.readdir("data", (e, filelist) => {
            /* 이벤트가 아니라 경로(폴더) 이름 */
            let list = templete.listGen(filelist);
            let content = templete.HOME_CONTENTS;
            let control = templete.buttonGen()
            let html = view.index('Web 기술', list, content, control);
            res.end(html);
          });
        } else {
          fs.readdir("data", (e, filelist) => {
            let list = templete.listGen(filelist);
            let control = templete.buttonGen(title)
            let filename = 'data/' + title + '.txt'
            fs.readFile(filename, 'utf8', (e, buffer/* 파일에서 읽은 내용이 */) => {
              let html = view.index(title, list, buffer, control); /* index의 content 자리에 들어간다. */
              res.end(html);

            })
          });
        }
        break;
      case '/create':
        break;
      case '/update':
        break;
      case '/delete':
        break;
      default:
        res.writeHead(404, /* { "Content-type": "text/html" } 디폴트값이라 생략가능*/);
        res.end();
    }
  })
  .listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });
