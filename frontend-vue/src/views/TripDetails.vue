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
  props: ["trips"],

  data() {
    return {
      trip: null, // currently viewed trip, Null if not loaded
      showEdit: false, // show/hide edit form
      loadingMessage: "Chargement du forfait...", // message while loading or not found
    };
  },

  async mounted() {
    await this.loadTrip(this.$route.params.id);
  },

  methods: {
    async loadTrip(rawId) {
      const id = Number(rawId);
      this.trip = null; // reset trip while loading
      this.loadingMessage = "Chargement du forfait...";

      // Try to find trip in props first, Prevent unnecessary API calls
      if (Array.isArray(this.trips) && this.trips.length > 0) {
        const found = this.trips.find((t) => t.id === id);
        if (found) {
          this.trip = found;
          return;
        }
      }

      // Fallback to API call
      try {
        const res = await ForfaitDataService.get(id);
        if (res.data && Object.keys(res.data).length > 0) {
          this.trip = res.data;
        } else {
          this.loadingMessage = "Aucun forfait trouvé.";
        }
      } catch (error) {
        console.error("Erreur lors du chargement du forfait:", error);
        this.trip = null;
        this.loadingMessage = "Aucun forfait trouvé.";
      }
    },

    // Toggle edit form visibility
    toggleEdit() {
      this.showEdit = !this.showEdit;
    },

    // Save updated trip details
    async saveTrip(updatedTrip) {
      try {
        await ForfaitDataService.update(updatedTrip.id, updatedTrip);
        // Update local trip data
        const res = await ForfaitDataService.get(updatedTrip.id);
        this.trip = res.data;
        this.showEdit = false;
      } catch (e) {
        console.error("Erreur lors de la mise à jour du forfait:", e);
      }
    },
  },
};
</script>
