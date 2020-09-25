const fs = require('fs');

let buffer = `뭉치면 알고 흩어지면 아는 노래
뭉치면 살고 흩어지면 죽는다
`;

fs.writeFileSync('./tmp/sync.txt', buffer);
/* 이거는 append가 아니라 그냥 덮어쓰기함 */

// 기존 파일에 데이터를 추가하는 경우
buffer = '전설의 노래'
fs.writeFileSync('./tmp/sync.txt', buffer, { flag: 'a' }/* 옵션을 주는 방법 */);
