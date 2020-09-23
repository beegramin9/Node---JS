/* 기본 자료형들 Number, string 같은 것들은 객체가 맞지만
얘들은 너무 자주 쓰는 애들이니까 자바스크립트에서 알아서 바꿔줘서
객체가 이닌 것처럼 보이는 거야 */

let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);

console.log(numberFromLiteral, ',', numberFromConstructor);

let number = 273.123;
console.log(number.toExponential());
console.log(number.toFixed(2));
/* 소수점 둘째 자리까지 나오게 하는 것 */
// 이 때 제일 많이 사용한다

console.log(number.toPrecision(6));
/* 유효자리숫자가 6개가 되도록 */

console.log(Number.MAX_VALUE);
/* JS에서 정의된 가장 큰 수 */
console.log(Number.MIN_VALUE);
/* JS에서 정의된 가장 양의 작은 수 */
console.log(Number.MAX_SAFE_INTEGER);
/* 2 ** 10 = 1024 ~ 10 ** 3 */
/* 대략적으로 9 * 2 **50 */

console.log(Math.pow(2, 53) - 1);
console.log(Number.MIN_SAFE_INTEGER);

