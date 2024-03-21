
for(let i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        let letter=this.innerHTML.toUpperCase();
        animation(letter);
        makeSound(letter);      
});
}


document.addEventListener("keydown",function (event){
    makeSound(event.key.toUpperCase());
    animation(event.key.toUpperCase());
});


function makeSound(key){
    switch (key){
        case "A":
            var bagpipe=new Audio("./sounds/bagpipe.mp3");
            bagpipe.play();
            break;
        case "S":
            var drum=new Audio("./sounds/drum.mp3");
            drum.play();
            break;
        case "D":
            var flute=new Audio("./sounds/flute.mp3");
            flute.play();
            break;
        case "F":
            var guitar=new Audio("./sounds/guitar.mp3");
            guitar.play();
            break;
        case "G":
            var piano=new Audio("./sounds/piano.mp3");
            piano.play();
            break;
        case "H":
            var shaker=new Audio("./sounds/shaker.mp3");
            shaker.play();
            break;
    
        default:
            alert("Refresh the page to stop audio");
            break;
    }
}

function animation(currentKey){
    let activeKey=document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function (){
        activeKey.classList.remove("pressed");
    },100);

}