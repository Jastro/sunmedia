import { createStore, createLogger } from "vuex";
import mutations from "./mutations";

const state = {
  items: [],
  itemsFiltered: [],
  favorites: [],
  showingFavorites: false,
  showLimit: 10,
  modalItem: {},
};

export default createStore({
  state,
  mutations,
  plugins: [createLogger()],
});
