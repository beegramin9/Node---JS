// 오브젝트의 value값에는 메소드가 들어갈 수 있다.
// 이게 바로 Class(객체)의 Method인거야
// 그러면 함수가 아닌 다른 값들은 뭐가 되는거야? 속성이 되는거야
/* 예를 들어 array의 length도 속성이 되는 거지 */
let name = '외부 이름';
let price = '외부 가격';

let product = {
    'name': '치약',
    'volume': 100,
    'price': 3000,
    print: function () {
        console.log(`제품명은 ${name}, 가격은 ${price}입니다.`);
        console.log(`제품명은 ${this.name}, 가격은 ${this.price}원 입니다.`);
        /* 객체지향프로그램에서는 자기 자신의 속성을 포함하는 함수를 쓸 때는
        반드시 this 를 써줘야 함. 파이썬 클래스의 self 랑 똑같다.  */
    },
    string: function () {
        return `제품명은 ${this.name}, 가격은 ${this.price}원 입니다.`;
    }
}


/* 속성은 JSON 으로 만들 수 있지만 메소드는 JSON은 메소드로 만들 수 없다.
당연하지? 다른 프로그램에서는 함수 문법이 다르잖아.
*/
product.print()
/* 애는 속성이 아니라 메소드니까 뒤에 () 써줘야지 */


console.log(product.string())