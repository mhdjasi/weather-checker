

fetch('https://api.openweathermap.org/data/2.5/weather?q=kochi&appid=8ac5c4d57ba6a4b3dfcf622700447b1e')
    .then(result => result.json())
    .then(cityWeather => display(cityWeather))
    
    
    
    
function weather(){
    let cityInput = input.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
    .then(result=>result.json())
    .then(cityWeather=>display(cityWeather))
}

function display(cityWeather){
    if(cityWeather.cod=="404"){
        alert('wrong city name!!')
    }
    else{
        place.innerHTML = cityWeather.name
        temp.innerHTML = Math.floor((cityWeather.main.temp-273))
        description.innerHTML = cityWeather.weather[0].description
        feelslike.innerHTML = Math.floor(cityWeather.main.feels_like-273)
        humidity.innerHTML = cityWeather.main.humidity
        pressure.innerHTML = cityWeather.main.pressure
        wind.innerHTML = cityWeather.wind.speed
        visibility.innerHTML = cityWeather.visibility
        country.innerHTML = cityWeather.sys.country
    }
}




