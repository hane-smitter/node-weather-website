const weartherForm = document.querySelector('.weather-form');
const weartherInput = document.querySelector('.weather-form input');
const search = document.querySelector('.search-place')
const locationMsg = document.getElementById('location');
const forecastMsg = document.getElementById('forecast');

let h1Tag = document.querySelector('h1');
document.onclick = function () {
    h1Tag.classList.toggle('animate');
}

function getWeather(placeToSearch) {
    let place = placeToSearch;
    let url = `/weather?address=${place}`;
    return fetch(url).then((res) => res.json());
}

weartherForm.onsubmit = function(e){
    e.preventDefault();
    locationMsg.textContent = 'loading...';
    forecastMsg.textContent = "";
    getWeather(weartherInput.value).then((data) => {
        if(data.error){
            locationMsg.innerHTML = '<span style="color: red">' + data.error + '</span>';
            forecastMsg.textContent = '';
            return;
        }
        locationMsg.textContent = data.location;
        forecastMsg.innerHTML = data.data;
    });;
}