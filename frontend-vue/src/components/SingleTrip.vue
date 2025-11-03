<template>
  <div class="card h-100">
    <img :src="trip.image" class="card-img-top" :alt="trip.name" />
    <div
      class="card-body d-flex flex-column justify-content-between align-items-center"
    >
      <h5 class="card-title">{{ trip.name }}</h5>
      <p class="category">{{ trip.category }}</p>
      <p class="card-text">{{ trip.description }}</p>
      <p class="price"><strong>À partir de</strong> {{ trip.price }}$</p>
      <div class="d-flex gap-2">
        <RouterLink
          :to="`/forfaits/${trip.id}`"
          class="btn-primary btn-outline-primary"
        >
          Plus de détails
        </RouterLink>
        <button
          class="btn btn-outline-danger"
          @click="$emit('delete', trip.id)"
        >
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "SingleTrip",
  components: { RouterLink },
  props: {
    trip: {
      type: Object,
      required: true,
    },
  },
  emits: ["delete"],
};
</script>
