const toggleTag = document.querySelector('a.toggle-nav');
const maintag = document.querySelector('main');

toggleTag.addEventListener('click', () => {
	maintag.classList.toggle('open');

	// if (maintag.classList.contains('open')) {
	// 	toggleTag.innerHTML = 'Close';
	// }

	maintag.classList.contains('open')
		? (toggleTag.innerHTML = `<img src='assets/images/close.svg' /> Close`)
		: (toggleTag.innerHTML = `<img src='assets/images/menu.svg'/> Menu`);
});

const slideArea = document.querySelector('div.slides');

const images = slideArea.querySelectorAll('img');

let currSlide = 0;
let z = 1;

slideArea.addEventListener('click', () => {
	currSlide += 1;
	if (currSlide > images.length - 1) {
		currSlide = 0;
	}
	z += 1;

	images[currSlide].style.zIndex = z;
	images[currSlide].style.animation = 'fade 0.5s';
});

slideArea.addEventListener('mouseover', () => {
	images.forEach((image) => {
		const x = 25 * Math.floor(Math.random() * 5) - 50;
		const y = 25 * Math.floor(Math.random() * 5) - 50;

		image.style.transform = `translate(${x}px, ${y}px)`;
	});
});

slideArea.addEventListener('mouseout', () => {
	images.forEach((image) => {
		image.style.transform = '';
	});
});
