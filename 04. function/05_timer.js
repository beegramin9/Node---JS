/*  1번 가게 */
let today = new Date();
let ms = today.getMilliseconds();

console.log(today, ms);

// setTimeout(function () {
//     console.log(`3초 경과`);
// }, 3000);

setTimeout(function () {
    console.log(`3초 경과`);
    today = new Date();
    ms = today.getMilliseconds();
}, 3000);

/*  2번 가게 */
today = new Date();
ms = today.getMilliseconds();

console.log(today, ms);

//  원래 상식적으로는 1번 가게를 간 다음, 3초 기다리고 2번 가게를 가야하는데
//  콜백함수를 쓰면 1번 다음 바로 2번을 간 다음 3초가 나온다


//  원래 상식적으로는 1번 가게를 간 다음, 3초 기다리고 2번 가게를 가야하는데
//  콜백함수를 쓰면 1번 다음 바로 2번을 간 다음 3초가 두 번 나오지?


setTimeout(function () {
    /* 인터벌함수 중지 */
    clearInterval(si);
}, 10000);


let si = setInterval(() => {
    console.log(new Date());
}, 1000);

// 상식적으로는 3초가 먼저 나온 다음에 1초가 나와야 하는데, 빨리 처리하는 비동기 시스템 
// 때문에 1초가 두번이나 먼저 나오고 그 다음 3초가 나온다






