// QuickActions.vue
<template>
    <div class="flex items-center space-x-4">
        <button @click="$emit('search')" class="p-2 hover:bg-green-50 rounded-full">
            <Icon name="heroicons:magnifying-glass" class="w-5 h-5 text-gray-600" />
        </button>
        <div class="hidden md:flex md:items-center md:space-x-4">
            <NuxtLink to="/appointment"
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                <Icon name="heroicons:calendar" class="w-5 h-5 mr-2" />
                Записаться
            </NuxtLink>
            <a href="tel:+7XXXXXXXXXX" class="text-base font-medium text-gray-700 hover:text-green-600">
                <Icon name="heroicons:phone" class="w-5 h-5 mr-2 inline-block" />
                +7 (XXX) XXX-XX-XX
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
defineEmits(['search']);
</script>