<template>
  <nav class="header-rm">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink to="/dashboard" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/images/Icon.png" class="h-8" alt="Logo" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Rick and Morty</span
        >
      </NuxtLink>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="color-tabs font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700"
        >
          <li>
            <NuxtLink
              to="/dashboard"
              class="block py-2 px-3 rounded md:p-0"
              :class="
                route.path === '/dashboard'
                  ? 'text-white line-tabs text-bold'
                  : 'tabs-inactive'
              "
              aria-current="page"
              >Dashboard</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/favorites"
              class="block py-2 px-3 rounded md:p-0"
              :class="
                route.path === '/favorites'
                  ? 'text-white line-tabs'
                  : 'tabs-inactive'
              "
              >Favoritos</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
