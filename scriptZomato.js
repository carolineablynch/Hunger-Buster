//get geolocation

function getLocation() {
    if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(getLatLon);
console.log("DO YOU WORK")
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }


function getLatLon(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log("DO YOU WORK 2.0")
    alert("lat:" + lat + " lng:" + lon);
}

getLocation()
// Zomato API
var clicker = $("#runapi")
var apiUserKey = "50bc727ca203f52062f79dc80e81905e";
var lat = 40.73;
var lon = -73.99;
var cuisinesid = 55;

// var getLat = position.coords.latitude;
// var getLon = position.coords.longitude;

var displayR1 = "#resturantOne";
var displayR2 = "#resturantTwo";
var displayR3 = "#resturantThree";
var displayR4 = "#resturantFour";
var displayR5 = "#resturantFive";


function getRestaurants(){
    var urlString = "https://developers.zomato.com/api/v2.1/search?lat=" + lat + "&lon=" + lon + "&cuisines=" + cuisinesid
    $.ajax({
        url: urlString,
        method: "GET",
        beforeSend: function (request) {
            request.setRequestHeader("user-key", apiUserKey);
        },
    })
    .then(function(response){
    console.log(response)
    
    })
} 

clicker.click(function() {
    getRestaurants();
  });




