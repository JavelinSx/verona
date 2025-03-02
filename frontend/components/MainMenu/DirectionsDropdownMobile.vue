# components/MainMenu/DirectionsDropdownMobile.vue
<template>
    <div class="space-y-4">
        <div v-for="section in directions" :key="section.title"
            class="border-b border-gray-100 pb-3 mb-3 last:border-b-0 last:pb-0 last:mb-0">
            <div class="flex items-center justify-between px-2 py-2 cursor-pointer rounded-md hover:bg-gray-50"
                @click="toggleSection(section.title)">
                <div class="flex items-center">
                    <Icon :name="section.icon" class="w-5 h-5 mr-3 text-green-600" />
                    <span class="text-base font-medium text-gray-900">
                        {{ section.title }}
                    </span>
                </div>
                <Icon name="heroicons:chevron-down" class="w-5 h-5 text-gray-500 transition-transform duration-200"
                    :class="{ 'rotate-180': openSections[section.title] }" />
            </div>

            <Transition enter-active-class="transition duration-150 ease-out"
                enter-from-class="transform scale-y-95 opacity-0" enter-to-class="transform scale-y-100 opacity-100"
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="transform scale-y-100 opacity-100" leave-to-class="transform scale-y-95 opacity-0">
                <div v-if="openSections[section.title]" class="mt-2 pl-10 origin-top max-h-[50vh] overflow-y-auto">
                    <ul class="space-y-2">
                        <li v-for="item in section.items" :key="item.name" class="py-1">
                            <div>
                                <div class="flex items-center justify-between">
                                    <NuxtLink :to="item.path"
                                        class="text-sm text-gray-700 hover:text-green-600 flex-grow"
                                        @click="$emit('select')">
                                        {{ item.name }}
                                    </NuxtLink>
                                    <button v-if="item.subItems && item.subItems.length > 0"
                                        @click.stop.prevent="toggleSubMenu(section.title, item.name)"
                                        class="p-1 rounded-full hover:bg-gray-100">
                                        <Icon name="heroicons:chevron-down"
                                            class="w-4 h-4 text-gray-400 transition-transform duration-200"
                                            :class="{ 'rotate-180': isSubMenuOpen(section.title, item.name) }" />
                                    </button>
                                </div>

                                <Transition enter-active-class="transition duration-150 ease-out"
                                    enter-from-class="transform scale-y-95 opacity-0"
                                    enter-to-class="transform scale-y-100 opacity-100"
                                    leave-active-class="transition duration-100 ease-in"
                                    leave-from-class="transform scale-y-100 opacity-100"
                                    leave-to-class="transform scale-y-95 opacity-0">
                                    <ul v-if="isSubMenuOpen(section.title, item.name)"
                                        class="pl-4 mt-2 space-y-2 border-l-2 border-gray-100 origin-top">
                                        <li v-for="subItem in item.subItems" :key="subItem.name">
                                            <NuxtLink :to="subItem.path"
                                                class="block text-xs text-gray-600 hover:text-green-600 py-1"
                                                @click="$emit('select')">
                                                {{ subItem.name }}
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </Transition>
                            </div>
                        </li>
                    </ul>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { MenuItem } from '../../types/menu';

const props = defineProps<{
    directions: MenuItem[]
}>();

defineEmits(['select']);

const openSections = ref<Record<string, boolean>>({});
const openSubMenus = ref<Record<string, string[]>>({});

const toggleSection = (title: string) => {
    openSections.value[title] = !openSections.value[title];
};

const toggleSubMenu = (sectionTitle: string, itemName: string) => {
    if (!openSubMenus.value[sectionTitle]) {
        openSubMenus.value[sectionTitle] = [];
    }

    const index = openSubMenus.value[sectionTitle].indexOf(itemName);
    if (index === -1) {
        openSubMenus.value[sectionTitle].push(itemName);
    } else {
        openSubMenus.value[sectionTitle].splice(index, 1);
    }
};

const isSubMenuOpen = (sectionTitle: string, itemName: string) => {
    return openSubMenus.value[sectionTitle]?.includes(itemName) || false;
};
</script>

<style scoped>
/* Для плавности анимаций */
.origin-top {
    transform-origin: top;
}
</style>