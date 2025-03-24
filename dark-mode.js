document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Add event listener for the dark mode toggle
    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelectorAll('nav a').forEach(element => {
            element.classList.toggle('dark-mode');
        });
        document.querySelectorAll('table, th, td, tr').forEach(element => {
            element.classList.toggle('dark-mode');
        });
    });

    // Initialize dark mode based on the checkbox state
    if (darkModeToggle.checked) {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelectorAll('nav a').forEach(element => {
            element.classList.add('dark-mode');
        });
        document.querySelectorAll('table, th, td, tr').forEach(element => {
            element.classList.add('dark-mode');
        });
    }
});