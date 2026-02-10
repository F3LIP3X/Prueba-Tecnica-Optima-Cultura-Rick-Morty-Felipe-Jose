<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
  >
    <div
      class="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-4"
    >
      <div class="relative w-20 h-20">
        <div
          class="absolute inset-0 border-4 border-primary/20 rounded-full"
        ></div>
        <div
          class="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"
        ></div>
      </div>
      <p class="text-gray-700 font-bold animate-pulse">Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const isLoading = ref(false);

const startLoading = async () => {
  isLoading.value = true;

  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
};

defineExpose({
  isLoading,
  startLoading,
});
</script>
