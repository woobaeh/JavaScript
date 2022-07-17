// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11
// ?.
// null 또는 undefined를 확인할 때
let item = { price: 1 };
const price = item?.price;
console.log(price);

let obj = { name: '🐶', owner: { name: '엘리' } };
function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);
