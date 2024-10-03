// Selecciona todas las preguntas
const preguntas = document.querySelectorAll('.pregunta');

// Agrega un evento de clic a cada pregunta
preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        // Encuentra la siguiente etiqueta <p> que es la respuesta
        const respuesta = pregunta.nextElementSibling;
        
        // Alterna la clase 'mostrar' para mostrar u ocultar la respuesta
        respuesta.classList.toggle('mostrar');
    });
})
