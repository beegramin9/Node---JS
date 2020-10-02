// 비동기적으로 파일 읽기. 항상 뒤에 callback이 와야 함

const fs = require("fs");
fs.readFile("./tmp/textfile.txt", "utf-8", function (
  error,
  buffer /* 파일 내용이 buffer에 담김 */
) {
  console.log(buffer);
});
