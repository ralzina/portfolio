const images = ["images/about-photo1.png", "images/about-photo2.png"];
let currentImage = 0;

document.getElementById("next").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("carousel-image").src = images[currentImage];
});

document.getElementById("prev").addEventListener("click", () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  document.getElementById("carousel-image").src = images[currentImage];
});

// Light and dark mode toggle


// Get the theme toggle button and icon
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const giticon = document.getElementById("giticon")
const linkicon = document.getElementById("linkicon")

document.body.classList.remove("dark-mode");  // Remove dark mode class by default

// Toggle the theme on click
themeToggle.addEventListener("click", () => {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle("dark-mode");

  // Change the icon based on the current theme
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.src = "images/sun-icon.svg";  // sun icon for dark mode
    giticon.src = "images/github-light.svg";  // Git icon for light mode
    linkicon.src = "images/linkedin-light.svg";  // LinkedIn icon for light mode
  } else {
    themeIcon.src = "images/moon-icon.svg";  // moon icon for light mode
    
    giticon.src = "images/github_icon.svg";  // Git icon for dark mode
    linkicon.src = "images/linkedin_icon.svg";  // LinkedIn icon for dark mode
  }
});
