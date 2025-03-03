<!-- components/Home/BenefitsSection.vue -->
<template>
    <section class="py-12 bg-white">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">Почему выбирают нас</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(benefit, index) in benefits" :key="index" class="text-center">
                    <div class="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
                        <Icon :name="benefit.icon" class="w-8 h-8 text-green-600" />
                    </div>
                    <h3 class="text-xl font-medium text-gray-800 mb-2">{{ benefit.title }}</h3>
                    <p class="text-gray-600">{{ benefit.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Данные о преимуществах
const benefits = ref([
    {
        icon: 'heroicons:user-group',
        title: 'Опытные специалисты',
        description: 'Врачи с многолетним стажем работы и высшими квалификационными категориями'
    },
    {
        icon: 'heroicons:clock',
        title: 'Удобный график',
        description: 'Работаем 7 дней в неделю, вы всегда сможете найти удобное время для посещения'
    },
    {
        icon: 'heroicons:beaker',
        title: 'Современное оборудование',
        description: 'Диагностика и лечение с использованием новейших медицинских технологий'
    }
]);
</script>