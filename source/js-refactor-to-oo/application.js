$(document).ready(function() {
  controller = new Controller;
  controller.startListeners();
});

//Model
var Dice = function() {
  this.collection = [];
};

Dice.prototype.addDie = function() {
  this.collection.push(new Die);
};

Dice.prototype.rollAllDie = function() {
  var a = this.collection
  for (var i= 0; i<a.length;i++){
    a[i].roll();
  };
};

var Die = function() {
  this.value = 0;
};

Die.prototype.roll = function() {
  this.value = Math.floor((Math.random()*6)+1);
  return this.value;
};

//View
var View = function(){};

View.prototype.drawNewDie = function(dice){
  var newDie = '<div class="die" id="'+(dice.collection.length-1)+'">0</div>'
  $('.dice').append(newDie);
};

View.prototype.updateDie = function(dice){
  $('.die').each(function(k,die) {
    var object = dice.collection[die["id"]]
    $(die).text(object.value);
  });
};


//Controller
var Controller = function(){
  dice = new Dice;
  view = new View;
};

Controller.prototype.startListeners = function(){
  this.addListener();
  this.rollListener();
};

Controller.prototype.addListener = function(){
  $('#roller button.add').on('click',function() {
    dice.addDie();
    view.drawNewDie(dice);
  });
};

Controller.prototype.rollListener = function(){
  $('#roller button.roll').on('click',function() {
    dice.rollAllDie();
    view.updateDie(dice);
  });
};
