interface todo{
    userId: number;
    Id:number;
    title:string;
    completed: boolean;
}

const fetchdata = async() => {
    try {
        const response:Response = await fetch("https://jsonformatter.org/")
        if(!response.ok){
            throw new Error(`HTTP ERR ${response.status}`)
        }
        // const data: todo = await Response.json()
    }
     catch(error: any){

   }}
