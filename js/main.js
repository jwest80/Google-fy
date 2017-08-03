
$( document ).ready(function() {
    
    var Googlefy = function (text) {
        var colors = ['#4885ed','#db3236','#f4c20d','#4885ed','#3cba54','#db3236'];
        var container = $('<span class="googlefy"></span>');
        for (var i = 0, len = text.length; i < len; i++) {
            color = colors[i % 6];
            $(container).append("<span style='color:" + color + "'>" + text[i] + "</span>");
        }
        return container;
    }

    $("#googlefyForm").submit(function () {
        event.preventDefault();
        let text = $("#myString").val();
        $("#myString").val("");
        var elem = Googlefy(text);
        $('.googlefy').replaceWith(elem);
    });

    $(".googlefy").each(function () {
        var text = $(this).text();
        $(this).text("");
        $(this).append(Googlefy(text));
    });


});