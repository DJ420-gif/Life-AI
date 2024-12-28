// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

// Scroll Progress Bar
const progressBar = document.createElement('div');
progressBar.id = 'progress-bar';
document.body.appendChild(progressBar);

// Show the button and update progress bar when scrolling
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    // Display Progress Bar
    progressBar.style.width = `${scrollPercentage}%`;
    if (scrollPosition > 200) {
        backToTopButton.classList.add('show');
        progressBar.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
        progressBar.classList.remove('show');
    }
});

// Scroll to top with smooth animation
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Back to Top Button functionality
const backToTopBtn = document.getElementById('back-to-top');
window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
