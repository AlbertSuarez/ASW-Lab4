<?php
 
ini_set("soap.wsdl_cache_enabled","0");
$server = new SoapServer("http://localhost:8080/wslab04/WSLabService.wsdl");

function FahrenheitToCelsius($fdegree){
    $cresult = ($fdegree - 32) * (5/9);
    return array("cresult"=> $cresult, "timeStamp"=> date('c', time()) );
}

function CurrencyConverter($from_Currency,$to_Currency,$amount) {
	$amount = urlencode($amount);
	$from_Currency = urlencode($from_Currency);
	$to_Currency = urlencode($to_Currency);
	$url = "http://www.google.com/ig/calculator?hl=en&q=$amount$from_Currency=?$to_Currency";
	$rawdata = file_get_contents($url);
	$data = explode('"', $rawdata);
	$error = $data['5'];
	if (!$error) {
		$data = explode(' ', $data['3']);
		$var = $data['0'];
		return round($var,3);
	}
	else return new SoapFault("Server", "Error message: ".$error);
};

// Tasks #4 & #5: Implement here the GetHomeTowns function and add it to $server

$server->addFunction("FahrenheitToCelsius");

// Task #3 -> Uncomment the following line:
// $server->addFunction("CurrencyConverter");

$server->handle();
 
?>
