<template>
  <div class="border-t border-gray-100">
    <section class="py-5 bg-light section-top">
      <!-- Slide-in edit form -->
      <AddTrip
        v-if="showEdit"
        :trip="trip"
        @close="toggleEdit"
        @save="saveTrip"
      />

      <!-- Trip content -->
      <div class="container my-4" v-if="trip">
        <div class="trip-banner mb-5">
          <img
            :src="trip.image"
            class="img-fluid w-100 rounded"
            alt="Trip banner"
            style="max-height: 70vh; object-fit: cover"
          />
        </div>

        <div class="trip-info text-start">
          <h2 class="fw-bold">{{ trip.name }}</h2>
          <p class="category text-muted">{{ trip.category }}</p>
          <p class="text-muted mb-1">{{ trip.length }} nuits</p>
          <p class="lead">
            À partir de
            <strong style="font-size: 1.25em">${{ trip.price }}</strong>
            par personne
          </p>
          <p class="mt-3">{{ trip.description }}</p>

          <div class="d-flex justify-content-start align-items-center mt-4">
            <button class="btn-primary me-2">Réserver</button>
            <button class="btn btn-outline-secondary" @click="toggleEdit">
              <i class="bi bi-gear"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Not found or loading -->
      <div v-else class="text-center py-5 text-muted">
        <h4>{{ loadingMessage }}</h4>
      </div>
    </section>
  </div>
</template>

<script>
import AddTrip from "../components/AddTrip.vue";
import ForfaitDataService from "../services/ForfaitDataService";

export default {
  name: "TripDetails",
  components: { AddTrip },
  props: ["trips", "updateTrip"], //coming from App.vue

  data() {
    return {
      trip: null,
      showEdit: false,
      loadingMessage: "Chargement du forfait...",
    };
  },

  async mounted() {
    await this.loadTrip(this.$route.params.id);
  },

  methods: {
    //Loads one trip by id
    async loadTrip(rawId) {
      const id = Number(rawId);
      this.trip = null;
      this.loadingMessage = "Chargement du forfait...";

      // First, check if we already have it in props
      const found = this.trips.find((t) => t.id === id);
      if (found) {
        this.trip = found;
        return;
      }

      // Otherwise, get it from API (fallback)
      try {
        const res = await ForfaitDataService.get(id);
        this.trip = res.data;
      } catch (error) {
        console.error("Erreur lors du chargement du forfait:", error);
        this.loadingMessage = "Aucun forfait trouvé.";
      }
    },

    toggleEdit() {
      this.showEdit = !this.showEdit;
    },

    async saveTrip(updatedTrip) {
      try {
        // Update the backend AND the global trips array in App.vue
        await this.updateTrip(updatedTrip);

        // Reflect the change locally
        this.trip = { ...this.trip, ...updatedTrip };

        // Close the slide-in
        this.showEdit = false;
      } catch (e) {
        console.error("Erreur lors de la mise à jour du forfait:", e);
      }
    },
  },
};
</script>
