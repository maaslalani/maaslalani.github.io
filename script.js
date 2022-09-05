let target = null, isMouseDown = false, offset = [0, 0];
const {innerWidth, innerHeight} = window;

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelectorAll('.moveable').forEach(el => {
	el.style.top = random(30, innerHeight - el.offsetHeight) + 'px';
	el.style.left = random(5, innerWidth - el.offsetWidth) + 'px';
	el.addEventListener('mousedown', mouseDown(el), true);
	el.addEventListener('touchstart', mouseDown(el), true);
	el.querySelector('.title-bar').addEventListener('mousedown', titleMouseDown, true);
	el.querySelector('.title-bar').addEventListener('touchstart', titleMouseDown, true);
});

document.addEventListener('mouseup', mouseUp, true);
document.addEventListener('touchend', mouseUp, true);
document.addEventListener('mousemove', mouseMove, true);
document.addEventListener('touchmove', mouseMove, { passive: false });

function mouseDown(el) {
	return function(e) {
		el.style.zIndex = getHighestZIndex() + 1;
	}
}

function titleMouseDown(e) {
	isMouseDown = true;
	target = e.target.parentNode;
	offset = [target.offsetLeft - eventClientX(e), target.offsetTop - eventClientY(e)];
}

function mouseUp(e) {
	isMouseDown = false;
	offset = [0, 0];
	target = null;
}

function mouseMove(e) {
	if (!isMouseDown) {
		return
	}
	e.preventDefault();
	target.style.left = (eventClientX(e) + offset[0]) + 'px';
	target.style.top  = (eventClientY(e) + offset[1]) + 'px';
}

function getHighestZIndex() {
	let highest = 0;
	document.querySelectorAll('.moveable').forEach((el) => {
		const zIndex = parseInt(el.style.zIndex);
		if (zIndex > highest) {
			highest = zIndex;
		}
	});
	return highest;
}

function eventClientX(e) {
	return e.clientX || e.touches[0].clientX;
}

function eventClientY(e) {
	return e.clientY || e.touches[0].clientY;
}
