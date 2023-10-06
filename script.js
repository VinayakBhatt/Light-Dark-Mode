// Coupon Script
function closeCoupon() {
    var couponSection = document.getElementById("coupon");
    couponSection.style.display = "none";
}

// Light And Dark Mode JS script
function toggleMode() {
    const body = document.body;
    const container = document.getElementById('myContainer');

    body.classList.toggle('light-mode');
    container.classList.toggle('light-mode');
}

