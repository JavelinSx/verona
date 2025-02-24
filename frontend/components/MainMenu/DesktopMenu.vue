// DesktopMenu.vue
<template>
    <div class="hidden md:flex md:items-center md:space-x-8">
        <!-- Directions Dropdown -->
        <DirectionsDropdown />

        <!-- Main Sections -->
        <nav class="hidden md:flex md:space-x-4">
            <NuxtLink v-for="section in menuStore.getMainSections" :key="section.title" :to="section.path"
                class="text-base font-medium text-gray-700 hover:text-green-600">
                {{ section.title }}
            </NuxtLink>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '~/stores/menuStore';
const menuStore = useMenuStore();
</script>