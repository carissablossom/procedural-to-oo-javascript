$(document).ready(function() {

  var bindRoller = function(){
    $('#roller button.add').on('click', createDie)
  };

  var createDie = function(){
    console.log("WAT -- ROOLLING DICE")
    $('.dice').append('<div class="die">0</div>');
  };


  var rollDice = function(){
    $('.die').each(randomNumber)
  };

  var randomNumber = function (k, die){
    var value = Math.floor((Math.random()*6)+1);
     $(die).text(value);
  }

  var bindNewDice = function(){
    $('#roller button.roll').on('click', rollDice)
  }


  bindNewDice();

  bindRoller();


});
