// 파이썬의 try-execption이랑 똑같다
try {
    error.error.error();

} catch (exeption) {
    console.log(exeption.name);
    console.log(exeption.message);
}
console.log('프로그램 정상 종료')