// 1. Identificar elementos en el DOM
const inputTarea = document.querySelector("#campo-tarea")
const btnTarea = document.getElementById("agregar-tarea")
const totalTareas = document.getElementById("q-tareas")
const tareasPendientes = document.getElementById("q-pendientes")
const tareasCompletadas = document.getElementById("q-pendientes")
const listaTareas = document.getElementById("tabla-tareas")

//2. Crear el arreglo
const tareas = [
    {
        id: 1,
        tarea: "Desayunar",
        completada: true,
    }
    ,

    {
        id: 2,
        tarea: "Almorzar",
        completada: false,
    }

    ,

    {
        id: 3,
        tarea: "Tomar 11",
        completada: false,
    }

    ,

    {
        id: 4,
        tarea: "Cenar",
        completada: true,
    }


]

// 3. Iniciar la acción: Presionar botón AGREGAR

btnTarea.addEventListener("click", () => {
    const valor = inputTarea.value

})

// 4. Mostrar tareas en la tabla

function mostrarTareas() {
    let texto = "";

    tareas.map((tarea) => `
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.tarea}</td>
            <td><input type='checkbox' ${tarea.completada ? 'checked="checked"' : ''}></td>
            <td><img src="./assets/img/cruz.png" style="width:10px"></img></td>
        </tr>
        `)
        .forEach((linea) => { texto += linea });

    listaTareas.innerHTML = texto;
}

mostrarTareas();