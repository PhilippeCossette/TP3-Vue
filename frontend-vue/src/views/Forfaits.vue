<template>
  <main class="py-5">
    <!-- Add Trip Modal -->
    <AddTrip v-if="showAddMenu" @close="toggleAddMenu" @save="handleSaveTrip" />

    <section class="max-1200 mx-auto px-4 py-5">
      <header class="d-flex justify-content-between align-items-center my-3">
        <h1>Nos Forfaits</h1>
        <button @click="toggleAddMenu" class="btn-primary add-button">
          <i class="bi bi-plus"></i>
        </button>
      </header>

      <div class="row">
        <div
          v-for="trip in trips"
          :key="trip.id"
          class="col-12 col-sm-6 col-md-4 mb-3"
        >
          <SingleTrip :trip="trip" @delete="handleDeleteTrip(trip.id)" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import AddTrip from "../components/AddTrip.vue";
import SingleTrip from "../components/SingleTrip.vue";

export default {
  name: "Forfaits",
  components: { AddTrip, SingleTrip },

  // Props from App.vue
  props: ["trips", "addTrip", "deleteTrip"],

  data() {
    return {
      showAddMenu: false, // show/hide add trip form
    };
  },

  methods: {
    toggleAddMenu() {
      this.showAddMenu = !this.showAddMenu;
    },

    // Add new trip only
    async handleSaveTrip(trip) {
      await this.addTrip(trip);
      this.toggleAddMenu();
    },

    // Delete trip by id
    async handleDeleteTrip(id) {
      if (confirm("Supprimer ce forfait ?")) {
        await this.deleteTrip(id);
      }
    },
  },
};
</script>
