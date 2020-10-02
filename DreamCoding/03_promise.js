// 비동기를 간편하게 처리할 수 있도록 도와주는 내장된 객체(Object)
// 비동기 수행할 때 콜백함수 대신 사용할 수 있음



/* 1.State:
promise가 실행되는 중인지, 취소되었는지를 나타내는 상태

pending --> fulfilled or rejected
*/

/* 2. Producer: 데이터를 제공하는 사람
      Consumer: 데이터를 소비하는 사람
 */


//  Producer 만들기
/* when new Promise is created, the executer runs automatically */


const promise = new Promise((resolve, reject) => {
    /* promise가 만들어지는 그 순간 */
    console.log('doing something heavy');
    /* 요기 있는 코드가 실행된다. */
    setTimeout(() => {
        resolve('ellie') /* 성공적으로 받아온 데이터를 resolve라는 콜백함수로 받아오기 */
        // reject(new Error('no network'))
    }, 2000)
    // 만약, 사용자가 요구했을때에만 네트워크 통신이 필요하다고 가정했을 때
    //  요청하지도 않았는데 promise를 써서 바로 실행될 때를 유의하자
});

// Consumers 만들기 <- then, catch, finally를 이용하여
promise
    .then((value/* resolve 콜백함수에서 전달된 ellie 값 */) => {
        console.log(value);
        /* then은 오류 없이 성공적일 때만 */
    })
    .catch(error => {
        console.log(error);
        /* 에러 담당 */
    })
    .finally(() => console.log('finally'))
/* 성공하든 실패하든 나옴 */

// promise Chaining

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        /* 값을 바로 전달할수도 있고, 또 다른 promise를 전달할수도 있음 */
        return new Promise((resolve, reject) =>
            setTimeout(() => resolve(num - 1), 1000)
        );
    })
    .then(num => console.log(num))

/* 총 2초만에 나와야겠죠 */


//  error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000)
    });
const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => hen`), 1000)
    });
const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => eggfry`), 1000)
    });

getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal))























