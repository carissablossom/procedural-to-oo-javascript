$(document).ready(function() {

  var dice = new Dice();
  $('#roller button.add').on('click', function(){
    dice.add();
  });

  $('#roller button.roll').on('click', function() {
    dice.roll();
  });

});

var Dice = function() {

}

Dice.prototype.add = function() {
  console.log("WAT")
  $('.dice').append('<div class="die">0</div>');
}

Dice.prototype.roll = function() {
  $('.die').each(function(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
  });
}