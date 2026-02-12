<template>
  <div class="w-full min-h-screen">
    <Header />
    <SearchBar @search="handleSearch" />
    <div
      v-if="characters.length"
      class="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <Card
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>

    <div v-else-if="!searchQuery" class="p-8">
      <div
        class="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-600"
      >
        <p class="text-lg font-medium">Cargando...</p>
        <p class="text-sm mt-2">
          Por favor, espera mientras se cargan los personajes
        </p>
      </div>
    </div>

    <div v-else class="p-8">
      <div
        class="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-600"
      >
        <p class="text-lg font-medium">No se encontraron personajes</p>
        <p class="text-sm mt-2">Intenta con otro nombre de búsqueda</p>
      </div>
    </div>

    <div v-if="info" class="flex justify-center items-center gap-4 pb-8">
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="!info.prev"
        class="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Anterior
      </button>

      <span class="text-gray-700 font-medium">
        Página {{ currentPage }} de {{ info.pages }}
      </span>

      <button
        @click="goToPage(currentPage + 1)"
        :disabled="!info.next"
        class="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Siguiente
      </button>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useCharacters } from "~/composables/useCharacters";

definePageMeta({
  middleware: "auth",
});

//API
const { characters, fetchCharacters } = useCharacters();
const currentPage = ref(1);
const info = ref<any>(null);
const searchQuery = ref("");

const loadCharacters = async () => {
  const response = await fetchCharacters(currentPage.value, searchQuery.value);

  if (response) {
    info.value = response.info;
  } else {
    info.value = null;
  }
};

const handleSearch = (query: string) => {
  searchQuery.value = query;
  currentPage.value = 1;
  loadCharacters();
};

//Pagination
const goToPage = (page: number) => {
  currentPage.value = page;
  scrollTo(0, 0);
  loadCharacters();
};

onMounted(() => {
  loadCharacters();
});
</script>
