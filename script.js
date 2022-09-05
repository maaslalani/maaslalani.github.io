// Dragging

let target = null,
	isMouseDown = false,
	offset = [0, 0];

const {innerWidth, innerHeight} = window;

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelectorAll('.moveable').forEach(el => {
	el.style.top = random(0, innerHeight - el.offsetHeight) + 'px';
	el.style.left = random(0, innerWidth - el.offsetWidth) + 'px';

	el.addEventListener('mousedown', (e) => {
		el.style.zIndex = getHighestZIndex() + 1;
	}, true);

	el.querySelector('.title-bar').addEventListener('mousedown', (e) => {
		isMouseDown = true;
		target = e.target.parentNode;
		offset = [target.offsetLeft - e.clientX, target.offsetTop - e.clientY];
	}, true);
});

document.addEventListener('mouseup', function(event) {
	isMouseDown = false;
	offset = [0, 0];
	target = null;
}, true);

document.addEventListener('mousemove', function(event) {
	event.preventDefault();
	if (!isMouseDown) {
		return
	}
	const { clientX, clientY } = event;
	target.style.left = (clientX + offset[0]) + 'px';
	target.style.top  = (clientY + offset[1]) + 'px';
}, true);

function getHighestZIndex() {
	let highest = 0;
	document.querySelectorAll('.moveable').forEach((el) => {
		if (el.style.zIndex > highest) {
			highest = el.style.zIndex;
		}
	});
	return parseInt(highest);
}
