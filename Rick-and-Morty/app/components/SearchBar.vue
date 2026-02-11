<template>
  <form
    class="flex items-center max-w-lg pt-5 pl-5 pr-5 mx-auto"
    @submit.prevent="handleSearch"
  >
    <label class="sr-only" for="voice-search">Buscar personajes</label>
    <div class="relative w-full">
      <input
        v-model="searchQuery"
        placeholder="Buscar personajes..."
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="voice-search"
        type="text"
      />
    </div>
    <button
      class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="submit"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        class="w-4 h-4 me-2"
      >
        <path
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke="currentColor"
        ></path></svg
      >Buscar
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>
