const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const giticon = document.getElementById("giticon")
const linkicon = document.getElementById("linkicon")
const giticon_footer = document.getElementById("giticon-footer")
const linkicon_footer = document.getElementById("linkicon-footer")


themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeIcon.src = "images/moon-icon.svg";  
    giticon.src = "images/github_icon.svg"; 
    linkicon.src = "images/linkedin_icon.svg";  
    giticon_footer.src = "images/github_icon.svg"; 
    linkicon_footer.src = "images/linkedin_icon.svg"; 
  } else {
    themeIcon.src = "images/sun-icon.svg";  
    giticon.src = "images/github-light.svg";  
    linkicon.src = "images/linkedin-light.svg";  
    giticon_footer.src = "images/github-light.svg";  
    linkicon_footer.src = "images/linkedin-light.svg";  
    
    
  }
});
