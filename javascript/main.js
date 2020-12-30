$(document).ready(function() {
    // for the players page ======================
    var input_player_name = $("player-name");
    $("#add").click(function(e) {
        e.preventDefault();
        $("#player-name-form").append('<p id="players">Player name: <input id="player-name"></p>')

    });

    $("#delete").on("click", function() {
        $("#players").remove();
    });

    //============================================
    // for the start-game-page ======================


    $("#players-play-button").on("click", function() {
        var name = $("#player-name").val();
        var names = new Array(name);
        console.log(names);
    });


    $("#test").on("click", function() {
        var playlist = ['/audio/1.mp3', '/audio/2.mp3', '/audio/3.mp3', '/audio/4.mp3'];
        var words = ['جمل ماشي', 'عالمماشي', 'جيت اضمه', 'خطف شاشي'];
        //reference --> https://stackoverflow.com/questions/36315320/jquery-animate-changing-text-infinite-loop
        var index = 0;
        window.interval = setInterval(function() {
            $("#game-words").animate({
                opacity: 0
            }, function() {
                if (words.length > index) {
                    var x = Math.floor(Math.random() * 4);
                    $(this).text(words[index]).animate({ opacity: 1 })
                    $("#audio").attr("src", playlist[x]);
                    var audio = new Audio(playlist[x]).play();
                    x++;
                    index++;
                } else
                    index = 0;
            });
        }, 2000);
    });
    $('#pause').click(function() {
        clearInterval(window.interval);
        alert("did someone lose?")
    });

});

// var x = Math.floor(Math.random() * 4);
// var y = Math.floor(Math.random() * 4);
//$('#game-words').text(words[y]);
// $("#audio").attr("src", playlist[x]);
// var audio = new Audio(playlist[x]).play();