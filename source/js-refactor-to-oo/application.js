$(document).ready(function() {

  var dice = new Dice();
  dice.add();
  dice.roll();
  
});

var Dice = function() {

}

Dice.prototype.add = function() {
  
  $('#roller button.add').on('click', function() {
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>');
  });

}

Dice.prototype.roll = function() {
  
  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
  });

}