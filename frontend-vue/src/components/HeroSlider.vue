<template>
  <section>
    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
      <!-- Indicateurs -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
        ></button>
      </div>

      <!-- Images et textes -->
      <div class="carousel-inner">
        <!-- Diapositive 1 -->
        <div class="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1474&auto=format&fit=crop"
            class="carousel-image"
            alt="Diapositive 1"
          />
          <div class="carousel-caption">
            <h1 class="hero__title">Explorez le monde avec Voyago</h1>
            <p class="hero__subtitle">Votre aventure commence ici</p>
            <a href="#packages" class="btn-primary hero__btn"
              >Découvrir les forfaits</a
            >
          </div>
        </div>

        <!-- Diapositive 2 -->
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1474&auto=format&fit=crop"
            class="carousel-image"
            alt="Diapositive 2"
          />
          <div class="carousel-caption">
            <h1 class="hero__title">L’aventure vous attend</h1>
            <p class="hero__subtitle">Découvrez des destinations exotiques</p>
            <a href="#packages" class="btn-primary hero__btn"
              >Explorer maintenant</a
            >
          </div>
        </div>

        <!-- Diapositive 3 -->
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1474&auto=format&fit=crop"
            class="carousel-image"
            alt="Diapositive 3"
          />
          <div class="carousel-caption">
            <h1 class="hero__title">Voyagez autrement</h1>
            <p class="hero__subtitle">Votre périple commence ici</p>
            <a href="#packages" class="btn-primary hero__btn"
              >Réserver maintenant</a
            >
          </div>
        </div>
      </div>

      <!-- Contrôles -->
      <button
        class="carousel-control-prev z-3"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Précédent</span>
      </button>

      <button
        class="carousel-control-next z-3"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Suivant</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSlider",
};
</script>
