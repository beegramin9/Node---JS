let size = -10;

// let array = new Array(size);
/* 이렇게 하면 size만큼의 length를 가진 array를 만들수 있음 */
/* size가 음수이면 오류가 뜨겠지? */
// console.log(array);

try {
  let array = new Array(size); /* 알고리즘 풀 때 이거 쓸만하겠다 */
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log("양의 정수를 입력하세요.");
}
