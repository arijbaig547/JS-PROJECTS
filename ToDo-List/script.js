var searchInput = document.querySelector("#search");
var addInput = document.querySelector("#add");
var addbtn = document.querySelector("#addbtn");
var dltAllbtn = document.querySelector("#dltbtn");
var ul = document.querySelector("#ul");


function addItem() {
    if (addInput.value !== "") {
        // Create li element
        var li = document.createElement("li");
        li.classList.add("animate"); // Animate class lagao

        li.innerHTML = `
            <span>${addInput.value}</span>
            <div class="btn-group">
                <button onclick="edit(this)" class="edit"><i class="fa-solid fa-pen"></i></button>
                <button onclick="deleteItem(this)" class="delete"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

        ul.appendChild(li);
        addInput.value = ""; // Input clear karo

        // Optional: remove animate class after animation ends
        setTimeout(() => {
            li.classList.remove("animate");
        }, 500);
    } else {
        alert("Fill the Field First");
    }
}


function searchItem() {
    const searchValue = searchInput.value.toLowerCase();
    const listItems = ul.querySelectorAll("li"); 

    listItems.forEach((item) => {
        const itemText = item.querySelector("span").textContent.toLowerCase();

        if (itemText.includes(searchValue)) {
            item.style.display = "flex";  
        } else {
            item.style.display = "none";  
        }
    });
}

searchInput.addEventListener("input", searchItem);

function edit(e) {
    
    var span = e.parentNode.parentNode.querySelector("span");
    var pro = prompt("Enter updated value", span.textContent); 
    if (pro) {
        span.textContent = pro; 
    }
}


function deleteItem(e) {
    e.parentNode.parentNode.remove();
}

function removeAllItem() {
  
    if (ul.children.length > 0) { // Check if list is not empty
        ul.innerHTML = "";
        
    } else {
        alert("List already empty");
    }
}


var darkbtn = document.querySelector("#dark");
var container = document.querySelector(".container");

function darkMode() {
    container.classList.toggle("dark");  // Toggle the 'dark' class on the container
    // Toggle the moon icon to sun icon when dark mode is active
    if (container.classList.contains("dark")) {
        darkbtn.innerHTML = '<i class="fa-solid fa-sun"></i>';  // Change icon to sun
    } else {
        darkbtn.innerHTML = '<i class="fa-solid fa-moon"></i>';  // Change icon back to moon
    }
}

darkbtn.addEventListener("click", darkMode);
// Event Listeners
addbtn.addEventListener("click", addItem);
dltAllbtn.addEventListener("click", removeAllItem);
