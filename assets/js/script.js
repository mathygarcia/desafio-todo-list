let html = "";
let entryCheckBox = Boolean;

addTask = document.querySelector("#input-task");
totalTasks = document.querySelector("#homework");
totalFinished = document.querySelector("#finished");
board = document.querySelector("#board");

/* creando arreglo de tareas */
let tareas = [
    {
        id: 8736478465765,
        task: "hacer mercado",
        finish: false,
    },

    {
        id: 9485856405230,
        task: "estudiar para la prueba",
        finish: false,
    },

    {
        id: 5236634859201,
        task: "sacar a pasear a tobby",
        finish: false,
    },
];

/* visualizamos la lista de tareas */
rendering();

/* creando funcion que agrega tareas */
function getHomework() {
    const newHomework = addTask.value;
    if (newHomework === "") {
        alert("No ingreso ninguna tarea ,Intentar Nuevamente.");
    } else {
        tareas.push({
            id: Date.now(),
            task: newHomework,
            finish: false,
        });
        addTask.value = "";
        rendering();
    }
}

/* creando funcion que chequea partir del id de la tarea  */
function checkTask(id) {
    checkBox = document.getElementById("checker").checked;
    const select = tareas.find((tarea) => tarea.id == id);
    select.finish = !select.finish;
    checkBox = select.finish;
    rendering();
}

/* creando funcion que elimina tarea a partir del id */
function deleteTask(id) {
    const i = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(i, 1);
    rendering();
}

/* creando que renderizara la lista de tareas */
function rendering() {
    let html = "";
    let compliment = tareas.filter((tarea) => tarea.finish == true);
    totalFinished.innerHTML = compliment.length;
    for (let tarea of tareas) {
        if (tarea.finish == true) {
            html += `
            <tr>
                <th scope="row"></th>
                <td>${tarea.id}</td>
                <td>${tarea.task}</td>
                <td>
                <i class="bi bi-check-square" id="checker" onclick="checkTask(${tarea.id})"></i></td>
                <td>
                <i class="bi bi-x-square x" onclick=deleteTask(${tarea.id})></i>
                </td>
            </tr> 
            `;
        } else {
            html += `
                <tr>
                    <th scope="row"></th>
                    <td>${tarea.id}</td>
                    <td>${tarea.task}</td>
                    <td>
                    <i class="bi bi-square" id="checker" onclick="checkTask(${tarea.id})"></i></td>
                    <td>
                    <i class="bi bi-x-square x" onclick=deleteTask(${tarea.id})></i>
                    </td>
                </tr>
            `;
        }
    }
    board.innerHTML = html;
    totalTasks.innerHTML = tareas.length;
}