let cars = ['BMW', 'Volvo', 'Saab'];

let today = new Date();
// 위에처럼 array도 객체이기 때문에 객체처럼 가져올 수 있다

let people = new Array('John', 'Mary', 'Peggy');
console.log(cars, people)

// length 속성
console.log(`${cars.length}, 
${people.length}`)

// sort 메소드
cars.sort();
console.log(cars); /* 이거는 본래 어레이가 바뀜 */

// descending order
console.log(cars.reverse(0)); /* 이거는 본래 어레이가 바뀜 */


// Bubble Sort
/* 오름차순 예시
[ 9, 5 ,13, 6, 2 ] 가 있다고 했을 때
처음 두 쌍에서 큰 놈을 뒤로
9 5 -> 5 9
9 13 -> 9 13
13 6 ->6 13
... 이런식

!! 13을 뒤로 밀었다고 끝나는 게 아니라
!! 앞에 것들도 다시 해줘야 함 --> 반복문을 2번 써야하는 이유
*/

function sort(array) {
    let newArray = array;
    for (let i = newArray.length - 1; i > 0; i--) {
        for (let k = 0; k < i; k++) {
            if (newArray[k] > newArray[k + 1]) {
                let tmp = array[k];
                /* 두 개 데이터를 Swap 하려면 기준 tmp을 하나 만들어 준 다음 해야 함 */
                array[k] = array[k + 1];
                array[k + 1] = tmp;
            }
        }
    }
    return newArray;
}

console.log(sort([9, 5, 13, 6, 2]));

//  맨 마지막 엘리멘트
/* 파이썬 같았으면 list[-1] 하면 나오는 걸... */
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits[fruits.length - 1])

/* 반복문으로 html 리스트 작성하기 */
let html = '';
html += '<ul>\n';
for (let fruit of fruits) {
    html += '   <li>' + fruit + '</li>\n';
}
html += '</ul>';

console.log(html)

// 항 추가하기. push랑 똑같음
// 인덱스가 0부터 시작해서 나오는 참사
fruits[fruits.length] = 'Cherry'
console.log(fruits)

// 파이썬이랑 똑같이 Join함수를 쓰면 스트링으로 바뀐다
console.log(fruits.join('*'))

// 맨 뒤 요소를 날려먹는 메소드
let popitem = fruits.pop();
console.log(popitem, fruits);

// 처음 요소를 날려먹는다
let shiftitem = fruits.pop();
console.log(shiftitem, fruits);

// 날려먹은거 다시 가져오기
fruits.unshift('Mango');

// 요소 없애기
/* 1 empty item이라는 이상한 놈이 껴지면서 삭제된다. */
/* 파이썬처럼 깔끔하게 없어지진 않네 */
delete fruits[0]
console.log(fruits)

// 어레이끼리 더하는 게 되나요? 
console.log(fruits + cars)
/* 따로 합쳐지지 않네요... */

// 이렇게 해야만 제대로 합쳐지네요
console.log(fruits.concat(cars))

// 위에서 한 슬라이싱
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let citrus = fruits.slice(2);
console.log(citrus);
citrus = fruits.slice(1, 3);
console.log(citrus);

console.log(fruits.toString());

