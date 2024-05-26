// let todos = JSON.parse(localStorage.getItem('todos')) || [];

// function addTodo() {
//   const todoInput = document.getElementById('todoInput');
//   const imageInput = document.getElementById('imageInput');
//   const priceInput = document.getElementById('priceInput');
//   const commentInput = document.getElementById('commentInput');

//   const todoText = todoInput.value.trim();
//   const imageUrl = URL.createObjectURL(imageInput.files[0]);
//   const price = priceInput.value;
//   const comment = commentInput.value;

//   if (todoText !== '') {
//     const newItem = {
//       todo: todoText,
//       image: imageUrl,
//       price: price,
//       comment: comment
//     };

//     todos.push(newItem);
//     displayTodos();
//     saveTodos();

    
//     todoInput.value = '';
//     imageInput.value = '';
//     priceInput.value = '';
//     commentInput.value = '';
//   }
// }

// function displayTodos() {
//   const todoList = document.getElementById('todoList');
//   todoList.innerHTML = '';
//   todos.forEach((todo, index) => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       <div class="todo-item">
//         <div class="todo-number">${index + 1}</div>
//         <div class="todo-text">${todo.todo}</div>
//         <div class="todo-image"><img src="${todo.image}" alt=""></div>
//         <div class="todo-price">${todo.price}</div>
//         <div class="todo-comment">${todo.comment}</div>
//         <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
//       </div>
//     `;
//     todoList.appendChild(li);
//   });
// }

// function saveTodos() {
//   localStorage.setItem('todos', JSON.stringify(todos));
// }

// document.addEventListener('DOMContentLoaded', function() {
//   displayTodos();
// });

// function deleteTodo(index) {
//   todos.splice(index, 1);
//   displayTodos();
//   saveTodos();
// }



// function addItem() {
//   const itemInput = document.getElementById('itemInput');
//   const priceInput = document.getElementById('priceInput');
//   const commentInput = document.getElementById('commentInput');
//   const imageInput = document.getElementById('imageInput');

//   const itemText = itemInput.value.trim();
//   const price = priceInput.value;
//   const comment = commentInput.value;
//   const imageUrl = URL.createObjectURL(imageInput.files[0]);

//   if (itemText !== '') {
//     const newItem = {
//       item: itemText,
//       price: price,
//       comment: comment,
//       image: imageUrl
//     };

//     todos.push(newItem);
//     displayItems(); 
//     saveTodos();

  
//     itemInput.value = '';
//     priceInput.value = '';
//     commentInput.value = '';
//     imageInput.value = '';
//   }
// }

// function displayItems() {
//   const todoList = document.getElementById('todoList');
//   todoList.innerHTML = '';
//   todos.forEach((todo, index) => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       <div class="todo-item">
//         <div class="todo-number">${index + 1}</div>
//         <div class="todo-text">${todo.item}</div>
//         <div class="todo-image"><img src="${todo.image}" alt=""></div>
//         <div class="todo-price">${todo.price}</div>
//         <div class="todo-comment">${todo.comment}</div>
//       </div>
//     `;
//     todoList.appendChild(li);
//   });
// }

// function addItem() {
//   const itemName = document.getElementById('itemName').value.trim();
//   const itemDescription = document.getElementById('itemDescription').value.trim();
//   const itemPrice = parseFloat(document.getElementById('itemPrice').value);

//   if (itemName !== '' && itemDescription !== '' && !isNaN(itemPrice)) {
//     const newItem = {
//       name: itemName,
//       description: itemDescription,
//       price: itemPrice
//     };

//     let items = JSON.parse(localStorage.getItem('items')) || [];
//     items.push(newItem);
//     localStorage.setItem('items', JSON.stringify(items));

//     alert('Item added successfully!');
//   } else {
//     alert('Please fill in all fields correctly.');
//   }
// }


// document.addEventListener('DOMContentLoaded', function() {
//   displayItems(); 
// });

// function addItem() {
//   const itemName = document.getElementById('itemName').value.trim();
//   const itemDescription = document.getElementById('itemDescription').value.trim();
//   const itemPrice = parseFloat(document.getElementById('itemPrice').value);

//   if (itemName !== '' && itemDescription !== '' && !isNaN(itemPrice)) {
//     const newItem = {
//       name: itemName,
//       description: itemDescription,
//       price: itemPrice
//     };

//     let items = JSON.parse(localStorage.getItem('items')) || [];
//     items.push(newItem);
//     localStorage.setItem('items', JSON.stringify(items));

//     displayItems();
//     alert('Item added successfully!');
//   } else {
//     alert('Please fill in all fields correctly.');
//   }
// }

// function displayItems() {
//   const itemList = document.getElementById('itemList');
//   itemList.innerHTML = '';

//   const items = JSON.parse(localStorage.getItem('items')) || [];

//   items.forEach((item, index) => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       <span>${item.name} - ${item.description} - ${item.price}</span>
//       <button onclick="editItem(${index})">Edit</button>
//       <button onclick="deleteItem(${index})">Delete</button>
//     `;
//     itemList.appendChild(li);
//   });
// }

// function editItem(index) {
//   let items = JSON.parse(localStorage.getItem('items')) || [];
//   const newItemName = prompt('Enter new name for the item:');
//   const newItemDescription = prompt('Enter new description for the item:');
//   const newItemPrice = parseFloat(prompt('Enter new price for the item:'));

//   if (newItemName !== '' && newItemDescription !== '' && !isNaN(newItemPrice)) {
//     items[index].name = newItemName;
//     items[index].description = newItemDescription;
//     items[index].price = newItemPrice;

//     localStorage.setItem('items', JSON.stringify(items));
//     displayItems(); 
//     alert('Item updated successfully!');
//   } else {
//     alert('Invalid input. Please try again.');
//   }
// }

// function deleteItem(index) {
//   let items = JSON.parse(localStorage.getItem('items')) || [];
//   items.splice(index, 1);
//   localStorage.setItem('items', JSON.stringify(items));
//   displayItems();
//   alert('Item deleted successfully!');
// }
// function deleteItem(index) {
//   todos.splice(index, 1);
//   displayItems(); 
//   saveTodos();
// }


// function editItem(index) {

// }





















// let items = JSON.parse(localStorage.getItem('items')) || [];

// function addItem() {
//   const itemName = document.getElementById('itemName').value.trim();
//   const itemDescription = document.getElementById('itemDescription').value.trim();
//   const itemPrice = parseFloat(document.getElementById('itemPrice').value);
//   const imageInput = document.getElementById('itemImage');
//   const imageUrl = URL.createObjectURL(imageInput.files[0]);

//   if (itemName !== '' && itemDescription !== '' && !isNaN(itemPrice) && imageUrl) {
//     const newItem = {
//       name: itemName,
//       description: itemDescription,
//       price: itemPrice,
//       image: imageUrl
//     };

//     items.push(newItem);
//     saveItems();
//     displayItems();
//     clearInputFields();
//   } else {
//     alert('Please fill in all fields correctly.');
//   }
// }

// function displayItems() {
//   const itemList = document.getElementById('itemList');
//   itemList.innerHTML = '';

//   items.forEach((item, index) => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       <div class="item-container">
//         <img src="${item.image}" alt="${item.name}">
//         <div class="item-details">
//           <span>${item.name} - ${item.description} - ${item.price}</span>
//           <button onclick="editItem(${index})">Edit</button>
//           <button onclick="deleteItem(${index})">Delete</button>
//         </div>
//       </div>
//     `;
//     itemList.appendChild(li);
//   });
// }

// function editItem(index) {
//   const newName = prompt('Enter new name for the item:', items[index].name);
//   const newDescription = prompt('Enter new description for the item:', items[index].description);
//   const newPrice = parseFloat(prompt('Enter new price for the item:', items[index].price));
  
//   if (newName !== null && newDescription !== null && !isNaN(newPrice)) {
//     items[index].name = newName.trim();
//     items[index].description = newDescription.trim();
//     items[index].price = newPrice;
//     saveItems();
//     displayItems();
//   }
// }

// function deleteItem(index) {
//   items.splice(index, 1);
//   saveItems();
//   displayItems();
// }

// function saveItems() {
//   localStorage.setItem('items', JSON.stringify(items));
// }

// function clearInputFields() {
//   document.getElementById('itemName').value = '';
//   document.getElementById('itemDescription').value = '';
//   document.getElementById('itemPrice').value = '';
//   document.getElementById('itemImage').value = '';
// }

// document.addEventListener('DOMContentLoaded', function() {
//   displayItems();
// });

















let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem() {
  const itemName = document.getElementById('itemName').value.trim();
  const itemDescription = document.getElementById('itemDescription').value.trim();
  const itemPrice = parseFloat(document.getElementById('itemPrice').value);
  const imageInput = document.getElementById('itemImage');
  const imageUrl = URL.createObjectURL(imageInput.files[0]);

  if (itemName !== '' && itemDescription !== '' && !isNaN(itemPrice) && imageUrl) {
    const newItem = {
      name: itemName,
      description: itemDescription,
      price: itemPrice,
      image: imageUrl
    };

    items.push(newItem);
    saveItems();
    displayItems();
    clearInputFields();
  } else {
    alert('Please fill in all fields correctly.');
  }
}

function displayItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="item-container">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <span>${item.name} - ${item.description} - ${item.price}</span>
          <button onclick="editItem(${index})">Edit</button>
          <button onclick="deleteItem(${index})">Delete</button>
        </div>
      </div>
    `;
    itemList.appendChild(li);
  });
}

function editItem(index) {
  const newName = prompt('Enter new name for the item:', items[index].name);
  const newDescription = prompt('Enter new description for the item:', items[index].description);
  const newPrice = parseFloat(prompt('Enter new price for the item:', items[index].price));
  
  if (newName !== null && newDescription !== null && !isNaN(newPrice)) {
    items[index].name = newName.trim();
    items[index].description = newDescription.trim();
    items[index].price = newPrice;
    saveItems();
    displayItems();
  }
}

function deleteItem(index) {
  items.splice(index, 1);
  saveItems();
  displayItems();
}

function saveItems() {
  localStorage.setItem('items', JSON.stringify(items));
}

function clearInputFields() {
  document.getElementById('itemName').value = '';
  document.getElementById('itemDescription').value = '';
  document.getElementById('itemPrice').value = '';
  document.getElementById('itemImage').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
  displayItems();
});
