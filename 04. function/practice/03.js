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
                /* 이거는 들어있기만 하면 될 때 쓰는거
                4번처럼 개수를 다 셀 때는 이걸 하면 안됨*/
                count += 1;
            }


        }
    }
    return count * 60;
}


// console.log(answer() / 60);
console.log(`3의 개수: ${answer()}`);