<?php
ini_set("soap.wsdl_cache_enabled","0");

try{

  $sClient = new SoapClient('http://www.webservicex.net/globalweather.asmx?WSDL');

  // Get the necessary parameters from the request
  // Use $sClient to call the operation GetWeather
  // echo the returned info as a JSON object

  echo json_encode(array('Result' => 'Not implemented'));
  
}
catch(SoapFault $e){
  echo json_encode($e);
}
?>
