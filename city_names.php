<?php
ini_set("soap.wsdl_cache_enabled","0");

try{

  $sClient = new SoapClient('http://www.webservicex.net/globalweather.asmx?WSDL');

  // Get the necessary parameters from the request
  // Use $sClient to call the operation GetCitiesByCountry
  // echo the returned info as a JSON array of strings (city names)
    
  $req = $_GET['country'];

  $entrada = new stdClass();
  $entrada->CountryName = $req;

  $sortida = new stdClass();
  $sortida->GetCitiesByCountryResult;
  
  $sortida = $sClient->GetCitiesByCountry($entrada);

  $newphrase = str_replace($req,"\", \"", $sortida->GetCitiesByCountryResult);
  $newphrase = str_replace(array("\n", "\r"),"", $newphrase);
  $rest = substr($newphrase,50);

  echo "[\"" . $rest . "\"]";	
  

}
catch(SoapFault $e){
  header(':', true, 500);
  echo json_encode($e);
}

