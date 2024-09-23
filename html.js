// JavaScript for adding items to the cart
document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.cart-icon');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            cartCount++;
            cartIcon.textContent = `Cart (${cartCount})`;
            alert('Item added to cart!');
        });
    });
});
