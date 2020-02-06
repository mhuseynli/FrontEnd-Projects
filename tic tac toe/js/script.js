var box = document.querySelectorAll(".box")
var box1 = document.getElementById("1")
var box2 = document.getElementById("2")
var box3 = document.getElementById("3")
var box4 = document.getElementById("4")
var box5 = document.getElementById("5")
var box6 = document.getElementById("6")
var box7 = document.getElementById("7")
var box8 = document.getElementById("8")
var box9 = document.getElementById("9")
var counter = 1;
for (i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function () {
        counter++;
        if (counter % 2) {
            this.innerHTML = "O"
        }
        else {
            this.innerHTML = "X"
        }
        if(box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X"){
            alert("First player win")
        }
        if(box1.innerHTML == "X" && box4.innerHTML == "X" && box7.innerHTML == "X"){
            alert("First player win")
        }
        if(box1.innerHTML == "X" && box5.innerHTML == "X" && box9.innerHTML == "X"){
            alert("First player win")
        }
        if(box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X"){
            alert("First player win")
        }
        if(box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X"){
            alert("First player win")
        }
        if(box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X"){
            alert("First player win")
        }
        if(box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X"){
            alert("First player win")
        }
    })

}
