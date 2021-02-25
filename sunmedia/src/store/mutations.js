export const ADD_ITEMS = "ADD_ITEMS";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SET_FILTERED_ITEMS = "SET_FILTERED_ITEMS";
export const SET_FAVORITE_ITEMS = "SET_FAVORITE_ITEMS";

export default {
  [ADD_ITEMS]: (state, items) => {
    state.items = items;
  },
  [ADD_FAVORITE]: (state, favorite) => {
    state.favorites.push(favorite);
  },
  [REMOVE_FAVORITE]: (state, removedItem) => {
    state.favorites = state.favorites.filter(
      (favorite) => favorite.id !== removedItem.id
    );
  },
  [SET_FILTERED_ITEMS]: (state, items) => {
    state.itemsFiltered = items;
  },
  [SET_FAVORITE_ITEMS]: (state, items) => {
    state.favorites = items;
  },
};
