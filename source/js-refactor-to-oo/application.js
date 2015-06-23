

var Die = function() {
  this.value = 0;
};

Die.prototype.roll = function() {
  this.value = Math.floor((Math.random()*6)+1);
  return this.value
};

dice = []

$(document).ready(function() {
  $('.add').on("click", function(){
    var die = new Die;
    dice.push(die);
    var thingy = '<div id='+dice.length+' class="die">'+die.value+'</div>';
    $('.dice').append(thingy);
  })
  $('.roll').on("click", function() {
      for(var i = 0; i < dice.length; i++){
        var num = dice[i].roll();
        $('#'+(i + 1)+'').html(num);
        console.log(num);
      }
  })

});


