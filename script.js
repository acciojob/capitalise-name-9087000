function convertToUppercase() {
    // Get the input field
    const inputField = document.getElementById("fname");
    
    // Convert the value to uppercase
    inputField.value = inputField.value.toUpperCase();
}

// Add the event listener for "blur" event explicitly
document.getElementById("fname").addEventListener("blur", convertToUppercase);
