var money = prompt("Ваш бюджет?");
var name = prompt("Название вашего магазина?");

var mainList = {
    budget:  money,
    shopName: "name",
    shopGoods: [],
    employers: {},
    open: false
}

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

alert (mainList.budget / 30);

console.log(mainList);