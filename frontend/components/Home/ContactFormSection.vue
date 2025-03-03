<!-- components/Home/ContactFormSection.vue -->
<template>
    <section class="py-12 bg-green-50">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <div class="md:flex">
                    <div class="md:w-1/2 p-8">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Остались вопросы?</h2>
                        <p class="text-gray-600 mb-6">Оставьте свои контактные данные, и наш специалист свяжется с вами
                            в ближайшее время</p>

                        <form class="space-y-4" @submit.prevent="submitForm">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700">Имя</label>
                                <input id="name" v-model="formData.name" type="text"
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500"
                                    :class="{ 'border-red-500': errors.name }" />
                                <p v-if="errors.name" class="mt-1 text-xs text-red-500">{{ errors.name }}</p>
                            </div>

                            <div>
                                <label for="phone" class="block text-sm font-medium text-gray-700">Телефон</label>
                                <input id="phone" v-model="formData.phone" type="tel"
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500"
                                    :class="{ 'border-red-500': errors.phone }" />
                                <p v-if="errors.phone" class="mt-1 text-xs text-red-500">{{ errors.phone }}</p>
                            </div>

                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700">Сообщение</label>
                                <textarea id="message" v-model="formData.message" rows="3"
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500"
                                    :class="{ 'border-red-500': errors.message }"></textarea>
                                <p v-if="errors.message" class="mt-1 text-xs text-red-500">{{ errors.message }}</p>
                            </div>

                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" v-model="formData.agreeToTerms" type="checkbox"
                                        class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                        :class="{ 'border-red-500': errors.agreeToTerms }" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-medium text-gray-700">Я согласен с <NuxtLink
                                            to="/terms" class="text-green-600 hover:text-green-500">условиями обработки
                                        </NuxtLink> моих персональных данных</label>
                                    <p v-if="errors.agreeToTerms" class="mt-1 text-xs text-red-500">{{
                                        errors.agreeToTerms }}</p>
                                </div>
                            </div>

                            <button type="submit"
                                class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                :disabled="isSubmitting">
                                <span v-if="isSubmitting">Отправка...</span>
                                <span v-else>Отправить</span>
                            </button>

                            <div v-if="successMessage" class="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                                {{ successMessage }}
                            </div>
                        </form>
                    </div>

                    <div class="hidden md:block md:w-1/2 bg-gray-100 relative">
                        <!-- <img src="/img/doctor-consultation.jpg" alt="Консультация врача"
                            class="w-full h-full object-cover" /> -->
                        <div class="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from 'vue';

// Форма данных
const formData = reactive({
    name: '',
    phone: '',
    message: '',
    agreeToTerms: false
});

// Ошибки валидации
const errors = reactive({
    name: '',
    phone: '',
    message: '',
    agreeToTerms: ''
});

// Состояние формы
const isSubmitting = ref(false);
const successMessage = ref('');

// Отправка формы
const submitForm = async () => {
    // Сбросить ошибки и сообщения
    Object.keys(errors).forEach(key => errors[key] = '');
    successMessage.value = '';

    // Валидация
    let isValid = true;

    if (!formData.name.trim()) {
        errors.name = 'Пожалуйста, введите имя';
        isValid = false;
    }

    if (!formData.phone.trim()) {
        errors.phone = 'Пожалуйста, введите номер телефона';
        isValid = false;
    } else if (!/^(\+7|8)[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        errors.phone = 'Пожалуйста, введите корректный номер телефона';
        isValid = false;
    }

    if (!formData.message.trim()) {
        errors.message = 'Пожалуйста, введите сообщение';
        isValid = false;
    }

    if (!formData.agreeToTerms) {
        errors.agreeToTerms = 'Необходимо согласие с условиями';
        isValid = false;
    }

    if (!isValid) return;

    // Отправка формы (имитация)
    try {
        isSubmitting.value = true;

        // Имитация запроса к API
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Успешная отправка
        successMessage.value = 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.';

        // Очистка формы
        Object.keys(formData).forEach(key => {
            if (typeof formData[key] === 'boolean') {
                formData[key] = false;
            } else {
                formData[key] = '';
            }
        });

    } catch (error) {
        console.error('Ошибка при отправке формы:', error);
    } finally {
        isSubmitting.value = false;
    }
};
</script>