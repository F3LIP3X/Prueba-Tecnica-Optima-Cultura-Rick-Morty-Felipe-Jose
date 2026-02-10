<template>
<div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-primary to-[#42b4ca]/80">
    <LoginForm @login="handleLogin" />
</div>
</template>

<script setup lang="ts">
import { isLoginValid } from "~/composables/useLoginForm";

const handleLogin = (credentials: { email: string; password: string }) => {
  const { email, password } = credentials;
  const isValid = isLoginValid(email, password);

  if (!isValid) {
    return;
  }

  const token = useCookie("auth_token");
  token.value = "local-login-token";

  return navigateTo("/dashboard");
};
</script>
