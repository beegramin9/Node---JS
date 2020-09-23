let people = [
    { 'name': '홍길동', 'gender': '남자', 'age': 28 },
    { 'name': '성춘향', 'gender': '여자', 'age': 24 }
];

let externalForm = JSON.stringify(people);
// 외부로 객체를 뽑아낼 때 쓰는 구문
console.log(externalForm);

console.log(externalForm);

let p = JSON.parse(externalForm);
// 외부에서 가져온 객체를 parse해서 내부에서 바로 사용하도록 하는 구문

for (let person of p) {
    console.log(
        person.name,
        person.gender,
        person.age
    )
}

console.log(p[0]);
console.log(p[0].name);

