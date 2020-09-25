// Create Read Use Delete
/* 내용을 CRUD 할수도 있고 파일 그 자체를 CRUD 할 수도 있음 */

/* file은 IO를 다루니까 비동기 방식으로 처리한다. */

const fs = require('fs');

let buffer = fs.readFileSync('./tmp/textfile.txt');
console.log(buffer);
/* 바이너리 데이터(글자가 아닌 이미지 같은 거 읽을 때)로 나온 것 */
/* 문자열로 만들려면 toString()을 붙여서 문자열로 만들어줘야함 */
console.log(buffer.toString());

// text data 읽기
let text = fs.readFileSync('./tmp/textfile.txt', 'utf-8')
console.log(text);

// const file = fs.readFileSync('textfile.txt');

// console.log(file);
// console.log(file.toString());