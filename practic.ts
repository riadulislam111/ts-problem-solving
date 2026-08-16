let name: string = "Riadul";
let age: number = 22;
let isDeveloper: boolean = true;

let numbers: number[] = [10, 20, 30];


let user: {
    name: string;
    age: number;
} = {
    name: "Riadul",
    age: 22
};

let name = "Riadul";
let age = 22;


let name: string = "Riadul";

let name = "Riadul";


function add(a: number, b: number): number {
    return a + b;
}


const greet = (name: string): string => {
    return `Hello ${name}`;
};

function greet(name: string, age?: number) {
    console.log(name, age);
}



const user:{
    name: string;
    age: number;
    isAdmin: boolean;
} = {
    name: "Riadul",
    age: 22,
    isAdmin: false
};



type User = {
    name: string;
    age: number;
    email: string;
};

const user: User = {
    name: "Riadul",
    age: 22,
    email: "test@gmail.com"
}

type Product = {
    id: number;
    name: string;
    price: number;
};


interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Riadul",
    age: 22
};


type User = {
    name: string;
};


interface User {
    name: string;
}


let id: string | number;

id = 101;
id = "101";



type Status = "loading" | "success" | "error";

let status: Status = "loading";


let direction: "left" | "right";
direction = "left";


type ButtonProps = {
    variant: "primary" | "secondary";
};


type User = {
    name: string;
    age?: number;
};

const user1: User = {
    name: "Riadul"
};


const user2: User = {
    name: "Riadul";
    age: 22
};


type User = {
    id: number;
    name: string;
};

const users: User[] = [
    {
        id: 1,
        name: "Riadul"
    },
    {
        id:2,
        name: "Alex"
    }
];


let data: any = "hello";

data = 10;
data = true;
data =  {};


let data: unknown;

data = "hello";
data = 123;


if(typeof data === "string") {
    console.log(data.toUpperCase());
}


function sayHello(): void {
    console.log("Hello");
}


function throwError(message: string): never{
    throw new Error(message)
}


function printValue(value: string | number) {
    if(typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}



const input = document.getElementById("email") as HTMLInputElement;


const value = someValue as string;




enum Role {
    Admin,
    User,
    Guest
}

let role: Role.Admin;


type Role = "admin" | "user" | "guest";


type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
    return a + b;
};



type ButtonProps = {
    onclick: () => void;
};


type UserProps = {
    onSelect: (id: number) => void;
};


function identity<T>(value: T): T {
    return value;
}

identity<string>("Hello");
identity<number>(100);


function getFirst<T>(items: T[]): T {
    return items[0];
}


type ApiResponse<T> = {
    data: T;
    success: boolean;
};


type User = {
    name: string;
};

const response: ApiResponse<User> = {
    data: {
        name: "Riadul"
    },
    success: true
};


type User = {
    name: string;
    age: number;
};

type UserKey = keyof User;


let key: UserKey;

key = "name";
key = "age";



type User = {
    name: string;
    age: number;
};

type UserKey = keyof User;


let key: UserKey;

key = "name";
key = "age";


type UserProps = {
    name: string;
    age: number;
};

function User({name, age}: UserProps) {
    return (
        <div>
        {name} - {age}
        </div>
    );
}


type CardProps = {
    children: React.ReactNode;
};

function Card ({children}: CardProps) {
    return <div>{children}</div>;
}


function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
) {
    console.log(event.target.value);
}


function handleClick(
    event: React.MouseEvent<HTMLButtonElement>
) {
    console.log("clicked");
}


const [count, setCount] = useState<number>(0);


type User = {
    name: string;
    age: number;
};

const [user, setUser] = useState<User | null> (null);


const inputRef = useRef<HTMLInputElement>(null);


type User = {
    id: number;
    name: string;
    email: string;
};

const users:User[] = await fetchUsers();



type User = {
    name: string;
    age: number;
};

const user: Partial<User> = {
    name: "Riadul"
};


type UserName = Pick<User, "name">;

type UserWithoutAge = Omit<User, "age">;

type User = {
    readonly id: number;
};


type User = {
    id: number;
    name: string;
    email?: string;
};

function UserCard({
    user, onSelect
}: {
    user: User;
    onSelect: (id: number) => void;
}) {
    return (
        <button onClick = {() => onSelect(user.id)}>
        {user.name}
        </button>
    );
}

