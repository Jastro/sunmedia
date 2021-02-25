<template name="Favorites">
  <section class="py-12">
    <div class="container mx-auto">
      <div>
        <h1 class="text-2x1 font-black text-gray-900 pb-6 px-6 md:px-12">
          Favorites
        </h1>
      </div>
      <div class="flex flex-wrap px-5">
        <Card v-for="item in favorites" :item="item" :key="item.id" />
      </div>
    </div>
  </section>
</template>

<script>
import Card from "../components/Card.vue";

import { mapState, mapMutations } from "vuex";
import { SET_FAVORITE_ITEMS } from "../store/mutations.js";

export default {
  name: "Favorites",
  components: {
    Card,
  },
  methods: {
    ...mapMutations([SET_FAVORITE_ITEMS]),
  },
  computed: mapState(["favorites"]),
  mounted() {
    const itemData = localStorage.getItem("favorites");
    if (itemData) {
      this[SET_FAVORITE_ITEMS](JSON.parse(itemData));
    }
  },
};
</script>
