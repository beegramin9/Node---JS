// 매개변수로 함수를 받는 함수
// 매개변수로 올 함수는 밑에 함수를 정의할 때 익명함수로 사용한다

function callFiveTimes(callback) {
    for (let i = 0; i < 5; i++) {
        callback();
    }
}

// callFiveTimes(x) 이렇게 하면 안되지. x자리에는 함수가 들어가야 하니까
// 그래서 함수를 넣어주겠다

callFiveTimes(function () {
    console.log('함수 호출');
});



