// 비동기적으로 파일 쓰기

const fs = require('fs');

let buffer = `비동기적으로 뭉치면 모르고 흩어지면 아는
비동기적으로 뭉치면 살고 흩어지면 아는`

// fs.writeFile('./tmp/async.txt', buffer, (error) => {
//     if (error) {
//         console.log(error);/* 관용적으로 에러날까봐 해주는거지 사실 잘 안쓴다. */
//     }
// })
// 기존 파일에 어펜드

buffer = `비동기적으로 전설의 노래`
fs.writeFile('./tmp/async.txt', buffer, { flag: 'a' }, e => {
    if (e) {
        console.log(e);
    }
})