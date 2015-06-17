// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     console.log("WAT")
//     $('.dice').append('<div class="die">0</div>');
//   });

//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     });
//   });
// });


// var createDice = function() {
//   var someDice = {};

//   someDice.roll = function() {
//     rollButton.onclick = function() {
//       console.log("WAT")
//       dice.innerHTML += '<div class="die">0</div>';
//     }
//   }

//   someDice.add = function() {
//     addButton.onclick = function() {
//       for(i = 0; i < die.length; i++) {
//         var value = Math.floor((Math.random()*6)+1);
//         die.innerHTML = value;
//       }
//     }
//   }

//   return someDice;
// }

// var ourDice = new Dice();
// ourDice.roll();
// ourDice.add();

rollButton = document.getElementsByClassName('roll')[0]
addButton = document.getElementsByClassName('add')[0]
dice = document.getElementsByClassName('dice')[0]
die = document.getElementsByClassName('die')


var Dice = function() {
  // this.roll = roll;
  // this.add = add;
};

Dice.prototype.roll = function() {
  rollButton.onclick = function() {
    for(i = 0; i < die.length; i++) {
      var value = Math.floor((Math.random()*6)+1);
      console.log(die);
      die[i].innerHTML = value;
    }
  }
};

  Dice.prototype.dice_add = function(number) {
    addButton.onclick = function() {
      console.log("WAT")
      dice.innerHTML += '<div class="die">0</div>';
    }
  };

var ourDice = new Dice();
ourDice.roll();
ourDice.dice_add();