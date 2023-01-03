let ratingData = [
    { restaurant: 'KFC', rating: 5 }, 
    { restaurant: 'Burger King', rating: 4 }, 
    { restaurant: 'KFC', rating: 3 }, 
    { restaurant: 'Dominos', rating: 2 }, 
    { restaurant: 'Subway', rating: 3 }, 
    { restaurant: 'Dominos', rating: 1 }, 
    { restaurant: 'Subway', rating: 4 }, 
    { restaurant: 'Pizza Hut', rating: 5 }
]

const uniq = Array.from(new Set(ratingData.map(({restaurant}) => restaurant)))
let arr =[]
uniq.map(restaurantName =>{
    const filterdata = ratingData.filter(obj => obj.restaurant == restaurantName);
    let output = {
        restaurant : restaurantName,
        averageratting : filterdata.reduce((a ,b) => a + b.rating ,0)/filterdata.length
    }
    arr.push(output)
})
console.log(arr)
let output2 = arr.filter(items => items.averageratting >= 4);
console.log(output2)

function myfun(){
    let p = document.getElementById("one")
    p.innerHTML =JSON.stringify(arr) ;
    let p1 = document.getElementById("two")
    p1.innerHTML=JSON.stringify(output2) 
}