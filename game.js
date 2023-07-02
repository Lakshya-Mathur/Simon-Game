//alert("Hello");
//var randomNumber;
alert("Simon is an electronic game of memory skill.The website creates a series of tones and lights and requires a user to repeat the series.If the user succeed, the series becomes progressively longer and more complex.Once the user fails, the game is over.");
var colors=["red","green","blue","yellow"];
var gamePattern=[];
var userPattern=[];
var level = 0;
var count=0;

function nextSequence(){
  level++;
  count=0;
  $("#level-title").html("Level "+level);
  setTimeout(function(){
    var v1= Math.floor(Math.random()*4);
    var v2=v1%4;
    var randomNumber=v2;
    var randomColor=colors[randomNumber];
    gamePattern.push(randomColor);
    $("#"+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
  }, 500);

  //animate(randomColor);
};


$(".btn").click(function(){
  var buttonClicked=this.id;

  userPattern.push(buttonClicked);
  count++;
  console.log(buttonClicked+" "+gamePattern[count-1]);

  if(buttonClicked===gamePattern[count-1])
  {

      playSound(buttonClicked);
      animate(buttonClicked);
  }
  if(buttonClicked!==gamePattern[count-1])
  {
    var v2="wrong";
    playSound(v2);
    end();
  }
  if(count===level)
  {
    var delayInMilliseconds = 500; //1 second
    setTimeout(function() {

      nextSequence();
      //your code to be executed after 1 second
    }, delayInMilliseconds);
  }


  //console.log(userPattern);
});

function playSound(v1){
  var audio1 = new Audio("sounds/" + v1 + ".mp3");
  audio1.play();
};

function animate(v1){
  $("."+v1).addClass("pressed").delay(100).queue(function(next){
    $(this).removeClass("pressed");
    next();
});
}

$("body").keypress(function(){
  //console.log("hello");
  $("#level-title").html("Level "+level);
  nextSequence();

})

function end(){
  level = 0;
  count =-1;
  $("#level-title").html("Press A Key to Start");
  gamePattern=[];
  userPattern=[];
}
