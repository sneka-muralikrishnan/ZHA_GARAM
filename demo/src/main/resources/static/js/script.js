document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = this.getAttribute("href");
        });
    });

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        });
    }

    const checkoutButton = document.getElementById("checkoutButton");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", function() {
            alert("Order Placed Successfully!");
        });
    }
});