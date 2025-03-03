<!-- components/Home/DirectionsSection.vue -->
<template>
    <section class="py-12">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">Основные направления</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Карточки направлений -->
                <DirectionCard v-for="direction in directions" :key="direction.id" :direction="direction" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import DirectionCard from './DirectionCard.vue';

// Данные о направлениях - в реальном приложении лучше получать из API или Pinia store
const directions = ref([
    {
        id: 1,
        name: 'Терапия',
        slug: 'therapy',
        image: '/img/directions/therapy.jpg',
        description: 'Диагностика и лечение заболеваний внутренних органов. Профилактика и лечение широкого спектра патологий.'
    },
    {
        id: 2,
        name: 'Флебология',
        slug: 'phlebology',
        image: '/img/directions/phlebology.jpg',
        description: 'Современные методы диагностики и лечения заболеваний вен. Консультации опытных флебологов.'
    },
    {
        id: 3,
        name: 'Кардиология',
        slug: 'cardiology',
        image: '/img/directions/cardiology.jpg',
        description: 'Профилактика и лечение сердечно-сосудистых заболеваний. ЭКГ, холтер, консультации кардиологов.'
    },
    {
        id: 4,
        name: 'Неврология',
        slug: 'neurology',
        image: '/img/directions/neurology.jpg',
        description: 'Диагностика и лечение заболеваний нервной системы. Лечение головных болей, невралгий и других патологий.'
    },
    {
        id: 5,
        name: 'Гастроэнтерология',
        slug: 'gastroenterology',
        image: '/img/directions/gastroenterology.jpg',
        description: 'Диагностика и лечение заболеваний пищеварительной системы. Современные методы обследования.'
    },
    {
        id: 6,
        name: 'Эндокринология',
        slug: 'endocrinology',
        image: '/img/directions/endocrinology.jpg',
        description: 'Лечение заболеваний эндокринной системы. Диагностика и терапия нарушений обмена веществ.'
    }
]);
</script>