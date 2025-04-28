const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const giticon = document.getElementById("giticon")
const linkicon = document.getElementById("linkicon")

document.body.classList.add("dark-mode");  

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.src = "images/sun-icon.svg";  
    giticon.src = "images/github-light.svg";  
    linkicon.src = "images/linkedin-light.svg";  
  } else {
    themeIcon.src = "images/moon-icon.svg";  
    
    giticon.src = "images/github_icon.svg"; 
    linkicon.src = "images/linkedin_icon.svg";  
  }
});
