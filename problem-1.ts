// User Profile

type User = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  age?: number;
};

const Users: User[] = [
  { id: 123, name: "Alice", email: "user@example.com", isAdmin: true, age: 32 },
  { id: 345, name: "Bob", email: "user@example.com", isAdmin: true, age: 36 },
  { id: 234, name: "Jhon", email: "user@example.com", isAdmin: true, age: 37 },
];


// Product Filter
type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
};

const productCard: Product[] = [
    {
    id: 23,
    name: "alice",
    price: 900,
    category: "second"
},
    {
    id: 25,
    name: "alice",
    price: 1100,
    category: "second"
},
    {
    id: 26,
    name: "alice",
    price: 500,
    category: "second"
},
    {
    id: 27,
    name: "alice",
    price: 2000,
    category: "second"
},
]



function getExpensiveProducts(products: Product[]): Product[] {
    return products.filter((p) => p.price> 1000)
}

// console.log(getExpensiveProducts(productCard));



// Union Type
type Status = "loading" | "Success" | "error";

function getMessage(status: Status): string {
    if(status === "loading") {
        return "Loading";
    } else if(status === "Success") {
        return "Success!"
    } else if (status === 'error') {
        return "Something went wrong"
    }
}

// console.log(getMessage("Success"));
// console.log(getMessage("loading"));
// console.log(getMessage("error"));


// Generic Function
function getFirst<T>(items: T[]): T {
return items[0]
}

// console.log(getFirst<number>([10, 20, 30]));

// console.log(getFirst<string>(["Riadul", "Alex"]));

// console.log(getFirst<{name: string}>([{ name: "Riadul" }]));


// Typed React Props
// interface UserCardProps {
//     name: string;
//     age: number;
//     email: string;
// }

// export const UserCard: React.FC<UserCardProps> = ({name, age, email}) => {
//     return (
//         <div className='user-card'>
//          <h2>{name}</h2>
//          <p>Age: {age}</p>
//          <p>Email: {email}</p>        
//         </dic>
//     );
// };


// Button Component

// import React from "react";

// type ButtonProps = {
//   text: string;
//   variant: "primary" | "secondary" | "danger";
//   onClick: () => void;
//   disabled?: boolean;
// };

// export const Button: React.FC<ButtonProps> = ({
//   text,
//   variant,
//   onClick,
//   disabled = false,
// }) => {
//   return (
//     <button
//       className={`btn btn-${variant}`}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {text}
//     </button>
//   );
// };


// Counter with useState
// import React, { useState } from "react";

// export const Counter: React.FC = () => {
//   const [count, setCount] = useState<number>(0);

//   const increment = () => setCount((prev) => prev + 1);
//   const decrement = () => setCount((prev) => prev - 1);
//   const reset = () => setCount(0);

//   return (
//     <div className="counter">
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };


// User State
