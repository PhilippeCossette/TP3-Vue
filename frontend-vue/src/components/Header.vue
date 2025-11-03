<template>
  <header class="bg-white shadow-sm fixed-top">
    <nav
      class="position-relative navbar navbar-light navbar-expand-md bg-white"
    >
      <div class="container-fluid px-4">
        <router-link to="/" class="navbar-brand fw-bold text-dark fs-4"
          >Voyago</router-link
        >

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

        <div
          class="secondary-menu collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav d-flex align-items-center gap-3">
            <li class="nav-item">
              <a href="#about" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
              <a href="#packages" class="nav-link">Promotions</a>
            </li>
            <li class="nav-item">
              <a href="#destinations" class="nav-link">Destinations</a>
            </li>
            <li class="nav-item">
              <a href="#testimonials" class="nav-link">Témoignages</a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">Contact</a>
            </li>
          </ul>
        </div>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav d-flex align-items-center gap-3">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link"
                >À propos de l'agence</router-link
              >
            </li>
            <li class="nav-item ml-2">
              <router-link to="/forfaits" class="btn-primary"
                >Forfaits</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
