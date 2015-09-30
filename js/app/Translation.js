define([], function(){

  var Translation = function () {

    // replacement rules for English-To-Zombie translation, in order of
    // priority; assumes a single letter will be replaced
    this.engToZomRules = [
      {find : ["a", "A"], replace : "hra"},
      {find : ["e", "E"], replace : "rr"},
      {find : ["i", "I"], replace : "rrRr"},
      {find : ["o", "O"], replace : "rrrRr"},
      {find : ["u", "U"], replace : "rrrrRr"},
      {find : ["r"], replace : "rh", special : "word-end"},
      {find : ["r", "R"], replace : "RR"},
      {find : ["g", "G"], replace : "gRGhg"},
      {find : ["z", "Z"], replace : "zRm"}
    ];

    // replacement rules for Zombie-To-English translation, in order of
    // priority; must list rules in order of find length for accurate
    // translation; defaults to lowercase English when capitalization is
    // ambiguous
    this.zomToEngRules = [
      {find : ["rrrrRr", "RrrrRr"], replace : "u"},
      {find : ["rrrRr", "RrrRr"], replace : "o"},
      {find : ["gRGhg", "GRGhg"], replace : "g"},
      {find : ["rrRr", "RrRr"], replace : "i"},
      {find : ["hra", "Hra"], replace : "a"},
      {find : ["zRm", "ZRm"], replace : "z"},
      {find : ["rr", "Rr"], replace : "e"},
      {find : ["RR", "rh", "Rh"], replace : "r"}
    ];
  };


  // function that takes English text and returns translated Zombie
  Translation.prototype.translateEngToZom = function (text) {

    // variable to hold the translated text (now in Zombie)
    var translatedText = "";

    // iterate through the text character by character running translation rules
    for (i = 0; i < text.length; i++) {

      translatedText += this.runEngToZomRules(i, text);
    }

    return translatedText;
  };


  // function that runs English to Zombie  rules on character (provided by index
  // along with the text itself) and returns translation
  Translation.prototype.runEngToZomRules = function (charIndex, text) {

    // given English character and Zombie translation to be returned (these are
    // the same by default until replacement rules kick in)
    var engChar = text[charIndex];
    var translatedChar = engChar;

    // cycle through each replacement rule in order
    replacements:
    for (var k = 0; k < this.engToZomRules.length; k++ ) {

      // cycle through each character in the rule (the find property)
      for (var j = 0; j < this.engToZomRules[k].find.length; j++) {

        // for flagging "special" requirements; true by default if none present
        var special = true;

        // special rule: check if word end; confirm next character present
        if (this.engToZomRules[k].special === "word-end" && text[charIndex + 1]) {

          // check if the next character is a non-letter indicating end of word
          wordEnd = text[charIndex + 1].match(/[^a-zA-Z]/g);

          // set special to false if not word end; otherwise default true
          if (!wordEnd) { special = false; }
        }

        // if English character found in rule and special requirements met (if
        // present), break replacement checking loops
        if (engChar === this.engToZomRules[k].find[j] && special) {

          translatedChar = this.engToZomRules[k].replace;
          break replacements;
        }
      }
    }

    // non-replacement rule: first letter of sentences capitalized
    // check that two preceding characters are present
    if (text[charIndex - 2]) {

      // check if preceding characters mark end of sentence
      var preceding = text[charIndex - 2] + text[charIndex - 1];
      if (preceding === ". " || preceding === "! " || preceding === "? ") {

        // set first character of translation to uppercase
        firstChar = translatedChar.slice(0, 1);
        firstChar = firstChar.toUpperCase();
        translatedChar = firstChar + translatedChar.slice(1);
      }
    }

    return translatedChar;
  }


  // function that takes Zombie text and returns translated English
  Translation.prototype.translateZomToEng = function (text) {

    // variable to hold the translated text (now in English)
    var translatedText = "";

    // iterate through the text character by character running translation rules
    for (i = 0; i < text.length; i++) {

      // add to the translation and move i according to the length of match
      translatedTextAndLength = this.runZomToEngRules(i, text);
      translatedText += translatedTextAndLength[0];
      i += translatedTextAndLength[1] - 1;
    }

    return translatedText;
  }


  // function that runs Zombie to English  rules on character (provided by index
  // along with the text itself) and returns translation and length of Zombie
  // text translated
  Translation.prototype.runZomToEngRules = function (charIndex, text) {

    // given Zombie character and English translation to be returned (these are
    // the same by default until replacement rules kick in)
    var zomChar = text[charIndex];
    var translatedChar = zomChar;

    // length of rule match found (important since strings of multiple Zombie
    // characters get translated down to a single English character); 1 default
    var findLength = 1;

    // cycle through each replacement rule in order
    replacements:
    for (var k = 0; k < this.zomToEngRules.length; k++ ) {

      // cycle through each character in the rule (the find property)
      for (var j = 0; j < this.zomToEngRules[k].find.length; j++) {

        // check that there are enough remaining characters in text for this rule
        var findEndIndex = charIndex + this.zomToEngRules[k].find[j].length - 1;
        if (text[findEndIndex]) {

          // check if the rule matches the same space of text and if so break
          // the replacement loops
          textSlice = text.slice(charIndex, findEndIndex + 1)
          if(this.zomToEngRules[k].find[j] === textSlice) {

            // set find length to pass back to indicate how much was translated
            findLength = this.zomToEngRules[k].find[j].length;
            translatedChar = this.zomToEngRules[k].replace;
            break replacements;
          }
        }
      }
    }

    return [translatedChar, findLength];
  }

  return Translation;
});
