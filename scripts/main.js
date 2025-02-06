document.querySelector('.js-search').addEventListener('click',(button) => {
    const cityName = document.querySelector('.js-city-input').value;
    const data = checkWeather(cityName);
    renderWeather(data);
})


const apikey = '64193ab39dac4069ae5122329250602 ';
const aoe = 'http://api.weatherapi.com/v1/current.json?key=64193ab39dac4069ae5122329250602&q=Bangalore'



async function checkWeather (cityName) {
    let html = `http://api.weatherapi.com/v1/current.json?key=64193ab39dac4069ae5122329250602&q=${cityName}`
    const response = await fetch(html);
    
    var data = await response.json();
    console.log(data);
    return data;
}


