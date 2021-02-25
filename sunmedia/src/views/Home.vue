<template name="Home">
  <section class="py-12">
    <div class="container mx-auto">
      <div>
        <h1 class="text-2x1 font-black text-gray-900 pb-6 px-6 md:px-12">
          School List
        </h1>
      </div>
      <div class="flex flex-wrap px-5">
        <Card v-for="item in itemsFiltered" :item="item" :key="item.id" />
      </div>
    </div>
  </section>
</template>

<script>
import Card from "../components/Card.vue";
import { getColleges } from "../api/colleges.api";
import { mapState, mapMutations } from "vuex";
import { ADD_ITEMS, SET_FILTERED_ITEMS } from "../store/mutations";

export default {
  name: "Home",
  components: {
    Card,
  },
  data: () => ({
    itemsList: null,
  }),
  computed: mapState(["itemsFiltered", "showLimit"]),
  methods: {
    ...mapMutations([ADD_ITEMS, SET_FILTERED_ITEMS]),
    async initData() {
      const itemData = localStorage.getItem("items");
      this.itemsList = itemData ? JSON.parse(itemData) : await getColleges();
      localStorage.setItem("items", JSON.stringify(this.itemsList));
      this.setItems();
    },
    setItems() {
      this[ADD_ITEMS](this.itemsList);
      this[SET_FILTERED_ITEMS](this.itemsList.slice(0, this.showLimit));
    },
  },
  mounted() {
    this.initData();
  },
};
</script>
