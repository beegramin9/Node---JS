// 2개밖에 없음

console.log(__dirname);
/* 많이 사용하게 될 것! */
console.log('---------구분선---------');
console.log(__filename);
console.log('---------구분선---------');

const path = require('path');

let filename = path.join(__dirname, './tmp', 'textfile.txt');
/* 조합해서 경로를 String으로 뽑아내는 함수 */
console.log(filename);
console.log('---------구분선---------');

/* 그지같이 써도 지가 알아서 깨끗하게 해주네 */
let dirtyname = path.join(__dirname, 'tmp', '..', 'tmp', 'textfile.txt')
console.log(dirtyname);

