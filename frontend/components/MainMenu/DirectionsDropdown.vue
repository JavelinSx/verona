// DirectionsDropdown.vue
<template>
    <div class="relative menu-container">
        <button @click="menuStore.toggleMenu" data-menu-button class="flex items-center text-sm font-medium text-gray-700 hover:text-green-600 py-3
                  transition duration-150"
            :class="{ 'text-green-600 border-b-2 border-green-600': menuStore.isMenuOpen }">
            <span>Направления</span>
            <Icon name="heroicons:chevron-down" class="ml-1.5 h-4 w-4 transition-transform duration-200"
                :class="{ 'rotate-180': menuStore.isMenuOpen }" />
        </button>

        <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <div v-if="menuStore.isMenuOpen"
                class="absolute left-0 z-50 w-72 rounded-md rounded-t-[0px] border border-t-[0px] bg-white focus:outline-none">
                <div>
                    <div v-for="section in menuStore.getAllDirections" :key="section.title"
                        class=" min-h-[56px] flex items-center w-full" @mouseenter="hoverSection = section.title"
                        @mouseleave="hoverSection = null">
                        <!-- Main menu item -->
                        <div class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 cursor-pointer"
                            :class="{ 'bg-gray-50 text-green-600': activeSection === section.title || hoverSection === section.title }"
                            @click="toggleSection(section.title)">
                            <div class="flex items-center">
                                <Icon :name="section.icon" class="mr-3 h-5 w-5 text-gray-400"
                                    :class="{ 'text-green-500': activeSection === section.title || hoverSection === section.title }" />
                                <span>{{ section.title }}</span>
                            </div>
                            <Icon name="heroicons:chevron-right" class="ml-2 h-4 w-4 text-gray-400"
                                :class="{ 'text-green-500': activeSection === section.title || hoverSection === section.title }" />
                        </div>

                        <!-- Submenu (shows on hover/click) -->
                        <Transition enter-active-class="transition ease-out duration-200"
                            enter-from-class="opacity-0 translate-x-1" enter-to-class="opacity-100 translate-x-0"
                            leave-active-class="transition ease-in duration-150"
                            leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 translate-x-1">
                            <div v-if="activeSection === section.title || hoverSection === section.title"
                                class="absolute left-full top-0 z-10 w-screen max-w-md -translate-y-0 transform">
                                <div class="overflow-hidden rounded-md rounded-t-[0px] border border-t-[0px]">
                                    <div class="relative grid gap-5 bg-white px-5 py-3">
                                        <div v-for="item in section.items" :key="item.name">
                                            <div class="group">
                                                <NuxtLink :to="item.path"
                                                    class="block text-sm text-gray-900 hover:text-green-600"
                                                    @click="menuStore.closeMenu">
                                                    {{ item.name }}
                                                </NuxtLink>

                                                <div v-if="item.subItems && item.subItems.length > 0"
                                                    class="mt-1.5 space-y-1.5">
                                                    <NuxtLink v-for="subItem in item.subItems" :key="subItem.name"
                                                        :to="subItem.path"
                                                        class="block text-sm text-gray-500 hover:text-green-600 pl-3 border-l border-gray-200"
                                                        @click="menuStore.closeMenu">
                                                        {{ subItem.name }}
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMenuStore } from '~/stores/menuStore';

const menuStore = useMenuStore();
const activeSection = ref<string | null>(null);
const hoverSection = ref<string | null>(null);

// Toggle section on click
const toggleSection = (title: string) => {
    if (activeSection.value === title) {
        activeSection.value = null;
    } else {
        activeSection.value = title;
    }
};

// Reset active section when menu closes
watch(() => menuStore.isMenuOpen, (isOpen) => {
    if (!isOpen) {
        activeSection.value = null;
    }
});
</script>