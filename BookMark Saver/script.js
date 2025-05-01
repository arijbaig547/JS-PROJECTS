var addBtn = document.querySelector("#addbtn");
var search = document.querySelector("#search");
var title = document.querySelector("#title");
var url = document.querySelector("#url");
var cards = document.querySelector(".cards");

addBtn.addEventListener("click", addItem);

function addItem() {
    if (title.value !== "" && url.value !== "") {
        var userChoice = JSON.parse(localStorage.getItem("users")) || [];

        var newBookmark = {
            title: title.value,
            url: url.value
        };

        userChoice.push(newBookmark);

        localStorage.setItem("users", JSON.stringify(userChoice));

        createCard(newBookmark);

        title.value = "";
        url.value = "";
    }
}

function createCard(bookmark) {
    let card = document.createElement("div");
    card.className = "card";

    var titleEl = document.createElement("h4");
    titleEl.innerHTML = `BookMark-Title: <span>${bookmark.title}</span>`;

    var urlEl = document.createElement("h4");
    urlEl.innerHTML = `BookMark-URL: <span>${bookmark.url}</span>`;

    var dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";

    dltBtn.addEventListener("click", function () {
        deleteBookmark(bookmark, card);  // passing both data and DOM element
    });

    card.appendChild(titleEl);
    card.appendChild(urlEl);
    card.appendChild(dltBtn);

    cards.appendChild(card);
}

function loadSavedCards() {
    var saved = JSON.parse(localStorage.getItem("users")) || [];
    saved.forEach(createCard);
}

function deleteBookmark(bookmarkToDelete, cardElement) {
    var bookmarks = JSON.parse(localStorage.getItem("users")) || [];
    var updated = bookmarks.filter(function (b) {
        return b.title !== bookmarkToDelete.title || b.url !== bookmarkToDelete.url;
    });

    localStorage.setItem("users", JSON.stringify(updated));
    cardElement.remove();
}

// ✅ Fixed Search Function
function searchItem() {
    var itemFound = false;
    var searchCard = search.value.toLowerCase().trim();

    var allCards = document.querySelectorAll(".card");

    allCards.forEach(function (card) {
        var cardTitle = card.querySelector("h4").textContent.toLowerCase().trim();

        if (cardTitle.includes(searchCard)) {
            card.style.display = "block";
            itemFound = true;
        } else {
            card.style.display = "none";
        }
    });
}

search.addEventListener("input", searchItem);

// Initial load
loadSavedCards();
