function createNewTask(e) {
    e.preventDefault();
    const list = document.getElementById('list');
    const input = document.getElementById('task');
    const li = document.createElement('li');

    li.innerHTML = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('custom-btn', 'btn-9');
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });

    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = '';

    li.addEventListener('click', () => {
        li.classList.toggle('strikethrough');
    });
}

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', createNewTask);