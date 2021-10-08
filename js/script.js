
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('0-forecast-main').innerHTML = main;
      document.getElementById('0-forecast-more-info').innerHTML = description;
      document.getElementById('0-icon-weather-container').innerHTML = icon;
      document.getElementById('0-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function ville(){
  console.log(document.getElementById("city-input").value);
}


// function getThreeDayForecast(){

//  const apiWeather1 = new API_WEATHER();
//  const apiWeather2 = new API_WEATHER();
//  const apiWeather3 = new API_WEATHER();



//  apiWeather1
//    .fetchTodayForecast()
//    .then(function(response) {
//      const data = response.data;

//      const main = data.weather[0].main;
//      const description = data.weather[0].description;
//      const temp = data.main.temp;
//      const icon = apiWeather1.getHTMLElementFromIcon(data.weather[0].icon);

//      document.getElementById('1-forecast-main').innerHTML = main;
//      document.getElementById('1-forecast-more-info').innerHTML = description;
//      document.getElementById('1-icon-weather-container').innerHTML = icon;
//      document.getElementById('1-forecast-temp').innerHTML = `${temp}°C`;
     
//    })
//    .catch(function(error) {
//      console.error(error);
//    });



//    apiWeather2
//    .fetchTodayForecast()
//    .then(function(response) {
//      const data = response.data;

//      const main = data.weather[0].main;
//      const description = data.weather[0].description;
//      const temp = data.main.temp;
//      const icon = apiWeather2.getHTMLElementFromIcon(data.weather[0].icon);

//      document.getElementById('2-forecast-main').innerHTML = main;
//      document.getElementById('2-forecast-more-info').innerHTML = description;
//      document.getElementById('2-icon-weather-container').innerHTML = icon;
//      document.getElementById('2-forecast-temp').innerHTML = `${temp}°C`;
     
//    })
//    .catch(function(error) {
//      console.error(error);
//    });



//    apiWeather3
//    .fetchTodayForecast()
//    .then(function(response) {
//      const data = response.data;

//      const main = data.weather[0].main;
//      const description = data.weather[0].description;
//      const temp = data.main.temp;
//      const icon = apiWeather3.getHTMLElementFromIcon(data.weather[0].icon);

//      document.getElementById('3-forecast-main').innerHTML = main;
//      document.getElementById('3-forecast-more-info').innerHTML = description;
//      document.getElementById('3-icon-weather-container').innerHTML = icon;
//      document.getElementById('3-forecast-temp').innerHTML = `${temp}°C`;
     
//    })
//    .catch(function(error) {
//      console.error(error);
//    });

   

// } 
