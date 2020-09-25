/* 파일이름 가져오기 */

// console.log(__filename);
// console.log(typeof (__filename));
// console.log(__filename.split('\\'));
// let filename = __filename.split('\\').slice(-1)[0]
// console.log(filename);

console.log(__dirname);

const fs = require('fs');

// 시간대 맞추기
const moment = require('moment');

require('moment-timezone');

moment.tz.setDefault("Asia/Seoul");
let date = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(date);
/* stat: 파일의 바이트 크기 출력하기 */

/* tmp는 디렉토리 이름. 여기에 현재 디렉토리가 나올 수 있도록 */
fs.readdir(__dirname, function (e, files) {
    for (let file of files) {

        let filepath = './' + file
        let stat = fs.statSync(filepath);
        let mtime = stat.mtime

        // console.log(typeof (mtime));
        /* 타임 오브젝트네. 어떻게 바꾸지? */

        function wholeTimeFunc() {
            let tillDay = []; /* 날짜까지 */
            let hourMin = [];

            tillDay.push(mtime.getFullYear());
            tillDay.push((mtime.getMonth() + 1) < 10 ? '0' + (mtime.getMonth() + 1) : (mtime.getMonth() + 1).toString());
            tillDay.push(mtime.getDate());

            hourMin.push(mtime.getHours().toLocaleString());
            // 표준시 맞추기
            hourMin.push(mtime.getMinutes() < 10 ? '0' + mtime.getMinutes() : mtime.getMinutes());


            let tillDayStr = tillDay.join('-')
            let hourMinStr = hourMin.join(':')
            let am_pm = mtime.getHours() < 12 ? '오전' : '오후';

            let wholeTime = tillDayStr + ' ' + am_pm + ' ' + hourMinStr
            return wholeTime
        }


        console.log(wholeTimeFunc() /* mtime */, '\t', stat.size.toString().padStart(5, ' '), file);
        /* padStart, padEnd 자리수 맞추기 */
    }
});
// 디렉토리 <DIR> 표시는 어케해야할까?
// 저 함수를 바깥으로 빼고
// If문으로 dir일때 else로 파일일때