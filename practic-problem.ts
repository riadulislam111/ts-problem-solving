// Problem 1
let val: unknown = "Hello TypeScript";

// console.log((val as string).length);
// console.log((<string>val).length);


// Problem 2
let value: string | number = "100";

// const num = Number(value);
// console.log(num + 10);



// Problem 3
interface Product {
title: string;
price: number;
inStock?: boolean
}

let products: Product []= [{ title: "Laptop", price: 55000 },
    { title: "Mouse", price: 500, inStock: true }
];

function getProduct(product:Product): number {
    return product.price;
}

// console.log(getProduct(products[0]));
// console.log(getProduct(products[1]));

// Problem 4
type PaymentMethod = "cash" | "card" | "mobile";

// interface is only define objects shape and structure.
// it cannot directly name a union of primitive literal value

interface Order {
    id: number;
    method: PaymentMethod;

}

let method: PaymentMethod = "card";

let orderObj: Order = {
    id: 1,
    method: "card"
}

// console.log(orderObj);



// Problem 5
function getLastElement<T>(items: T[]): T {
return items[items.length - 1];
}

let lastNumber = getLastElement([10, 20, 30]);
let lastString = getLastElement( ["a", "b", "c"]);
// console.log(lastNumber);
// console.log(lastString);


// Problem 6
interface Container <T> {
    item: T;
}

const numberContainer: Container<number> = {
    item: 100,
};

const stringContainer: Container<string> = {
    item: "Books",
};

// console.log(numberContainer);
// console.log(stringContainer);




// Problem 7
interface HasId {
    id: number;
}

function findById<T extends HasId>(
    item: T[],
    id: number
){
return item.find((tem) => tem.id === id)
}

const result = (findById([{ id: 1, name: "A" }, { id: 2, name: "B" }], 2
));

// console.log(result);





// Problem 8
enum OrderStatus {
    Placed= "PLACED",
    Shipped= "SHIPPED",
    Delivered= "DELIVERED",
    Cancelled= "CANCELLED"
}

function orderStatus(order: OrderStatus){
    if(order === OrderStatus.Shipped) {
        return `Current status: ${OrderStatus.Shipped}`;
    }
}

// console.log(orderStatus(OrderStatus.Shipped));


// Problem 9
const appConfig = {
    theme: "dark",
    version: 2
} as const ;

// appConfig.theme = "light";

const colors = ["red", "green", "blue"] as const;

type Color = typeof colors[number];


// Problem 10
interface Employee {
    name: string;
    id: number;
    salary: number;
    department: string;
}

function updateEmployee(updates: Partial<Employee>): void {
    console.log(updates);
}

type EmployeeBasicInfo = Pick<Employee, "name" | "id">;
type EmployeePublicDetails = Omit<Employee, "salary">;

updateEmployee({name: "Rafi"});