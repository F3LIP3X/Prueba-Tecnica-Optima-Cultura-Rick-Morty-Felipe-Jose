import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    const tokenCookie = useCookie("auth_token");
    return {
      token: tokenCookie.value || null,
    };
  },
  actions: {
    login() {
      const fakeToken = "FelipeJoseToledanoEscudero-Token";
      const tokenCookie = useCookie("auth_token");

      this.token = fakeToken;
      tokenCookie.value = fakeToken;

      return navigateTo("/dashboard");
    },
    logout() {
      const tokenCookie = useCookie("auth_token");

      this.token = null;
      tokenCookie.value = null;

      return navigateTo("/login");
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});
