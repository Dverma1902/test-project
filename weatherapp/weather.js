const API_KEY='b37accd2725d5664e3b331f2a5ab6a93';
const buttn=document.getElementById("but");
const inpt=document.getElementById("in");
const weatherinfo=document.querySelector(".box");
const weatherinfo2=document.querySelector(".box1");
buttn.addEventListener("click",fetchweather);
async function fetchweather(){
    let cityName=inpt.value;
    if(!cityName){
        alert("enter city name");
        return;
    }
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    .then((response)=>{
        const data=response.json();
        return data;
    }).then((data)=>{
        if(data.cod==404){
            alert("City Name is Invalid");
            return;
        }
        weatherinfo2.style.height="600px";
        const cityTemp=data.main.temp;
        const name=data.name;
        const sky=data.weather[0].description;
        const hum=data.main.humidity;
        const feel=data.main.feels_like;
        const wind=data.wind.speed;
        weatherinfo.innerHTML=`
        <div class="curw">
         <h2>${name}</h2>
         <div class="temp">${cityTemp}&#176C</div>
         <div class="desc">${sky}</div>
         <div class="details">
         <div>Humidity:${hum}%</div>
         <div>Wind Speed:${wind}m/s</div>
         <div>Feels Like:${feel}&#176C</div>
         </div>
         </div>
        `
    })
   
}