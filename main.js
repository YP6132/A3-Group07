const ul = document.querySelector("ul");
const addButton = document.querySelector("#addButton");
let input = document.querySelector("input");

addButton.addEventListener("click", () => {
    let todoText = input.value;
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = todoText;

    let button = document.createElement("button");
    button.innerHTML = "delete";
    button.setAttribute("onclick", "deleteElement(this);");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("onclick", "checkElement(this);");

    li.appendChild(p);
    li.appendChild(button);
    li.appendChild(checkbox);
    ul.appendChild(li);

    input.value = "";
    input.focus();
});

function deleteElement(ele) {
    ele.parentElement.remove();
}

function checkElement(ele) {
    if (ele.checked) {
        ele.parentElement.querySelector("p").style.textDecoration = "line-through";
    } else {
        ele.parentElement.querySelector("p").style.textDecoration = "none";
    }
}