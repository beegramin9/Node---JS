/* 이렇게 처리할 수도 있지만 */
function callThreeTimes(callback) {
    if (callback) /* 콜백함수가 undefined가 아니면 실행 */ {
        for (let i = 0; i < 3; i++) {
            callback();
        }
    } else {
        console.log('콜백함수를 정의하세요.')
    }
}


// callThreeTimes(function () {
//     console.log('콜백함수 호출');
// });



callThreeTimes(); 