const input = document.getElementById('input');
const list = document.querySelector('.list');
const form = document.getElementById('form');
const ul = document.querySelector('ul');

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		e.preventDefault();
		const text = input.value;
		const ul = document.querySelector('ul');
		const item = document.createElement('li');
		item.innerText = text;

		ul.appendChild(item);

		input.value = '';
		console.log(text);
	}
});
list.addEventListener('click', function (event) {
	// check if the target element is an li item
	if (event.target && event.target.tagName === 'LI') {
		// console log the text content of the li item
		event.target.classList.toggle('checked');
	}
});
// Attach the contextmenu event listener to each list item
list.addEventListener('contextmenu', function (event) {
	// check if the target element is an li item
	if (event.target && event.target.tagName === 'LI') {
		// console log the text content of the li item
		event.target.remove();
		// prevent the right click window from opening
		event.preventDefault();
	}
});
