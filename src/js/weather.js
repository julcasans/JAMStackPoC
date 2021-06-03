
function success(pos) {
  const crd = pos.coords;
  const url = `/netlify/functions/weatherapi?lat=${crd.latitude}&lon=${crd.longitude}&units=metric`;

  console.log(url);

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      document.querySelector('#city').textContent = data.name;
      document.querySelector('#temp').textContent = data.main.temp + 'º C';
      document.querySelector('#main').textContent = data.weather[0].main;
      document.querySelector('#desc').textContent = data.weather[0].description;
      
      document.querySelector('#weather').classList.remove('hidden');
    })
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
if (window.navigator) {
  navigator.geolocation.getCurrentPosition(success, error);
}