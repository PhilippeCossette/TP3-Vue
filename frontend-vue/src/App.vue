<template>
  <div class="max-w-screen-xl mx-auto">
    <!-- Global Header -->
    <Header />

    <!-- Main Page Content -->
    <main>
      <!-- All views (Home, About, Forfaits, TripDetails) render here -->
      <router-view
        :trips="trips"
        :addTrip="addTrip"
        :updateTrip="updateTrip"
        :deleteTrip="deleteTrip"
      />
    </main>

    <!-- Global Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ForfaitDataService from "./services/ForfaitDataService.js";

export default {
  name: "App",
  components: { Header, Footer },

  data() {
    return {
      trips: [], // all forfaits / trips
    };
  },

  mounted() {
    this.loadTrips(); // load trips on app start
  },

  methods: {
    // Load all trips from API
    async loadTrips() {
      try {
        const res = await ForfaitDataService.getAll();
        this.trips = res.data;
      } catch (err) {
        console.error("Erreur de chargement des forfaits:", err);
      }
    },

    // Add a new trip
    async addTrip(trip) {
      await ForfaitDataService.create(trip);
      await this.loadTrips();
    },

    // Update an existing trip
    async updateTrip(trip) {
      await ForfaitDataService.update(trip.id, trip);
      await this.loadTrips();
    },

    // Delete a trip
    async deleteTrip(id) {
      await ForfaitDataService.delete(id);
      await this.loadTrips();
    },
  },
};
</script>
