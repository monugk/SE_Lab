// alert("Hello")

//Event listner
// document.querySelector("button").addEventListener("click",handleClick)
//remember we do not add paranthesis to function added in event listner coz the function
// would run b4 the page loads
// function handleClick(){
//     alert("I got clicked");
// }

// Anoynomous function

// document.querySelector("button").addEventListener("click",function k(){
//     alert("I got clicked");
//     does exactly the same
// })

//Adding the function all the buttons
// preferable way as of now
// var noOfbuttons=document.querySelectorAll(".drum").length;

// for(var i=0;i<noOfbuttons;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",sound);
//     function sound(){
     
//         this.style.color="white";
//         var buttonInnerHTML=this.innerHTML;
//         switch (buttonInnerHTML) {
//             case "w":
//                 var tom1=new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;
//             case "a":
//                 var tom2=new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//             case "s":
//                 var tom3=new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//             case "d":
//                 var tom4=new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//             case "j":
//                 var crash=new Audio("sounds/crash.mp3");
//                 crash.play();
//             case "k":
//                 var kick=new Audio("sounds/kick-bass.mp3");
//                 kick.play();
//             case "l":
//                 var snare=new Audio("sounds/snare.mp3");
//                 snare.play();
        
//             default:
//                 console.log(buttonInnerHTML);
//         }
//     }
//     document.addEventListener("keypress",function(event){
//         console.log(event)
//     })
// }

//Detecting button press
var noOfbuttons=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",sound)
    function sound(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }

}

//Detecting keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
    
        default:
            console.log(key);
    }
}

function buttonAnimation(currentKey){
 var activeButton=document.querySelector("."+ currentKey);
 activeButton.classList.add(".pressed");
 setTimeout(function(){
    activeButton.classList.remove(".pressed")
 },100)
}