//dom
const sizeBtn = document.getElementsByClassName('card-bottom__button');
const cardTop = document.getElementsByClassName('card-top');
const circle = document.querySelector('.card-bottom__img-circle');

const selectFromTemperature = document.querySelector('.from__select-temperature');
const selectToTemperature = document.querySelector('.to__select-temperature');

const selectFromLength = document.querySelector('.from__select-length');
const selectToLength = document.querySelector('.to__select-length');

const selectFromPressure = document.querySelector('.from__select-pressure');
const selectToPressure = document.querySelector('.to__select-pressure');

const selectFromTime = document.querySelector('.from__select-time');
const selectToTime = document.querySelector('.to__select-time');

const selectFromEnergy = document.querySelector('.from__select-energy');
const selectToEnergy = document.querySelector('.to__select-energy');

const selectFromWeight = document.querySelector('.from__select-weight');
const selectToWeight = document.querySelector('.to__select-weight');

const btnTemperature = document.getElementById('btnTemperature');
const btnLength = document.getElementById('btnLength');
const btnPressure = document.getElementById('btnPressure');
const btnTime = document.getElementById('btnTime');
const btnEnergy = document.getElementById('btnEnergy');
const btnWeight = document.getElementById('btnWeight');

const inputTemperature = cardTop[0].querySelector('.value__input');
const inputLength = cardTop[1].querySelector('.value__input');
const inputPressure = cardTop[2].querySelector('.value__input');
const inputTime = cardTop[3].querySelector('.value__input');
const inputEnergy = cardTop[4].querySelector('.value__input');
const inputWeight = cardTop[5].querySelector('.value__input');

const outputTemperature = cardTop[0].querySelector('.result__output');
const outputLength = cardTop[1].querySelector('.result__output');
const outputPressure = cardTop[2].querySelector('.result__output');
const outputTime = cardTop[3].querySelector('.result__output');
const outputEnergy = cardTop[4].querySelector('.result__output');
const outputWeight = cardTop[5].querySelector('.result__output');

// functions
function convertTemperature () {
    const temperatureFrom = selectFromTemperature.value;
    const temperatureTo = selectToTemperature.value;
    let temperature = Number(inputTemperature.value);
    let result;
    if (temperatureFrom == temperatureTo){
        result = temperature;
    }
    else if (temperatureFrom == "celsius" && temperatureTo == "kelvin"){
        result = temperature + 273.15;
    }
    else if (temperatureFrom == "celsius" && temperatureTo == "fahrenheit"){
        result = 1.8 * temperature + 32;
    }
    else if (temperatureFrom == "celsius" && temperatureTo == "reaumur"){
        result = 0.8 * temperature;
    }
    else if (temperatureFrom == "kelvin" && temperatureTo == "celsius"){
        result = temperature - 273.15;
    }
    else if (temperatureFrom == "kelvin" && temperatureTo == "fahrenheit"){
        result = 1.8 * temperature - 459.67;
    }
    else if (temperatureFrom == "kelvin" && temperatureTo == "reaumur"){
        result = (temperature - 273.15) / 1.25;
    }
    else if (temperatureFrom == "fahrenheit" && temperatureTo == "celsius"){
        result = (temperature - 32) * 0.555556;
    }
    else if (temperatureFrom == "fahrenheit" && temperatureTo == "kelvin"){
        result = 0.555556 * (temperature + 459.67);
    }
    else if (temperatureFrom == "fahrenheit" && temperatureTo == "reaumur"){
        result = (temperature - 32) * 0.44444;
    }
    else if (temperatureFrom == "reaumur" && temperatureTo == "celsius"){
        result = temperature / 0.8;
    }
    else if (temperatureFrom == "reaumur" && temperatureTo == "kelvin"){
        result = 1.25 * temperature + 273.15;
    }
    else if (temperatureFrom == "reaumur" && temperatureTo == "fahrenheit"){
        result = temperature / 0.44444 + 32;
    }
    outputTemperature.innerHTML = result;
}
btnTemperature.addEventListener('click', convertTemperature);

function convertLength () {
    const lengthFrom = selectFromLength.value;
    const lengthTo = selectToLength.value;
    let length = Number(inputLength.value);
    let result;
    if (lengthFrom == lengthTo) {
        result = length;
    }
    else if (lengthFrom == "meter" && lengthTo == "inch") {
        result = length / 0.0254;
    }
    else if (lengthFrom == "meter" && lengthTo == "foot") {
        result = 3.2808 * length;
    }
    else if (lengthFrom == "meter" && lengthTo == "yard") {
        result = length / 1.0936;
    }
    else if (lengthFrom == "meter" && lengthTo == "mile") {
        result = 0.00062137 * length;
    }
    else if (lengthFrom == "foot" && lengthTo == "inch") {
        result = length / 0.083;
    }
    else if (lengthFrom == "foot" && lengthTo == "meter") {
        result = length / 2.2808;
    }
    else if (lengthFrom == "foot" && lengthTo == "yard") {
        result = length / 3;
    }
    else if (lengthFrom == "foot" && lengthTo == "mile") {
        result = length * 0.00018939;
    }
    else if (lengthFrom == "inch" && lengthTo == "foot") {
        result = length / 0.083;
    }
    else if (lengthFrom == "inch" && lengthTo == "meter") {
        result = 0.0254 * length;
    }
    else if (lengthFrom == "inch" && lengthTo == "yard") {
        result = length / 36;
    }
    else if (lengthFrom == "inch" && lengthTo == "mile") {
        result = length / 63360; // proveri
    }
    else if (lengthFrom == "yard" && lengthTo == "inch") {
        result = 36 * length;
    }
    else if (lengthFrom == "yard" && lengthTo == "foot") {
        result = 3 * length;
    }
    else if (lengthFrom == "yard" && lengthTo == "meter") {
        result = length / 1.0936;
    }
    else if (lengthFrom == "yard" && lengthTo == "mile") {
        result = length / 1760;
    }
    else if (lengthFrom == "mile" && lengthTo == "inch") {
        result = 63360 * length;
    }
    else if (lengthFrom == "mile" && lengthTo == "foot") {
        result =  length / 0.00018939;
    }
    else if (lengthFrom == "mile" && lengthTo == "meter") {
        result = length / 0.00062137;
    }
    else if (lengthFrom == "mile" && lengthTo == "yard") {
        result = 1760 * length;
    }
    outputLength.innerHTML = result;
}
btnLength.addEventListener('click', convertLength);

function convertPressure () {
    const pressureFrom = selectFromPressure.value;
    const pressureTo = selectToPressure.value;
    let pressure = Number(inputPressure.value);
    let result;
    if (pressureFrom == pressureTo) {
        result = pressure;
    }
    else if (pressureFrom == "pascal" && pressureTo == "atm") {
        result = pressure / 101325;
    }
    else if (pressureFrom == "pascal" && pressureTo == "bar") {
        result = pressure / 100000;
    }
    else if (pressureFrom == "pascal" && pressureTo == "torr") {
        result = pressure / 133.322368;
    }
    else if (pressureFrom == "atm" && pressureTo == "pascal") {
        result = 101325 * pressure;
    }
    else if (pressureFrom == "atm" && pressureTo == "bar") {
        result = pressure / 1.01325;
    }
    else if (pressureFrom == "atm" && pressureTo == "torr") {
        result = 760 * pressure;
    }
    else if (pressureFrom == "bar" && pressureTo == "pascal") {
        result = 100000 * pressure;
    }
    else if (pressureFrom == "bar" && pressureTo == "atm") {
        result = 1.01325 * pressure;
    }
    else if (pressureFrom == "bar" && pressureTo == "torr") {
        result = 750.06 * pressure;
    }
    else if (pressureFrom == "torr" && pressureTo == "pascal") {
        result = 133.322368 * pressure;
    }
    else if (pressureFrom == "torr" && pressureTo == "atm") {
        result = pressure / 760;
    }
    else if (pressureFrom == "torr" && pressureTo == "bar") {
        result = pressure / 750.06;
    }
    outputPressure.innerHTML = result;
}
btnPressure.addEventListener('click', convertPressure);

function convertTime() {
    const timeFrom = selectFromTime.value;
    const timeTo = selectToTime.value;
    let time = Number(inputTime.value);
    let result;
    if (timeFrom == timeTo) {
        result = time;
    }
    else if (timeFrom == "second" && timeTo == "minute"){
        result = time / 60;
    }
    else if (timeFrom == "second" && timeTo == "hour"){
        result = time / 3600;
    }
    else if (timeFrom == "second" && timeTo == "day"){
        result = time / 86400;
    }
    else if (timeFrom == "minute" && timeTo == "second"){
        result = 60 * time;
    }
    else if (timeFrom == "minute" && timeTo == "hour"){
        result = time / 60;
    }
    else if (timeFrom == "minute" && timeTo == "day"){
        result = time / 1440;
    }
    else if (timeFrom == "hour" && timeTo == "second"){
        result = 3600 * time;
    }
    else if (timeFrom == "hour" && timeTo == "minute"){
        result = 60 * time;
    }
    else if (timeFrom == "hour" && timeTo == "day"){
        result = time / 24;
    }
    else if (timeFrom == "day" && timeTo == "second"){
        result = 86400 * time;
    }
    else if (timeFrom == "day" && timeTo == "minute"){
        result = 1440 * time;
    }
    else if (timeFrom == "day" && timeTo == "hour"){
        result = 24 * time;
    }
    outputTime.innerHTML = result;
}
btnTime.addEventListener('click', convertTime);

function convertEnergy () {
    const energyFrom = selectFromEnergy.value;
    const energyTo = selectToEnergy.value;
    let energy = Number(inputEnergy.value);
    let result;
    if (energyFrom == energyTo){
        result =  energy;
    }
    else if (energyFrom == "jules" && energyTo == "cal"){
        console.log(energyTo);
        result = 4.184 * energy;
    }
    else if (energyFrom == "cal" && energyTo == "jules"){
        console.log(energyFrom);
        result =  energy / 4.184;
    }
    outputEnergy.innerHTML = result;
}
btnEnergy.addEventListener('click', convertEnergy);

function convertWeight () {
    const weightFrom = selectFromWeight.value;
    const weightTo = selectToWeight.value;
    let weight = Number(inputWeight.value);
    let result;
    if (weightFrom == weightTo){
        result = weight;
    }
    else if (weightFrom == "kilogram" && weightTo == "pound") {
        result = 2.2046 * weight;
    }
    else if (weightFrom == "kilogram" && weightTo == "ounce") {
        result = 35.274 * weight;
    }
    else if (weightFrom == "kilogram" && weightTo == "tonne") {
        result = weight / 1000;
    }
    else if (weightFrom == "pound" && weightTo == "kilogram") {
        result = weight / 2.2046;
    }
    else if (weightFrom == "pound" && weightTo == "ounce") {
        result = 16 * weight;
    }
    else if (weightFrom == "pound" && weightTo == "tonne") {
        result = weight / 2204.6;
    }
    else if (weightFrom == "ounce" && weightTo == "kilogram") {
        result = weight / 35.274;
    }
    else if (weightFrom == "ounce" && weightTo == "pound") {
        result = weight / 16;
    }
    else if (weightFrom == "ounce" && weightTo == "tonne") {
        result = 0.035274 * weight;
    }
    else if (weightFrom == "tonne" && weightTo == "kilogram") {
        result = 1000 * weight;
    }
    else if (weightFrom == "tonne" && weightTo == "pound") {
        result = 2204.6 * weight;
    }
    else if (weightFrom == "tonne" && weightTo == "ounce") {
        result = weight / 0.035274;
    }
    outputWeight.innerHTML = result;
}
btnWeight.addEventListener('clcik', convertWeight);


// size selector
for (let i = 0; i <= sizeBtn.length; i += 1) {
 function rotate() {
    circle.classList.add('card-bottom__img-circle--rotate');

    setTimeout(() => {
      circle.classList.remove('card-bottom__img-circle--rotate');
    }, 500);

    cardTop[i].classList.add('card-top--active');

    for (let n = 0; n < cardTop.length; n += 1) {
      if (cardTop[n].classList.contains('card-top--active') && n !== i) cardTop[n].classList.remove('card-top--active');
    }
  }

  sizeBtn[i].addEventListener('click', rotate);
}


