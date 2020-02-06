var currentIndex = 1
var slides = document.querySelectorAll(".slide")
console.log(slides.length)

document.querySelector(".next").addEventListener("click",function(e){
    e.preventDefault()
    if(currentIndex == slides.length){
        currentIndex=1
    }
    else{
        currentIndex++
    }
    for(var i=0;i<slides.length;i++){
        slides[i].classList.remove("active")
    }
    showSlides(currentIndex)
})

document.querySelector(".prev").addEventListener("click",function(e){
    e.preventDefault()
    if(currentIndex == 1){
        currentIndex = slides.length
    }
    else{
        currentIndex--
    }
    showSlides(currentIndex)
})

function showSlides(n){
    for(var i=0;i<slides.length;i++){
        slides[i].classList.remove("active")
    }
    slides[n-1].classList.add("active")
}
