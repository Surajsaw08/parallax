

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let header = document.getElementById('header');
let tree = document.getElementById('tree');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Adjust styles only if the scroll position is within a certain range
    if (value < 1000) {
        text.style.marginTop = value * 2.5 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        header.style.left = value * -1.5 + 'px';
        header.style.top = value * 0.7 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 0.5 + 'px';
        tree.style.top = value * 0.5 + 'px';
    }
});

window.addEventListener('scroll', _.throttle(handleScroll, 16));