//api constants
const baseUrl = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = 'API-KEY';
const diffKelvin = 273.15

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if(city){
        // call api
        fetchWeather(city)
    }else{
        alert('insert a valid city')
    }
})

function fetchWeather(city){
    fetch(`${baseUrl}?q=${city}&appid=${API_KEY}`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}


function showWeatherData(data){
    const divResponseData = document.getElementById('response');
    divResponseData.innerHTML = ''
    
    const cityName = data.name;
    const countryName = data.sys.country;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}, ${countryName}`
    
    const tempInfo = document.createElement('p');
    tempInfo.textContent = `The temperature is: ${Math.floor(temperature - diffKelvin)}°C`
    
    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `The humidity is ${humidity}%`

    const iconInfo = document.createElement('img');
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `Description: ${description}`

    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(tempInfo);
    divResponseData.appendChild(humidityInfo);
    divResponseData.appendChild(iconInfo);
    divResponseData.appendChild(descriptionInfo);
}