<template>
  <div class="testimonial d-flex flex-column justify-content-between">
    <p class="testimonial-quote flex-grow-1">"{{ quote }}"</p>

    <div class="rating">
      <i
        v-for="n in fullStars"
        :key="`full-${n}`"
        class="bi bi-star-fill text-warning"
      ></i>
      <i v-if="hasHalf" class="bi bi-star-half text-warning"></i>
    </div>

    <p>- {{ author }}</p>
  </div>
</template>

<script>
export default {
  name: "Testimonial",
  props: {
    quote: String,
    author: String,
    rating: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    fullStars() {
      return Math.floor(this.rating);
    },
    hasHalf() {
      return this.rating % 1 !== 0;
    },
  },
};
</script>
