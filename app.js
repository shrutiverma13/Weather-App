
const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const cityval = document.querySelector('#loc');
const adder = document.querySelector('section');
const city = form.elements.loc;
form.addEventListener("submit", function (e) {
    e.preventDefault();
    addCity(city.value);
})
function addCity(city){
    const r = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=35ad87c35ce4968661b665ca37c249ca`);
    r.then(res =>{
        const temp = res.data.main.temp;
        const feelTemp = res.data.main.feels_like;
        const desc = res.data.weather[0].description;
        const box = document.createElement("div");
        const heading = document.createElement("h3");
        heading.innerText = city;
        heading.classList.add("text-capitalize");
        box.appendChild(heading);
        const data = document.createElement("h1");
        const addon = document.createElement("p");
        const brk = document.createElement("br");
        addon.append(`Feels like: ${feelTemp}`);
        data.append(`${temp}°C`);
        addon.append(brk);
        addon.append(desc);
        box.appendChild(data);
        box.appendChild(addon);
        adder.appendChild(box);
        box.classList.add("temp");
    })
    .catch(e => {
        alert(e.response.data.message);
})

}

