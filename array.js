let arr = ['javascript', 'python', 'ruby', 'php', 'java', 'c++', 'c#', 'c', 'swift', 'kotlin']
// console.log(arr.length)
// console.log(arr[0])

const products = [{
    id: 100, name: 'Macbook Pro', price: "$2000",
    id: 101, name: 'Macbook Air', price: "$1500"

}]

// product.map(p=> {

//     console.log(p.name)
//     console.log(p.price)
//     console.log(p.id)
// })


for (let i = 0; i < products.length; i++) {
    const p = products[i]
    console.log(p.id)
    console.log(p.name)
    console.log(p.price)
}
