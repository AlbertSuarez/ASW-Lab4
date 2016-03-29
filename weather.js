
function showCities () {
   var country = document.getElementById("countryName").value;

   req = new XMLHttpRequest();
   req.open('GET', "http://localhost/waslab04/city_names.php" + "?country=" + country, true);
   
   req.onreadystatechange = function() { 
     if (req.readyState == 4 && req.status == 200) {
       var v = JSON.parse(req.responseText);                
       var ciutats = v['GetCitiesByCountryResult'];
       for (var i = 0 ;i < v.length; ++i) {
	 document.getElementById("left").innerHTML = document.getElementById("left").innerHTML + "<a href='javascript:void(0);' id='" + i + "' ciudad='" + v[i].Ciudad + "' onclick=showWeather('" + i + "')>" + v[i].Ciudad + "</a><br>";
       }
       document.getElementById("right").innerHTML =  "&lArr;"+ " Select a city from the left menu";
    }
  };
  
  req.send();
   
};


function showWeather (cityName) {

  var country = document.getElementById("countryName").value;
  var city = document.getElementById(cityName).getAttribute("ciudad");
         
  req = new XMLHttpRequest();
  var uriAUX = "http://localhost/waslab04/city_info.php" + "?country=" + country + "&city=" + encodeURI(city);
  req.open('GET', uriAUX, true);
  
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
      if (req.responseText=="NoData") alert ("No hi ha informacio del temps per "+city);
      else {
	
	var v = JSON.parse(req.responseText);
 
	document.getElementById("right").innerHTML =    "<table style = 'font-family: Helvetica'>" + "<tr>" + "<td>" + 
							"Location:" + "</td>" + "<td>" + v.location + "</td>" + "</tr>"
							+ "<tr>" + "<td>" + "Time:" + "</td>" + "<td>" + v.time + "</td>" + "</tr>"
							+ "<tr>" + "<td>" + "Wind: " + "</td>"+ "<td>" + v.wind + "</td>" + "</tr>"
							+ "<tr>" + "<td>" + "Visibility: " + "</td>" + "<td>" + v.visibility + "</td>" + "</tr>"
							+ "<tr>" + "<td>" + "SkyConditions: " + "</td>"+ "<td>" + v.skyconditions + "</td>" + "</tr>"
							+ "<tr>" + "<td>" + "Temperature: " + "</td>"+ "<td>" + v.temperature+ "</td>" + "</tr>"
							+ "<tr>" + "<td>" + "DewPoint: " + "</td>" + "<td>" + v.dewpoint+ "</td>" + "</tr>"
							+ "<tr>" + "<td>" + "RelativeHumidity: " + "</td>" + "<td>" + v.relativehumidity + "</td>" + "</tr>"
							+ "<tr>" + "<td>" + "Pressure: " + "</td>" + "<td>" + v.pressure + "</td>" + "</tr>"
							+ "<tr>" + "<td>" + "Status: " + "</td>" + "<td>" + v.status + "</td>" + "</tr>"
							+ "</table>";

      }
    }
  };

  req.send();

}

window.onload = showCities();
