let array = [1, 2, 3, 4, 5];

// for 인덱스 in array
for (let i in array) {
    console.log(i, '-', array[i]);
}

console.log('나중에 결과를 이쁘게 뽑으려면 위에거가 맞지')

// for 아이템 of array
for (let item of array) {
    console.log(item);
}