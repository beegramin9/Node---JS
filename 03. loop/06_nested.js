// 별 피라미드

let output = '';

for (let i = 0; i < 5; i++) {
    for (let k = 0; k < i + 1; k++) {
        output += '*';
    }
    output += '\n'
}
console.log(output);


let output2 = '';

for (let i = 0; i < 5; i++) {
    for (let k = 0; k < i + 1; k++) {
        output2 += '*';
    }
    for (let k = 0; k < 5 - i - 1; k++) {
        output2 += ' ';
    }
    output2 += '\n'
}

console.log(output2);

let output3 = '';
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 5 - i - 1; k++) {
        output2 += ' ';
    }
    for (let k = 0; k < 5 - i; k++) {
        output3 += '*'
    }
    output3 += '\n'
}
console.log(output3);

// 다이아몬드는 다 붙여서 만듦