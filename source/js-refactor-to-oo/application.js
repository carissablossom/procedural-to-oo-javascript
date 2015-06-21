$(document).ready(function() {

var addSomeDice = function() {
    $('.dice').append('<div class="die">0</div>');
  }

var rollTheDice = function() {
  $('.die').each(function(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
  });
};

  $('#roller button.add').on('click', addSomeDice);
  $('#roller button.roll').on('click', rollTheDice);
});
