var diceApp = {};

diceApp.View = function(selector) {
  this.element = selector || $('#roller');
  this.addButton = this.element.find('button.add');
  this.rollButton = this.element.find('button.roll');
};

diceApp.Die = function(sides) {
  this.sides = sides || 6;
};

diceApp.Die.prototype.roll = function() {
  return Math.floor((Math.random()*this.sides)+1);
};

diceApp.Controller = function(options) {
  this.view = options.view;
  this.die = options.model;
};

diceApp.Controller.prototype.addDice = function(selector) {
  var controller = this;
  var diceContainer = selector;

  controller.view.addButton.on('click', function() {
    diceContainer.append('<div class="die">0</div>');
  });
};

diceApp.Controller.prototype.rollDice = function() {
  var controller = this;

  controller.view.rollButton.on('click', function() {
    controller.view.element.find('.die').each(function(k, die) {
      $(die).text(controller.die.roll());
    });
  });
};


$(document).ready(function() {
  app = new diceApp.Controller({
    view: new diceApp.View(),
    model: new diceApp.Die(6)
  });

  app.addDice($('.dice'));
  app.rollDice();
});
