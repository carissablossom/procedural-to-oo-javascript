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

  PlaySurface = function() {
    this.dice = []
  }

  var table = new PlaySurface;
  var garageFloor = new PlaySurface;

  Die = function(sides) {
    this.sides = sides || 6
  };

  Die.prototype.roll = function(){
    console.log(randomNumber(this.sides));
  }

  var rollAll = function(where){
    $.each(where.dice, function(index, die){
      return die.roll();
    });
  }

  var randomNumber = function(number){
    return Math.floor((Math.random()*number)+1);
  }

  var regDie = new Die;
  var jumboDie = new Die(20);
  var blueDie = new Die(4);

  table.dice.push(regDie);
  table.dice.push(jumboDie);
  table.dice.push(blueDie);

  garageFloor.dice.push(regDie);
  garageFloor.dice.push(jumboDie);
  garageFloor.dice.push(blueDie);


  rollAll(garageFloor);
  rollAll(table);


})();
