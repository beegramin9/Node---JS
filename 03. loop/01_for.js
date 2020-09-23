// for (let i = 0; i < 3; i++) { /* for (let i = 0; i < length; i++) */
//     /* 지역변수 i, 함수 밖에서는 undefined */
//     console.log(`출력`)
// }

let array = [52, 273, '아침밥', '점심밥', true, false]
console.log(array.length)
console.log(array)
console.log(array[2], array[3])

// array[0] = 0;

// // 어레이 원소 추가 
// array[6] = 'New item'
// console.log(array)

// // 파이썬의 append
// array.push('push')
// console.log(array)

for (let i = 0; i < array.length; i++) {
    console.log(array[i], typeof (array[i]))
}

/* 중급자 이상 */
for (let item of array) {
    console.log(item, typeof (item))
}