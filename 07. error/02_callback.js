function callThreeTimes(callback) {
    for (let i = 0; i < 3; i++) {
        callback();
    }
}

callThreeTimes(function () {
    console.log('콜백함수 호출');
});

// callThreeTimes(); 
/* 이거 주석 풀면 오류발생함. 콜백함수 안에 익명함수가 안 들어가 있잖아. */