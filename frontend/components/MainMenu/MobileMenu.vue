// MobileMenu.vue
<template>
    <div class="md:hidden">
        <button @click="menuStore.toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
            aria-expanded="false">
            <span class="sr-only">Открыть меню</span>
            <Icon :name="menuStore.isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="h-6 w-6" />
        </button>

        <Transition enter-active-class="transition duration-150 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-100 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div v-if="menuStore.isMobileMenuOpen"
                class="absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-100">
                    <div class="px-5 pt-4 pb-6 space-y-6">
                        <!-- Directions Dropdown -->
                        <DirectionsDropdownMobile :directions="menuStore.getAllDirections" />

                        <!-- Main Sections -->
                        <nav class="grid gap-y-4">
                            <NuxtLink v-for="section in menuStore.getMainSections" :key="section.title"
                                :to="section.path" class="text-base font-medium text-gray-900 hover:text-green-600"
                                @click="menuStore.closeMobileMenu">
                                {{ section.title }}
                            </NuxtLink>
                        </nav>
                    </div>

                    <!-- Quick Actions -->
                    <div class="px-5 py-6 space-y-6">
                        <div class="grid grid-cols-2 gap-4">
                            <NuxtLink to="/appointment" class="text-base font-medium text-gray-900 hover:text-green-600"
                                @click="menuStore.closeMobileMenu">
                                <Icon name="heroicons:calendar" class="w-5 h-5 mr-2 inline-block" />
                                Записаться
                            </NuxtLink>
                            <a href="tel:+7XXXXXXXXXX" class="text-base font-medium text-gray-900 hover:text-green-600">
                                <Icon name="heroicons:phone" class="w-5 h-5 mr-2 inline-block" />
                                Позвонить
                            </a>
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