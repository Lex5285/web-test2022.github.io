function superClick(el) {
			el.style.background ='green';
			el.style.color ='black';
		}

var h3howed = false;

function changeDisplay() {
	const header3 = document.getElementById("1");
	header3.style.display=h3howed ? 'block' : 'none';
	h3howed = !h3howed;
}
