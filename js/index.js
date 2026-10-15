let buttons = document.querySelectorAll('#menu-buttons .button');
let dots = document.querySelectorAll('#nav-projects a');
let activeButton = null;
let activeDot = null;

let container = document.getElementById('right-container');
let containerProject = document.getElementById('projects');

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

function resetPosition() {
    if (location.hash) {
        history.replaceState(null, '', location.pathname + location.search);
    }
    container.scrollTo({ left: 0, top: 0, behavior: 'instant' });
    containerProject.scrollTo({ top: 0, behavior: 'instant' });
}

resetPosition();
window.addEventListener('load', resetPosition);
window.addEventListener('pageshow', resetPosition);

let sectionButtonMap = {
    'home-container': buttons[0],
    'about-container': buttons[1],
    'project-container': buttons[2],
    'skills-container': buttons[3],
};

let sectionButtonMapProjects = {};
dots.forEach(dot => {
    sectionButtonMapProjects[dot.getAttribute('href').slice(1)] = dot;
});

function changeColorButton(button) {
    if (activeButton === button) return;

    if (activeButton) activeButton.classList.remove('active');
    button.classList.add('active');

    activeButton = button;
}

function changeColorDots(dot) {
    if (activeDot === dot) return;

    if (activeDot) activeDot.classList.remove('active');
    dot.classList.add('active');

    activeDot = dot;
}

changeColorButton(buttons[0]);
changeColorDots(dots[0]);

let observerOptions = {
    root: container,
    threshold: 0.5
};

let observerOptionsProject = {
    root: containerProject,
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const matchingButton = sectionButtonMap[entry.target.id];
            if (matchingButton) {
                changeColorButton(matchingButton);
            }
        }
    });
}, observerOptions);

const observerDots = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const matchingDot = sectionButtonMapProjects[entry.target.id];
            if (matchingDot) {
                changeColorDots(matchingDot);
            }
        }
    });
}, observerOptionsProject);

Object.keys(sectionButtonMap).forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
});

document.querySelectorAll('.project').forEach(project => observerDots.observe(project));