var buttonColors=["red", "blue", "green", "yellow"]
var gamePattern=[]
var inputPattern=[]
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3"); // Assuming you have a 'sounds' folder
    audio.play();
}

// Function to animate button press (visual and sound)
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed"); // Add a CSS class for visual feedback
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
function nextSequence()
{ $("h1").text("Level "+gamePattern.length)
    var randomNumber=Math.floor(Math.random()*4)
   var randomChosenColor=buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    // Flash animation
    animatePress(randomChosenColor)
    playSound(randomChosenColor)
}

function startOver()
{    $("h1").text("Game Over, Press Any Key to Restart")
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200); 
    playSound("wrong");
    gamePattern.length=0;
    inputPattern.length=0;
}

function checkUserSequence(level)
{  if(inputPattern.length!=gamePattern.length)
     { startOver();
         return;
     }
    for(var i=0;i<=level;i++)
    { if(inputPattern[i]!=gamePattern[i])
      { startOver();
         return;
      }
    }
    inputPattern.length=0;
    setTimeout(function() {
    nextSequence();
}, 1000);
}
$(".btn").on("click",function(){   
var clickedButtonId = $(this).attr("id");
animatePress(clickedButtonId)
playSound(clickedButtonId)
inputPattern.push(clickedButtonId)
console.log(inputPattern)
if(inputPattern.length>=gamePattern.length) checkUserSequence(inputPattern.length-1)
})

$(document).on("keypress",function(){
        if(gamePattern.length==0) nextSequence()
})