let response: any = "412"

let numericLenght: number = (response as string).length 
// forcing string execpt number

type book = {
    name: string
}

let BookString = '{"name":"Atomic Habits"}'
let bookObj = JSON.parse(BookString) as book;

console.log(bookObj)

const InputElement = document.getElementById("username") as HTMLInputElement


let value:any
value = 4
value = "Gojo Satoru"
value = [1, 2, 8, 6]
value.toUpperCase()

let newVal: unknown;
newVal = 4
newVal = "Gojo Satoru"
newVal = [1, 2, 8, 6]
// newVal.toUpperCase()

if(typeof newVal === "string"){
    newVal.toUpperCase()
}

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
        
    }
    console.log("Error", error);
    
}

const data:unknown = "+_+"
const strData: string = data as string 

type Role = "admin" | "User" | "Owner"


function redirectBasedOnRole(role:Role){
    if (role === "User" ) {
        console.log("redirecting from user dashboard")
        return;
    }
      if (role === "admin" ) {
        console.log("redirecting from admin dashboard")
        return;
    }
    role;
}

function neverReturn(): never{
    while (true) {}
}