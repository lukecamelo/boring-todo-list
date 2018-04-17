function addItem() {
  let ul = document.getElementById('list');
  let userInput = document.getElementById('userInput');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(userInput.value));
  ul.appendChild(li);
}

function removeItem() {
  let listItem = document.getElementByClassName('item');
  listItem.addEventListener('click', function() {
    
  });
}