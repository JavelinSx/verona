<!-- components/BaseSlider/SliderSlide.vue -->
<template>
    <SwiperSlide :class="[
        'slide-custom',
        'w-[90%]',
        'md:w-[calc(min(650px,70vw))]',
        'lg:w-[calc(min(750px,65vw))]',
        slideClass
    ]">
        <div class="slide-content bg-white rounded-xl overflow-hidden shadow-lg">
            <slot></slot>
        </div>
    </SwiperSlide>
</template>

<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';

defineProps({
    slideClass: {
        type: String,
        default: 'slide-custom'
    }
});
</script>

<style scoped>
.slide-custom {
    width: 80%;
    max-width: 800px;
    height: auto !important;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.slide-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

@media (max-width: 639px) {
    .slide-custom {
        width: 90%;
    }

    .slide-content {
        flex-direction: column;
    }
}
</style>