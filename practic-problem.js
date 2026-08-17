"use strict";
// Problem 1
let val = "Hello TypeScript";
// console.log((val as string).length);
// console.log((<string>val).length);
// Problem 2
let value = "100";
let products = [{ title: "Laptop", price: 55000 },
    { title: "Mouse", price: 500, inStock: true }
];
function getProduct(product) {
    return product.price;
}
let method = "card";
let orderObj = {
    id: 1,
    method: "card"
};
// console.log(orderObj);
// Problem 5
function getLastElement(items) {
    return items[items.length - 1];
}
let lastNumber = getLastElement([10, 20, 30]);
let lastString = getLastElement(["a", "b", "c"]);
const numberContainer = {
    item: 100,
};
const stringContainer = {
    item: "Books",
};
function findById(item, id) {
    return item.find((tem) => tem.id === id);
}
const result = (findById([{ id: 1, name: "A" }, { id: 2, name: "B" }], 2));
// console.log(result);
// Problem 8
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "PLACED";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
function orderStatus(order) {
    if (order === OrderStatus.Shipped) {
        return `Current status: ${OrderStatus.Shipped}`;
    }
}
// console.log(orderStatus(OrderStatus.Shipped));
// Problem 9
const appConfig = {
    theme: "dark",
    version: 2
};
appConfig.theme = "light";
console.log(appConfig.theme);
