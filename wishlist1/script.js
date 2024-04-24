







  document.addEventListener("DOMContentLoaded", function() {
    // Mock data for wishlist items
    const wishlistItems = [
      { name: "Tomato Seeds", price: "$5.99", image: "tomato.jpg" },
      { name: "Potato Seeds", price: "$3.49", image: "potato.jpg" },
      { name: "Carrot Seeds", price: "$4.99", image: "carrot.jpg" },
      { name: "Lettuce Seeds", price: "$2.99", image: "lettuce.jpg" },
      { name: "Corn Seeds", price: "$6.49", image: "corn.jpg" },
      { name: "Cucumber Seeds", price: "$3.99", image: "cucumber.jpg" },
      { name: "Brinjal Seeds", price: "$2.99", image: "brinjal.jpg" },
      { name: "Beetroot", price: "$1.00", image: "beetroot.jpg" }
     
      
      // Add more items here...<i class="fa-solid fa-xmark"></i>
    ];
  
  
    const wishlistContainer = document.getElementById("wishlist-container");
  
    // Function to create wishlist item HTML
    function createWishlistItem(item) {
      const wishlistItem = document.createElement("div");
      wishlistItem.classList.add("wishlist-item");
      wishlistItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.price}</p>
        <button class="add-to-cart-btn" onclick="addToCart('${item.name}')"><i class="fas fa-cart-plus"></i></button>
        <button class="remove-from-wishlist-btn" onclick="removeFromWishlist('${item.name}')"><i class="fa-solid fa-xmark"></i></button>
      `;
      return wishlistItem;
    }
  
    // Function to display wishlist items
    function displayWishlistItems() {
      wishlistContainer.innerHTML = "";
      wishlistItems.forEach(item => {
        const wishlistItem = createWishlistItem(item);
        wishlistContainer.appendChild(wishlistItem);
      });
    }
  
    // Function to remove item from wishlist
    window.removeFromWishlist = function(name) {
      const index = wishlistItems.findIndex(item => item.name === name);
      if (index !== -1) {
        wishlistItems.splice(index, 1);
        displayWishlistItems();
      }
    };
  
    // Function to add item to cart
    window.addToCart = function(name) {
      // Implement adding item to cart functionality
      alert(`Added ${name} to cart!`);
    };
  
    // Display wishlist items when the page loads
    displayWishlistItems();
  });
  