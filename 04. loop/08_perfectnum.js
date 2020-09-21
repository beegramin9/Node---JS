// 1부터 10000까지 완전수의 개수

pernum = []
// 완전수를 담을 어레이

for (let i = 2; i < 10000; i++) {
    divisors = []
    // 각각의 i에 대해 약수를 담는 어레이
    sum = 0

    console.log(i);

    for (let d = 1; d < i; d++) {
        if (i % d == 0) {
            divisors.push(d);
        }

    }
    // console.log(divisors);
    for (item of divisors) {
        sum += item;
    }
    console.log(`합은 ${sum}입니다.`);
    if (sum === i) {
        pernum.push(i);
        console.log(`${i}는 완전수입니다.`);
    }
}

console.log(pernum)