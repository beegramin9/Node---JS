
function callThreeTimes(callback) {
    for (let i = 0; i < 3; i++) {
        try {
            callback();
        } catch (exception) {
            /* 예외 발생하면 여기서 처리 */

            console.log(exception.name);
            console.log(exception.message);
            console.log('콜백함수를 정의하세요.');
        } finally {
            /* 여기는 예외 발생해도 무조건 실행됨 */

            console.log('fianlly는 항상 실행됨.');
        }

    }

}

callThreeTimes(function () {
    console.log('호출')
});
callThreeTimes(); 