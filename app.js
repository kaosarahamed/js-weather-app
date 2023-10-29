// Select Dom ELements
const searchElement = document.getElementById("search");
const displayElement = document.getElementById("display");
const tempElement = document.getElementById("temp");
const humidityElement = document.getElementById("humidity");
const speedElement = document.getElementById("speed");

// Api Key
const API_KEY = "006d2cc5c6254e248dc98c5f4d5707ed";


// Functions
function handleSubmit(event){
    event.preventDefault();
    apiCall();
};


async function apiCall(){
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchElement.value}&units=Metric&appid=${API_KEY}`).then((res) => {
            return res.json()
    }).then((data) => {
        console.log(data.cod);
        if(data.message){
            displayElement.innerText = data.message;
            tempElement.innerText = "";
            humidityElement.innerText = "";
            speedElement.innerText = "";
        }else{
            displayElement.innerText = "";
            tempElement.innerText = data.main.temp + "°C";
            humidityElement.innerText = data.main.humidity + "%";
            speedElement.innerText = data.wind.speed + "Km/h";
        }
        
    });
};