const shoppingForm = document.getElementById("myform");
const shoppingInput = document.getElementById("myinput");
const shoppingList = document.getElementById("myitem");


shoppingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let itemName = shoppingInput.value.trim();

    // Check if input is empty
    if (itemName.length === 0) {
        alert("Please enter an item to add to your shopping list.");
        return;
    }

    addShoppingItem(itemName);

    shoppingInput.value = "";
    shoppingInput.focus();
});

function addShoppingItem(name) {

    let listItem = document.createElement("li");
    listItem.innerText = name;

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";

    removeBtn.addEventListener("click", function () {
        listItem.parentNode.removeChild(listItem);
    });

    listItem.appendChild(removeBtn);
    shoppingList.appendChild(listItem);
}
