//Create GLOBAL variable below here on line 2

var global_result;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                global_result = result;
                console.log('AJAX Success function called, with the following result:', result);

                var firstMovie;
                firstMovie = global_result.feed.entry[0];
                var firstMovieImage = global_result.feed.entry[0]['im:image'][2].label;
                var movieImage = global_result.feed.entry;
                movieImage[0]['im:image'][2].label;

                 //Feature Set 3 - Adding the Images
                //Feature Set 4 -Title the Images
                for (i = 0; i < movieImage.length; i++ ) {
                    var thirdImage = $('<img>').attr('src',movieImage[i]['im:image'][2].label);
                    var movieTitle = $('<p>').html(movieImage[i].title.label);
                    $('#main').append(movieTitle).append(thirdImage);

                    console.log(movieImage[i].title.label)

                }

            }
        });
        console.log('End of click function');
    });
});