function cifrar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let mensaje= document.getElementById("mensaje").value;
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("mensaje").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./imagenes/Muñeco.png";
    } else {
      muñeco.src = "./imagenes/Muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Debes ingresar algún texto");
    }
  }
  
  function desifrar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let mensaje= document.getElementById("mensaje").value;
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
      if (texto.length != 0) {
        document.getElementById("mensaje").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/Muñeco.png";
      } else {
        muñeco.src = "./imagenes/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
      }
  }
  function copiar(){
    let mensaje= document.getElementById("mensaje");
    let valor= document.getElementById("mensaje").value;
    if (valor.length != 0) {
      mensaje.select();
      document.execCommand("copy");
    }else{
      alert("Debes ingresar algún texto antes de copiar")
    } 

  }