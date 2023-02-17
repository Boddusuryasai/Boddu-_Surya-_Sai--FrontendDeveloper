<?php
// to Bypass CORS error
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET");

$url = "https://api.spacexdata.com/v3/capsules";
/**
 * Get all Capsules from spacex API.
 */
$response = file_get_contents($url);

// Checking the valid response
if($response != false){
    echo json_encode($response); // sending the response 
}
?>

 