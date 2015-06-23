(function(){

  $(document).ready(function() {
    addDieButtonListener();
    rollDieButtonListener();
  });

  var addDieButtonListener = function(){
    $('#roller button.add').on('click', function() {
      appendDie();
    });
  };

  var rollDieButtonListener = function() {
    $('#roller button.roll').on('click', function() {
      $('.die').each(function(k, die) {
        $(die).text(rollDie);
      });
    });
  };

  var appendDie = function(){
    return $('.dice').append('<div class="die">0</div>')
  }

  var rollDie = function(){
    return Math.floor((Math.random()*6)+1);
  };

// OO JS STYLE

  var Table = {
    dice: []
  }

  Die = function(sides) {
    this.sides = sides || 6
  };

  Die.prototype.roll = function(){
    return Math.floor((Math.random()*this.sides)+1);
  }

  var rollAll = function(){
    $.each(Table.dice, function(index, die){
      console.log(die.roll());
    });
  }

  var regDie = new Die;
  var jumboDie = new Die(20);
  var blueDie = new Die(3);

  Table.dice.push(regDie);
  Table.dice.push(jumboDie);
  Table.dice.push(blueDie);

  rollAll();


})();
