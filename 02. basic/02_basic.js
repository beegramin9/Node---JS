let pi = 3.141592;
let radius = 10;

console.log(`반지름이 ${radius}인 원의 둘레: ${2 * pi * radius}`)
console.log(`반지름이 ${radius}인 원의 넓이: ${pi * radius * radius}`)

/* 문자열 복합대입연산자 */
let output = 'Hello';
output += ' World!';
output += ' 숫자도 가능합니다.';
output += 235;
console.log(output)

// 자료형 
/* console.log(typeof ('string'))
console.log(typeof (273))
console.log(typeof (true))
console.log(typeof (function () { }))
console.log(typeof ({}))
console.log(typeof (alpha))
*/

// 자료형 변환
/* console.log(Number("52"));
console.log(Number("52.273"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("안녕하세요")); */

console.log(Number("273"));
console.log(Number(true));
console.log(Number('52.7'));

// 실제 코딩할때는 parseInt(파이썬의 Int, Float함수와 비슷함)를 더 많이 쓴다
console.log(parseInt("273"));
console.log(parseInt(true));
console.log(parseInt('52.7'));

console.log(parseFloat("273")); /* 이렇게 하면 273.0 으로 나올 줄 알았는데... */
console.log(parseFloat(true));
console.log(parseFloat('52.7'));


console.log(52 + 273);
console.log("52" + 273);
console.log(52 + "273");
console.log("52" + "273");

// 일치 연산자
console.log();
console.log(`52 === "52": ${52 === "52"}`);
console.log(`52 == "52": ${52 == "52"}`);

console.log(`0 === "": ${0 === ""}`);
console.log(`0 == "": ${0 == ""}`);

console.log();
const constant = "변경할 수 없습니다."
constant = 1
console.log(constant);


console.log();
