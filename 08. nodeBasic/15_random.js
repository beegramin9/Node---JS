const myModule = require('./14_exports로 모듈')
/* 상대경로로 내가 만든 모듈 가져오기 */

for (let i = 0; i < 5; i++) {
    console.log(myModule.area(myModule.randInt(1, 5)));
    /* 객체.속성 혹은 객체.메소드()로 부를 수 있다. */
}
