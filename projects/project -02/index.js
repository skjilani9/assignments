function get() {
    let city = document.getElementById("city").value;
    console.log(city);
    if (city.length == 0) {
        city = "Pithapuram";
    }
    let p = document.getElementById("detail");
    p.innerHTML = city;
    let API_key = "471508c83b8dd6b2559cb6d3f27fa17c";
    let str = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;

    console.log(str);
    fetch(str).then((data) => {
        return data.json();
    }).then((data) => {

        console.log(data.main.temp);
        p.innerHTML = `Temp in ${city} is ${Math.floor(data.main.temp - 273.15)} <sup>o</sup> C`;
    })
    let t = document.getElementById("time");
    setInterval(() => {
        let a = new Date
        t.innerHTML = `The  time is ${a}`
    }, 1000)
}

function icon() {
    let icon = document.getElementById("iconlogo")
    icon.classList.toggle("mydata")
}


