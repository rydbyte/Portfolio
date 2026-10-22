const root = document.documentElement;
let switcher = document.getElementById("theme-switcher")

const lightIcon = ""
const darkIcon = "󰖔"

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    switcher.innerHTML = theme === "light" ? lightIcon : darkIcon

}

function toggleTheme() {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    applyTheme(next);
}

applyTheme(localStorage.getItem("theme"));

// code from: https://github.com/NKijpma/portfolio