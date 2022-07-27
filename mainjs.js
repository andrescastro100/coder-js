/*for(var i = 1; i <= 5; i++)
{
    alert("Valor de i es: " + i);
}
*/
class User {

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
    
    alert("Los productos cargados Son:\n" + mostrar(articulo))
        
        







