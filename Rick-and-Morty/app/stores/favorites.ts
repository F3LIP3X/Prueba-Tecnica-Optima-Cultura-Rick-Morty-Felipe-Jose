import { defineStore } from "pinia";
import type { Character } from "~/composables/useCharacters";

interface FavoritesState {
  favorites: Character[];
}

export const useFavoritesStore = defineStore("favorites", {
  state: (): FavoritesState => ({
    favorites: [],
  }),
  getters: {
    isFavorite: (state) => (id: number) =>
      state.favorites.some((character) => character.id === id),
  },
  actions: {
    addFavorite(character: Character) {
      if (this.favorites.some((item) => item.id === character.id)) {
        return;
      }
      this.favorites.push(character);
    },
    removeFavorite(id: number) {
      this.favorites = this.favorites.filter((item) => item.id !== id);
    },
    toggleFavorite(character: Character) {
      if (this.isFavorite(character.id)) {
        this.removeFavorite(character.id);
        return;
      }
      this.addFavorite(character);
    },
  },
});
