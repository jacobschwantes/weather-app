export default function getWeather(cityName) {
    const apiKey = '32a1cc990f877b9102ffcd15c42c7648';
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then(data => { return data })
}

