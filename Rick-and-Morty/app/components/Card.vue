<template>
  <div
    class="max-w-sm rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden group"
  >
    <div
      class="h-40 w-full flex items-center justify-center bg-gray-100 red-100 group-hover:bg-gray-200 transition-colors duration-300"
    >
      <img
        v-if="character.image"
        :src="character.image"
        alt="Character Image"
        class="h-full w-full object-cover object-center"
      />
      <div v-else class="text-gray-500">No Image Available</div>
    </div>

    <div class="p-4">
      <div class="flex items-start justify-between gap-3 py-2">
        <div class="flex-1">
          <p class="text-base font-semibold text-gray-900 truncate">{{ character.name || "Nombre" }} </p>
        </div>
        <div class="flex-shrink-0 ml-2 flex items-center gap-1">
          <span
            class="text-xs px-2 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600"
            >{{ character.status || "Estado" }}</span
          >
        </div>
      </div>

      <div class="mt-4 flex gap-2 justify-end">
        <button
          class="rounded-lg border px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors flex items-center gap-2"
          :class="
        isFavorite
          ? 'border-red-200 bg-red-50 text-red-700 hover:bg-red-100 focus:ring-red-200'
          : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-300'
          "
          @click="toggleFavorite"
        >
          <img 
        :src="isFavorite ? heartTwo : heartOne" 
        alt="Heart Icon like or dislike" 
        class="h-5 w-6" 
          />
          {{ isFavorite ? "Quitar favorito" : "Agregar a favoritos" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Character } from "~/composables/useCharacters";
import { useFavoritesStore } from "~/stores/favorites";
import heartOne from '@/assets/images/heart_one.png'
import heartTwo from '@/assets/images/heart_two.png'


const favoritesStore = useFavoritesStore();

const props = defineProps<{
  character: Character;
}>();

const isFavorite = computed(() => favoritesStore.isFavorite(props.character.id));

const toggleFavorite = () => {
  favoritesStore.toggleFavorite(props.character);
};
</script>