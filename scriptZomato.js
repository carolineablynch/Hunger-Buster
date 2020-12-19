cuisineType = ""
function getLocation() {
    if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(getLatLon);
        } else {
            alert("Geolocation not supported by browser.");
        }
    }


function getLatLon(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var latFormat = lat.toFixed(2)
    var lonFormat = lon.toFixed(2)
    var clicker = $("#randomFood")

//This is currently set to be fixed on Italian - see comment below
var cuisinesid = 55;

//we need to figure out how to pull in these variables from the other function
// if (cuisineType==="Italian"){
//   var cuisinesid=55 
// } else if (cuisineType==="Indian"){ 
//   var cuisinesid=99 
// } else {
//     var cuisinesid=99    
//     }

var displayR1 = $("#restaurantOne");
var displayR2 = $("#restaurantTwo");
var displayR3 = $("#restaurantThree");
var displayR4 = $("#restaurantFour");
var displayR5 = $("#restaurantFive");


function getRestaurants(){
    var urlString = "https://developers.zomato.com/api/v2.1/search?lat=" + latFormat + "&lon=" + lonFormat + "&cuisines=" + cuisinesid
    var apiUserKey = "50bc727ca203f52062f79dc80e81905e";

    $.ajax({
        url: urlString,
        method: "GET",
        beforeSend: function (request) {
            request.setRequestHeader("user-key", apiUserKey);
        },
    })
    .then(function(response){
    console.log(response)
    console.log(cuisineType)
    //we need to format so that the three elements pulled in from API object have better spacing (maybe make a line break or new div for link)
    displayR1.text((response.restaurants[0].restaurant.name.toString()) + (response.restaurants[0].restaurant.location.address.toString()) + (response.restaurants[0].restaurant.menu_url.toString()))
    displayR2.text((response.restaurants[1].restaurant.name.toString()) + (response.restaurants[1].restaurant.location.address.toString()) + (response.restaurants[1].restaurant.menu_url.toString()))
    displayR3.text((response.restaurants[2].restaurant.name.toString()) + (response.restaurants[2].restaurant.location.address.toString()) + (response.restaurants[2].restaurant.menu_url.toString()))
    displayR4.text((response.restaurants[3].restaurant.name.toString()) + (response.restaurants[3].restaurant.location.address.toString()) + (response.restaurants[3].restaurant.menu_url.toString()))
    displayR5.text((response.restaurants[4].restaurant.name.toString()) + (response.restaurants[4].restaurant.location.address.toString()) + (response.restaurants[4].restaurant.menu_url.toString()))
})
} 

clicker.click(function() {
    getRestaurants();
  });


}

getLocation()






