/*for(var i = 1; i <= 5; i++)
{
    alert("Valor de i es: " + i);
}
*/
/*class User {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Articulo{

	constructor(descripcion, precio){
		this.descripcion = descripcion;
		this.precio = precio;   
	}
    asignarId(array){
        this.id = array.length;
    }
}

const articulo = [
    new Articulo("Vino","500"),
    new Articulo("Cerveza","300"),
    new Articulo("Fernet","700"),
    new Articulo("Vodka","700"),
    new Articulo("Gin","750") 
]


let nomUser= prompt("Ingrese su Nombre: ");
let edadUser= prompt("Ingrese su Edad: ");

Usuario1= new User(nomUser.toUpperCase(),edadUser);

bandera2=1; 

    if ( edadUser >= 18){
        mostrar;
    }

    else{
        alert("Hola " + nomUser + " te informamos que no cumples con la edad minima requerida");
    }

    function mostrar(articulo, index) {
        let verArticulo = ''
        articulo.forEach((el, index) => {
            verArticulo += (index + 1) + "-" + "Nombre: " + el.descripcion + ' - ' + "Precio: " + el.precio + "\n"
        })
        console.log(verArticulo)
        return verArticulo
    } 
    
    alert("Los productos cargados Son:\n" + mostrar(articulo)) */
    

const formularioUI= document.querySelector('#formulario');
const listaUI = document.getElementById('listaGuardada');

let array = [];



const crearItem = (actividad) => {
    let item = {
        actividad: actividad,
        estado: false
    }
    array.push(item);
    return item;
}

const guardarDB = () => {
    localStorage.setItem('rutina', JSON.stringify(array));
    pintarDB();
}

const pintarDB = () =>{
    listaUI.innerHTML = '';
    array= JSON.parse(localStorage.getItem('rutina'));

    if(array === null){
        array = [];
    }
    else{
        array.forEach (element => {

            if(element.estado === true){
                listaUI.innerHTML += `<div class="alert alert-success" role="alert"><i class="material-symbols-outlined float-start mr-2">accessibility</i><b>${element.actividad}</b>-${element.estado}<span class="float-end"><i class="material-symbols-outlined">done</i><i class="material-symbols-outlined">delete</i></span></div>`
            }
            else{
                listaUI.innerHTML += `<div class="alert alert-primary" role="alert"><i class="material-symbols-outlined float-start mr-2">accessibility</i><b>${element.actividad}</b>-${element.estado}<span class="float-end"><i class="material-symbols-outlined">done</i><i class="material-symbols-outlined">delete</i></span></div>`
            }
            
            
        });
    }
}

const eliminarDB = (actividad) => {
    let indexArray; 
    array.forEach ((elemento,index) => {
        if(elemento.actividad === actividad) {
            indexArray =index;
        }
    });
    array.splice(indexArray,1);
    guardarDB();
}

const editarDB = (actividad) => {
    let indexArray = array.findIndex((elemento)=> elemento.actividad === actividad);
    console.log(indexArray);
    array[indexArray].estado=true

    guardarDB();
}


formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;
    console.log(actividadUI);
    crearItem(actividadUI);
    guardarDB();
    formularioUI.reset();
});

document.addEventListener('DOMContentLoaded', pintarDB);

listaUI.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete') {
        let ubicacion = e.path[2].childNodes[1].innerHTML;
        if(e.target.innerHTML === 'delete'){
            eliminarDB(ubicacion);
        }
        if(e.target.innerHTML === 'done'){
            editarDB(ubicacion);
        }
    };
})
