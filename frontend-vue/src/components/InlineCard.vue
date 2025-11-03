<template>
  <div class="inline-card h-100">
    <img class="inline-card-img" :src="imageUrl" :alt="title" />
    <div class="inline-card-body">
      <div class="inline-card-header">
        <h5 class="inline-card-title">{{ title }}</h5>
        <p class="inline-card-text">{{ description }}</p>
      </div>
      <div class="inline-card-footer">
        <span class="inline-card-price d-flex align-items-center gap-2">
          <del v-if="oldPrice" class="inline-card-old-price"
            >{{ oldPrice }} $</del
          >
          <strong>{{ price }} $</strong>
        </span>
        <a :href="link" class="btn-primary">Réserver</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InlineCard",
  props: {
    title: String,
    imageUrl: String,
    description: String,
    link: String,
    oldPrice: [String, Number],
    price: [String, Number],
  },
};
</script>
