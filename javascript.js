var cuisineType = ""
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

        $("#foodphoto1").empty();
        $("#foodphoto1").append(foodImg);

        if (imageUrl.toString().includes("pizza", 0)) {
             cuisineType = "Italian"
        } else if (imageUrl.toString().includes("burger", 0)) {
             cuisineType = "American"
        } else {
             cuisineType = "Indian"
        }
    });
});




