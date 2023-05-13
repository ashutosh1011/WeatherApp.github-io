const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const APIkey = '5ae4bfb44e954c853b316fa300c0b1c2';
// const url = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid{=key}';
let k;
const cityInput = document.getElementById("city");

  async function fetchData(city) {
    try {
      let response = await fetch(url+city + '&appid=' + APIkey);
      let result = await response.json();
	  cityname.innerHTML=city;
	  temp.innerHTML = (result.main.temp-273).toFixed(1)+"°C";
	Min_Temp.innerHTML = (result.main.temp_min-273).toFixed(1)+"°C";
	Max_Temp.innerHTML = (result.main.temp_max-273).toFixed(1)+"°C";
	wind.innerHTML = result.wind.speed+"km/h";
	visibility.innerHTML = result.visibility;
	  
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  
  const searchForm = document.querySelector("form");

  searchForm.submit.addEventListener("click",(e)=>{
	e.preventDefault();
	fetchData(cityInput.value);
  });

  fetchData("Delhi");
  
  
//   dltemp.innerHTML       = (result.main.temp-273).toFixed(1);