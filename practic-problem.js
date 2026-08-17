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
console.log(result);
