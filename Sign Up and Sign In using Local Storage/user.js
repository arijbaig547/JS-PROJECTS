var getLSdata = localStorage.getItem("data");

if (getLSdata) {
  var alldata = JSON.parse(getLSdata);
  console.log(alldata);
} else {
  console.log("No data found in Local Storage");
}

var postList = document.getElementById("postList");

alldata.forEach(post => {
  postList.innerHTML += `
    <div class="post">
      <img src="${post.imageurls}" alt="item-img" width="100%">
      <p class="caption"><b>Caption:</b> ${post.caption}</p>
      <p class="price">Price: ${post.price}</p><br>
      <button onclick="addtoCart(this)" class="addbtn">Add to Cart</button>
    </div>`;
});

function addtoCart(button) {
  const postCard = button.closest(".post");
  const caption = postCard.querySelector(".caption").textContent;
  const priceText = postCard.querySelector(".price").textContent;

  const cartList = document.querySelector(".cart-items");

  const item = document.createElement("li");
  item.textContent = `${caption} - ${priceText}`;

  cartList.appendChild(item);
}
