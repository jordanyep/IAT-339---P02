"use strict";

// go to menu page
function clickMenu() {
    window.location.href = "menu.html#menu"
}

// go to order page
function clickOrder() {
    window.location.href = "order.html";
}

// go to order confirmation page
function clickPlaceOrder() {
    window.location.href = "order-confirm.html#content-section";
}

function clickConfirmOrder() {
    window.location.href="order-complete.html#content-section";
}

// reset order page forms/checkboxes (clear fields)
function clickCancelOrder() {
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("request").value = "";

    // *** there's probably a better way to do this haha... ***
    document.getElementById("topping-1").checked = false;
    document.getElementById("topping-2").checked = false;
    document.getElementById("topping-3").checked = false;
    document.getElementById("topping-4").checked = false;
    document.getElementById("topping-5").checked = false;
    document.getElementById("topping-6").checked = false;
    document.getElementById("topping-7").checked = false;
    document.getElementById("topping-8").checked = false;
}

// show confirmation message in after contact submission (about page)
function clickSubmit() {
    var message = document.getElementById("confirm-message");
    message.classList.remove("hidden");
    message.setAttribute("aria-hidden", "false");

    // clear the forms
    clickCancelContact();
}

// reset contact us forms (clear fields)
function clickCancelContact() {
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";
    document.getElementById("request").value = "";
}

