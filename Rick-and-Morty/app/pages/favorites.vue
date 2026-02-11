<template>
  <div class="w-full min-h-screen">
    <Header />

    <div class="p-8">
      <h1 class="text-2xl font-semibold text-gray-900">Mis Favoritos</h1>
      <p class="text-gray-600 mt-1">Personajes guardados en tu lista.</p>
    </div>

    <div v-if="favorites.length" class="p-8 pt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card v-for="character in favorites" :key="character.id" :character="character" />
    </div>

    <div v-else class="px-8 pb-8">
      <div class="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-600">
        Aun no tienes personajes favoritos. Agrega algunos desde el dashboard.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from "~/stores/favorites";

definePageMeta({
  middleware: "auth",
});

const favoritesStore = useFavoritesStore();
const favorites = computed(() => favoritesStore.favorites);
</script>
