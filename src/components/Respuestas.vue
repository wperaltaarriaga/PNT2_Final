<template>
    <div class="container mt-4">
      <h2 class="text-center mb-4">Respuestas</h2>
      <table class="table table-bordered table-hover shadow-sm">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Pregunta</th>
            <th scope="col">Respuesta Correcta</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(respuesta, index) in respuestas" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ respuesta.pregunta }}</td>
            <td>{{ respuesta.respuestaCorrecta }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "Respuestas",
    data() {
      return {
        respuestas: [
          {
            pregunta: "¿Cuál es la forma correcta de registrar el evento de click en VueJS?",
            respuestaCorrecta: "c) @click, f) v-on:click",
          },
          {
            pregunta: "npm create vue@latest se utiliza para:",
            respuestaCorrecta: "b) Crear una aplicación Vue",
          },
          {
            pregunta: "El modificador trim recorta…",
            respuestaCorrecta: "c) Los espacios adelante y atrás en una entrada de texto",
          },
          {
            pregunta: "La propiedad routes en el router de Vue sirve para:",
            respuestaCorrecta: "a) Definir el path y el componente activo para esa ruta",
          },
          {
            pregunta: "Las actions en Pinia contienen…",
            respuestaCorrecta: "b) La lógica para cambiar el estado global de la aplicación",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  h2 {
    font-weight: bold;
    color: #343a40;
  }
  
  .table {
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  .table-hover tbody tr:hover {
    background-color: #f8f9fa;
  }
  
  .table-bordered th,
  .table-bordered td {
    vertical-align: middle;
  }
  
  .container {
    max-width: 900px;
  }
  </style>