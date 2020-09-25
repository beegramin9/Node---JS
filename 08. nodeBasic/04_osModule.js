const os = require("os");
// process는 전역변수라서 require 필요없음, path는 require 했어야 하고 os도 필요하다

console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());
// 자기 자신을 부를 때는 loopback. 그래서 Ip주소가 localhost인 127.0.0.1가 된거
// IPv6에서의 로컬호스트는 ::1