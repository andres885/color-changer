var background = document.getElementById("background"),
    body = document.getElementsByTagName("BODY")[0],
    index,
    timer,
    timer2;

function tweakBackground() {
    body.style.backgroundImage = background.style.backgroundImage;
    background.classList = "transparent";
}
    
function changeBackground() {
    index = Math.floor((Math.random() * 9) + 1).toString();
    background.style.backgroundImage = "url(\"img/sabana" + index + ".jpg\")";
    background.classList = "animated";
    timer2 = setTimeout(tweakBackground, 2100);
}

index = Math.floor((Math.random() * 9) + 1).toString();
body.style.backgroundImage = "url(\"img/sabana" + index + ".jpg\")";

timer = setInterval(changeBackground, 20000);
