var one = document.querySelector(".popup-overlay");
var two = document.querySelector(".popup-box")
var add = document.querySelector(".add-button")
add.addEventListener("click", function () {
    one.style.display = "block";
    two.style.display = "block";
})

var cancel = document.getElementById("cancel-book");

cancel.addEventListener("click", function (event) {
    event.preventDefault()
    one.style.display = "none";
    two.style.display = "none";
})

var container = document.querySelector(".container")
var addbutton = document.getElementById("add-button");
var BookTitlee = document.getElementById("book-title-input");
var BookAuthor = document.getElementById("book-author-input")
var ShortDescription = document.getElementById("book-discription-input")

addbutton.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${BookTitlee.value}</h2>
            <h5>${BookAuthor.value}</h5>
            <p>${ShortDescription.value}</p>
             <button onclick="deletee(event)">Delete</button>`
    container.append(div)
    one.style.display = "none";
    two.style.display = "none";
})
function deletee(event) {
    event.target.parentElement.remove()
}