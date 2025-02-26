// components/MainMenu/index.vue
<template>
    <header class="bg-white shadow-md relative">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-center items-center h-14 md:h-28 relative">
                <!-- Desktop Navigation -->
                <DesktopMenu @search="openSearch" />

                <!-- Mobile Menu Button (только на мобильных) -->

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

        // Проверяем, не является ли элемент кнопкой меню или его потомком
        const menuButton = document.querySelector('[data-menu-button]');
        if (menuButton && (menuButton === target || menuButton.contains(target))) {
            return;
        }

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