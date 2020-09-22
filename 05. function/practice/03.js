// const { sep } = require('path');
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.setPrompt('양의 정수 입력: ');
// rl.prompt();


// rl.on('line', function (buf) {
//     let input = parseInt(buf);
//     console.log(sepPower(input));
//     console.log(wholePower(input));



//     rl.close()
// });

let hours = []
for (h = 0; h < 24; h++) {
    hours.push(h.toString());
}


let minutes = []
for (m = 0; m < 60; m++) {
    m = m.toString();
    let stringM = (m.length > 1) ? m : "0" + m;
    minutes.push(stringM);
}

// console.log(hours, minutes)


function answer() {
    let count = 0
    for (let hour of hours) {
        for (let minute of minutes) {
            let time = hour + ':' + minute;
            if (time.indexOf('3') !== -1) {
                count += 1;
            }


        }
    }
    return count * 60;
}


// console.log(answer() / 60);
console.log(`3의 개수: ${answer()}`);