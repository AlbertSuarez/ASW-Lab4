<?php
ini_set("soap.wsdl_cache_enabled","0");

try{

  $sClient = new SoapClient('http://www.webservicex.net/globalweather.asmx?WSDL');

  // Get the necessary parameters from the request
  // Use $sClient to call the operation GetWeather
  // echo the returned info as a JSON object


  $country = $_GET['country'];
  $city = $_GET['city'];

  $entrada = new stdClass();
  $entrada->CityName = $city;
  $entrada->CountryName = $country;

  $sortida = new stdClass();
  $sortida->GetWeatherResult;
  
  $sortida = $sClient->GetWeather($entrada);

  $result = "Data Not Found";
  if(strcmp($sortida->GetWeatherResult, $result) !== 0) $result = json_encode(array($sortida->GetWeatherResult));

  echo $result;

}
catch(SoapFault $e){
  header(':', true, 500);
  echo json_encode($e);
}
?>
