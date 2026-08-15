// ========================================
// CONTACT PAGE FUNCTION
// ========================================

function sendMessage() {

    let name = document.getElementById("contactName").value;
    let phone = document.getElementById("contactPhone").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage").value;

    // Check required fields
    if (
        name.trim() === "" ||
        phone.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    alert("Message sent successfully! 🎉");

    // Clear form fields
    document.getElementById("contactName").value = "";
    document.getElementById("contactPhone").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactMessage").value = "";
}


// ========================================
// REPORT LOST ITEM FUNCTION
// ========================================

function saveItem() {

    let item = document.getElementById("itemName").value;
    let location = document.getElementById("locationLost").value;
    let contactPhone = document.getElementById("contactPhone").value;
    let date = document.getElementById("dateLost").value;
    let description = document.getElementById("description").value;

    // Check required fields
    if (
        item.trim() === "" ||
        location.trim() === "" ||
        contactPhone.trim() === "" ||
        description.trim() === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    alert(
        "Report Submitted Successfully! 🎉\n\n" +
        "Item: " + item +
        "\nLocation: " + location +
        "\nContact Number: " + contactPhone +
        "\nDate: " + (date || "Not Provided") +
        "\nDescription: " + description
    );

    // Clear form fields
    document.getElementById("itemName").value = "";
    document.getElementById("locationLost").value = "";
    document.getElementById("contactPhone").value = "";
    document.getElementById("dateLost").value = "";
    document.getElementById("description").value = "";
}
