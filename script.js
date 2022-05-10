$(document).ready(function(){
    $.ajax(
        {
            type: "GET",
            url: "https://api.chucknorris.io/jokes/random",
            dataType: "json",
            success: function (data) {
                $('#h2').text(data.value);
            }
        });
})
$('#boton').click(function () {
    $.ajax(
        {
            type: "GET",
            url: "https://api.chucknorris.io/jokes/random",
            dataType: "json",
            success: function (data) {
                $('#h2').text(data.value);
            }
        });
});
