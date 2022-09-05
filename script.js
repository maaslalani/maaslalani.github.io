// Dragging

let target = null, isMouseDown = false, offset = [0, 0];

document.querySelectorAll('.moveable > .title-bar').forEach((el) => {
	el.addEventListener('mousedown', (e) => {
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
