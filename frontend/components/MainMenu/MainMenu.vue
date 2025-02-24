// components/MainMenu/index.vue
<template>
    <header class="bg-white shadow-md relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <Logo />

                <!-- Desktop Navigation -->
                <DesktopMenu />

                <!-- Quick Actions -->
                <QuickActions @search="openSearch" />

                <!-- Mobile Menu Button -->
                <MobileMenu />
            </div>
        </div>

        <!-- Search Modal -->
        <SearchModal v-if="isSearchOpen" @close="closeSearch" />
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMenuStore } from '~/stores/menuStore';

const menuStore = useMenuStore();
const isSearchOpen = ref(false);

const openSearch = () => {
    isSearchOpen.value = true;
};

const closeSearch = () => {
    isSearchOpen.value = false;
};

// Закрываем меню при смене роута
watch(() => useRoute().path, () => {
    menuStore.closeMenu();
    menuStore.closeMobileMenu();
});

// Закрываем меню при клике вне его
onMounted(() => {
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.menu-container')) {
            menuStore.closeMenu();
        }
    };

    document.addEventListener('click', handleClickOutside);

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside);
    });
});
</script>