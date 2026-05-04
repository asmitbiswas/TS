import axios, {AxiosResponse} from "axios";

axios.get( 'http://localhost:8080/data').then(res => {
    console.log(res.data)
})

interface todo{
    userId: number;
    Id:number;
    title:string;
    completed: boolean;
}

// {
// userId: 1,
// id: 1,
// title: "Op",
// completed: true
// }

const fetchdata = async() => {
    try {
    const response:AxiosResponse<Todo> = await axios.get("https://jsonformatter.org/")
    }

    catch (error:any){
    if(axios.isAxiosError(error)){
        conosle.log("Axios err", error)
    }

    if (error.response){
    conosle.log(error.response.status)
    }
}}

console.log(fetchdata)


