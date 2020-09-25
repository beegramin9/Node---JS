/* 프로세스(Process)란: 현재 실행중인 프로그램 */
/* 프로그램(Program)란: 실행 가능한 상태의 프로그램 */

// Ctrl+Alt+Del 맨 처음 탭에 나오는 게 Process(=현재 실행 중)

console.log('- processs.arch : ', process.arch);
console.log('- processs.platform : ', process.platform);
console.log('- processs.connected : ', process.connected);
console.log('- processs.execArgv : ', process.execArgv);
console.log('- processs.exitCode : ', process.exitCode);
console.log('- processs.mainModule : ', process.mainModule); /* deprecated */
console.log('- processs.release : ', process.release);
console.log('- processs.memoryUsage : ', process.memoryUsage);
console.log('- processs.uptime : ', process.uptime);
console.log('- processs.argv : ', process.argv);

process.exit();/* 프로세스 강제 종료 */

// 이 밑부터는 프로세스가 종료되었으므로 실행되지 않는다. 그래서 색깔이 흐려요.
console.log('테스트');
console.log('테스트');
console.log('테스트');

// 글로벌 객체를 사용하는 기본신택스
//  process.on('이벤트 이름', function () {
//                     이 함수 자체가 이벤트 핸들러

// })