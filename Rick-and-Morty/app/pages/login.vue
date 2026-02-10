<template>
<div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-primary to-[#42b4ca]/80">
    <LoginForm @login="makeLogin" />
</div>
</template>

<script setup lang="ts">
import { isLoginValid } from "~/composables/useLoginForm";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

const makeLogin = (credentials: { email: string; password: string }) => {
  const { email, password } = credentials;
  const isValid = isLoginValid(email, password);

  if (!isValid) {
    return;
  }

  return authStore.login();
};
</script>
