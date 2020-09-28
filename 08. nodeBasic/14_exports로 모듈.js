// 웹 서버 만들 때 파일 하나로 절대 못함, 파일 여러개를 만들어야 함
// 그러면 이제 알아야 할 것은 파일끼리 어떻게 연결해야하지?
/* 두 가지 방법이 있다. 책 p66 */

/* exports로 내보낼 준빅가 되어있는 모듈을 만들기 */


exports.randInt = function (from, to) {
    return Math.floor(Math.random() * (from - to)) + to;
    /* 1에서 5까지 랜덤 정수를 뽑아내는 함수 */
}

exports.area = function (radius) {
    return Math.PI * radius * radius
    /* 내가 얘를 소문자(Math.pi)로 써서 숫자가 아니게 되어버림 */
    /* 그래서 숫자가 아닌 NaN이 나왔던 것 */
}