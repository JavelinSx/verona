<!-- components/Doctors/DoctorCard.vue -->
<template>
    <div
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
        <div class="pt-6 px-6 flex justify-center">
            <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                <img v-if="doctor.avatar" :src="doctor.avatar" :alt="doctor.name" class="w-full h-full object-cover" />
                <div v-else class="w-full h-full flex items-center justify-center bg-green-50">
                    <Icon name="heroicons:user" class="w-16 h-16 text-green-200" />
                </div>
            </div>
        </div>
        <div class="p-6 text-center flex-grow flex flex-col">
            <div class="flex-grow">
                <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ doctor.name }}</h3>
                <p class="text-green-600 font-medium mb-2">{{ displayProfession }}</p>
                <p v-if="doctor.work_period" class="text-sm text-gray-600 mb-4">Стаж работы: {{ doctor.work_period }}
                </p>
            </div>
            <div class="space-y-2 mt-auto">
                <NuxtLink :to="`/appointment?doctor=${doctor.id}`"
                    class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors w-full">
                    Записаться на приём
                </NuxtLink>
                <NuxtLink :to="`/doctors/${doctor.id}`"
                    class="inline-flex items-center justify-center px-4 py-2 border border-green-500 text-sm font-medium rounded-md text-green-600 hover:bg-green-50 transition-colors w-full">
                    Подробнее о враче
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDoctorsStore } from '~/stores/doctorsStore';
import type { Doctor } from '~/types/doctors';

// Определение props
const props = defineProps<{
    doctor: Doctor;
}>();

const doctorsStore = useDoctorsStore();

// Форматирование отображаемой профессии
const displayProfession = computed(() => {
    if (props.doctor.profession_titles) {
        return props.doctor.profession_titles;
    }

    // Если нет названий профессий, получаем их из store
    const professionIds = props.doctor.profession.map(id => Number(id));
    const professionNames = professionIds
        .map(id => {
            const profession = doctorsStore.getProfessionById(id);
            return profession?.doctor_name || profession?.name || '';
        })
        .filter(name => name);

    return professionNames.join(', ');
});
</script>