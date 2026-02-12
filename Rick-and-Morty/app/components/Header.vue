<template>
  <nav class="header-rm">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink
        to="/dashboard"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="../assets/images/Icon.png" class="h-8" alt="Logo" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Rick and Morty</span
        >
      </NuxtLink>

      <!-- Burger menu -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <!-- Menu links -->
      <div
        :class="isMenuOpen ? 'block' : 'hidden'"
        class="w-full md:block md:w-auto"
        id="navbar-default"
      >
        <ul
          class="color-tabs font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700"
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
              @click="isMenuOpen = false"
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
              @click="isMenuOpen = false"
              >Favoritos</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="#"
              @click.prevent="useAuthStore().logout()"
              class="block py-2 px-3 rounded md:p-0 tabs-inactive tabs-inactive-logout"
            >
              <p class="close-sesion">Cerrar sesión</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const route = useRoute();
const isMenuOpen = ref(false);
</script>
