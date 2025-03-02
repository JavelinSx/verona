<!-- components/BaseSlider/PromotionSlider.vue -->
<template>
    <div class="relative w-full mb-12 mt-8">
        <div class="max-w-screen-lg mx-auto">
            <h2 class="text-2xl md:text-3xl font-normal text-gray-800 mb-6 text-center">
                {{ title }}
            </h2>

            <ClientOnly>
                <!-- Напрямую используем компоненты Swiper -->
                <Swiper :modules="swiperModules" :slides-per-view="1" :centered-slides="true" :effect="'coverflow'"
                    :coverflow-effect="{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }" :breakpoints="{
                        640: {
                            slidesPerView: 'auto',
                            spaceBetween: 30
                        }
                    }" :grab-cursor="true" :pagination="{
                        clickable: true,
                        dynamicBullets: true
                    }" :autoplay="{
                        delay: 5000,
                        disableOnInteraction: false
                    }" :speed="800" class="promotion-swiper">

                    <SwiperSlide v-for="promotion in promotions" :key="promotion.id" class="swiper-slide-custom">
                        <div class="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg h-full">
                            <!-- Image Side - скрываем на мобильных -->
                            <div v-if="promotion.image"
                                class="hidden md:block md:w-1/2 relative bg-gray-100 min-h-[250px]">
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-600/30 z-10 pointer-events-none">
                                </div>
                                <img :src="promotion.image" :alt="promotion.title" class="w-full h-full object-cover" />
                            </div>

                            <!-- Content Side -->
                            <div class="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                                <div class="flex flex-col h-full">
                                    <!-- Valid until -->
                                    <div v-if="promotion.validUntil" class="text-sm text-gray-600 mb-2">
                                        Специальное предложение {{ promotion.validUntil }}
                                    </div>

                                    <!-- Title and subtitle -->
                                    <h3 class="text-xl md:text-2xl font-semibold text-green-600 mb-2">
                                        {{ promotion.title }}
                                    </h3>
                                    <h4 v-if="promotion.subtitle"
                                        class="text-lg md:text-xl font-medium text-green-600 mb-4">
                                        {{ promotion.subtitle }}
                                    </h4>

                                    <!-- Price -->
                                    <div v-if="promotion.price" class="flex items-center gap-2 mb-4">
                                        <span class="text-xl md:text-2xl font-bold text-green-600">{{ promotion.price
                                        }}</span>
                                        <span v-if="promotion.originalPrice" class="text-gray-400 line-through text-sm">
                                            {{ promotion.originalPrice }}
                                        </span>
                                    </div>

                                    <!-- Features list -->
                                    <ul v-if="promotion.features && promotion.features.length" class="space-y-2 mb-4">
                                        <li v-for="(feature, index) in promotion.features" :key="index"
                                            class="flex items-start">
                                            <span class="text-green-600 mr-2">•</span>
                                            <span class="text-gray-700">{{ feature }}</span>
                                        </li>
                                    </ul>

                                    <!-- Description -->
                                    <p v-if="promotion.description" class="text-gray-600 mb-4">
                                        {{ promotion.description }}
                                    </p>

                                    <!-- Doctors -->
                                    <div v-if="promotion.doctors && promotion.doctors.length" class="mb-4">
                                        <p class="text-sm text-gray-600 mb-2">В акции принимают участие врачи:</p>
                                        <div v-for="(doctor, index) in promotion.doctors" :key="index"
                                            class="mb-2 last:mb-0">
                                            <p class="text-green-600 font-medium">{{ doctor.name }}</p>
                                            <p class="text-sm text-gray-600">{{ doctor.position }}</p>
                                            <p v-if="doctor.experience" class="text-sm text-gray-500">{{
                                                doctor.experience }}</p>
                                            <p v-if="doctor.additionalInfo" class="text-sm text-gray-500">{{
                                                doctor.additionalInfo }}</p>
                                        </div>
                                    </div>

                                    <!-- Buttons -->
                                    <div class="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
                                        <NuxtLink to="/promotions"
                                            class="font-normal text-sm rounded-lg px-3 py-2 border border-green-500 text-green-600 font-medium text-center hover:bg-green-50 transition-colors">
                                            Подробнее
                                        </NuxtLink>
                                        <NuxtLink to="/appointment"
                                            class="font-normal text-sm rounded-lg px-3 py-2 bg-green-600 text-white font-medium text-center hover:bg-green-700 transition-colors">
                                            Записаться на прием
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <template #fallback>
                    <div class="bg-white p-6 rounded-xl shadow-md">
                        <p class="text-center text-gray-600">Загрузка специальных предложений...</p>
                    </div>
                </template>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, type PropType } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import type { Promotion } from '~/utils/promotionData';
import { promotionsData } from '~/utils/promotionData';

const props = defineProps({
    title: {
        type: String,
        default: 'Специальные предложения'
    },
    customPromotions: {
        type: Array as PropType<Promotion[]>,
        default: null
    }
});

// Используем кастомные акции, если они переданы, иначе берем данные по умолчанию
const promotions = ref<Promotion[]>(props.customPromotions || promotionsData);

// Определяем массив модулей Swiper
const swiperModules = [Autoplay, Pagination, Navigation, EffectCoverflow];

// // Определение мобильного устройства
// const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 640);
// const isMobile = computed(() => windowWidth.value < 640);

// // Отслеживание изменения размера окна
// const handleResize = () => {
//     windowWidth.value = window.innerWidth;
// };

// onMounted(() => {
//     window.addEventListener('resize', handleResize);
// });

// onUnmounted(() => {
//     window.removeEventListener('resize', handleResize);
// });
</script>

<style scoped>
.promotion-swiper {
    width: 100%;
    position: relative;
    overflow: hidden;
}

.promotion-swiper :deep(.swiper-wrapper) {
    display: flex;
    flex-direction: row !important;
    height: auto;
    align-items: stretch;
}

.swiper-slide-custom {
    width: 80%;
    max-width: 800px;
    height: auto !important;
    display: flex;
}

.swiper-slide-custom>div {
    width: 100%;
    height: 100%;
}

@media (max-width: 639px) {
    .swiper-slide-custom {
        width: 90%;
    }
}

.promotion-swiper :deep(.swiper-slide) {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    transform-origin: center center;
}

.promotion-swiper :deep(.swiper-slide-active) {
    z-index: 10;
}

.promotion-swiper :deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    background-color: #4ade80;
    opacity: 0.5;
}

.promotion-swiper :deep(.swiper-pagination-bullet-active) {
    opacity: 1;
    background-color: #16a34a;
}

/* Стили для навигационных стрелок (только для десктопа) */
@media (min-width: 640px) {

    .promotion-swiper :deep(.swiper-button-next),
    .promotion-swiper :deep(.swiper-button-prev) {
        color: #16a34a;
        background-color: rgba(255, 255, 255, 0.8);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }

    .promotion-swiper :deep(.swiper-button-prev) {
        left: 10px;
    }

    .promotion-swiper :deep(.swiper-button-next) {
        right: 10px;
    }

    .promotion-swiper :deep(.swiper-button-next:hover),
    .promotion-swiper :deep(.swiper-button-prev:hover) {
        background-color: #16a34a;
        color: white;
    }

    .promotion-swiper :deep(.swiper-button-next::after),
    .promotion-swiper :deep(.swiper-button-prev::after) {
        font-size: 18px;
        font-weight: bold;
    }
}

/* Скрываем стрелки на мобильных устройствах */
@media (max-width: 639px) {

    .promotion-swiper :deep(.swiper-button-next),
    .promotion-swiper :deep(.swiper-button-prev) {
        display: none;
    }
}

/* Перемещаем пагинацию внутрь контейнера */
.promotion-swiper :deep(.swiper-pagination) {
    position: relative;
    margin-top: 20px;
    bottom: 0;
}

/* Улучшение эффекта тени для coverflow */
.promotion-swiper :deep(.swiper-slide-shadow-left),
.promotion-swiper :deep(.swiper-slide-shadow-right) {
    border-radius: 12px;
}
</style>