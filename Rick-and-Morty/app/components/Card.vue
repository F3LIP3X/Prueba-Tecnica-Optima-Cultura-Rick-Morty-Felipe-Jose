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
          class="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
        >
          ❤️Like
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Character } from "~/composables/useCharacters";

const props = defineProps<{
  character: Character;
}>();
</script>