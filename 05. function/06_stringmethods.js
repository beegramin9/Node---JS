/* length는 클래스의 속성이므로 괄호가 붙지 않는다. 메소드가 아니란 얘기 */
let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(text.length);

// 스트링 내부에서 다른 스트링을 찾을 때
let wap = 'WAP';
console.log(wap.indexOf('P'));
/* 찾고자 하는 문자가 없을 때는 -1로 리턴이 된다
내가 칮으려는 문자열이 큰 Chunk에 없다면 -1로 나온다. */
console.log(wap.indexOf('Jordan Peterson'));

let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"));
console.log(str.lastIndexOf("locate"));

/* search는 정규표현식 사용 가능, locate 불가 */
/* search는 lastIndexOf 같은거 없음 */
console.log(str.search('locate'));

// 파이썬에서의 슬라이싱은 그냥 [] 로 다 해결이 됐는데
// 대부분의 다른 언어에서는 메소드를 빌려와야 함
let fruit = "Apple, Banana, Kiwi";
console.log(fruit.slice(7, 13));
console.log(fruit.slice(-12));

/* Substring */
console.log(fruit.substr(7, 6));
// 7에서부터 6개를 세어서 return하는 메소드
// 대신 인덱싱할 때 음수가 들어가지 않는다. `

/* 문자열 대체. 파이썬이랑 똑같은데? */
let microsoft = 'Please visit Microsoft!!!!'

console.log(microsoft.replace('!', '@'));
// replace로 하면 맨 처음 나오는 것만 바꿔짐
console.log(microsoft.replace(/!/g, '@'));
// 정규표현식을 사용해서 해당하는 모든 문자를 바꿀 수 있음

/* 공백 제거, 파이썬에서는 strip 이야 */
let trimstr = "             Hello World!            "
console.log(trimstr.trim());

/* 문자 추출 */
console.log(wap.charAt(2), wap[2]);

/* 문자열을 array로 변경. 파이썬이랑 똑같다*/
let txt = 'a,b,c,d,e';
console.log(txt.split(','));