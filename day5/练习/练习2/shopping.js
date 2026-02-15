const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 1. 如果尚未添加，在购物车开头添加 'Meat'
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// 2. 如果尚未添加，在购物车末尾添加 'Sugar'
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// 3. 如果您对蜂蜜过敏，移除 'Honey'
if (shoppingCart.includes('Honey')) {
  const honeyIndex = shoppingCart.indexOf('Honey');
  shoppingCart.splice(honeyIndex, 1);
}

// 4. 将 'Tea' 修改为 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

// 输出结果
console.log(shoppingCart);
