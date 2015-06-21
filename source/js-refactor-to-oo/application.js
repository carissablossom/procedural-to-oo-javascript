// REFACTORING CODE


// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     $('.dice').append('<div class="die">0</div>');
//   });

//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     });
//   });
// });

// RELEASE 0
// Provide good names for all anonymous functions.
// Move the anonymous functions to objects.
// Each callback or event handler is only 1 or 2 lines
// Create a clear separation of concerns.

// $(document).ready(function() {

//   test.hello();
//   controller.initializeListeners();
//   // var addDie = function(){
//   //   $('.dice').append('<div class="die">0</div>');
//   // }

//   // var rollDie = function(k, die) {
//   //   var value = Math.floor((Math.random()*6)+1);
//   //   $(die).text(value);
//   // }

//   // var rollAllDie = function(){
//   //   $('.die').each(rollDie);
//   // }

//   // As soon as JS runs, it will execute controller.addDie() w/o the event
//   // $('#roller button.add').on('click', controller.addDie());

//   // $('#roller button.add').on('click', controller.addDie);

//   // here we lose context at button.roll for the this in rollAllDie
//   // use the bind keyword if you want to specify what the value of this will be once it gets into the rollAllDie function
//   // $('#roller button.roll').on('click', controller.rollAllDie.bind(controller));

// });

// // Use object literal first
// var test = {
//   hello: function(){
//     console.log("hello");
//   },
// };

// // Move all functions into controller object - Abstract it all away
// var controller = {

//   initializeListeners: function(){
//     $('#roller button.add').on('click', this.addDie);
//     $('#roller button.roll').on('click', this.rollAllDie.bind(controller));
//     $('body').on('click', this.welcome);
//   },

//   welcome: function(){
//     console.log("Welcome");
//   },

//   addDie: function(){
//     $('.dice').append('<div class="die">0</div>');
//   },

//   rollDie: function(k, die) {
//     var value = Math.floor((Math.random()*6)+1);
//     $(die).text(value);
//   },

//   rollAllDie: function(){
//     $('.die').each(this.rollDie); // use this. not controller.rollDie
//     // typically, (but not here) in jQuery, this becomes the context of element clicked
//     // (typically) .each on the jQuery object 'die', this becomes the HTML element that was clicked
//   }
// }

// RELEASE 1
// All your DOM-related behavior and state should be stored in a View object.
// Your game-related state should be stored elsewhere, with no knowledge of the DOM.
// A Controller object should handle communication between the various objects, as well as the binding of events.

$(document).ready(function() {

  controller.initialize(view);

});

// A CONSTRUCTOR

// function die(k) {
// this.k = k;
// this.rollDie: function(k) {
//   var value = Math.floor((Math.random()*6)+1);
//   $(this).text(value);
// },
// this.rollAllDie: function(){
//   var $allDie = this.view.getAllDie();
//   $allDie.each(this.rollDie); // use this. not controller.rollDie
//   // typically, (but not here) in jQuery, this becomes the context of element clicked
//   // (typically) .each on the jQuery object 'die', this becomes the HTML element that was clicked
// }
// };
// new_die = new die(k);
// new_die.rollAllDie();
// new_die.rollDie();

var controller = {

  initialize: function(view) {
    this.view = view; // we are using the view everywhere
    this.view.initialize();
    this.initializeListeners();
  },

  initializeListeners: function(){
    // if you don't say this.view, it will look for a local variable inside this function
    // look for the event listener when moving addDie into the view
    // you will need to rebind a specific context for this all the time.
    this.view.$addButton.on('click', this.view.addDie.bind(this.view));
    this.view.$rollButton.on('click', this.rollAllDie.bind(controller));
  },

  welcome: function(){
    console.log("Welcome");
  },

  rollDie: function(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
  },

  rollAllDie: function(){
    var $allDie = this.view.getAllDie();
    $allDie.each(this.rollDie); // use this. not controller.rollDie
    // typically, (but not here) in jQuery, this becomes the context of element clicked
    // (typically) .each on the jQuery object 'die', this becomes the HTML element that was clicked
  }
}

//Since we are going to use the view in the controller, it needs to be defined before
// LEARN CONSTRUCTORS, prototypes LATER rather than object literals
// since we only have one view, one controller...
// use underscore for inheritance: function extend
var view = {
  hello: function() {
    console.log("Hi, I'm the view.");
  },

  initialize: function() {
    this.$addButton = $('#roller button.add');
    this.$rollButton = $('#roller button.roll');
    this.$dice = $('.dice');
    // above works because it's on the page when it loads
    // but below won't exist yet, so we put it in a function.
    // this.$die = $('.die');
  },

  getAllDie: function() {
    return $('.die');
  },

  addDie: function(){
    // use this otherwise it looks for: var $dice = $('ksdjf')
    this.$dice.append('<div class="die">0</div>');
  }
}

// MODEL



