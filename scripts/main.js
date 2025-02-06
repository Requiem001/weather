document.querySelector('.js-search').addEventListener('click',(button) => {
    const cityName = document.querySelector('.js-city-input').value;
    const data = checkWeather(cityName);
    //renderWeather(data);
})





async function checkWeather (cityName) {
    let html = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=975c73b52bdce054827879a968f55c99`
    const response = await fetch(html);
    
    var data = await response.json();
    console.log(data);
    return data;
}



