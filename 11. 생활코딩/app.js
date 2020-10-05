const http = require("http");
const url = require("url");
const fs = require("fs");
const qs = require("querystring");
const view = require("./view/index");
const template = require('./view/template')

http
  .createServer((req, res) => {
    let query = url.parse(req.url, true).query;
    /* /?id=CSS 부분, 즉 guery를 가져오기 위해서 */
    let pathName = url.parse(req.url).pathname;

    let body; /* 맨 처음에서 body를 선언하고 create/create_proc/delete 에서는 이미 선언된 거를 다시 쓰게만 하는 것... */
    switch (pathName) {
      case "/":

        /* 얘가 index.js에서의 타이틀이 되는 것 */
        if (!query.id) {
          /* 처음에 /만 나와 있을 때, 즉 id를 가진 버튼을 아무것도 누르지 않았을 때 */
          /* 버튼을 안 눌러도, 밑에 create 했을 때 새로운 id로 들어오면 else로 들어가서 새롭게
          html 구조를 생성하게 된다. */
          fs.readdir("data", (e, filelist) => {
            /* 이벤트가 아니라 경로(폴더) 이름 */
            let list = template.listGen(filelist);
            let content = template.HOME_CONTENTS;
            /* 정규표현식으로 입력할 때마다 엔터가 먹게 하기 */
            /* 여기서 해 놓으면 이미 엔터가 먹혔으므로 나중에  */
            content = content.replace(/\n/g, '<br>');
            let control = template.buttonGen()
            let html = view.index('Web 기술', list, content, control);
            res.end(html);
          });
        } else {
          fs.readdir("data", (e, filelist) => {
            let title = query.id
            let list = template.listGen(filelist);
            let control = template.buttonGen(title)
            let filename = 'data/' + title + '.txt'
            fs.readFile(filename, 'utf8', (e, buffer/* 파일에서 읽은 내용이 */) => {
              /* 정규표현식으로 입력할 때마다 엔터가 먹게 하기 */
              buffer = buffer.replace(/\n/g, '<br>');
              let html = view.index(title, list, buffer, control); /* index의 content 자리에 들어간다. */
              res.end(html);

            })
          });
        }
        break;
      case '/create':
        /* 추가하려면 form을 넣어주면 되겠지? 입력/제출버튼이 있는 */
        fs.readdir("data", (e, filelist) => {
          let list = template.listGen(filelist);
          let control = template.buttonGen()
          let content = template.createForm()
          let html = view.index('글 생성', list, content, control);
          res.end(html);
        });

        break;
      case '/create_proc':
        /* 10. http 12_postParameter */
        body = "";
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
          /* fs.writeFile(경로, 내용, 콜백(에러, 하고싶은 일)) */
          fs.writeFile(filepath, param.description, error => {
            res.writeHead(302, { 'Location': `/?id=${param.subject}` });

            res.end();
          });
        });
        break;
      case '/update':
        fs.readdir("data", (e, filelist) => {
          let title = query.id
          let list = template.listGen(filelist);
          let control = template.buttonGen()
          let filename = 'data/' + title + '.txt'
          fs.readFile(filename, 'utf8', (e, buffer) => {
            let content = template.updateForm(title, buffer)
            let html = view.index(`${title} 수정`, list, content, control); /* index의 content 자리에 들어간다. */
            res.end(html);
          });
        })
        break;
      case '/update_proc':
        body = "";
        req.on("data", function (data) {
          body += data;
        });
        req.on("end", function () {
          let param = qs.parse(body);
          /* 파람의 속성이 form의 name으로 들어오는 거여. */

          // param.original , param.subject, param.description

          let filepath = 'data/' + param.original + '.txt';
          /* 오리지날에다가 파일 엎어치기 */
          let encoded = encodeURI(`/?id=${param.subject}`)
          fs.writeFile(filepath, param.description, error => {
            // if (param.original !== param.subject) { /* 제목이 바뀌었을 때 */
            //   /* 제목 바꿔서 저장 */
            //   fs.rename(filepath/* 옛날이름 */, `data/${param.subject}.txt`, e => {
            //     res.writeHead(302, { 'Location': encoded });
            //     res.end();
            //   } /* 새이름 */)
            // } else { /* 제목이 안 바뀌면 그냥 그대로*/
            //   res.writeHead(302, { 'Location': encoded });
            //   res.end();
            // }

            /* 하나로 쓰기 */
            if (param.original !== param.subject) {
              fs.renameSync(filepath, `data/${param.subject}.txt`)
            }
            res.writeHead(302, { 'Location': encoded });
            res.end();



          });
        });

        break;



      case '/delete':
        /* '~~를 삭제하시겠습니까?'를 되물어보는 보고 밑에 삭제 버튼이 있는 걸 만들고*/
        /* 버튼을 누르면 delete/proc 으로 가서 삭제가 되고 --> template가서 deleteForm 만들어야함*/
        /* home 으로 redirection이 되게끔 */
        fs.readdir("data", (e, filelist) => {
          let list = template.listGen(filelist);
          let control = template.buttonGen()
          let content = template.deleteForm(query.id)
          let html = view.index('글 삭제', list, content, control);
          res.end(html);
        });
        break;
      case '/delete_proc':
        body = "";
        console.log(body)
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
          console.log(filepath)
          /* fs.writeFile(경로, 내용, 콜백(에러, 하고싶은 일)) */
          fs.unlink(filepath, error => {

            res.writeHead(302, { 'Location': '/' });
            res.end();
          });
        });
        break;

      default:
        res.writeHead(404);
        res.end();
    }
  })
  .listen(3001, () => {
    console.log("Server running at http://localhost:3001");
  });
