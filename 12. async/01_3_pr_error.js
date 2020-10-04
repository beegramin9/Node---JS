const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });

const getEgg = (Hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${Hen} => 🥚`), 1000);
    });

const cook = (Egg) =>
    new Promise((resolve, reject) => {
        // 만약 네트워크에 문제가 생겨서 reject가 발생한다면?
        // setTimeout(() => resolve(`${Egg} => 🍳`), 1000);
        setTimeout(() => reject(new Error(`error! ${Egg} => 🍳`)))
        // 아무런 에러 핸들링도 안했기때문에 에러가 복잡하게 나온다.

    });

getHen()
    .then(Hen => getEgg(Hen))
    /* 일단 함수로 정의했으니까 */
    /* 리턴값이 새 promise 객체로 잘 들어왔으면 then */
    /* 여기 value는 getHen의 resolve값인 Hen이 됩니다. */
    .then(Egg => cook(Egg))
    .catch(error => {
        return '🌭'; /* 만약 계란 나올때 오류가 생기면 빵으로 대신하자 */
    })
    .catch(error => {
        console.log(error)
    })
    /* 들어온 값을 내가 value라고 이름지어도 되고 hen이라고 이름지어도 됨 */
    .then(Fry => console.log(Fry))
    /* cook Promise가 잘 되면 fry가 나와야지? */

// 코드를 좀 더 깔끔하게 할 수 있는 경우
// 받아오는 밸류를 다른 함수로 곧바로 넘길 때(넘길 때도 같은 value)
// value값을 생략하고 함수만 써줘도 된다

/*
getHen()
    .then(getEgg) // 함수 ()도 생략
    .then(cook)
    .then(console.log)

*/