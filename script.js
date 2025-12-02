document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const clearInputButton = document.getElementById('clearInputButton');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const text = taskInput.value.trim();
        if (text === "") {
            alert("Zəhmət olmasa tapşırıq daxil edin.");
            return;
        }

        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        listItem.innerHTML = `
            <span>${text}</span>
            <button class="delete-task">×</button>
        `;

        taskList.appendChild(listItem);
        taskInput.value = '';

        listItem.querySelector('.delete-task').addEventListener('click', () => {
            listItem.remove();
        });
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    clearInputButton.addEventListener('click', function() {
        taskInput.value = '';
        taskInput.focus();
    });
});



