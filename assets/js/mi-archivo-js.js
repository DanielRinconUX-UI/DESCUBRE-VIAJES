// Obtener todas las imágenes con la clase img-tarjeta
const images = document.querySelectorAll('.img-tarjeta');

// Agregar un manejador de eventos clic a cada imagen
images.forEach(image => {
  image.addEventListener('click', () => {
    // Clonar la imagen seleccionada
    const clonedImage = image.cloneNode();

    // Crear un elemento div para la imagen ampliada
    const expandedImage = document.createElement('div');
    expandedImage.classList.add('expanded-image');
    expandedImage.appendChild(clonedImage);

    // Agregar el elemento de la imagen ampliada al cuerpo del documento
    document.body.appendChild(expandedImage);

    // Agregar un manejador de eventos clic para cerrar la imagen ampliada al hacer clic en ella
    expandedImage.addEventListener('click', () => {
      document.body.removeChild(expandedImage);
    });
  });
});
