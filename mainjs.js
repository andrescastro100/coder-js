/*for(var i = 1; i <= 5; i++)
{
    alert("Valor de i es: " + i);
}
*/

let edad=prompt("Ingresesu edad: "),bandera=1,calc=0;
const vino=250, vodka=300, fernet=500, cerveza=200, gin=500;    
if (edad >= 18){
    while (bandera==1){
        select(vino, vodka, fernet, cerveza, gin);
    }
}

else{
    alert("No cumple con la edad minima requerida");
}

function select (){
    let cantidadvino=0,cantidadvodka=0,cantidadfernet=0,cantidadgin=0,cantidadcerveza=0;
    let opcion= prompt("Ingrese su bebida \n 1) vino: "+vino+"\n  2) vodka: "+vodka+"\n 3) fernet: "+fernet+"\n 4) gin: "+gin+"\n 5) cerveza: "+ cerveza);

    switch (opcion){
        case '1': 
            cantidadvino=prompt("ingrese la cantidad de copas de Vino $" + vino+" c/u");
            calc=calc+(vino*cantidadvino);
            break;
        case '2': 
            cantidadvodka=prompt("ingrese la cantidad de vasos de Vodka $"+ vodka+" c/u");
            calc=calc+(vodka*cantidadvodka);
            break
        case '3': 
            cantidadfernet=prompt("ingrese la cantidad de vasos de Fernet $" + fernet+" c/u");
            calc=calc+(fernet*cantidadfernet);
            break;
        
        case '4':
            cantidadgin=prompt("ingrese la cantidad de copas de Gin $" + gin+ " c/u");
            calc=calc+(gin*cantidadgin);
            break;
        
        case '5': 
            cantidadcerveza=prompt("ingrese la cantidad de latas de Cerveza $" + cerveza+ " c/u");
            calc=calc+(cerveza*cantidadcerveza);
            break;
    }
    bandera=prompt("¿Quiere seleccionar otra bebida? \n precisione 1 si desea continuar y 0 si desea terminar");
        if(bandera==0){
            alert("Gracias por su compra su monto es $"+calc);
        }
        else if(bandera !=0 && bandera !=1){
            alert("Error");
        }
}



