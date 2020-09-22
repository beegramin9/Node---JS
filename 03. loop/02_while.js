// while문 쓸 때는 loop 안에서 종료조건이 있어야 한다

// while문은 아래 예처럼 숫자가 정확히 뭔지 모를 때 사용한다
let sum = 0;
let n = 0;

/* while (sum <= 100) {
    sum += n;
    n += 1;
}
console.log(sum, --n)
// 원래 총 합이 120이 나와야 하는데 105가 나왔지?

sum = 0;
for (let i = 1; i <= 14; i++) {
    sum += i
}

console.log(sum)
*/

while (true) {
    sum += n
    if (sum > 100)
        break;
    n++;
}
console.log(sum, n)