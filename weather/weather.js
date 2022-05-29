const API = "7e20a56af3f2f5b94bf18ff525aa7576";

const fetchData = position => {
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API}`)
        .then(response => response.json())
        .then(data => setWeatherData(data));
}
const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp
    }

    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key];
    });
}
const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}