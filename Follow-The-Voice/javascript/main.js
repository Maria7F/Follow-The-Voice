$(document).ready(function() {

    var input_player_name = $("player-name");


    $(add).click(function(e) {
        e.preventDefault();
        $("#player-name-form").append('<p id="players">Player name: <input id="player-name"></p>')

    });

    $("#delete").on("click", function() {
        $("#players").remove();
    });


});