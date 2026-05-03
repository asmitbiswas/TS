
function WIA<T>(item: T): T[]{
    return [item]
}

WIA("Hello world")
WIA(67)
WIA({
    name: "Ferrari"
})

function pair<a,b,c> (a: a, b: b, c: c): [a,b,c]{
    return[a,b,c]
}

pair("I'm TS god 💀", 453, "I'm legend")


interface box<T> {
    content : T
}

const numBoxes: box<number> = {content: 10}
const box: box<number> = {content: 67}

console.log(numBoxes)
console.log(box)

interface apiPromise<T> {
    status: number,
    data: T
}

const apiProm:apiPromise<{name:string}> = {
    status: 100,
        data: {
        name: "John"
    }
}

console.log(apiProm)