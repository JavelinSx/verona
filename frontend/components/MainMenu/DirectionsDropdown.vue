// DirectionsDropdown.vue
<template>
    <div class="relative">
        <button @click="menuStore.toggleMenu"
            class="group inline-flex items-center text-base font-medium text-gray-700 hover:text-green-600">
            <span>Направления</span>
            <Icon name="heroicons:chevron-down" class="ml-2 h-5 w-5 transition-transform duration-200"
                :class="{ 'rotate-180': menuStore.isMenuOpen }" />
        </button>

        <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <div v-if="menuStore.isMenuOpen"
                class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <div v-for="section in menuStore.getAllDirections" :key="section.title" class="-m-3 p-3">
                            <h3 class="text-base font-medium text-gray-900">{{ section.title }}</h3>
                            <ul class="mt-4 space-y-4">
                                <li v-for="item in section.items" :key="item">
                                    <NuxtLink :to="`/${item.toLowerCase().replace(/\s+/g, '-')}`"
                                        class="text-sm text-gray-500 hover:text-green-600" @click="menuStore.closeMenu">
                                        {{ item }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '~/stores/menuStore';
const menuStore = useMenuStore();
</script>