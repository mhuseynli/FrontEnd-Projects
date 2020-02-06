var imgArray = ["1.png","2.png","3.png","4.png","5.png","6.png"]
var dice1span = document.querySelector(".dice1 span")
var dice2span = document.querySelector(".dice2 span")
var totalText = document.querySelector(".total span")
var total = 0;
document.querySelector(".btn").addEventListener("click",function(){
    var dice1 = Math.ceil(Math.random()*6)
    var dice2 = Math.ceil(Math.random()*6)
    dice1span.innerHTML = dice1
    dice2span.innerHTML = dice2
    if(total<100){
        total+=dice1+dice2
    }
    totalText.innerHTML = total
    showDice(dice1,dice2)
})
function showDice(a,b){
    var img1 = document.querySelector(".img1 img")
    var img2 = document.querySelector(".img2 img")
    img1.src = "img/" + imgArray[a-1]
    img2.src = "img/" + imgArray[b-1]
}

// var currentColor;
// var colors = document.querySelectorAll(".colors div")
// var blocks = document.querySelectorAll(".blocks div")
// var blockArea =document.querySelector(".blocks")
// var pen  = document.querySelector(".pen")
// for(var i=0;i<colors.length;i++){
//     colors[i].addEventListener("click",function(){
//         currentColor  = this.classList.item(0)
        
//     })
// }
// for(var i=0;i<blocks.length;i++){
//     blocks[i].addEventListener("click",function(e){
//         e.target.style.background = currentColor
//     })
// }
// document.querySelector(".pen").addEventListener("click",function(e){
//     e.preventDefault()
//     this.classList.toggle("active")
// })

// document.addEventListener("mousemove",function(e){
//         if(pen.classList.contains("active")){
//             var circle = document.createElement("div")
//             circle.classList.add("circle")
//             circle.style.left = e.clientX + "px"
//             circle.style.top = e.clientY + "px"
//             document.body.appendChild(circle)            
//         }

// })

