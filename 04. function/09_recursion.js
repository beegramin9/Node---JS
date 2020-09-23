// 재귀적 호출 (recursive call/recursion)

function facto(n) {
    if (n === 0)
        return 1;
    return n * facto(n - 1);
}
// console.log(facto(80))


/* 자바스크립트에서는 메모화를 안 해도 될 정도로 빠른데??? */
// 메모화, 파이썬에서는 딕셔너리로 했는데?

/* 피보나치 수열 */



function Fibonacci(num) {
    if (num === 1 || num === 2)
        return 1;
    return Fibonacci(num - 1) + Fibonacci(num - 2);
}

/* 자바스크립트에서는 메모화를 안 해도 될 정도로 빠른데??? 가 아니라
한 번에 리커션되는 함수가 두 개가 들어가니까 안 나오죠 */
// console.log(Fibonacci(50));
// 메모화, 파이썬에서는 딕셔너리로 했는데?

memo = { 1: 1, 2: 1 };

function Fibonacci_1(num) {
    if (num === 1 || num === 2)
        return 1;
    if (num in memo) { /* 자바스크립트에서도 파이썬처럼 쓰는 게 되네? */
        return memo[num];
    }
    output = Fibonacci_1(num - 1) + Fibonacci_1(num - 2);
    memo[num] = output;
    return output;
}

console.log(Fibonacci_1(50));