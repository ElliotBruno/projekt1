// Hämta referenser till knappen och div-elementet
var button = document.getElementById('myButton');
var div = document.getElementById('myDiv');


// Skapa en eventhanterare för klickhändelsen
function handleClick() {
  // Ändra texten i div-elementet
  div.textContent = 'Klickhändelse inträffade!';
  // Ändra bakgrundsfärgen på div-elementet
  div.style.backgroundColor = 'red';
}


// Lägg till eventhanteraren på knappen
button.addEventListener('click', handleClick);
