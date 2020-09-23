// 자바스크립트, 파이썬의 어레이/리스트는
// 모든 데이터 타입이 들어갈 수 있다 --> 다시 말하면 모든 Object가 들어갈 수 있다
/* String, Int, Float 얘들이 다 객체니까 */

// 어레이(리스트)에서는 데이터의 순서가 인덱스로만 결정되어 있는데


let arrayPersonINfo = [
    '홍길동',
    '남자',
    28
]

console.log(
    arrayPersonINfo[0],
    arrayPersonINfo[1],
    arrayPersonINfo[2]
);


// 오브젝트에서는 키-값으로 결정되어 있다.
let obj = {
    'name': '홍길동',
    'gender': '남자',
    'age': 28
}

let n = 'name';
console.log(
    obj[n], /* 키값을 프로그램해서 돌릴 때는 이렇게 해도 된다.*/
    obj['gender'],
    obj['a' + 'ge']
    // !!!!!!!!!!!!!!!
    /* 만약에 키값이 class 1, class 2 이런 식으로 되어있어서 for문을 돌릴 때 이렇게 가능하기도 하다  */
)

// 사실 위에 방법으로 하면 array나 object가 걸리는 시간이 똑같은데
// 이거보다 더 편한 방법이 있을까?

/* Object는 키값에 굳이 안 해도 된다는데? */
let obj_1 = {
    name: '홍길동',
    gender: '남자',
    age: 28
}

console.log(
    obj_1.name,
    obj_1.gender,
    obj_1.age
)

console.log(process.env.JAVA_HOME);
/* process.env.JAVA_HOME 에서 JAVA_HOME이 키값이고 출력되는 게 value였던 것 */
