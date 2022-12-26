// console.log("The attribute(s) attached to this 'div' is/are " + '"' + document.querySelector("div").attributes) + '"';
// console.log(document.querySelector("div").attributes);
// console.log("The value of the class attribute of the div element is " + '"' + document.querySelector("div").getAttribute("class") + '".');
// console.log(document.querySelector("div").setAttribute("class", "disCircle"));
// console.log("The value of the class attribute of the div element is " + '"' + document.querySelector("div").getAttribute("class") + '".');


// document.querySelector("h3").innerHTML = "<em>Hello World!</em>";
// var txt2 = document.getElementById("t").textContent;
// console.log(document.querySelector("h3").innerHTML);
// console.log(txt2);


// document.querySelector(".circle").onclick = () => {
    // document.querySelector(".circle").style.backgroundColor = "red";
    // document.querySelector(".circle").classList.toggle("invisible");
    // document.write(document.querySelector(".circle").classList);
// }

// document.write(document.querySelector(".circle").classList);

// document.onclick = () => {
document.getElementById("diceBtn").onclick = () => {

    var rand1 = Math.floor((Math.random()*6)+1);
    if (document.getElementsByClassName("dice")[0].lastElementChild.getAttribute("class") === "img1") {
        document.getElementsByClassName("dice")[0].lastElementChild.setAttribute("src", "images/dice-"+ rand1 +".png");
    }

    var rand2 = Math.floor((Math.random()*6)+1);
    if (document.getElementsByClassName("dice")[1].lastElementChild.getAttribute("class") === "img2") {
        document.getElementsByClassName("dice")[1].lastElementChild.setAttribute("src", "images/dice-"+ rand2 +".png");
    }

    if (rand1 > rand2) {
        document.getElementById("statement").innerHTML = " 🎏 Player 1 Wins!";
    } else if (rand1 === rand2) {
        document.getElementById("statement").innerHTML = " 🎏 Player 1 and Player 2 has a Draw 🎏";
    } else {
        document.getElementById("statement").innerHTML = "Player 2 Wins! 🎏";
    }
    
}

// document.write(document.getElementsByClassName("dice")[0].lastElementChild.getAttribute("src"));
document.getElementById("resetBtn").onclick = () => {
    document.getElementsByClassName("dice")[0].lastElementChild.setAttribute("src", "images/dice-0.png");
    document.getElementsByClassName("dice")[1].lastElementChild.setAttribute("src", "images/dice-0.png");
}