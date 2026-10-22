function trackActive({root, targets, items, getTargetId}) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            items.forEach((item) => {
                item.classList.toggle('active', getTargetId(item) === entry.target.id);
            });
        });
    }, {root, threshold: 0.6});

    targets.forEach((t) => observer.observe(t));
}

trackActive({
    root: document.querySelector('#right-container'),
    targets: document.querySelectorAll(
        '#home-container, #about-container, #project-container, #skills-container, #contact-container'
    ),
    items: document.querySelectorAll('.button'),
    getTargetId: (button) =>
        button.querySelector('.side-link').getAttribute('href').slice(1),
});

trackActive({
    root: document.querySelector('#projects'),
    targets: document.querySelectorAll('.project'),
    items: document.querySelectorAll('#nav-projects a'),
    getTargetId: (dot) => dot.getAttribute('href').slice(1),
});