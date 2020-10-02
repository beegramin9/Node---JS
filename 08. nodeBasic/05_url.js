const url = require("url");

let urlSample =
  "https://www.hanbit.co.kr/store/books/look.php?p_code=B7748014142";
let parsedObject = url.parse(urlSample);
/* url을 parse합시다. */
console.log(parsedObject);
// 얘도 하나의 객체니까 속성 뽑으려면 .속성
console.log(parsedObject.query);
console.log(typeof parsedObject.query);
/* 문자열로 뽑아준다. */

console.log(url.format(parsedObject));
/* format(parsed된 것) 문자열로 바꿔줬네. */
console.log(typeof url.format(parsedObject));
