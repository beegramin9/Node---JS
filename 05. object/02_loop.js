let person = {
    'name': '홍길동',
    'gender': '남자',
    'age': 28
}

// for (let item of person) {
//     console.log(item);
// }
// 어레이에서처럼 of를 사용할 수 없습니다.

// 이거는 파이썬에서 for key in dic.keys() 
for (let key in person) {
    /* 어레이에서도 in은 인덱스를 뽑아내는 장치였죠?
    여기에서는 key를 일종의 index로 보는 것입니다. */
    console.log(key, person[key]);
}

console.log('-------------------------')
/* 리스트 안에 딕셔너리가 들어오는 경우 */
// 이거 엑셀 할 때, row 하나를 딕셔너리 한 줄이라고 생각했을 때 잘 쓰일 수 있는 방법
let people = [
    { 'name': '홍길동', 'gender': '남자', 'age': 28 },
    { 'name': '성춘향', 'gender': '여자', 'age': 24 }
];

/* 이거는 바깥이 어레이니까 인덱스를 주면 */
for (let person of people) {
    console.log(
        person.name,
        person.gender,
        person.age
    )
};
