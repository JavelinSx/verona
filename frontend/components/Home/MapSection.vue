<!-- components/Home/MapSection.vue -->
<template>
    <section class="py-12">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">Как нас найти</h2>

            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <div class="md:flex">
                    <div class="md:w-1/3 p-8">
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">Контактная информация</h3>

                        <div class="space-y-4">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <Icon name="heroicons:map-pin" class="w-5 h-5 text-green-600" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-700">{{ clinic.address }}</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <Icon name="heroicons:phone" class="w-5 h-5 text-green-600" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-700">{{ clinic.phone }}</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <Icon name="heroicons:envelope" class="w-5 h-5 text-green-600" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-700">{{ clinic.email }}</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <Icon name="heroicons:clock" class="w-5 h-5 text-green-600" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-700">{{ clinic.workHoursWeekdays }}</p>
                                    <p class="text-gray-700">{{ clinic.workHoursWeekends }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6">
                            <NuxtLink to="/contacts"
                                class="inline-flex items-center text-green-600 hover:text-green-700">
                                Подробная схема проезда
                                <Icon name="heroicons:arrow-right" class="ml-1 w-4 h-4" />
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="md:w-2/3 h-80 md:h-auto bg-gray-200">
                        <!-- Здесь будет Яндекс.Карта -->
                        <client-only>
                            <!-- Заглушка, пока не интегрирована Яндекс.Карта -->
                            <div class="w-full h-full flex items-center justify-center text-gray-500">
                                <p>Здесь будет интегрирована Яндекс.Карта</p>
                            </div>
                            <!-- В будущем здесь будет компонент для Яндекс.Карты -->
                        </client-only>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';

// Данные о клинике
const clinic = reactive({
    address: 'Санкт-Петербург, Выборгский район',
    phone: '+7 (812) 622-98-13',
    email: 'info@veronamed.ru',
    workHoursWeekdays: 'Пн-Пт: 8:00-20:00',
    workHoursWeekends: 'Сб-Вс: 9:00-18:00',
    coordinates: [59.9342802, 30.3350986], // Координаты для Яндекс.Карты (в будущем)
});
</script>