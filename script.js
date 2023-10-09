document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (username && email && password) {
        // Logic for successful submission
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields.');
    }
});
