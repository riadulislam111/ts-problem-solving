"use strict";
// User Profile
const Users = [
    { id: 123, name: "Alice", email: "user@example.com", isAdmin: true, age: 32 },
    { id: 345, name: "Bob", email: "user@example.com", isAdmin: true, age: 36 },
    { id: 234, name: "Jhon", email: "user@example.com", isAdmin: true, age: 37 },
];
const productCard = [
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
];
function getExpensiveProducts(products) {
    return products.filter((p) => p.price > 1000);
}
function getMessage(status) {
    if (status === "loading") {
        return "Loading";
    }
    else if (status === "Success") {
        return "Success!";
    }
    else if (status === 'error') {
        return "Something went wrong";
    }
}
// console.log(getMessage("Success"));
// console.log(getMessage("loading"));
// console.log(getMessage("error"));
// Generic Function
function getFirst(items) {
    return items[0];
}
console.log(getFirst([10, 20, 30]));
console.log(getFirst(["Riadul", "Alex"]));
console.log(getFirst([{ name: "Riadul" }]));
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
