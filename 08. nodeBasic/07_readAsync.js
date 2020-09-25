// 비동기적으로 파일 읽기. 항상 뒤에 callback이 와야 함

const fs = require('fs');
fs.readFile('./tmp/textfile.txt', 'utf-8', function (error/* 주로 첫 변수는 에러 */, buffer/* 그 다음 내가 쓰고싶은 변수 */) {
    console.log(buffer);
});

