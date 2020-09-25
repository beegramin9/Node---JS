// 여러개 파일 비동기적으로 읽을 때


const fs = require('fs');

fs.readFile('./tmp/a.txt', 'utf8', (e, bufA) => {
    console.log(bufA);
})

fs.readFile('./tmp/b.txt', 'utf8', (e, bufB) => {
    console.log(bufB);
})

fs.readFile('./tmp/c.txt', 'utf8', (e, bufC) => {
    console.log(bufC);
})
console.log('-----------------------')


/* 이 결과는 해봐도 몰라. 섞여서 나올수도 있고 원래대로 나올수도 있다. */
// 주문 다 넣어놓고 빨리 나오는거부터 가져오는거
/* 그때그때 다르게 나와. 이러면 쓰는 메리트가 없잖아? */

//  --> 이걸 극복하는 방법? 순서 보장(콜백지옥)
// 함수 안에 함수 넣기
fs.readFile('./tmp/a.txt', 'utf8', (e, bufA) => {
    fs.readFile('./tmp/b.txt', 'utf8', (e, bufB) => {
        fs.readFile('./tmp/c.txt', 'utf8', (e, bufC) => {
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);
        });
    });
});

// 비동기, promise, async, await 가 뭔지 유튜브 한번 보자. 얄팍한 코딩사전 이런거 보면 되겠네.
// 이런 예방주사를 맞아야지 express할 때 헷갈리지 않는다.