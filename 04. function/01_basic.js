/* 함수 선언 */
// 익명(Incognito) 함수나 원래 함수나 똑같이 작용한다.
function funcName() {
    console.log('함수 이름을 갖는 함수');
}

let fn = function () {
    console.log('익명함수를 변수 fn이 참조');
}
// 리턴 값이 없는 함수
function print(message) {
    console.log(`${message}라고 말했습니다.`);
}

fn();
funcName();

// 화살표 함수. 요새는 stackoverFlow에 많이 나옵니다.
/* 이건 파라미터가 없을 때 */
let arrowFunction = () => {
    console.log('화살표 함수');
}

arrowFunction();

/* 이건 파라미터(x)가 있을 때 */
let power = x => {
    return x ** 2;
}

console.log(power(3));
/* 이건 파라미터가 두 개 이상(x,y)일 때 */
let multiply = (x, y) => {
    return x * y;
}

console.log(multiply(3, 2));

/* 리턴을 다른 방식으로 쓸 수도 있음 */
let add = (x, y) => x + y
console.log(add(3, 2));

// 파이썬에서는 튜플(, , ,)을 사용해서 출력을 여러개를 나오게 할 수 있었는데 
// nodejs에서는 안 됩니다.