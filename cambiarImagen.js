var imagenes = ["chavalejsugandofutbol.png", "portero.png", "balonestadio.png"]; // Array con las rutas de las imágenes
var index = 0; // Índice para controlar la imagen actual

function cambiarImagen() {
    var img = document.getElementById("my-image");
    img.style.opacity = 1; // Establece la opacidad a 0 para iniciar el desvanecimiento
  
    setTimeout(function() {
      index = (index + 1) % imagenes.length; // Incrementa el índice y vuelve al principio si se llega al final del array
      img.src = imagenes[index]; // Cambia la ruta de la imagen actual
      img.alt = "Imagen " + (index + 1); // Cambia el atributo "alt" de la imagen
  
      img.style.opacity = 1; // Establece la opacidad a 1 para finalizar el desvanecimiento
    }, 0); // Espera 500 milisegundos antes de cambiar la imagen (ajusta el valor según tus necesidades)
}
  
setInterval(cambiarImagen, 3000); // Cambia la imagen cada 3 segundos (ajusta el valor en milisegundos según tus necesidades)



const container = document.querySelector('.rugby');

function rotateContainerOnce() {
  container.classList.add('rotate');
  container.removeEventListener('mouseenter', rotateContainerOnce);
}
  
container.addEventListener('mouseenter', rotateContainerOnce);
  

