define(['jquery', 'Translation'], function ($, Translation){

  // instantiate translation object
  var translation = new Translation();


  // initialize keyup event handler for English-to-Zombie input
  $("#engToZomInput").on("keyup", function () {

    // get current value of input field, translate, and output in Zombie
    var text = $("#engToZomInput").val();
    var translatedText = translation.translateEngToZom(text);
    $("#engToZomOutput").text(translatedText);
  });


  // initialize keyup event handler for Zombie-to-English input
  $("#zomToEngInput").on("keyup", function () {

    // get current value of input field, translate, and output in English
    var text = $("#zomToEngInput").val();
    var translatedText = translation.translateZomToEng(text);
    $("#zomToEngOutput").text(translatedText);
  });
});
