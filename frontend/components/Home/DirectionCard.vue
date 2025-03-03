<!-- components/Home/DirectionCard.vue -->
<template>
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div class="h-48 bg-gray-200 relative">
            <!-- <img :src="direction.image" :alt="direction.name" class="w-full h-full object-cover" /> -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold text-green-600 mb-2">{{ direction.name }}</h3>
            <p class="text-gray-700 mb-4">{{ direction.description }}</p>
            <NuxtLink :to="`/directions/${direction.slug}`"
                class="inline-flex items-center text-green-600 hover:text-green-700">
                Подробнее
                <Icon name="heroicons:arrow-right" class="ml-1 w-4 h-4" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
defineProps({
    direction: {
        type: Object,
        required: true
    }
});
</script>