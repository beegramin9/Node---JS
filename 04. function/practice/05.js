let palindrome = []

for (let i = 100; i < 1000; i++) {
    for (let k = i; k < 1000; k++) {
        /* k 가 100부터면 100 ~ 999, 100 ~ 999 정사각형의 전체를 돌리는 것 */
        /* 정사각형 대각선으로 나눠서 반만 하려면 k=i 로 잡으면 된다. */
        let newNum = i * k;
        newNum = newNum.toString()
        if (newNum === newNum.split("").reverse().join("")) {
            palindrome.push(newNum)
        }
    }
}

// 자바스크립트에서는 max를 찾는 내장함수가 없다
/* 그래서 알아서 만들어 줘야 함 */
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

console.log(myArrayMax(palindrome))

console.log('-----------------------')
// 학원에서 가르쳐준거
function isPalindrome(string) {
    let len = string.length;

    for (let i = 0; i < parseInt(len / 2); i++) {
        /* 홀수든 짝수든 중간을 대칭점으로 하려면 */
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('소주 만병만 주소'));

console.log('-----------------------')

let maxPal = 0;
for (i = 100; i <= 999; i++) {
    for (k = i; k <= 999; k++) {
        let product = i * k;
        if (isPalindrome(product.toString())) {
            /* 최댓값만 뽑자, 맨 처음 배웠던 최댓값 출력하는 알고리즘*/
            if (product > maxPal) {
                maxPal = product;
                console.log((i, k, product));
            }
        }
    }
}
console.log('-----------------------')

let maxX, maxY, product;

for (i = 100; i <= 999; i++) {
    for (k = i; k <= 999; k++) {
        product = i * k;
        if (isPalindrome(product.toString())) {
            /* 최댓값만 뽑자, 맨 처음 배웠던 최댓값 출력하는 알고리즘*/
            if (product > maxPal) {
                maxPal = product;
                maxX = i;
                maxY = k;
            }
        }
    }
}
console.log((maxX, maxY, maxPal));