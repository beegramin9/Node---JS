// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
/* file System 목록에 있는 애들 */

// 디렉토리에 있는 파일 목록 알아나기
const fs = require('fs');

/* stat: 파일의 바이트 크기 출력하기 */
fs.readdir('tmp', function (e, files) {
    for (let file of files) {
        let filepath = './tmp/' + file
        let stat = fs.statSync(filepath);
        /* 파일의 경로를 써 줄 수가 있다 */
        /* 비동기에 비동기 같이 쓰면 메롱될수가 있음 */
        console.log(file, '\t', stat.size, '바이트');
    }
});

// 파일 삭제하기 위에 사이트 보니까 unlink라는 걸 쓰네

fs.unlink('tmp/tmp.txt', e => {
    if (e) {
        console.log(e);
    }

})
// 이상하게 두번 실행되네 -- 혹은 오류가 나네...
// 왜 ? 바이트 출력이 되는 코드가 어싱크니까 먼저 실행이 됨
// 그래서 밑에가 먼저 실행되면 삭제가 되고 나중에 파일 바이트 출력할 때 없어서 오류가 나는 것

// 파일 이름 변경하기
fs.rename('tmp/sync.txt', 'tmp/change.txt', e => {
    if (e) {
        console.log(e);
    }
})