const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})

fetchNumber/* fetchNumber라는 promise가 제대로 실행 되면, 그러면 */
    .then(num => num * 2) /* resolve의 return값을 가지고 새로운 return값을 */
    .then(num => num * 3)
    .then(num => {
        /* 값을 바로 줄수도 있고 또다른 비동기인 promise를 전달할 수 있음 */
        /* 다른 서버랑 통신하는 새로운 promise를 리턴 */
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000)
            /* promise의 return값 resolove */
        })
    })
    .then(num => console.log(num))