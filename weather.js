
function showCities () {
   var country = document.getElementById("countryName").value;

   // Replace the two lines below with your implementation
   var mock_text = "You should show a list of clickable cities of " + country;
   document.getElementById("left").innerHTML = mock_text;
};


function showWeather (/*your parameters*/) {

  // Your implementation
   
}

window.onload = showCities();
