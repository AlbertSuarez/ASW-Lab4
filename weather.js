
function showCities () {
   var country = document.getElementById("countryName").value;


   req = new XMLHttpRequest();
   req.open('GET', "http://localhost/waslab04/city_names.php" + "?country=" + country, true);
   
   req.onreadystatechange = function() { 
     if (req.readyState == 4 && req.status == 200) {
       var v = JSON.parse(req.responseText);                
       var ciutats = v['GetCitiesByCountryResult'];
       for (var i=0 ;i < v.length; ++i) {
	 document.getElementById("left").innerHTML=document.getElementById("left").innerHTML + "<a href='javascript:void(0);' id='" + i + "' ciudad='" + v[i].Ciudad + "' onclick=showWeather('" + i + "')>" + v[i].Ciudad + "</a><br>";
       }
       document.getElementById("right").innerHTML =  "&lArr;"+ " Select a city from the left menu";
    }
  };
  
  req.send();
   
};


function showWeather (/*your parameters*/) {

  // Your implementation
   
}

window.onload = showCities();
