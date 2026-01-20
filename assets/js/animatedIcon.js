let logo = document.getElementById("logo");
let path = "assets/img/pins/";
let prevIcon = 0;
let logoNames = [
    "smile.png",
    "love.png",
    "mad.png",
    "snow.png",
    "sob.png",
    "sweat.png",
    "thumbsup.png"
]

logo.src = path + logoNames[prevIcon];

logo.addEventListener("click", () => {
    let nextIcon = Math.round(Math.random() * (logoNames.length - 1));
    while(nextIcon === prevIcon){
        nextIcon = Math.round(Math.random() * (logoNames.length - 1));
    }
    prevIcon = nextIcon;
    logo.src = path + logoNames[prevIcon];
})