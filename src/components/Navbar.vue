<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm mb-3">

    <RouterLink class="navbar-brand fw-bold" to="/">Final PNT2</RouterLink>

 
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/conversor">Conversor</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/respuestas">Respuestas</RouterLink>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #343a40, #212529); 
}

.nav-link {
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffc107 !important; 
}

.btn-outline-light:hover {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #000;
}
</style>