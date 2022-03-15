//recibir datos de teclado//
let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault();
    console.log("hizo click");
    let producto=document.getElementById("producto").value;
    console.log(producto);
    let edad=document.getElementById("edad").value;
    console.log(edad);
    let cantidad=document.getElementById("cantidad").value;
    console.log(cantidad);
        if(edad<18){
        alert("Menor de edad detectato")
           if(producto==1){
                
            }
    }
}

