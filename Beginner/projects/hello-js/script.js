const button = document.getElementById("greetBtn");
const input = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

button.addEventListener("click", () => {
    const name = input.value.trim();
    if(name) {
        greeting.textContent = `Hello, ${name}! Welcome to JavaScript.`;
    } else {
        alert("Please enter your name.");
    }
});
