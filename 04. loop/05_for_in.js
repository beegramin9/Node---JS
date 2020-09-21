let array = [1, 2, 3, 4, 5];

// for 인덱스 in array
for (let i in array) {
    console.log(i, '-', array[i]);
}

console.log('-----------')

// for 아이템 of array
for (let item of array) {
    console.log(item);
}