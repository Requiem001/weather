document.querySelector('.js-search').addEventListener('click',async(button) => {
    const cityName = document.querySelector('.js-city-input').value;
    const data = await checkWeather(cityName);
    renderWeather(data);
})





async function checkWeather (cityName) {
    let html = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=975c73b52bdce054827879a968f55c99`
    const response = await fetch(html);
    
    var data = await response.json();
    console.log(data);
    return data;
}

function renderWeather(data) {
    const cond = data.weather[0].main;
    let iconName = '';
    const city = data.name;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const tempK = data.main.temp;
    const tempC = Math.round(tempK - 273.15);
    console.log(cond);
    if (cond == 'Clear') {
        iconName = 'images/clear.png';
    }
    else if (cond == 'Clouds') {
        iconName = 'images/clouds.png';
    }
    else if (cond == 'Drizzle') {
        iconName = 'images/drizzle.png';
    }
    else if (cond == 'Thunderstorm' || cond == 'Rain') {
        iconName = 'images/rain.png';
    }
    else if (cond == 'Snow') {
        iconName = 'images/snow.png';
    }
    else if (cond == 'Mist') {
        iconName = 'images/wind.png';
    }

    document.querySelector('.js-weather-main').innerHTML = `<img class = "weather-icon"src="${iconName}">
                <p class = "temp">${tempC}&#176C</p>
                <p class = "city-name">${city}</p>`

    document.querySelector('.js-extra-info').innerHTML =   `<div class = "humidity">
                    <div class = "humid-icon"><img class = "humid-img" src = "images/humidity.png"></div>
                    <div class = "current-humidity">
                        <p class = "percentage">${humidity}%</p>
                        <p class = "humid-title">Humidity</p>
                    </div>
                </div>
                <div class = "wind-speed">
                    <div class = "speed-icon"><img class = "speed-img" src = "images/wind.png"></div>
                    <div class = "current-speed">
                        <p class = "wind-text">${windSpeed} km/h</p>
                        <p class = "speed-title">Wind Speed</p>
                    </div>
                </div>`
}



