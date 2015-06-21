
$(document).ready(function() {

  test.hello();
  controller.initializeListeners();
  // var addDie = function(){
  //   $('.dice').append('<div class="die">0</div>');
  // }

  // var rollDie = function(k, die) {
  //   var value = Math.floor((Math.random()*6)+1);
  //   $(die).text(value);
  // }

  // var rollAllDie = function(){
  //   $('.die').each(rollDie);
  // }

  // As soon as JS runs, it will execute controller.addDie() w/o the event
  // $('#roller button.add').on('click', controller.addDie());

  // $('#roller button.add').on('click', controller.addDie);

  // here we lose context at button.roll for the this in rollAllDie
  // use the bind keyword if you want to specify what the value of this will be once it gets into the rollAllDie function
  // $('#roller button.roll').on('click', controller.rollAllDie.bind(controller));

});

// Use object literal first
var test = {
  hello: function(){
    console.log("hello");
  },
};

// Move all functions into controller object - Abstract it all away
var controller = {

  initializeListeners: function(){
    $('#roller button.add').on('click', this.addDie);
    $('#roller button.roll').on('click', this.rollAllDie.bind(controller));
    $('body').on('click', this.welcome);
  },

  welcome: function(){
    console.log("Welcome");
  },

  addDie: function(){
    $('.dice').append('<div class="die">0</div>');
  },

  rollDie: function(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
  },

  rollAllDie: function(){
    $('.die').each(this.rollDie); // use this. not controller.rollDie
    // typically, (but not here) in jQuery, this becomes the context of element clicked
    // (typically) .each on the jQuery object 'die', this becomes the HTML element that was clicked
  }
}
