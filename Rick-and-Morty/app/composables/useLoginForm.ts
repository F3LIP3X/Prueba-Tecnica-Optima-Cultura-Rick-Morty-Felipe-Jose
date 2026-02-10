import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export const isEmailValid = (email: string): boolean => {
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailCheck.test(email);
};

export const isLoginValid = (email: string, password: string): boolean => {
    return isEmailValid(email) && password.length > 6;
};

export const useLoginForm = () => {
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const isFormValid = computed(() => {
        return isLoginValid(email.value, password.value);
    });

    const checkLogin = () => {
        if (isFormValid.value) {
            router.push('/dashboard');
        }
    };

    return {
        email,
        password,
        isFormValid,
        checkLogin
    };
};