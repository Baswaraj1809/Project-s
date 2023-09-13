const inputText = document.getElementById("input-txt");
const btnAdd = document.getElementById("btn-add");
const ul = document.getElementById("ul-list");

let data = '';
inputText.addEventListener('input', function (ele) {
  data = ele.target.value;
});

btnAdd.addEventListener('click', function () {
  if (data.trim() !== '') {
    const childDiv = document.createElement('div');
    childDiv.classList.add('cdiv');
    childDiv.className="cdiv";

    const li = document.createElement('li');
    li.textContent = data;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    const radioBtn = document.createElement('input');
    radioBtn.type = 'checkbox';

    radioBtn.addEventListener('click', function () {
      if (radioBtn.checked) {
        li.classList.add('strikethrough');
      } else {
        li.classList.remove('strikethrough');
      }
    });

    editBtn.addEventListener('click', function () {
      const newText = window.prompt('Edit task:',data);
      if (newText !== null) {
        li.textContent = newText;
      }
    });

  
    deleteBtn.addEventListener('click', function () {
      ul.removeChild(childDiv);
    });

    childDiv.appendChild(radioBtn);
    childDiv.appendChild(li);
    childDiv.appendChild(editBtn);
    childDiv.appendChild(deleteBtn);
    ul.appendChild(childDiv);

    inputText.value = '';
    data = '';
  }
});

