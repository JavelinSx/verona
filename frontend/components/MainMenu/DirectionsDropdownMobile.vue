# components/MainMenu/DirectionsDropdownMobile.vue
<template>
    <div class="space-y-4">
        <div v-for="section in directions" :key="section.title">
            <div class="flex items-center justify-between px-2 py-3 cursor-pointer"
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

            <Transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <ul v-if="openSections[section.title]" class="mt-2 space-y-2 px-4">
                    <li v-for="item in section.items" :key="item">
                        <NuxtLink :to="`/${item.toLowerCase().replace(/\s+/g, '-')}`"
                            class="block py-2 text-base text-gray-500 hover:text-green-600" @click="$emit('select')">
                            {{ item }}
                        </NuxtLink>
                    </li>
                </ul>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MenuItem } from '~/types/menu';

const props = defineProps<{
    directions: MenuItem[]
}>();

defineEmits(['select']);

const openSections = ref<Record<string, boolean>>({});

const toggleSection = (title: string) => {
    openSections.value[title] = !openSections.value[title];
};
</script>