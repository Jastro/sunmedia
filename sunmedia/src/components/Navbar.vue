<template>
  <header
    class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4"
  >
    <div class="flex items-center justify-between mb-4 md:mb-0">
      <a class="text-black hover:text-orange md:hidden" href="#">
        <i class="fa fa-2x fa-bars"></i>
      </a>
    </div>
    <form class="mb-4 w-full md:mb-0 md:w-1/4">
      <label class="hidden" for="search-form">Search</label>
      <input
        class="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
        placeholder="Search"
        type="text"
        v-model.trim="search"
        @keyup="onSearchSchool"
      />
      <button class="hidden">Submit</button>
    </form>
    <nav>
      <ul class="list-reset md:flex md:items-center">
        <li class="md:ml-4">
          <a
            @click="onSchoolClicked"
            class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
            href="#"
          >
            School List
          </a>
        </li>
        <li class="md:ml-4">
          <router-link :to="{ name: 'Favorites' }">Favorites List </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { SET_FILTERED_ITEMS } from "../store/mutations.js";

export default {
  name: "Navbar",
  data() {
    return {
      search: "",
    };
  },
  computed: mapState(["items", "showLimit"]),
  methods: {
    ...mapMutations([SET_FILTERED_ITEMS]),
    onSearchSchool() {
      if (this.search) {
        let items = this.items.filter((item) =>
          item.school.toLowerCase().includes(this.search.toLowerCase())
        );
        this[SET_FILTERED_ITEMS](items.slice(0, this.showLimit));
      } else {
        this[SET_FILTERED_ITEMS](this.items.slice(0, this.showLimit));
      }
    },
    onSchoolClicked() {
      this.$router.push({
        path: "/",
      });
    },
    onFavoritesClicked() {
      this.$router.push({
        path: "/favorites",
      });
    },
  },
};
</script>
