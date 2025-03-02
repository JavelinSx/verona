<!-- components/BaseSlider/PromotionSlideContent.vue -->
<template>
    <!-- Image Side - скрываем на мобильных -->
    <div v-if="promotion.image" class="hidden md:block md:w-1/2 relative bg-gray-100 min-h-[250px]">
        <div class="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-600/30 z-10 pointer-events-none"></div>
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
            <h4 v-if="promotion.subtitle" class="text-lg md:text-xl font-medium text-green-600 mb-4">
                {{ promotion.subtitle }}
            </h4>

            <!-- Price -->
            <div v-if="promotion.price" class="flex items-center gap-2 mb-4">
                <span class="text-xl md:text-2xl font-bold text-green-600">{{ promotion.price }}</span>
                <span v-if="promotion.originalPrice" class="text-gray-400 line-through text-sm">
                    {{ promotion.originalPrice }}
                </span>
            </div>

            <!-- Features list -->
            <ul v-if="promotion.features && promotion.features.length" class="space-y-2 mb-4">
                <li v-for="(feature, index) in promotion.features" :key="index" class="flex items-start">
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
                <div v-for="(doctor, index) in promotion.doctors" :key="index" class="mb-2 last:mb-0">
                    <p class="text-green-600 font-medium">{{ doctor.name }}</p>
                    <p class="text-sm text-gray-600">{{ doctor.position }}</p>
                    <p v-if="doctor.experience" class="text-sm text-gray-500">{{ doctor.experience }}</p>
                    <p v-if="doctor.additionalInfo" class="text-sm text-gray-500">{{ doctor.additionalInfo }}</p>
                </div>
            </div>

            <!-- Buttons -->
            <div class="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
                <slot name="buttons">
                    <NuxtLink :to="detailLink || '/promotions'"
                        class="font-normal text-sm rounded-lg px-3 py-2 border border-green-500 text-green-600 font-medium text-center hover:bg-green-50 transition-colors">
                        {{ detailText || 'Подробнее' }}
                    </NuxtLink>
                    <NuxtLink :to="appointmentLink || '/appointment'"
                        class="font-normal text-sm rounded-lg px-3 py-2 bg-green-600 text-white font-medium text-center hover:bg-green-700 transition-colors">
                        {{ appointmentText || 'Записаться на прием' }}
                    </NuxtLink>
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Promotion } from '~/utils/promotionData';

defineProps({
    promotion: {
        type: Object as () => Promotion,
        required: true
    },
    detailLink: {
        type: String,
        default: ''
    },
    detailText: {
        type: String,
        default: ''
    },
    appointmentLink: {
        type: String,
        default: ''
    },
    appointmentText: {
        type: String,
        default: ''
    }
});
</script>