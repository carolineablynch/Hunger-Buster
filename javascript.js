
$("button").on("click", function() {

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

        $("#food_result").empty();
        $("#food_result").append(foodImg);


    });
});


