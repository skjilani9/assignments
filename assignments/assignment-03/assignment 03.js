class restaurantManager {
    restaurantList =
        [
            {
                id: "1",
                restaurantName: "Pizza hut",
                address: "banugudi junction",
                city: "Delhi"
            },
            {
                id: "2",
                restaurantName: "KFC",
                address: "sarpavaram",
                city: "Mumbai"
            },
            {
                id: "3",
                restaurantName: "Dominos",
                address: "main road center ",
                city: "Delhi"
            },
            {
                id: "4",
                restaurantName: "Burger king",
                address: "jntuk ground",
                city: "Chennai"
            },
            {
                id: "5",
                restaurantName: "Subway",
                address: "tilak street",
                city: "Kakinada"
            }
        ];
    printAllRestaurantNames = () => {
        return this.restaurantList.map(name => name.restaurantName)
    }
    filterRestaurantByCity = (cityname) => {


        return this.restaurantList.filter(name => name.city == cityname)

    }
}

const nameObject = new restaurantManager();
const output1 = nameObject.printAllRestaurantNames();
const output2 = nameObject.filterRestaurantByCity(prompt("enter the city"));

console.log(output1)
console.log(output2)

orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};
let list = Object.values(orderData)
const total = list.reduce((x, y) => {
    return x + y
})
console.log(total)
let list1 = Object.keys(orderData)
console.log(list1.length)
let arr = []
let ans3 = list1.map((item, index) => {
    const obj = {
        'id': index + 1,
        'order': item,
        "orderpercantage": ((orderData[item] / total) * 100).toFixed(2),
        'restaurant': 'Punjabi Tadka.'
    }
    arr.push(obj);
})
console.log(arr)


