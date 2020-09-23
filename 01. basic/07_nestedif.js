let date = new Date(); /* Date() 클래스의 객체 생성 */
let hours = date.getHours();

if (hours < 11) {
    console.log(`아침 메뉴 시간`);
} else {
    if (hours < 15) {
        console.log(`점심 메뉴 시간`);
    } else {
        console.log(`저녁 메뉴 시간`);
    }
}

if (hours < 11) {
    console.log(`아침 메뉴 시간`);
} else if (hours < 15) {
    console.log(`점심 메뉴 시간`);
} else {
    console.log(`저녁 메뉴 시간`);
}


