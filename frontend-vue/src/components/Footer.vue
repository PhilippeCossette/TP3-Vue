<template>
  <footer class="bg-light p-4">
    <div class="container max-1200">
      <div class="row g-3">
        <div class="col-md-4 mb-4 p-0">
          <h5 class="fw-bold">Voyago</h5>
          <p class="text-muted">
            Explorez le monde avec nos forfaits de voyage exclusifs et nos
            visites guidées. Votre aventure commence ici !
          </p>
        </div>

        <div class="col-md-4 mb-4 p-0">
          <h5 class="fw-bold">Liens rapides</h5>
          <ul class="list-unstyled">
            <li>
              <RouterLink to="/" class="text-dark text-decoration-none">
                Accueil
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/forfaits" class="text-dark text-decoration-none">
                Forfaits
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="text-dark text-decoration-none">
                À propos
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-dark text-decoration-none">
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="col-md-4 mb-4 p-0">
          <h5 class="fw-bold">Contact</h5>
          <p class="mb-1">
            <i class="bi bi-telephone-fill me-2"></i>+1 234 567 890
          </p>
          <p class="mb-1">
            <i class="bi bi-envelope-fill me-2"></i>info@voyago.com
          </p>
          <p class="mb-1">
            <i class="bi bi-geo-alt-fill me-2"></i>123 Rue Principale, Montréal,
            QC
          </p>
          <div class="mt-2">
            <a href="#" class="text-dark me-3 fs-5">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="text-dark me-3 fs-5">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="text-dark me-3 fs-5">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="text-dark fs-5">
              <i class="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <hr class="border-top border-secondary" />
      <div class="text-center text-muted">
        © {{ year }} Voyago. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "Footer",
  components: { RouterLink },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
