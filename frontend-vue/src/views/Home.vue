<template>
  <main>
    <!-- Hero section -->
    <HeroSlider />

    <!-- Popular Destinations -->
    <section class="max-1200 mx-auto px-4 py-5">
      <h2 class="text-start">Destinations Populaires</h2>
      <router-link
        to="/forfaits"
        class="mb-3 d-block text-muted text-decoration-none text-start"
      >
        Voir tout <i class="bi bi-arrow-right"></i>
      </router-link>

      <div class="row">
        <!-- Only Display First 3 Trips -->
        <div
          v-for="trip in trips.slice(0, 3)"
          :key="trip.id"
          class="col-12 col-sm-6 col-md-4 mb-3"
        >
          <Card
            :title="trip.name"
            :image-url="trip.image"
            :description="trip.description"
            :link="`/forfaits/${trip.id}`"
            :price="trip.price"
          />
        </div>
      </div>
    </section>

    <!-- Special Offers -->
    <section class="max-1200 mx-auto px-4 py-5">
      <h2 class="text-start">Offres Spéciales</h2>
      <router-link
        to="/forfaits"
        class="mb-3 d-block text-muted text-decoration-none text-start"
      >
        Voir tout <i class="bi bi-arrow-right"></i>
      </router-link>

      <div class="row g-4">
        <div class="col-12 col-md-6" v-for="(offer, i) in offers" :key="i">
          <InlineCard
            :title="offer.title"
            :image-url="offer.imageUrl"
            :description="offer.description"
            :link="offer.link"
            :old-price="offer.oldPrice"
            :price="offer.price"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="max-1200 mx-auto px-4 py-5">
      <div class="testimonial-container row">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="col-6 col-md-3 mb-3"
        >
          <Testimonial :quote="t.quote" :author="t.author" :rating="t.rating" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HeroSlider from "../components/HeroSlider.vue";
import InlineCard from "../components/InlineCard.vue";
import Testimonial from "../components/Testimonial.vue";
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    HeroSlider,
    InlineCard,
    Testimonial,
    Card,
  },
  props: ["trips"], // Props from App.vue

  data() {
    return {
      offers: [
        {
          title: "Îles Canaries",
          imageUrl:
            "https://images.unsplash.com/photo-1594401708939-49f49fdf596a?q=80&w=1275&auto=format",
          description:
            "Profitez du soleil d’hiver ! Offre spéciale pour escapade plage à prix réduit.",
          link: "#",
          oldPrice: "1500",
          price: "999",
        },
        {
          title: "Rome",
          imageUrl:
            "https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1176&auto=format",
          description:
            "Plongée culturelle réduite. Visitez le Colisée, la Cité du Vatican et plus encore.",
          link: "#",
          oldPrice: "1300",
          price: "899",
        },
        {
          title: "Croatie & Dalmatie",
          imageUrl:
            "https://images.unsplash.com/photo-1575540291670-8d3b26f7d327?q=80&w=1239&auto=format",
          description:
            "Croisière en Adriatique – promotion de printemps, -30%.",
          link: "#",
          oldPrice: "1800",
          price: "1250",
        },
        {
          title: "Bali",
          imageUrl:
            "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1170&auto=format",
          description:
            "Séjour de rêve dans les rizières et plages. Réduction « early bird ». ",
          link: "#",
          oldPrice: "2200",
          price: "1750",
        },
      ],
      testimonials: [
        {
          quote:
            "This was the best trip I’ve ever taken! Everything was perfectly organized.",
          author: "Lucas T",
          rating: 4.5,
        },
        {
          quote: "Our honeymoon in Bali was absolutely magical.",
          author: "Jean Dupont",
          rating: 5,
        },
        {
          quote: "The guides were amazing and super knowledgeable.",
          author: "Olivia C",
          rating: 5,
        },
        { quote: "Great value for the price!", author: "Daniel K", rating: 5 },
      ],
    };
  },
};
</script>
