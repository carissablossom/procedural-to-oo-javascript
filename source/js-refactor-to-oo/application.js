$(document).ready(function() {

function addSomeDice() {
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>');
  }

function rollTheDice() {
  $('.die').each(function(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
  });
};

  $('#roller button.add').on('click', addSomeDice);
  $('#roller button.roll').on('click', rollTheDice);
});
