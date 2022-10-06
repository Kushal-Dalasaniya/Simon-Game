var computerColor=[];
var userColor=[];
var colo=["blue","green","red","yellow"];
var lv=0;
var start=true;

$(document).keypress(function (e) { 
    if(start){
        $("#level-title").text("Level " + lv);
        randomColor();
        start=false;
    }
});

$(".btn").click(function() { 
    var color=$(this).attr("id");
    userColor.push(color);
    makeSound(color);
    animation(color);
    chack(userColor.length-1);
});

function randomColor(){
    lv++;
    
    $("#level-title").text("Level " + lv);
    userColor=[];
    
    var rand=Math.floor(Math.random()*4);
    computerColor.push(colo[rand]);
    
    $("#"+colo[rand]).fadeIn(100).fadeOut(100).fadeIn(100);
    
    makeSound(colo[rand]);
    animation(colo[rand]);
}


function chack(lastLevel){
    console.log(userColor[lastLevel]);

    if(userColor[lastLevel]===computerColor[lastLevel]){
        console.log(userColor[lastLevel]);
        
        if(userColor.length==computerColor.length){
            setTimeout(function () {
                randomColor();
            }, 1000);
        }
    }

    else{
        makeSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startAgain();
    }
}

function makeSound(clr){
    var audio=new Audio("sounds/"+clr+".mp3");
    audio.play();
}

function animation(currColor){
    $("#" + currColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currColor).removeClass("pressed");
  }, 100);
}

function startAgain(){
    computerColor=[];
    start=true;
    lv=0; 
}




