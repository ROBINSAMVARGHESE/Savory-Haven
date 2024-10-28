function openInNewTab(url) {
    window.open(url, '_blank');
}

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active"); // Toggle the nav menu
});

