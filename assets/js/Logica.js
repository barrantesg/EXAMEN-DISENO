var GuardaPersona = [];
var	persona = "";
var cont = 1;

var usuarios = [];

  var personaComenta = [];


function guardarUsuario(){

  var nombre= document.getElementById("Nombre").value;
  var apellidos=  document.getElementById("Apellidos").value;
  var telefono= document.getElementById("Telefono").value;
  var usuario = document.getElementById("Usuario").value;
  var contrasena = document.getElementById("Contrasena").value;

    persona = {
      "Nombre": nombre,
      "Apellidos":apellidos,
      "Telefono": telefono,
      "Usuario": usuario,
      "Contrasena": contrasena
        };

      /*cont = localStorage.setItem();
      GuardaPersona[cont]=((persona));
      cont=cont+1;*/

    /*  for(int conta = 0, cont!=0 , cont++){
      cont = localStorage.setItem();*/

         debugger;

  /*    if(localStorage.setItem() != ""){

         GuardaPersona[cont]=((persona));
          cont=cont+1;

          localStorage.setItem("Usuarios",JSON.stringify(localStorage.setItem() + persona ));
          alert("Uno mas");

        }else{

         localStorage.setItem("Usuarios",JSON.stringify(persona));
          alert("Error agregado el usuario");
        }*/

        try {
    if(persona.Nombre.length==0){
        throw "Falta informacion";
    }
    else if(persona.Apellidos.length==0){
      throw "Falta informacion";
    }
    else if(persona.Telefono.length==0){
      throw "Falta informacion";
    }
    else if(persona.Usuario.length==0){
      throw "Falta informacion";
    }
    else if(persona.Contrasena.length==0){
      throw "Falta informacion";
    }

    else{

       GuardaPersona[cont]=((persona));
       cont=cont+1;

      /*personConfig[contfig]=((personaConf));
      contfig=contfig+1;*/
      localStorage.setItem(sessionStorage.getItem("Usuarios"),JSON.stringify(persona));
    //  localStorage.setItem(sessionStorage.getItem("Usuarios")+"-config",JSON.stringify(persona));
      alert("Te has agregado un usuario con exito");
      limp();
    }
  }    catch (variable) {
            alert(variable);
    }

  /*
  var json  = JSON.stringify(localStorage);
  localStorage.push(persona);
  localStorage.setItem(usuarios, json);
  alert("agregado");

        localStorage.push(persona);
        var json  = JSON.stringify(localStorage);
        localStorage.setItem(usuarios, json);

      }*/
}

function logueo(){
    usuarios =JSON.parse(localStorage.getItem("Usuarios"));

  var user= document.getElementById("user").value;
  var pass=  document.getElementById("pwd").value;

  for (var i = 0; i >= usuarios.length; i++) {

    try {

      if((usuarios[i].usuario)==user){
        if((usuarios[i].contrasena)==pass){

          alert("Has accesado correctamente");

              document.location.href=("Principal_Usuario.html");

          return;
}

    }
  }catch (usuarios) {

      alert("Acceso denegado");
      return;
    }
  }

}

function guardarComentario(){

var comentario = document.getElementById("Comentario").value;
var persona = document.getElementById("Usuario").value;

personaComenta = {
"Comentario" : comentario,
"Usuario" : persona
};

  localStorage.setItem("Comentarios",JSON.stringify(personaComenta));
  alert("Se ha agregado un comentario");

  var fila= "<tr><td>"+comentario+"</td> <td>"+persona+"</td> </tr>";

  document.getElementById("tabla").innerHTML = fila;
}


function borrar()
{
  var confirmacion = confirm("Seguro que desea eliminar este usuario?");
  var id = sessionStorage.getItem("contador");

  if (confirmacion) {
    persona[id]="";

    localStorage.setItem("Usuarios",JSON.stringify(persona));
  }
}
