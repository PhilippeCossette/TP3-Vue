<template>
  <div class="card h-100">
    <img :src="imageUrl" class="card-img-top" alt="Card Image" />
    <div
      class="card-body d-flex flex-column justify-content-between align-items-center"
    >
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <p class="price"><strong>À partir de</strong> {{ price }}$</p>
      <a :href="link" class="btn-primary">Réserver</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    imageUrl: String,
    description: String,
    price: [String, Number],
    link: String,
  },
};
</script>
