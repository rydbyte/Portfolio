const root = document.documentElement;
let switcher = document.getElementById("theme-switcher")

const lightIcon = ""
const darkIcon = "󰖔"

function toggleTheme() {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    root.setAttribute("data-theme", next);
    switcher.innerHTML = next === "light" ? lightIcon : darkIcon
}

if (localStorage.getItem("theme") === "light") {
    switcher.innerHTML = lightIcon;
    root.setAttribute("data-theme", "light");
} else {
    switcher.innerHTML = darkIcon;
    root.setAttribute("data-theme", "dark");
}

