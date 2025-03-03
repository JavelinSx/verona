<!-- layouts/default.vue -->
<template>
    <div class="flex flex-col min-h-screen bg-gray-50">
        <!-- Header / Main Menu -->
        <MainMenu />

        <!-- Main Content -->
        <main class="flex-grow">
            <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <!-- Слот для контента страниц -->
                <slot />
            </div>
        </main>

        <!-- Глобальные секции, которые отображаются на всех страницах -->
        <ContactFormSection />
        <MapSection />

        <!-- Back to top button -->
        <div v-show="showBackToTop" class="fixed bottom-6 right-6 z-50" @click="scrollToTop">
            <button
                class="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-200"
                aria-label="Вернуться наверх">
                <Icon name="heroicons:arrow-up" class="w-5 h-5" />
            </button>
        </div>

        <!-- Appointment Float Button (только на мобильных) -->
        <div class="sm:hidden fixed bottom-6 left-6 z-50">
            <NuxtLink to="/appointment"
                class="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-200 flex items-center justify-center">
                <Icon name="heroicons:calendar" class="w-5 h-5" />
            </NuxtLink>
        </div>

        <!-- Чат с поддержкой (фиксированная кнопка) -->
        <div
            class="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 sm:left-auto sm:right-6 sm:translate-x-0 sm:bottom-20">
            <button @click="toggleChat"
                class="flex items-center justify-center bg-green-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-700 transition duration-200">
                <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 mr-2" />
                <span class="text-sm font-medium">Задать вопрос</span>
            </button>

            <!-- Модальное окно чата (появляется при нажатии на кнопку) -->
            <div v-if="isChatOpen"
                class="absolute bottom-14 right-0 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl p-4 border border-gray-200">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-medium text-gray-800">Чат с поддержкой</h3>
                    <button @click="toggleChat" class="text-gray-400 hover:text-gray-500">
                        <Icon name="heroicons:x-mark" class="w-5 h-5" />
                    </button>
                </div>
                <div class="h-72 overflow-y-auto mb-4 p-2 bg-gray-50 rounded-md">
                    <p class="text-center text-sm text-gray-500 p-4">
                        Здесь будет интегрирован чат Venyo для поддержки пациентов
                    </p>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import ContactFormSection from '~/components/Home/ContactFormSection.vue';
import MapSection from '~/components/Home/MapSection.vue';

// Показывать кнопку "Наверх" только после прокрутки
const showBackToTop = ref(false);

// Состояние чата
const isChatOpen = ref(false);

// Функция прокрутки в начало страницы
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Переключение видимости чата
const toggleChat = () => {
    isChatOpen.value = !isChatOpen.value;
};

// Закрытие чата при клике за его пределами
const handleClickOutside = (event: MouseEvent) => {
    const chatElement = document.querySelector('.chat-modal');
    if (isChatOpen.value && chatElement && !chatElement.contains(event.target as Node)) {
        isChatOpen.value = false;
    }
};

// Отслеживание прокрутки страницы
const handleScroll = () => {
    showBackToTop.value = window.scrollY > 500;
};

// Добавление и удаление обработчиков событий
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('mousedown', handleClickOutside);
});

// Закрытие чата при переходе на другую страницу
const route = useRoute();
watch(() => route.path, () => {
    isChatOpen.value = false;
});
</script>

<style scoped>
/* Анимация появления чата */
.chat-modal-enter-active,
.chat-modal-leave-active {
    transition: all 0.3s ease;
}

.chat-modal-enter-from,
.chat-modal-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>