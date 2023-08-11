
let inputTask = document.querySelector('#input-task');
let addBtn = document.querySelector('#plus');
let taskContainer = document.querySelector('.task-container');
// let check = false;

addBtn.addEventListener('click', function () {

    let task = document.createElement('div');
    task.classList.add('task');

    let p = document.createElement('p');
    p.innerText = `${inputTask.value}`
    task.appendChild(p);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = "<i class='bx bx-check'></i>";
    checkBtn.classList.add('check-btn');
    task.appendChild(checkBtn);

    checkBtn.addEventListener('click', function () {
        p.classList.add('current-task');

        /* if (check === false) {
            checkBtn.innerHTML = "<i class='bx bx-x'></i>";
            check = true;
        } else if (check === true) {
            checkBtn.innerHTML = "<i class='bx bx-check'></i>";
            check = false;
        }*/
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "<i class='bx bxs-trash'></i>";
    deleteBtn.classList.add('delete-btn');
    task.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function (e) {
        target = e.target;
        this.parentElement.remove();
    })

    if (inputTask.value === "") {
        alert('Please Enter a Task');
    } else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";
});