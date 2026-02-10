<template>
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div
      class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
    >
      <div class="max-w-md mx-auto">
        <div class="flex items-center space-x-5 justify-center">
          <img
            src="~/assets/images/Rick_and_Morty.svg"
            alt="Rick and Morty Logo"
          />
        </div>

        <form @submit.prevent="handleSubmit" class="mt-5">
          <label
            class="font-semibold text-sm text-gray-600 pb-1 block"
            for="login"
            >E-mail</label
          >
          <input
            v-model="email"
            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none focus:ring-2 focus:ring-[#bfde42]"
            type="email"
            id="login"
            required
          />

          <label
            class="font-semibold text-sm text-gray-600 pb-1 block"
            for="password"
            >Contraseña</label
          >
          <input
            v-model="password"
            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none focus:ring-2 focus:ring-[#bfde42]"
            type="password"
            id="password"
            required
          />

          <p
            v-if="password.length > 0 && password.length <= 6"
            class="text-red-500 text-xs mb-4"
          >
            La contraseña debe ser mayor a 6 caracteres.
          </p>

          <div class="mt-5">
            <button
              :disabled="!isFormValid"
              class="py-2 px-4 button-login text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg disabled:opacity-50"
              type="submit"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginForm } from "~/composables/useLoginForm";

const { email, password, isFormValid } = useLoginForm();

const emit = defineEmits(["login"]);

const handleSubmit = () => {
  if (isFormValid.value) {
    emit("login", { email: email.value, password: password.value });
  }
};
</script>
