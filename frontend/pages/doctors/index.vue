<!-- pages/doctors/index.vue -->
<template>
    <div>
        <!-- Заголовок страницы с фоном -->
        <div class="bg-green-50 py-8 mb-8 mt-28">
            <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-800">Наши специалисты</h1>
                <p class="mt-2 text-lg text-gray-600">
                    Команда профессионалов клиники ВеронаМед
                </p>
            </div>
        </div>

        <!-- Фильтры врачей -->
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div class="bg-white rounded-xl shadow-md p-6">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Фильтр по специализации</h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <button class="px-4 py-2 rounded-md text-left transition-colors"
                        :class="selectedProfession === null ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                        @click="selectedProfession = null">
                        Все специалисты
                    </button>

                    <button v-for="profession in popularProfessions" :key="profession.id"
                        class="px-4 py-2 rounded-md text-left transition-colors"
                        :class="selectedProfession === profession.id ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                        @click="selectedProfession = profession.id">
                        {{ profession.name }}
                    </button>
                </div>

                <!-- Поиск -->
                <div class="mt-6">
                    <div class="relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Icon name="heroicons:magnifying-glass" class="h-5 w-5 text-gray-400" />
                        </div>
                        <input v-model="searchQuery" type="text"
                            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Поиск врача по имени или специальности" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Список врачей -->
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div v-if="filteredDoctors.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <DoctorCard v-for="doctor in filteredDoctors" :key="doctor.id" :doctor="doctor" />
            </div>
            <div v-else class="text-center py-12">
                <Icon name="heroicons:face-frown" class="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 class="text-lg font-medium text-gray-900">Врачи не найдены</h3>
                <p class="mt-2 text-gray-500">
                    По вашему запросу не найдено врачей. Попробуйте изменить параметры поиска.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDoctorsStore } from '~/stores/doctorsStore';
import DoctorCard from '~/components/Doctors/DoctorCard.vue';

// Настройка метаданных страницы
definePageMeta({
    layout: 'default'
});

// Инициализация хранилища
const doctorsStore = useDoctorsStore();

// Состояние фильтров
const selectedProfession = ref<number | null>(null);
const searchQuery = ref('');

// Получение данных из хранилища
const doctors = computed(() => doctorsStore.getAllDoctors);
const popularProfessions = computed(() => doctorsStore.getPopularProfessions.slice(0, 6));

// Фильтрация врачей
const filteredDoctors = computed(() => {
    let result = doctors.value;

    // Фильтрация по профессии
    if (selectedProfession.value !== null) {
        result = doctorsStore.getDoctorsByProfession(selectedProfession.value);
    }

    // Фильтрация по поисковому запросу
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        result = result.filter(doctor => {
            // Поиск по имени
            if (doctor.name.toLowerCase().includes(query)) {
                return true;
            }

            // Поиск по профессии
            if (doctor.profession_titles && doctor.profession_titles.toLowerCase().includes(query)) {
                return true;
            }

            // Поиск по дополнительной профессии
            if (doctor.second_profession_titles && doctor.second_profession_titles.toLowerCase().includes(query)) {
                return true;
            }

            return false;
        });
    }

    return result;
});

// SEO meta
useHead({
    title: 'Врачи клиники ВеронаМед в Санкт-Петербурге',
    meta: [
        {
            name: 'description',
            content: 'Опытные врачи различных специальностей клиники ВеронаМед. Запишитесь на консультацию к нашим специалистам. Выборгский район Санкт-Петербурга.'
        }
    ]
});
</script>