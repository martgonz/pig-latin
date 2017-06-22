var pigLatin = function (trans) {
 function isVowelFirstLetter() {
  //  var string = trans.toString();
  //  string = string.toLowerCase();
   var vowels = ["a", "e", "i", "o", "u"];
   for (i = 0; i < vowels.length; i++) {
     if (vowels[i] === trans[0]) {
     return true;
   }
   }

 return false;
}
if (isVowelFirstLetter()) {
  trans += "way";
}
else {
  var consonants ="";
  while (isVowelFirstLetter() === false) {
    consonants += trans.slice(0,1);
    trans = trans.slice(1);
  }
  trans += consonants + "ay";
}
return trans;
}





$(document).ready(function() {
  $("form#trans").submit(function(event) {
    event.preventDefault();
    var trans = $("input#phrase").val();
    var result = pigLatin(trans)

      $("#output").text(result);

  });
});
