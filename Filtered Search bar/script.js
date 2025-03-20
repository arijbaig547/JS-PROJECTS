var select = document.getElementById("item-select");
var vegetables = document.getElementById("vegetables");
var fruits = document.getElementById("fruits");
var meat = document.getElementById("meat");
var input = document.getElementById("input");
var items = document.querySelectorAll(".item");
var searchbtn=document.getElementById("btn")
var container=document.querySelector(".container")
var message=document.querySelector(".message")

function showFiltered(category) {
    if(input.value.trim()==="")
    vegetables.style.display = "none";
    fruits.style.display = "none";
    meat.style.display = "none";
    message.style.display="none"

    if (category === "Fruits") {
        fruits.style.display = "flex";
    } else if (category === "Vegetables") {
        vegetables.style.display = "flex";
    } else if (category === "Meat") {
        meat.style.display = "flex";
    } else if (category === "All") {
        vegetables.style.display = "flex";
        fruits.style.display = "flex";
        meat.style.display = "flex";
    }
}

function selectCategory() {
    showFiltered(select.value);//Isme ye parameter pass krdia mtlb select me jo bi "String value"hogi us hisab 
    // se display block or none hojaega
}


function searchItem() {
    let searchValue = input.value.toLowerCase().trim();
    let itemFound = false; 

    items.forEach(function (item) {
        let itemName = item.querySelector("h3").textContent.toLowerCase().trim();//ye Item ke div ke andr 
        // h3 ke text content ko check krega 


        if (itemName.includes(searchValue) || searchValue === "") {
            item.style.display = "block";  
            itemFound = true;
        } else {
            item.style.display = "none";   
        }
    });

    if (!itemFound) {
        message.style.display = "block";
        message.innerHTML="ITEM NOT FOUND"
    } else {
        message.style.display = "none";

    }
    
}


// Event Listeners
select.addEventListener("change", selectCategory);

input.addEventListener("input", searchItem); 