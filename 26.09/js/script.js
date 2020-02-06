// var block = document.querySelector(".block")

// block.addEventListener("mouseout",function(){
//     console.log("salam")
// })
// window.addEventListener("load",function(){
//     block.style.display = "block"
// })
// document.querySelector("input").addEventListener("change",function(){
//     console.log("salam")
// })
// var inputs = {
//     desc : document.querySelector("#desc").value,
//     price : document.querySelector("#price").value,
//     date : document.querySelector("#date").value
// }
// var tr = document.createElement("tr")

// var descTd = document.createElement("td")
// descTd.innerText = inputs.desc
// tr.appendChild(descTd)

// var priceTd = document.createElement("td")
// priceTd.innerText = inputs.price
// tr.appendChild(priceTd)

// var dateTd = document.createElement("td")
// dateTd.innerText = inputs.date
// tr.appendChild(dateTd)

// tbody.appendChild(tr)

var btn = document.querySelector(".btn")
var tbody = document.querySelector(".tbody")
var counter = 1



btn.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(".nan").innerHTML = ""
    var inputs = document.querySelectorAll("input")
    if (isNaN(inputs[1].value)) {
        document.querySelector(".nan").innerHTML = "duzgun daxil ele!"
    }
    else {
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        td.innerText = counter
        tr.appendChild(td)


        for (var i = 0; i < inputs.length; i++) {
            var td = document.createElement("td")
            td.innerText = inputs[i].value
            tr.appendChild(td)
        }
        var removeTd = document.createElement("td")
        removeTd.innerHTML = `<i class = 'fas fa-times'></i>`
        tr.appendChild(removeTd)
        tbody.appendChild(tr)
        counter++

        var trs = document.querySelectorAll("tr")
        for (var i = 1; i < trs.length; i++) {
            var td = trs[i].children[2]
            if (Number(td.innerHTML) > 0) {
                td.classList.add("badge")
                td.classList.add("badge-success")
            }
            else {
                td.classList.add("badge")
                td.classList.add("badge-danger")
            }
        }

    }




})


