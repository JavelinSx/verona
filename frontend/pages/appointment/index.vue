<template>
    <div class="max-w-screen-lg mx-auto px-4 py-12">
        <h1 class="text-2xl font-bold text-gray-800 mb-6">Запись на приём</h1>
        <p v-if="doctorId" class="text-gray-600">
            Запись к врачу ID: {{ doctorId }} (в разработке)
        </p>
        <p v-else class="text-gray-600">
            Выберите врача для записи (в разработке)
        </p>
    </div>
</template>

<script setup>
const route = useRoute();
const doctorId = route.query.doctor;
</script>