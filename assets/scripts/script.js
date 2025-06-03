// 1. Identificar elementos en el DOM
const inputTarea = document.querySelector("#campo-tarea")
const btnTarea = document.getElementById("agregar-tarea")
const totalTareas = document.getElementById("q-tareas")
const tareasPendientes = document.getElementById("q-pendientes")
const tareasCompletadas = document.getElementById("q-completadas")
const listaTareas = document.getElementById("tabla-tareas")
let ultimoIndice = 4

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
    if (valor.length <= 2) {
        alert ("La tarea debe tener al menos dos palabras")
    return
    }
    agregarTarea(valor)
})

// 4. Agregar la tarea al listado de tareas
function agregarTarea (valor) {
   const objetoTarea = 
    {
        id: ++ultimoIndice,
        tarea: valor,
        completada: false,
    }
    
    tareas.push(objetoTarea)
    mostrarTareas()
    inputTarea.value = ""

}



// 4. Mostrar tareas en la tabla

function mostrarTareas() {
    let texto = "";

    tareas.map((tarea) => `
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.tarea}</td>
            <td><input type='checkbox' onChange="completarTarea(${tarea.id}, this.checked)" ${tarea.completada ? 'checked="checked"' : ''}></td>
            <td><button onClick="eliminar(${tarea.id})"><img src="./assets/img/cruz.png" style="width:10px"></img></button></td>
        </tr>
        `)
        .forEach((linea) => { texto += linea });

    listaTareas.innerHTML = texto;
    resumenTareas()
}

mostrarTareas();

// 5. Crear la función eliminar para eliminar una tarea

function eliminar (id) {
const index = tareas.findIndex(tarea => id == tarea.id)
tareas.splice(index,1)
mostrarTareas()
}

// 6. Completar tareas

function completarTarea(id, completado) {
const index = tareas.findIndex(tarea => id == tarea.id)
tareas[index].completada = completado
mostrarTareas()

console.log(tareas)
}

// Resumen de tareas
function resumenTareas () {
    const cantidadTareas = tareas.length
totalTareas.innerHTML = cantidadTareas
    const cantidadCompletadas =  tareas.filter(tarea => tarea.completada == true).length 
tareasCompletadas.innerHTML = cantidadCompletadas

tareasPendientes.innerHTML = cantidadTareas - cantidadCompletadas
}
