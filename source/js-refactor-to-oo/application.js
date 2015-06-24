(function(){

  $(document).ready(function() {
    // Controller
    var table = new PlaySurface;
    addDieButtonListener(table);
    rollDieButtonListener(table);

  });

// View
  var addDieButtonListener = function(surface){
    $('#roller button.add').on('click', function() {
      createDie(surface);
    });
  };

  var rollDieButtonListener = function(surface) {
    $('#roller button.roll').on('click', function() {
      $('.die').each(function(index, die){
         $(die).text(surface.rollAll()[index]);
      });
    });
  };

  var createDie = function(surface) {
    surface.dice.push(new Die);
    appendDieViewToPage();
  }
  var appendDieViewToPage = function(){
    return $('.dice').append('<div class="die">0</div>')
  }


// Model
  PlaySurface = function() {
    this.dice = []
  }

  PlaySurface.prototype.rollAll = function(){
    var result = []
    $.each(this.dice, function(index, die){
      result.push(die.roll());
    });
    return result
  }

  Die = function(sides) {
    this.sides = sides || 6
  };

  Die.prototype.roll = function(){
    return randomNumber(this.sides);
  }

  var randomNumber = function(number){
    return Math.floor((Math.random()*number)+1);
  }


  // Driver Code shit
  // var regDie = new Die;
  // var jumboDie = new Die(20);
  // var blueDie = new Die(4);

  // var table = new PlaySurface;

  // table.dice.push(regDie);
  // table.dice.push(jumboDie);
  // table.dice.push(blueDie);
  // table.rollAll();

})();
