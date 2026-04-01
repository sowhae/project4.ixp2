// This code will toggle the class 'show-menu' on the body tag
// when an element (usually a <button>) with the class 'js-menu-trigger' is clicked
//
// In your HTML:
// <button class="js-menu-trigger">Toggle</button>

const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

toggle.addEventListener('click', () => {
	const isDark = root.getAttribute('data-theme') === 'dark';
	root.setAttribute('data-theme', isDark ? 'light' : 'dark');
	toggle.textContent = isDark ? 'Light' : 'Dark';
});