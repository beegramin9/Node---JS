const http = require("http");
const url = require("url");
const fs = require("fs");
const qs = require("querystring");
const view = require("./view/index");
const templete = require('./view/template')

http
  .createServer((req, res) => {
    let query = url.parse(req.url, true).query;
    /* /?id=CSS 부분, 즉 guery를 가져오기 위해서 */
    let pathName = url.parse(req.url).pathname;

    switch (pathName) {
      case "/":
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
        } else { /* 쿼리(?id=xxx)가 들어왔다. */
          fs.readdir("data", (e, filelist) => {
            let title = query.id
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
        /* 추가하려면 form을 넣어주면 되겠지? 입력/제출버튼이 있는 */
        /* 요기에서는 입력하는 화면만 만들었으니까 form name과 body를 매치해서 속성을 받을 일이 없다 */
        /* 그래서 create */
        fs.readdir("data", (e, filelist) => {
          let list = templete.listGen(filelist);
          let control = templete.buttonGen()
          let content = templete.createForm()
          let html = view.index('글 생성', list, content, control);
          res.end(html);
        });

        break;
      case '/create_proc':
        /* 10. http 12_postParameter */
        /* post 메소드를 써서 뭔가를 받아오려면 이렇게 쓰는 것 말곤 없어. */
        let body = "";
        req.on("data", function (data) {
          body += data;
        });
        req.on("end", function () {
          let param = qs.parse(body);
          /* body에는 데이터가 뭉텅이로 들어오는데 qs로 parse해서 분리*/
          // console.log(param.subject, param.description)

          /* 받아온 데이터를 가지고 파일을 써야 하니까 경로를 준다 */
          /* 경로 잘 써야지 페이지가 들어간다 */
          let filepath = 'data/' + param.subject + '.txt';

          fs.writeFile(filepath, param.subject, error => {
            res.writeHead(302, { 'Location': `/?id=${param.subject}` });
            /* 여기서 ?id=뭐뭐뭐 로 돌아오면
            저기 다시 switch = pathName의 else로 들어가서
            새로운 페이지를 만들게 된다. */
            res.end();
          });

        });
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
