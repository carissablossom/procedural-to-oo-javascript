// THE MODEL as Constructor

function Die() {
  this.sides = 6;
  this.currentValue = 0;

  this.roll = function(){
    this.currentValue = Math.floor((Math.random()*this.sides)+1);
  }
};

function DiceCollection(){

  this.dice = [];
  this.rollAllDice = function(){
    for(var i = 0; i < this.dice.length; i++){
      this.dice[i].roll();
    }
  }
  this.addDie = function(){
    this.dice[this.dice.length] = new Die();
  }
}

// Controller: make a new empty die collection
// Put the controller in a D.R because you need activate and bind events
$(document).ready(function() {

  var dc = new DiceCollection();
  // listen for the addDice button click
  var view = new View();
  $("button.add").on("click", function(){
    dc.addDie();
    view.addDie();
  });
  $("button.roll").on("click", function(){
    dc.rollAllDice();
    var diceVals = [];
    for(var i=0; i < dc.dice.length; i++){
      diceVals[i] = dc.dice[i].currentValue;
    }
    view.updateDiceValues(diceVals); // pass in an array of values instead of array of dice objects
    // why? because we're coupling the model and the view, if you ever change anything about the model
    // you have to change everything in the view.
  });
});

// View :
function View(){
  // add a die
  this.addDie = function(){
    $(".dice").append('<div class="die">0</div>');
  }
  // change the value on all di in the collection
  this.updateDiceValues = function(dice){
    // iterate over the divs nested in .dice
    $(".die").each(function(index, value){ // this is a callback
      $(value).html(this[index]);
    }.bind(dice)) // binding the meaning of this inside the {} to whatever is passed in as (dice)
  }
}

