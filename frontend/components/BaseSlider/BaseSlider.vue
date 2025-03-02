<!-- components/BaseSlider/BaseSlider.vue -->
<template>
    <div class="relative w-full" :class="containerClass">
        <div class="max-w-screen-lg mx-auto">
            <slot name="header"></slot>

            <div v-if="isMounted">
                <Swiper :modules="modules" :slides-per-view="slidesPerView" :centered-slides="centeredSlides"
                    :effect="effect" :coverflow-effect="coverflowEffect" :breakpoints="breakpoints"
                    :grab-cursor="grabCursor" :pagination="pagination" :navigation="!isMobile && navigation"
                    :autoplay="autoplay" :space-between="spaceBetween" :speed="speed" :class="swiperClass">
                    <slot></slot>
                </Swiper>
            </div>
            <div v-else class="loading-placeholder">
                <div class="bg-gray-200 rounded-xl animate-pulse h-[300px]"></div>
            </div>

            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, type PropType, nextTick } from 'vue';
import { Swiper } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, EffectCoverflow, EffectFade, EffectFlip, EffectCube, EffectCards } from 'swiper/modules';
import type { SwiperModule } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-cards';

interface EffectModulesType {
    coverflow: typeof EffectCoverflow;
    fade: typeof EffectFade;
    flip: typeof EffectFlip;
    cube: typeof EffectCube;
    cards: typeof EffectCards;
}

const props = defineProps({
    effect: {
        type: String,
        default: 'coverflow',
        validator: (value: string) => ['slide', 'coverflow', 'fade', 'flip', 'cube', 'cards'].includes(value)
    },
    coverflowEffect: {
        type: Object,
        default: () => ({
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        })
    },
    slidesPerView: {
        type: [Number, String] as PropType<number | 'auto'>,
        default: 1
    },
    centeredSlides: {
        type: Boolean,
        default: true
    },
    spaceBetween: {
        type: Number,
        default: 30
    },
    breakpoints: {
        type: Object,
        default: () => ({
            640: {
                slidesPerView: 'auto',
                spaceBetween: 30
            }
        })
    },
    grabCursor: {
        type: Boolean,
        default: true
    },
    pagination: {
        type: [Object, Boolean],
        default: () => ({
            clickable: true,
            dynamicBullets: true
        })
    },
    navigation: {
        type: Boolean,
        default: true
    },
    autoplay: {
        type: [Object, Boolean],
        default: () => ({
            delay: 5000,
            disableOnInteraction: false
        })
    },
    speed: {
        type: Number,
        default: 800
    },
    containerClass: {
        type: String,
        default: 'mb-12 mt-8'
    },
    swiperClass: {
        type: String,
        default: 'base-swiper'
    },
    mobileBreakpoint: {
        type: Number,
        default: 640
    }
});

// Флаг для отслеживания состояния монтирования
const isMounted = ref(false);

// Выбор необходимых модулей Swiper на основе выбранного эффекта
const modules = computed(() => {
    const baseModules: SwiperModule[] = [Autoplay, Pagination, Navigation];

    const effectModules: EffectModulesType = {
        coverflow: EffectCoverflow,
        fade: EffectFade,
        flip: EffectFlip,
        cube: EffectCube,
        cards: EffectCards
    };

    const effectKey = props.effect as keyof EffectModulesType;

    if (props.effect !== 'slide' && effectKey in effectModules) {
        baseModules.push(effectModules[effectKey]);
    }

    return baseModules;
});

// Определение мобильного устройства
const windowWidth = ref(0);
const isMobile = computed(() => windowWidth.value < props.mobileBreakpoint);

// Отслеживание изменения размера окна
const handleResize = () => {
    windowWidth.value = window.innerWidth;

};

onMounted(() => {
    // Устанавливаем ширину окна только на клиенте
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', handleResize);

    // Отложенный рендеринг Swiper, чтобы избежать проблем с гидратацией
    nextTick(() => {
        isMounted.value = true;
    });
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.base-swiper {
    width: 100%;
    position: relative;
}

.loading-placeholder {
    width: 100%;
    margin-bottom: 20px;
}

/* Принудительная горизонтальная ориентация для swiper-wrapper */
:deep(.swiper) {
    overflow: hidden;
    position: relative;
    width: 100%;
}

:deep(.swiper-wrapper) {
    display: flex;
    flex-direction: row !important;
    height: auto;
    position: relative;
    width: 100%;
    z-index: 1;
    box-sizing: content-box;
}

:deep(.swiper-slide) {
    flex-shrink: 0;
    width: auto;
    height: 100%;
    position: relative;
    transition-property: transform;
}

.base-swiper :deep(.swiper-slide) {
    border-radius: 12px;
    overflow: hidden;
    transform-origin: center center;
    height: auto;
    display: flex;
    flex-direction: column;
    /* Внутри слайда содержимое может быть в колонку */
}

.base-swiper :deep(.swiper-slide-active) {
    z-index: 10;
}

.base-swiper :deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    background-color: #4ade80;
    opacity: 0.5;
}

.base-swiper :deep(.swiper-pagination-bullet-active) {
    opacity: 1;
    background-color: #16a34a;
}

/* Стили для навигационных стрелок (только для десктопа) */
@media (min-width: 640px) {

    .base-swiper :deep(.swiper-button-next),
    .base-swiper :deep(.swiper-button-prev) {
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

    .base-swiper :deep(.swiper-button-prev) {
        left: 10px;
    }

    .base-swiper :deep(.swiper-button-next) {
        right: 10px;
    }

    .base-swiper :deep(.swiper-button-next:hover),
    .base-swiper :deep(.swiper-button-prev:hover) {
        background-color: #16a34a;
        color: white;
    }

    .base-swiper :deep(.swiper-button-next::after),
    .base-swiper :deep(.swiper-button-prev::after) {
        font-size: 18px;
        font-weight: bold;
    }
}

/* Скрываем стрелки на мобильных устройствах */
@media (max-width: 639px) {

    .base-swiper :deep(.swiper-button-next),
    .base-swiper :deep(.swiper-button-prev) {
        display: none;
    }
}

/* Перемещаем пагинацию внутрь контейнера */
.base-swiper :deep(.swiper-pagination) {
    position: relative;
    margin-top: 20px;
    bottom: 0;
}

/* Улучшение эффекта тени для coverflow */
.base-swiper :deep(.swiper-slide-shadow-left),
.base-swiper :deep(.swiper-slide-shadow-right) {
    border-radius: 12px;
}
</style>