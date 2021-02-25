<template name="Detail">
  <table class="text-left m-4" style="border-collapse:collapse">
    <thead>
      <tr>
        <th
          class="py-6 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light"
        >
          Key
        </th>
        <th
          class="text-center bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light"
        >
          Value
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key, index) in item" :key="index">
        <td
          class="py-4 px-6 border-b border-grey-light"
          v-if="sanitizeData(key, value)"
        >
          {{ key }}
        </td>
        <td
          class="py-4 px-6 border-b border-grey-light text-center"
          v-if="sanitizeData(key, value)"
        >
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
  <div class="w-full px-4 py-4 grid grid-rows-1 grid-flow-col gap-4">
    <div v-for="(logo, index) in item.logos" :key="index">
      <img :src="logo" alt="logo-1" @error="handleImageError" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Detail",
  props: {
    id: Number,
  },
  methods: {
    sanitizeData(key, value) {
      const blackList = ["logos"];

      return blackList.indexOf(key) === -1 && value !== null;
    },
    handleImageError(event) {
      event.target.src = "https://via.placeholder.com/500";
    },
  },
  computed: {
    ...mapState(["items"]),
    item() {
      return this.items.find((item) => item.id.toString() === this.id);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
</style>
