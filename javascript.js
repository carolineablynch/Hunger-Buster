var cuisineType = ""
var lastImageArray = (JSON.parse(localStorage.getItem("imageURLArray")))
var lastImageDisplay = lastImageArray[lastImageArray.length-1]
$("#photoSize").attr("src", lastImageDisplay)


$("#randomFood").on("click", function() {

    var queryURL = "https://foodish-api.herokuapp.com/api/";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(response)
        var imageUrl = response.image;
        var foodImg = $("<img>");
        
        foodImg.attr("src", imageUrl);
        foodImg.attr("alt", "food image");
        foodImg.attr("class", "ourImg");
        foodImg.attr("id", "photoSize")

        $("#foodphoto1").empty();
        $("#foodphoto1").append(foodImg);

        if (imageUrl.toString().includes("pizza", 0)) {
             cuisineType = "Italian"
        } else if (imageUrl.toString().includes("burger", 0)) {
             cuisineType = "American"
        } else {
             cuisineType = "Indian"
        }

        if (cuisineType==="Indian") {
            cuisinesid = 148
        } else if (cuisineType==="Italian") {
            cuisinesid = 55 
        } else if (cuisineType==="American") {
           cuisinesid = 168
        }
        
       //images to local storage
        var imagesLocalArray = JSON.parse(localStorage.getItem("imageURLArray")) || [];
        imagesLocalArray.push(imageUrl);
        localStorage.setItem("imageURLArray", JSON.stringify(imagesLocalArray));

        //cuisineID to local storage
        var cuisineIDsArray = JSON.parse(localStorage.getItem("cuisineIDsArray")) || [];
        cuisineIDsArray.push(cuisinesid);
        localStorage.setItem("cuisineIDsArray", JSON.stringify(cuisineIDsArray));
        

        getRestaurants()


    });
});

var lastCuisineIDArray = (JSON.parse(localStorage.getItem("cArray")))
var lastImageDisplay = lastImageArray[lastImageArray.length-1]


