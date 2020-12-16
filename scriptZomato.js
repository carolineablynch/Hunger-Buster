var clicker = $("#runapi")
var apiUserKey = "50bc727ca203f52062f79dc80e81905e";
var lat = 40.73;
var lon = -73.99;
var cuisinesid = 55;

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