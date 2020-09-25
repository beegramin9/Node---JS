// 글로벌 객체를 사용하는 기본신택스
//  process.on('이벤트 이름', function () {
//                     이 함수 자체가 이벤트 핸들러

// })

// exit 이벤트를 연결합니다 --> exit이벤트는 무조건 프로세스가 종료할 때 발생.
// 그래서 앞에 써도 맨 뒤로 나온다
process.on('exit', (code/* 이벤트 핸들러에 파라미터가 올 수도 있음 */) => {
    console.log('프로세스가 종료되었습니다.');
    console.log('exit code:', code);
});

// uncaughtException 이벤트를 연결합니다.
process.on('uncaughtException', function (error/* 에러내용을 알고싶으면 여기에 error 넣음 */) {
    console.log('예외가 발생되었습니다.');
    console.log('uncaughtException: ', error);
});

// 예외 강제 발생
error.error.error();
/* 에러가 생기면 위에 uncaughtException에서 예외를 잡아낸다. */

// 임의의 이벤트 연결
process.on('message', () => {
    console.log('message event');
})
/* 연결했지만 아무런 이벤트가 없었으므로 나오지 않는다. */