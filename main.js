$(document).ready(function () {
    $("#change").on('click', function () {
        var cd = parseInt($("#cd").val(), 10);
        var num = cd;
        var text = $("#text").val();
        var textSplit = text.split("\n");
        var newText = "";
        for (var i = 0; i < textSplit.length; i++) {
            if (textSplit[i] == "" || textSplit[i][0] == "%" || textSplit[i][0] == "O"){
                newText += (textSplit[i] + '\n');
                continue;
            }
            if (textSplit[i][0] == "N") {
                while (textSplit[i][0] != " ") {
                    var l = textSplit[i].length;
                    textSplit[i] = textSplit[i].substring(1, l);
                }
            } else if (textSplit[i][0] == " ") {
                while (textSplit[i][0] == " ") {
                    var l = textSplit[i].length;
                    textSplit[i] = textSplit[i].substring(1, l);
                }
                textSplit[i] = "  " + textSplit[i];
            } else {
                textSplit[i] = "  " + textSplit[i];
            }
            textSplit[i] = 'N' + ('0000' + num).slice(-4) + textSplit[i];
            newText += (textSplit[i] + '\n');
            num+=cd;
        }
        $("#text").val(newText);
    });


});
