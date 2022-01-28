const API_KEY = "bb9fb5f424aadce6fc5b9cf303e862cc";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=matric`;
    fetch(url).then(response => response.json()).then(date => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = date.name;
        weather.innerText = `${date.weather[0].main} / ${date.main.temp}`
    })
}

function onGeoError(){
    alert("Can't find you. No Weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);