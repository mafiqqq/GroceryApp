console.log("meaaznn")

//  arrays

let names: string[] = ['a', 'c']
let nums: number[] = [22,21,39]

names.push("aa")
nums.push(1)

let things = [1, true, 'abc']
const f = things[1]

// object literals

let user: {firstName: string, age: number, id:number} = {
    firstName: "mun",
    age: 10,
    id: 1
}


// type inference with object literals

let person = {
    name: 'luigi',
    score: 30
}

person.name = 'zz'
