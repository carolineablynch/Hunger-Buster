var urlToSend = ''
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
var displayLinkR1 = $("#menuLink1");
var displayLinkR2 = $("#menuLink2");
var displayLinkR3 = $("#menuLink3");

var lat = "";
var lon = "";
var latFormat = "";
var lonFormat = "";
var cuisinesid = "";
function getLocation() {
    if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(getLatLon);
        } else {

        }
    }

function getLatLon(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
     latFormat = lat.toFixed(2)
     lonFormat = lon.toFixed(2)

     localStorage.setItem("lat", JSON.stringify(latFormat));
     localStorage.setItem("lon", JSON.stringify(lonFormat));

}

var latLocal = (JSON.parse(localStorage.getItem("lat")))
if (latLocal!=null) {
   var latFormat = latLocal.toString().valueOf() }

var lonLocal = (JSON.parse(localStorage.getItem("lon")))
if (lonLocal!=null) {
   var lonFormat = lonLocal.toString().valueOf() }

var cusineLocalArray = (JSON.parse(localStorage.getItem("cuisineIDsArray")))
if (cusineLocalArray!=null) {
var cuisinesid = cusineLocalArray[cusineLocalArray.length-1]
}




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
   
   
    displayNameR1.text(response.restaurants[0].restaurant.name.toString())
    displayNameR2.text(response.restaurants[1].restaurant.name.toString())
    displayNameR3.text(response.restaurants[2].restaurant.name.toString())
    displayAddressR1.text(response.restaurants[0].restaurant.location.address.toString())
    displayAddressR2.text(response.restaurants[1].restaurant.location.address.toString())
    displayAddressR3.text(response.restaurants[2].restaurant.location.address.toString())
    displayPhoneR1.text(response.restaurants[0].restaurant.phone_numbers.toString())
    displayPhoneR2.text(response.restaurants[1].restaurant.phone_numbers.toString())
    displayPhoneR3.text(response.restaurants[2].restaurant.phone_numbers.toString())
    displayLinkR1.attr("href", (response.restaurants[0].restaurant.menu_url.toString()))
    displayLinkR2.attr("href", (response.restaurants[1].restaurant.menu_url.toString()))
    displayLinkR3.attr("href", (response.restaurants[2].restaurant.menu_url.toString()))
    

})

} 




document.querySelector(".contact-form").addEventListener("submit", sendEmail)

function sendEmail(e,email) {
    e.preventDefault()

    var url = window.location.href;

    Email.send ({
        Host: "smtp.gmail.com",
        Username: 'supreme.pizza.lh@gmail.com',
        Password: "idnovpgixdjxemev",
        To: $('.email').val(),
        From: 'supreme.pizza.lh@gmail.com',
        Subject: `Hunger Busters Sent Your Results`,
        Body: `MESSAGE FROM THE HUNGER BUSTERS <br/>Follow the URL Below to Access your FOOOD!<br/>  ${url}  <br/>`
    })
}


getLocation()


if (lastImageArray!=null) {
    getRestaurants()
    } else {


    }




