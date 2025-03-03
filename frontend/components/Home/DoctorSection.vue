<!-- components/Home/DoctorsSection.vue -->
<template>
    <section class="py-12 bg-gray-50">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">Наши специалисты</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Карточки врачей -->
                <DoctorCardHome v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" />
            </div>

            <div class="text-center mt-8">
                <NuxtLink to="/doctors"
                    class="inline-flex items-center justify-center px-6 py-3 border border-green-500 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors">
                    Все специалисты
                    <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import DoctorCard from './DoctorCard.vue';

// Данные о врачах - в реальном приложении лучше получать из API или Pinia store
const doctors = ref([
    {
        id: 1,
        name: 'Азаров Евгений Сергеевич',
        position: 'Флеболог, Сосудистый хирург',
        experience: '10 лет',
        avatar: '/img/doctors/doctor1.jpg'
    },
    {
        id: 2,
        name: 'Моисеенко Савелий Сергеевич',
        position: 'Флеболог, Терапевт',
        experience: '5 лет',
        avatar: '/img/doctors/doctor2.jpg'
    },
    {
        id: 3,
        name: 'Прокопенко Оксана Александровна',
        position: 'Терапевт',
        experience: '8 лет',
        avatar: '/img/doctors/doctor3.jpg'
    },
    {
        id: 4,
        name: 'Иванов Антон Петрович',
        position: 'Кардиолог',
        experience: '12 лет',
        avatar: '/img/doctors/doctor4.jpg'
    }
]);
</script>