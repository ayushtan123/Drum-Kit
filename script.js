
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",handleClick);}

function handleClick(){
    var action1=this.innerHTML;   
    makeSound(action1);  //for button click
    buttonAnimation(action1);
}


document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
switch (key) {
    case "w":
        var a1=new Audio("sounds/crash.mp3");
        a1.play();
        break;
    case "a":
        var a1=new Audio("sounds/kick-bass.mp3");
        a1.play();
        break;

    case "s":
        var a1=new Audio("sounds/snare.mp3");
        a1.play();
        break;

    case "d":
        var a1=new Audio("sounds/tom-1.mp3");
        a1.play();
        break;

    case "j":
        var a1=new Audio("sounds/tom-2.mp3");
        a1.play();
        break;

    case "k":
        var a1=new Audio("sounds/tom-3.mp3");
        a1.play();
        break;

    case "l":
        var a1=new Audio("sounds/tom-4.mp3");
        a1.play();
        break;

    default:
        console.log(key);
        break;
}
}

function buttonAnimation(currentkey){

   var activebtn= document.querySelector("."+currentkey);
   activebtn.classList.add("pressed");

   setTimeout(function(){activebtn.classList.remove("pressed");},100);
}

function testcode(){
    alert("I got clicked!");
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    this.style.color="blue";
}
