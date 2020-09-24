/* https://dalkomit.tistory.com/65 */
// 너(어떠한 객체) 일 끝날 때까지 난(프로그램) 다른 일 하고 있을 테니 너 일 끝나면 전화 다시 줘!(Callback) --> 비동기방식

// 이걸 사용하지 않으면 콜백함수가 복잡할 때, 이게 끝나기 전에 다음 프로세스를 진행할 때가 있어서 순서를 잡는 거야

// 매개변수로 함수를 받는 함수
// 매개변수로 올 함수는 밑에 함수를 정의할 때 익명함수로 사용한다

// function callFiveTimes(callback) {
//     for (let i = 0; i < 5; i++) {
//         callback();
//     }
// }

// callFiveTimes(x) 이렇게 하면 안되지. x자리에는 함수가 들어가야 하니까
// 그래서 함수를 넣어주겠다

/* 나중에 매개변수로 들어가는 함수가 어떤 놈인지 결정해줘야지 */

// callFiveTimes(function () {
//     console.log('함수 호출');
// });

plus = function (a, b, callback) {
    let result = a + b;
    callback(result);
}

plus(5, 10, function (res) {
    console.log(res);
})