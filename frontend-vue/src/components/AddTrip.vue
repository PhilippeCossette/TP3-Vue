<template>
  <div class="add-trip-form border">
    <!-- Header -->
    <div
      class="d-flex justify-content-between align-items-center p-3 border-bottom"
    >
      <h2 class="mb-0">
        <!-- If form.id is present, we are editing else we are adding -->
        {{ form.id ? "Modifier le forfait" : "Ajouter un forfait" }}
      </h2>
      <i
        class="bi bi-x fs-3"
        style="cursor: pointer"
        @click="$emit('close')"
      ></i>
    </div>

    <!-- Form -->
    <div class="p-3">
      <!-- Error Message -->
      <div v-if="message" class="bg-danger text-white p-2 rounded mb-3">
        {{ message }}
      </div>

      <form @submit.prevent="saveForm">
        <div class="mb-3">
          <label class="form-label">Nom du voyage</label>
          <input
            v-model="form.name"
            type="text"
            class="form-control"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Catégorie</label>
          <input
            v-model="form.category"
            type="text"
            class="form-control"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Image (URL)</label>
          <input
            v-model="form.image"
            type="text"
            class="form-control"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Description</label>
          <textarea
            v-model="form.description"
            class="form-control"
            rows="4"
            required
          ></textarea>
        </div>

        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Durée (nuits)</label>
            <input
              v-model.number="form.length"
              type="number"
              class="form-control"
              required
            />
          </div>
          <div class="col">
            <label class="form-label">Prix (CAD)</label>
            <input
              v-model.number="form.price"
              type="number"
              class="form-control"
              required
            />
          </div>
        </div>

        <button type="submit" class="btn-primary w-100">
          {{ form.id ? "Mettre à jour" : "Ajouter" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["trip"], // trip to edit (null for new trip)
  // https://www.w3schools.com/vue/vue_emit.php
  emits: ["save", "close"],
  data() {
    return {
      message: null, // error message
      // Default form values
      form: {
        id: null,
        name: "",
        category: "",
        image: "",
        description: "",
        length: "",
        price: "",
      },
    };
  },
  mounted() {
    // si un trip est reçu, on pré-remplit le formulaire
    if (this.trip) {
      this.form = { ...this.trip };
    }
  },
  methods: {
    saveForm() {
      if (
        !this.form.name ||
        !this.form.image ||
        !this.form.price ||
        !this.form.length ||
        !this.form.category ||
        !this.form.description
      ) {
        this.message = "Veuillez remplir tous les champs requis.";
        return;
      }

      this.$emit("save", { ...this.form });
    },
  },
};
</script>
