<template>
  <div class="w-full lg:w-1/2 px-10 md:px-4 lg:px-6 py-5 shadow-md">
    <div class="bg-white hover:shadow-x1 text-center ">
      <img
        :src="avatar"
        alt="logo"
        @error="handleImageError"
        class="h-56 border-white border-8"
      />
      <div class="px-4 py-4 md:px-10">
        <h1 class="text 2x1 font-black text-gray-900 pb-6 px-6 md:px-12">
          {{ item.school }}
        </h1>
        <div class="h-24 w-full flex flex-wrap content-start items-center">
          <div>
            <input
              class="input border border-gray-400 appearance-none rounded w-full focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
              :id="item.id"
              placeholder="Comment"
              type="text"
              v-model="comment"
            />
          </div>
          <div class="mr-2">
            <button
              :class="favoriteButtonClass"
              class="text-white font-bold py-2 px-4 rounded"
              @click="onFavoriteButtonClick"
            >
              <i class="far fa-star"></i> {{ buttonText }}
            </button>
          </div>
          <div>
            <button
              class="bg-yellow-700 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
              @click="onDetailButtonClicked"
            >
              <i class="fas fa-external-link-alt"></i> More info
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../store/mutations.js";

export default {
  name: "Card",
  props: {
    item: { type: Object },
  },
  data: () => ({
    avatar: null,
    added: false,
    comment: "",
  }),
  computed: {
    ...mapState(["favorites"]),
    isFavorited() {
      return this.favorites.some((e) => e.id === this.item.id);
    },
    buttonText() {
      return this.isFavorited ? "Remove favorite" : "Add favorite";
    },
    favoriteButtonClass() {
      return this.isFavorited
        ? "bg-red-500 hover:bg-red-400"
        : "bg-blue-500 hover:bg-green-500";
    },
  },
  methods: {
    onDetailButtonClicked() {
      this.$router.push({
        name: "detail",
        params: { id: this.item.id },
      });
    },
    handleImageError(event) {
      event.target.src = "https://via.placeholder.com/500";
    },
    sanitizeData(key, value) {
      const blackList = ["logos"];

      return blackList.indexOf(key) === -1 && value !== null;
    },
    ...mapMutations([ADD_FAVORITE, REMOVE_FAVORITE]),
    addFavoriteItem(item) {
      this[ADD_FAVORITE](item);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    removeFavoriteItem(item) {
      this[REMOVE_FAVORITE](item);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    onFavoriteButtonClick() {
      const editedObject = Object.assign({ comment: this.comment }, this.item);

      !this.isFavorited
        ? this.addFavoriteItem(editedObject)
        : this.removeFavoriteItem(editedObject);
    },
  },
  mounted() {
    this.avatar = this.item?.logos?.[0] || null;
    this.comment = this.item?.comment || "";
  },
};
</script>

<style scoped>
img {
  margin: 0 auto;
}
input {
  padding-bottom: 0.75rem;
  width: 150px;
  margin-right: 5px;
  padding: 6px;
}
</style>
