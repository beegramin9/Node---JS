/* Promise는 자바스크립트에 내장된 객체 */
/* 비동기 실행할 때 콜백함수 대신 사용 가능 */

// State(상태)
// 진행중(Pending) => fulfilled or rejected(오류)

// Producer(데이터를 제공) 와 Consumer(데이터를 필요)

// 1. Producer

// Promise를 만드는 순간 콜백함수가 실행됨
// 네트워크 통신/파읽 읽는 함수가 들어왔다면 promise가 들어오자마자 실행됨
// When new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    /* doing some heavy work such as file reading, network */
    /* 시간이 많이 걸리기 때문에 비동기적으로 처리하는 게 좋다 */
    console.log('Doing something...');
    /* 네트워크 통신을 하는 것처럼 딜레이를 줘 봅시다 */
    setTimeout(() => {
        // resolve('ellie') //* 성공했을 때의 return값 */
        reject(new Error('no network'))
    }, 2000)
});

/* 사용자의 요청이 있을때만 네트워크 통신을 해야 한다면?
위처럼 작성하면 사용자가 요청하지도 않은 불필요한 통신이 발생할 수 있음. 유의점! */


// 2. Consumer: then, catch, finally를 이용해서 필요한 데이터 받아오기
/* 새 Promise 객체가 잘 실행이 된다면 then을 사용 */
/* 그러면 원하는 값 value를 받아와서 실행하는 콜백함수를 만들면 됨 */
/* value 값은 promise의 resolve(안의 값)인 'ellie'가 된다 */
promise.then((value) => {
    console.log(value) /* then을 쓰면 promise가 새로운 promise를 호출하고 */
}).catch(e => { /* 그 promise에 catch를 체이닝 */
    console.log(e)
}).finally(() => {
    console.log('무조건 출력')
})
/* reject가 들어가면 어떻게 해? 에러 내용이 출력이 된다*/
/* 출력될 에러를 핸들링할땐 catch를 쓰고 그 에러가지고 뭔갈 할(주로 콘솔에 출력)
콜백함수를 주면 된다. */
