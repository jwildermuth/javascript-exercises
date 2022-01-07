// script.js

const valF = document.querySelector('#fahr');
valF.addEventListener('input', fToC);
const valC = document.querySelector('#cel');
valC.addEventListener('input', cToF);

// clear any input on page load
window.onload = function() {
  valF.value = null;
  valC.value = null;
}


function fToC() {
  let tempF = Number(valF.value);
  if (valF.value == '') {
    tempC = null;
  } else if (isNaN(tempF)) {
    tempC = 'Error';
  } else {
    tempC = ((tempF - 32) / 9) * 5;
  }
  valC.value = tempC;
}


function cToF() {
  let tempC = Number(valC.value);
  if (valC.value == '') {
    tempF = null;
  } else if (isNaN(tempF)) {
    tempF = 'Error';
  } else {
    tempF = ((tempC * 9) / 5) + 32;
  }
  valF.value = tempF;
}
