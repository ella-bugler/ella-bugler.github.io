// Holiday Spice Product Javascript ------------------------------------------------------------------------------------------
function addToBasketHolidaySpice() {
    // Get the product details
    var productName = "HOLIDAY SPICE CANDLE - Cinnamon & Spiced Orange";
    var productPrice = 30.00;
    var quantity = parseInt(document.getElementById("quantity").value);

    // Retrieve existing basket or create a new one
    var basket = JSON.parse(localStorage.getItem("basket")) || [];

    // Check if the product is already in the basket
    var existingProductIndex = basket.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        // If the product is already in the basket, update the quantity
        basket[existingProductIndex].quantity += quantity;
    } else {
        // If the product is not in the basket, add a new entry
        var product = {
            name: productName,
            price: productPrice,
            quantity: quantity
        };

        basket.push(product);
    }

    // Save the updated basket to local storage
    localStorage.setItem("basket", JSON.stringify(basket));

    // redirect to the basket page
    window.location.href = "basket.html";
}

// Cotton Cloud Product Javascript ------------------------------------------------------------------------------------------
      function addToBasketCottonCloud() {
    // Get the product details
    var productName = "COTTON CLOUD CANDLE - Fresh Cotton";
    var productPrice = 30.00;
    var quantity = parseInt(document.getElementById("quantity").value);

    // Retrieve existing basket or create a new one
    var basket = JSON.parse(localStorage.getItem("basket")) || [];

    // Check if the product is already in the basket
    var existingProductIndex = basket.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        // If the product is already in the basket, update the quantity
        basket[existingProductIndex].quantity += quantity;
    } else {
        // If the product is not in the basket, add a new entry
        var product = {
            name: productName,
            price: productPrice,
            quantity: quantity
        };

        basket.push(product);
    }

    // Save the updated basket to local storage
    localStorage.setItem("basket", JSON.stringify(basket));

    // redirect to the basket page
    window.location.href = "basket.html";
}

// Forest Fern Product Javascript ----------------------------------------------------------------------------------------
        function addToBasketForestFern() {
    // Get the product details
    var productName = "FOREST FERN CANDLE - Pine and Cedarwood";
    var productPrice = 30.00;
    var quantity = parseInt(document.getElementById("quantity").value);

    // Retrieve existing basket or create a new one
    var basket = JSON.parse(localStorage.getItem("basket")) || [];

    // Check if the product is already in the basket
    var existingProductIndex = basket.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        // If the product is already in the basket, update the quantity
        basket[existingProductIndex].quantity += quantity;
    } else {
        // If the product is not in the basket, add a new entry
        var product = {
            name: productName,
            price: productPrice,
            quantity: quantity
        };

        basket.push(product);
    }

    // Save the updated basket to local storage
    localStorage.setItem("basket", JSON.stringify(basket));

    // redirect to the basket page
    window.location.href = "basket.html";
}


// Sweet Vanilla Product Javascript ----------------------------------------------------------------------------------------
        function addToBasketSweetVanilla() {
    // Get the product details
    var productName = "SWEET VANILLA CANDLE - Vanilla and Tonka Bean";
    var productPrice = 30.00;
    var quantity = parseInt(document.getElementById("quantity").value);

    // Retrieve existing basket or create a new one
    var basket = JSON.parse(localStorage.getItem("basket")) || [];

    // Check if the product is already in the basket
    var existingProductIndex = basket.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        // If the product is already in the basket, update the quantity
        basket[existingProductIndex].quantity += quantity;
    } else {
        // If the product is not in the basket, add a new entry
        var product = {
            name: productName,
            price: productPrice,
            quantity: quantity
        };

        basket.push(product);
    }

    // Save the updated basket to local storage
    localStorage.setItem("basket", JSON.stringify(basket));

    // redirect to the basket page
    window.location.href = "basket.html";
}

// Basket Javascript ----------------------------------------------------------------------------------------
    // Retrieve existing basket or create a new one
    var basket = JSON.parse(localStorage.getItem("basket")) || [];

    // Display the items in the basket
    function displayBasket() {
		var basketItems = document.getElementById("basket-items");
		var emptyBasketMessage = document.getElementById("empty-basket-message");
		var subtotalElement = document.getElementById("subtotal-value");

    // Show the message if the basket is empty
    if (emptyBasketMessage) {
        emptyBasketMessage.style.display = basket.length === 0 ? "block" : "none";
    }

    // Check if the basketItems element exists
    if (!basketItems) {
        console.error("Element with ID 'basket-items' not found.");
        return;
    }

    // Clear previous content
    basketItems.innerHTML = "";

    // Initialize subtotal
    var subtotal = 0;

    // Add each item to the basket
    basket.forEach(function (item, index) {
        var itemContainer = document.createElement("div");
        itemContainer.className = "basket-item";

        var itemName = document.createElement("h3");
        itemName.textContent = item.name;

        var itemPrice = document.createElement("p");
        itemPrice.innerHTML = "<strong>Price:</strong> €" + item.price.toFixed(2);

        var itemQuantity = document.createElement("p");
        itemQuantity.innerHTML = "<strong>Quantity: </strong>" + item.quantity;

        var totalPrice = document.createElement("p");
        totalPrice.innerHTML = "<strong>Total:</strong> €" + (item.price * item.quantity).toFixed(2);

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeFromBasket(index);
        };

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(itemQuantity);
        itemContainer.appendChild(totalPrice);
        itemContainer.appendChild(removeButton);

        basketItems.appendChild(itemContainer);

        // Calculate and update subtotal
        subtotal += item.price * item.quantity;
    });

    // Save subtotal to local storage
    localStorage.setItem("subtotal", subtotal.toFixed(2));

    // Display subtotal
    subtotalElement.textContent = "€" + subtotal.toFixed(2);
	}


    // Remove item from the basket
    function removeFromBasket(index) {
        basket.splice(index, 1);
        // Save the updated basket to local storage
        localStorage.setItem("basket", JSON.stringify(basket));
        displayBasket();
    }

    // Proceed to checkout
    function checkout() {
        window.location.href = "checkout.html";
    }

    // Initial display of the basket
    displayBasket();

//Contact us javascript ---------------------------------------------- 
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                showConfirmButton: false,
                timer: 1500
            });
            
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Please fill out all fields',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
});

// -------------------------checkout page Javascript--------------------------

// Function to display a simple list of items in the checkout page
function displaySimpleItemList() {
    var checkoutList = document.getElementById("checkout-list");
    var basket = JSON.parse(localStorage.getItem("basket")) || [];

    // Clear previous content
    checkoutList.innerHTML = "";

    // Create a list to hold the simple item information
    var itemList = document.createElement("ul");

    // Add each item to the checkout list
    basket.forEach(function (item) {
        var listItem = document.createElement("li");
        listItem.textContent = item.quantity + "x " + item.name;
        itemList.appendChild(listItem);
    });

    // Append the list to the checkout list container
    checkoutList.appendChild(itemList);
}

// Retrieve subtotal from local storage
var subtotal = localStorage.getItem("subtotal");

// Display subtotal on the checkout page
var subtotalElement = document.getElementById("subtotal-value");
if (subtotalElement) {
    subtotalElement.textContent = "€" + subtotal;
}

// Display the simplified list of items in the checkout page
displaySimpleItemList();

        document.addEventListener('DOMContentLoaded', function () {
            var billingSameAsShippingCheckbox = document.getElementById('billing-same-as-shipping');
            var billingAddressForm = document.getElementById('billing-address');

            // Add an event listener to the checkbox
            billingSameAsShippingCheckbox.addEventListener('change', function () {
                // Toggle the visibility of the billing address form based on checkbox state
                billingAddressForm.style.display = billingSameAsShippingCheckbox.checked ? 'none' : 'block';
            });
        });
		


		
// -------------------------login page Javascript--------------------------
function showCreateAccountForm() {
    document.getElementById("loginFormContainer").style.display = "none";
    document.getElementById("createAccountFormContainer").style.display = "block";
}

function showLoginForm() {
    document.getElementById("createAccountFormContainer").style.display = "none";
    document.getElementById("loginFormContainer").style.display = "block";
}

function attemptLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve user information from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the entered username and password match stored user information
    var user = users.find(user => user.username === username && user.password === password);

    if (user) {
        Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            showConfirmButton: false,
            timer: 1500
        });
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid username or password. Please try again.',
        });
    }
}

function createAccount() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // Retrieve existing users from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the username already exists
    var existingUser = users.find(user => user.username === newUsername);

    if (existingUser) {
        Swal.fire({
            icon: 'error',
            title: 'Username Already Exists',
            text: 'Please choose a different username.',
        });
    } else {
        // Add the new user to the array
        users.push({ username: newUsername, password: newPassword });

        // Save the updated user array to local storage
        localStorage.setItem("users", JSON.stringify(users));

        Swal.fire({
            icon: 'success',
            title: 'Account Created!',
            text: 'Your account has been successfully created.',
        }).then(() => {
            showLoginForm(); // Switch back to the login form after account creation
        });
    }
}

