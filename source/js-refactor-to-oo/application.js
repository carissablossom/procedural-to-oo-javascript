$(document).ready(function() {

  // var bindRoller = function(){
  //   $('#roller button.add').on('click', createDie)
  // };

  // var createDie = function(){
  //   console.log("WAT -- ROOLLING DICE")
  //   $('.dice').append('<div class="die">0</div>');
  // };


  // var rollDice = function(){
  //   $('.die').each(randomNumber)
  // };

  // var randomNumber = function (k, die){
  //   var value = Math.floor((Math.random()*6)+1);
  //    $(die).text(value);
  // }

  // var bindNewDice = function(){
  //   $('#roller button.roll').on('click', rollDice)
  // }



//view

  var Die = function(){
    this.number = 8;
  };

  var Game = function(){
    this.array = [];
  }

  Game.prototype.newDie = function (){
    die = new Die;
    game.array.push(die);
    appendDie(die);
  };

  Game.prototype.rollDice = function(){
    for(i=0; i < game.array.length; i++){
      console.log("rolling dice")
      die = game.array[i]
      die.renderRoll(die, Math.floor((Math.random()*6)+1));
    };
  };

  var appendDie = function(die){
    $('.dice').append('<div class="die">'+die.number+'</div>');
  };

  Die.prototype.renderRoll = function (die, value) {
     die.number = 1;
  };

  var bindRoller = function(game){
    $('#roller button.roll').on('click', game.rollDice)
  };

  var bindNewDice = function(game){
    $('#roller button.add').on('click', game.newDie)
  };

  Game.prototype.play = function(){
    game: new Game;
    bindNewDice(this);
    bindRoller(this);
  };
//controller
  game = new Game;
  game.play()

});
