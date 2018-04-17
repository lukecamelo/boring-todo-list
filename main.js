function addItem() {
  let ul = document.querySelector('#list');
  let userInput = document.querySelector('#userInput');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(userInput.value));
  ul.appendChild(li);
  li.onclick = removeItem;
}

function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
}