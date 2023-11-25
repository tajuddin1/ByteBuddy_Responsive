function toggleTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  
    var themeButton = document.getElementById("themeButton");
    if (themeButton.innerHTML === "Dark mode") {
      themeButton.innerHTML = "Light mode";
    } else {
      themeButton.innerHTML = "Dark mode";
    }
  }
  
