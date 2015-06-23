var diceApp = {};

diceApp.View = function(options) {
  this.element = options.element || $('#roller');
  this.addButton = options.addButton || $('button.add');
  this.rollButton = options.rollButton || $('button.roll');
  this.dieContainer = options.dieContainer || $('.dice');
  this.dieClass = options.dieClass || 'die';
};

diceApp.View.prototype.drawDice = function() {
  this.dieContainer.append('<div class="' + this.dieClass + '">0</div>');
};

diceApp.View.prototype.renderRollResult = function(dice) {
  this.element.find('.' + this.dieClass).each(function(k, die) {
    $(die).text(dice.roll());
  });
};

diceApp.Die = function(sides) {
  this.sides = sides || 6;
};

diceApp.Die.prototype.roll = function() {
  return Math.floor((Math.random()*this.sides)+1);
};

diceApp.Controller = function(options) {
  this.view = options.view;
  this.dice = options.model;
};

diceApp.Controller.prototype.addDice = function() {
  var controller = this;

  controller.view.addButton.on('click', function() {
    controller.view.drawDice();
  });
};

diceApp.Controller.prototype.rollDice = function() {
  var controller = this;

  controller.view.rollButton.on('click', function() {
    controller.view.renderRollResult(controller.dice);
  });
};

diceApp.Controller.prototype.initEvents = function() {
  this.addDice();
  this.rollDice();
};

$(document).ready(function() {
  app = new diceApp.Controller({
    view: new diceApp.View({}),
    model: new diceApp.Die(6)
  }).initEvents();
});
