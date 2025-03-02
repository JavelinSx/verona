// DesktopMenu.vue
<template>
    <div class="flex flex-col w-full hidden md:block">
        <!-- Верхняя часть с логотипом и быстрыми действиями -->
        <div class="hidden md:flex md:justify-between items-center h-16 py-2">
            <Logo />
            <QuickActions @search="$emit('search')" />
        </div>

        <!-- Нижняя часть с основным меню -->
        <div class="hidden md:block border-t border-gray-200">
            <div class="flex items-center h-12">
                <!-- Directions Dropdown -->
                <DirectionsDropdown />

                <!-- Main Sections -->
                <nav class="flex ml-16 w-full">
                    <NuxtLink v-for="section in menuStore.getMainSections" :key="section.title" :to="section.path"
                        class="text-center text-sm font-medium text-gray-700 hover:text-green-600 py-3 w-full"
                        :class="{ 'text-green-600 border-b-2 border-green-600': isActiveRoute(section.path) }">
                        {{ section.title }}
                    </NuxtLink>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '~/stores/menuStore';

const menuStore = useMenuStore();
const route = useRoute();

// Определение активного маршрута для подсветки текущего раздела
const isActiveRoute = (path: string) => {
    return route.path === path || route.path.startsWith(`${path}/`);
};

defineEmits(['search']);
</script>