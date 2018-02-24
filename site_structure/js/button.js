"use strict";

// go to menu page
// citation: https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript
function clickMenu() {
    window.location.href = "menu.html"
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

// reset contact us forms (clear fields)
function clickCancelContact() {
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";
    document.getElementById("request").value = "";
}