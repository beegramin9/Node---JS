// syntatic sugar. 원래 있는 것을 깔끔하게 쓴 것. 클래스가 이 예

const { ftruncateSync } = require("fs");
const { resolve } = require("path");

// 1.async
// 코드 앞에 async 써주면 클래스처럼 코드 안의 내용을 promise로 만들어준다.

async function fetchUser() {
    // do network request in 10 secs...

    return 'ellie'
}

const user = fetchUser();
console.log(user)
/* 여기까지는 비동기적인 처리가 하나도 안 되어있어서 함수가 느리다. */
/* 설상가상으로 뒤에 웹페이지 일을 처리하는 코드가 있다면 이 화면이 표시가 안 됨*/
/* 그래서 사용자는 10초동안 화면에 아무것도 안 나오게 돼요 */



// 2.await. async와 함께였을때만 사용가능
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
    /* 정해진 ms가 지나면 resolve를 호출하는 promise */
}

async function getApple() {
    await delay(1000)
    /* delay(3000)함수가 끝날때까지 기다려준다 */
    return '🍎'
}

async function getBanana() {
    await delay(1000)
    return '🍌'
}

/* 동일한 함수를 promise로 적어보자면 */
function getPizza() {
    return delay(2000).then(() => '🍕')

}

function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana} `)
        /* 원래대로라면 여기 return이 없어야 하는거 아냐? 왜 들어갔지? */
    })
}
// 콜백지옥과 비슷하게 된다...

pickFruits().then(console.log)



async function getFruits() {
    try {

        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana} `
    } catch {
        console.log(error.error.error())
    }
}
/* 작성은 Promise랑 똑같이 써야 된다. */
getFruits().then(console.log) /* 다 끝났으면 콘솔에 띄워봐 */


/* 한 가지 문제점! await의 병렬 처리 */
/* 사과, 바나나 받는 시간이 1초로 동일하지?
그러면 총 2초가 되는거잖아
근데 사과, 바나나 함수는 서로 연관이 없기 때문에 기다릴 필요가 없다
이걸 더 줄일 수 있다는 얘기 */

async function takeFruits() {
    try {

        const applePromise = getApple();
        /* promise를 만드는 순간 바로 안의 내용이 실행됨 */
        const bananaPromise = getBanana();

        const apple = await applePromise;
        const banana = await bananaPromise;
        return `${apple} + ${banana} `
    } catch {
        console.log(error.error.error())
    }
}
// 이러면 1초만에 둘 다 병렬적으로 실행되서 같이 나오는 걸 볼 수 있음
// 두 프로미스가 만들어진 순간부터 getApple() 과 getBanana()를 동시에 따서
// 1초 기다렸다가 출력하게 되는 것

takeFruits().then(console.log) /* 다 끝났으면 콘솔에 띄워봐 */

// 근데 이렇게 병렬적으로 진행될때는 더 간단하게 쓰는 신택스슈가가 있다.


function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        /* 파라미터 promise를 array로 받고 병렬적으로 전부 동시에 시작 */
        .then(fruits => fruits.join(''))
    /* fruits는 배열. 요기 프로미스에 들어오는 애들은 내 이름대로 
    이름 짓는다고 그랬지? */
}

pickAllFruits().then(console.log);

/* 어떤것이든 상관없고 맨 처음 따지는것만 받아와보자 */
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log)