function buscarAuxilio(){

}
const servicio=document.getElementById("service").value;
const location=document.getElementById("location").value;
if(ubicacion===""){
    alert("Por favor ingresa tu ubicación.")
    return;
}
alert(
    "Buscando ayuda...\n\n"+
    "Servicio: "+servicio+
    "\nUbicación: "+ubicacion
);