// var p = document.getElementById("p")
// var list = document.getElementsByTagName("li")[0]
// console.log(list)

// var list = document.querySelectorAll(".list")


// var content = document.querySelector(".content")
// var href = document.querySelector("a").href

// var src =  document.querySelector("img").hasAttribute("src")
// console.log(p)
// function addClass(){
//     p.classList.add("active")
// }

// if(content.classList.contains("active")){
//     content.classList.remove("active")
// }
// else{
//     content.classList.add("active")
// }

// var p = document.querySelector("p")

// var list = document.querySelectorAll(".list")

// for(var i=0 ; i<list.length;i++){

//     list[i].addEventListener("click",function(){

//         this.classList.add("active")


//     })

// }


var btns = document.querySelectorAll(".btn")

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        for (j = 0; j < btns.length; j++) {
            btns[j].classList.remove("active");
            btns[j].nextElementSibling.style.maxHeight = 0 + "px"
        }

        this.classList.toggle("active")
        if (this.classList.contains("active")) {
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px"
        }
        else {
            this.nextElementSibling.style.maxHeight = 0 + "px"
        }
    })
}




// var sidebar = document.querySelector(".sidebar")
// var btn = document.querySelector(".btn")
// var main = document.querySelector(".main")

// btn.addEventListener("click", function () {
//     sidebar.classList.toggle("active")
//     if (sidebar.classList.contains("active")) {
//         btn.innerHTML = "Close"
//         main.classList.add("active")
//     }
//     else {
//         btn.innerHTML = "Open"
//         main.classList.remove("active")
//     }

// })