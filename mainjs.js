/*for(var i = 1; i <= 5; i++)
{
    alert("Valor de i es: " + i);
}
*/
class User {
    constructor(nombre, edad, num,cantidad,total) {
        this.nombre = nombre;
        this.edad = edad;
        this.num = num;
        this.cantidad = cantidad;
        this.total = total;
    }
}
usuarios=[];

let bandera=1,calc=0,bandera1=1,bandera2=1;
const bebidas=[vino=250, vodka=300, fernet=500, gin=500, cerveza=200]; 



    while (bandera==1){
        select(bebidas);
    }

function select (){
    
    while (bandera1==1){
    let cantidadBe= [cantidadvino=0,cantidadvodka=0,cantidadfernet=0,cantidadgin=0,cantidadcerveza=0];
    let nomUser = prompt("Ingrese su nombre: ");
    let edadUser = prompt("Ingrese edad: ");
    let numUser = prompt("ingrese un numero de contacto");
    let carrito = []; 
    if ( edadUser >= 18){
        while (bandera2==1){
            let opcion= prompt("Ingrese su bebida \n 1) vino: "+bebidas[0]+"\n  2) vodka: "+bebidas[1]+"\n 3) fernet: "+bebidas[2]+"\n 4) gin: "+bebidas[3]+"\n 5) cerveza: "+ bebidas[4]);
            switch (opcion){
            
            case '1': 
            cantidadBe[0]=prompt("ingrese la cantidad de copas de Vino $" + bebidas[0]+" c/u");
            if (cantidadBe[0]!=0){
            carrito.push(bebidas[0]*cantidadBe[0]);
            }
            break;
            
            case '2': 
            cantidadBe[1]=prompt("ingrese la cantidad de vasos de Vodka $"+ bebidas[1]+" c/u");
            if (cantidadBe[1] != 0){
            carrito.push(bebidas[1]*cantidadBe[1]);
            }
            break
            
            case '3': 
            cantidadBe[2]=prompt("ingrese la cantidad de vasos de Vodka $"+ bebidas[2]+" c/u");
            if (cantidadBe[2] != 0){
            carrito.push(bebidas[2]*cantidadBe[2]);
            }
            break;
        
            
            case '4':
            cantidadBe[3]=prompt("ingrese la cantidad de vasos de Vodka $"+ bebidas[3]+" c/u");
            if (cantidadBe[3] != 0){
            carrito.push(bebidas[3]*cantidadBe[3]);
            }
            break;
        
            
            case '5': 
            cantidadBe[4]=prompt("ingrese la cantidad de vasos de Vodka $"+ bebidas[4]+" c/u");
            if (cantidadBe[4] != 0){
            carrito.push(bebidas[4]*cantidadBe[4]);
            }
            break;
            }
            bandera2 = prompt("¿Quiere seleccionar otra bebida? \n precisione 1 si desea continuar y 0 si desea terminar");
            if(bandera2== 0){
            for(var i=0; i<carrito.length; i++){ 
                calc += carrito[i];
            }
            usuarios.push(new User(nomUser.toUpperCase(),edadUser,numUser,cantidadBe,calc));
            console.log(usuarios); 
            }
            else if(bandera2 !=1 && bandera2 !=0){
            alert("Error");
            }
        }
    }
    
    else{
        alert("Hola " + nomUser + " te informamos que no cumples con la edad minima requerida");
    }
    bandera1 = prompt("Desea ingresar un nuevo pedido \n 1 en caso de querer agregar \n 0 en caso de no querer agregar mas")
    if (bandera1 == 0){
        bandera=0;
    }
    }
}




