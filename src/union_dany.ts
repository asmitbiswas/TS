// union is used when a datatype's value  ===  different on places ( exp : 3 & 5 line ; 9 & 11)

let subs: string | number = '1M'

let apiReq: 'success' | 'pending' | 'error' = "success"

apiReq = "pending"

let airLineSeat : 'aisle' | 'middle' | 'window' = "aisle"

airLineSeat = "middle"

let orders = ['65' ,  '66' , '67', '68' , '69']

// let currentOrder;

// for(let order of orders) {
//     if(currentOrder === '67')
//         currentOrder = order
//         break;
// }

//  in this situation written above is any. here currentOrder is any ( it can be anything ) thats why we have to avoid using any. :)


// instead this way :
let currentOrder: string | undefined;

for(let order of orders){
    if(currentOrder === "67"){
        currentOrder = order
        break;

}
    currentOrder = '123'
}

console.log(currentOrder)
