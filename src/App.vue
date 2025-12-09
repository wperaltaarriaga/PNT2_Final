<template>
  <div class="text-center py-2 bg-light">
    <RouterLink to="/respuestas" class="btn btn-primary">
      Ir a Respuestas
    </RouterLink>
  </div>

  <div class="container-fluid p-0">

    <Navbar />

    <div class="card mt-3 mx-auto shadow-lg" style="max-width: 900px;">
      <div class="card-header text-center bg-gradient">
        <header>
          <h2 class="fw-bold ms-5">Final PNT2</h2>
        </header>
      </div>
      <div class="card-body">
        <main>
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style scoped>

.card-header {
  background: linear-gradient(90deg, #f481ea, #d4418e);
  color: white;
  text-align: center;
  padding: 1rem;
  border-radius: 0.25rem 0.25rem 0 0;
}
.card-header h2 {
  font-size: 1.8rem;
  margin: 0;
}
.card {
  border: none;
  border-radius: 0.5rem;
}
.card.shadow-lg {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.container-fluid {
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 0;
}
</style>