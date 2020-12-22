console.log(cuisineType)
    cuisinesid = "";
function getLocation() {
    if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(getLatLon);
        } else {
            alert("Geolocation not supported by browser.")
        }
    }


function getLatLon(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var latFormat = lat.toFixed(2)
    var lonFormat = lon.toFixed(2)
    var clicker = $("#randomFood")


var displayNameR1 = $("#restaurantName1");
var displayNameR2 = $("#restaurantName2");
var displayNameR3 = $("#restaurantName3");
var displayAddressR1 = $("#address1");
var displayAddressR2 = $("#address2");
var displayAddressR3 = $("#address3");
var displayPhoneR1 = $("#phone1");
var displayPhoneR2 = $("#phone2");
var displayPhoneR3 = $("#phone3");


function getRestaurants(){
    if (cuisineType==="Indian") {
        cuisinesid = 148
    } else if (cuisineType==="Italian") {
        cuisinesid = 55 
    } else {
       cusinesid = 1
    }
    
    console.log(cuisineType)
    console.log(cuisinesid)
    
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
   
    displayNameR1.text(response.restaurants[0].restaurant.name.toString())
    displayNameR2.text(response.restaurants[1].restaurant.name.toString())
    displayNameR3.text(response.restaurants[2].restaurant.name.toString())
    displayAddressR1.text(response.restaurants[0].restaurant.location.address.toString())
    displayAddressR2.text(response.restaurants[1].restaurant.location.address.toString())
    displayAddressR3.text(response.restaurants[2].restaurant.location.address.toString())
    displayPhoneR1.text(response.restaurants[0].restaurant.phone_numbers.toString())
    displayPhoneR2.text(response.restaurants[1].restaurant.phone_numbers.toString())
    displayPhoneR3.text(response.restaurants[2].restaurant.phone_numbers.toString())
    

})
} 

clicker.click(function() {
    getRestaurants();
  });


}

getLocation()






