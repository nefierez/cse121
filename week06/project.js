const date = new Date();
document.querySelector("#dateNumber").innerHTML = date.toLocaleString('en', { day: 'numeric' });
document.querySelector("#dateMonth").innerHTML = date.toLocaleString('en', { month: 'short'});
document.querySelector("#dateYear").innerHTML = date.getFullYear();
document.querySelector("#dateText").innerHTML = date.toLocaleString('en', { weekday: 'long'});

/* ===================================================================================*/

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
        temperature: data.main.temp,
    }

    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key];
    });
}
const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}

/* ===================================================================================*/

const newTask = document.querySelector("#newTask");
const addButton = document.querySelector("#addButton");
const list = document.querySelector("#list");

addButton.addEventListener("click", () => {
  const myTask = newTask.value;

  if (myTask != "") {
    newTask.value = "";

    const listTask = document.createElement('li');
    const listText = document.createElement('span');
    const DeleteButton = document.createElement('button');

    listTask.appendChild(listText);
    listText.textContent = myTask;
    listTask.appendChild(DeleteButton);
    DeleteButton.textContent = "❌";
    list.appendChild(listTask);

    DeleteButton.addEventListener("click", () => {
      list.removeChild(listTask);
    });
    newTask.focus();
  } else {
    alert("Add a new task")
  }
});