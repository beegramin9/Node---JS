// 장바구니 안에 제품, 수량, 가격이 있고...
let cart = [
    {
        'product': { 'name': '치약', 'volume': 100, 'price': 3000 },
        'quantity': 5
    },
    {
        'product': { 'name': '비누', 'volume': 300, 'price': 1000 },
        'quantity': 4
    }
]

console.log(JSON.stringify(cart));
// 외부로 문자로 갈 때만 사용하는 것. 문자열로 바꿔버리니까
// 프로그램 안에서 오브젝트와 관련된 메소드들을 사용하지 못하게 된다.

console.log(JSON.stringify(cart[0].product.price));

console.log('---------------------');

let sum = 0;
for (let item of cart) {
    sum += item.product.price * item.quantity;
}
console.log(sum);


