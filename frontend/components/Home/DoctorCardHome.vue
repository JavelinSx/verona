<!-- components/Home/DoctorCard.vue -->
<template>
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div class="pt-6 px-6 flex justify-center">
            <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                <img :src="doctor.avatar" :alt="doctor.name" class="w-full h-full object-cover" />
            </div>
        </div>
        <div class="p-6 text-center">
            <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ doctor.name }}</h3>
            <p class="text-green-600 font-medium mb-2">{{ doctor.position }}</p>
            <p class="text-sm text-gray-600 mb-4">Стаж работы: {{ doctor.experience }}</p>
            <NuxtLink :to="`/appointment?doctor=${doctor.id}`"
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors w-full">
                Записаться на приём
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
defineProps({
    doctor: {
        type: Object,
        required: true
    }
});
</script>