var modal = document.getElementById("my-modal")
var modalBtn = document.getElementById("modalBtn")
var closeBtn = document.getElementsByClassName("closeBtn")[0]

modalBtn.addEventListener("click", openModal)
function openModal() {
    modal.style.display = "block"
}
closeBtn.addEventListener("click", closeModal)
function closeModal() {
    modal.style.display = "none"
}
