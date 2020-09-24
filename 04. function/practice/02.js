function pythagorean() {
    let answer = [];
    for (let i = 1; i <= 1000; i++) {
        for (let k = 1; k <= 1000 - i - k; k++) {
            if (i > k)
                continue;
            /* a<b<c 라는 조건이 있으니까 */
            if (i ** 2 + k ** 2 === (1000 - i - k) ** 2) {
                answer.push(i, k, 1000 - i - k)
                /* push() 안에 여러개를 한 번에 넣을 수도 있네? */
                console.log(`찾았다.`)
            }
        }
    }
    return answer
}

console.log(pythagorean())

/* 상태 표시 할 때 outerBreak라는 걸 쓴다던데*/
// let outerBreak = false;
console.log('--------------------')

// 답이 여러 쌍 있을 때 리스트를 나눠서 출력할 수 있도록 하고 싶은데 어케하지 ?
function pythagorean_1() {
    let totalAnswer = []
    for (let i = 1; i <= 6000; i++) {
        for (let k = 1; k <= 6000 - i - k; k++) {
            if (i > k)
                continue;
            /* a<b<c 라는 조건이 있으니까
           이거 뒤에다 써버리면 안 걸러짐.  */


            if (i ** 2 + k ** 2 === (6000 - i - k) ** 2) {
                let answer = [];
                answer.push(i, k, 6000 - i - k);
                /* push() 안에 여러개를 한 번에 넣을 수도 있네? */
                console.log(`찾았다.`);
                totalAnswer.push(answer)
            }
        }
    }
    return totalAnswer
}

console.log(pythagorean_1())