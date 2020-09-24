function print(name, count) {
    // if (!count) { /* count가 undefined 일 때 */
    //     count = 0;
    // }
    /* 삼항 연산자로 했을 때 */

    count = count ? count : 0;
    /* 젤 왼쪽에 있는 count는 변수를 선언할 때 쓰는 것 */
    /* 근데 왜 let을 안 쓰지? 왜냐면 이미 함수 파라미터에서 선언한 걸로 치거든 */

    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print('최원태', 3)
print('최원태') /* 파이썬 같았으면은  오류가 나왔을 텐데 */


