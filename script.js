// Example of JavaScript to add interactivity (such as greeting message)
document.addEventListener('DOMContentLoaded', function () {
    const greeting = document.createElement('p');
    greeting.textContent = "Hello, welcome to ChatGPT's site!";
    document.body.insertBefore(greeting, document.querySelector('header').nextSibling);

    // You can add more interactive features here
    // Example: a simple alert when clicking on the header
    document.querySelector('header').addEventListener('click', function () {
        alert('Header clicked! Welcome to ChatGPT!');
    });
});
