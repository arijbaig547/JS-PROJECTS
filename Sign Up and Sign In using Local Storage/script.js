var allUsers = [];

var userData = JSON.parse(localStorage.getItem("user"));
if (userData !== null) {
    allUsers = userData;
} else {
    allUsers = [];
}

// Email format checker
function isValidEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
}

// Sign Up Function
function signUp() {
    var name = document.querySelector("#name");
    var email = document.querySelector("#email");
    var pass = document.querySelector("#password");

    if (!name.value || !email.value || !pass.value) {
        alert("Please fill all fields.");
        return;
    }

    if (!isValidEmail(email.value)) {
        alert("Invalid email format.");
        return;
    }

    if (pass.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    var obj = {
        name: name.value,
        email: email.value,
        password: pass.value
    };

    allUsers.push(obj);
    localStorage.setItem("user", JSON.stringify(allUsers));
    alert("Sign Up Success!");
    window.location.href = "login.html";
}

// Sign In Function
function signIn() {
    var email = document.querySelector("#email");
    var pass = document.querySelector("#password");

    if (!email.value || !pass.value) {
        alert("Please enter email and password.");
        return;
    }

    if (!isValidEmail(email.value)) {
        alert("Invalid email format.");
        return;
    }

    var filteredData = allUsers.filter(data => {
        return data.email === email.value && data.password === pass.value;
    });

    if (filteredData.length > 0) {
        alert("Sign In Success!");
        location.href = "dashboard.html"; // ✅ Correct syntax here
    } else {
        alert("User not found!");
    }
}


//Dashboard Functionality//


function addModalData() {
    var getImage = document.querySelector("#postImage");
    var getCaption = document.querySelector("#postCaption");
    var getPrice = document.querySelector("#postPrice");
    var counter = document.querySelector("#postCount");

    // ✅ Fields validation
    if (getImage.files.length > 0 && getCaption.value.trim() !== "" && getPrice.value.trim() !== "") {

        var imageurls = [];
        for (var i = 0; i < getImage.files.length; i++) {
            imageurls.push(URL.createObjectURL(getImage.files[i]));
        }

        // ✅ Store post
        var postData = {
            image: imageurls,
            caption: getCaption.value.trim(),
            price: getPrice.value.trim(),

        };

        var userData = localStorage.getItem("data");

        var alldata;

        if (userData !== null) {
            alldata = JSON.parse(userData);
        } else {
            alldata = [];
        }


        alldata.push(postData);

        localStorage.setItem("data", JSON.stringify(alldata));


        getImage.value = "";
        getCaption.value = "";
        getPrice.value = "";


        counter.innerHTML = alldata.length;


        appendPost();

    } else {
        alert("Fill all the fields first");
    }
}


function appendPost() {
    var postContainer = document.querySelector("#postList");
    postContainer.innerHTML = "";

    var appendData = localStorage.getItem("data");
    var alldata = [];

    if (appendData !== null) {
        alldata = JSON.parse(appendData);
    }

    alldata.forEach((post) => {
        post.image.forEach((imgUrl) => {
            postContainer.innerHTML += `
                <div class="card custom-post">
                    <img src="${imgUrl}" alt="Post Image" />
                    <p><strong>Caption:</strong> ${post.caption}</p>
                    <p id="price"><strong>Price:</strong> ${post.price}</p>
                    <button onclick="edit(this)">Edit</button><br>
                    <button onclick="remove(this)">Delete</button>
                </div>
            `;
        });
    });
}

function edit(e) {
    // Get the parent card that contains the post
    var card = e.closest('.custom-post');

    // Get the current caption and price text
    var captionText = card.querySelector('p').textContent.split(":")[1].trim(); // Fixed here
    var priceText = card.querySelector('#price').textContent.split(":")[1].trim();

    // Prompt for new values
    var newCaption = prompt("Enter new caption:", captionText);
    var newPrice = prompt("Enter new price:", priceText);

    // Retrieve existing data from localStorage
    var data = localStorage.getItem("data");
    var alldata;

    if (data !== null) {
        alldata = JSON.parse(data);
    } else {
        alldata = [];
    }

    // Find the post and update its values
    alldata.forEach(post => {
        if (post.caption === captionText) {
            post.caption = newCaption;
        }
        if (post.price === priceText) {
            post.price = newPrice;
        }
    });

    // Save updated data back to localStorage
    localStorage.setItem("data", JSON.stringify(alldata));


    appendPost();
}



function remove(e) {
    var getText = e.closest(".custom-post");

    var captionText = getText.querySelector('p').textContent.split(":")[1].trim();
    var priceText = getText.querySelector('#price').textContent.split(":")[1].trim();
    getText.remove();


    var data = localStorage.getItem("data");
    var alldata;

    if (data !== null) {
        alldata = JSON.parse(data)
    }
    else {
        alldata = [];
    }

    var filterData = alldata.filter(function (post) {
        return !(post.caption === captionText && post.price === priceText)
    })

    localStorage.setItem("data", JSON.stringify(filterData));
}

window.addEventListener("DOMContentLoaded", appendPost);



function signOut() {
    location.href = "index.html"
}


