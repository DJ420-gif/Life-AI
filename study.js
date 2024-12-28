// Get references to elements
const backToTopButton = document.getElementById('back-to-top');

// Scroll Progress Bar
const progressBar = document.createElement('div');
progressBar.id = 'progress-bar';
document.body.appendChild(progressBar);

// Scroll functionality
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    // Update progress bar width
    progressBar.style.width = `${scrollPercentage}%`;

    // Show/hide Back to Top button and progress bar based on scroll position
    if (scrollPosition > 200) {
        backToTopButton.classList.add('show');
        progressBar.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
        progressBar.classList.remove('show');
    }
});

// Scroll to top functionality
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
