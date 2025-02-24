# components/MainMenu/SearchModal.vue
<template>
    <div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <!-- Background overlay -->
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="$emit('close')"></div>

            <!-- Modal panel -->
            <div
                class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <!-- Search input -->
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Icon name="heroicons:magnifying-glass" class="h-5 w-5 text-gray-400" />
                        </div>
                        <input ref="searchInput" v-model="searchQuery" type="text"
                            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Поиск по услугам, врачам, статьям..." @input="handleSearch" />
                    </div>

                    <!-- Search results -->
                    <div v-if="searchQuery" class="mt-4">
                        <div v-if="isLoading" class="text-center py-4">
                            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto"></div>
                        </div>

                        <div v-else-if="searchResults.length > 0" class="divide-y divide-gray-200">
                            <div v-for="(group, category) in groupedResults" :key="category" class="py-4">
                                <h3 class="text-sm font-medium text-gray-500 mb-2">{{ category }}</h3>
                                <ul class="space-y-2">
                                    <li v-for="result in group" :key="result.id" class="hover:bg-gray-50">
                                        <NuxtLink :to="result.link" class="block px-3 py-2 rounded-md"
                                            @click="$emit('close')">
                                            <span class="block text-sm font-medium text-gray-900">
                                                {{ result.title }}
                                            </span>
                                            <span v-if="result.description" class="block text-sm text-gray-500">
                                                {{ result.description }}
                                            </span>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div v-else class="text-center py-4 text-gray-500">
                            Ничего не найдено
                        </div>
                    </div>

                    <!-- Quick links -->
                    <div v-else class="mt-4">
                        <h3 class="text-sm font-medium text-gray-500 mb-2">Популярные запросы</h3>
                        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <NuxtLink v-for="link in quickLinks" :key="link.title" :to="link.path"
                                class="relative rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                                @click="$emit('close')">
                                <div class="flex-1 min-w-0">
                                    <span class="absolute inset-0" aria-hidden="true" />
                                    <p class="text-sm font-medium text-gray-900">
                                        {{ link.title }}
                                    </p>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Modal footer -->
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button"
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        @click="$emit('close')">
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';

interface SearchResult {
    id: string;
    title: string;
    description?: string;
    link: string;
    category: string;
}

const emit = defineEmits(['close']);
const searchQuery = ref('');
const isLoading = ref(false);
const searchResults = ref<SearchResult[]>([]);

// Пример быстрых ссылок
const quickLinks = [
    { title: 'Запись на приём', path: '/appointment' },
    { title: 'Цены на услуги', path: '/prices' },
    { title: 'Наши врачи', path: '/doctors' },
    { title: 'УЗИ-диагностика', path: '/services/uzi' },
    { title: 'Анализы', path: '/services/tests' },
    { title: 'Контакты', path: '/contacts' }
];

// Имитация поиска с задержкой
const handleSearch = useDebounceFn(async () => {
    if (!searchQuery.value) {
        searchResults.value = [];
        return;
    }

    isLoading.value = true;

    try {
        // Здесь будет реальный поиск через API
        await new Promise(resolve => setTimeout(resolve, 500));

        // Пример результатов
        searchResults.value = [
            {
                id: '1',
                title: 'УЗИ брюшной полости',
                description: 'Диагностика органов брюшной полости',
                link: '/services/uzi/abdomen',
                category: 'Услуги'
            },
            {
                id: '2',
                title: 'Иванов Иван Иванович',
                description: 'Врач-терапевт, стаж 15 лет',
                link: '/doctors/ivanov',
                category: 'Врачи'
            }
        ];
    } catch (error) {
        console.error('Search error:', error);
        searchResults.value = [];
    } finally {
        isLoading.value = false;
    }
}, 300);

// Группировка результатов по категориям
const groupedResults = computed(() => {
    return searchResults.value.reduce((groups, result) => {
        if (!groups[result.category]) {
            groups[result.category] = [];
        }
        groups[result.category].push(result);
        return groups;
    }, {} as Record<string, SearchResult[]>);
});

// Фокус на поле поиска при открытии
const searchInput = ref<HTMLInputElement | null>(null);
onMounted(() => {
    nextTick(() => {
        searchInput.value?.focus();
    });
});

// Закрытие по Escape
onMounted(() => {
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            emit('close');
        }
    };

    document.addEventListener('keydown', handleEscape);
    onUnmounted(() => {
        document.removeEventListener('keydown', handleEscape);
    });
});
</script>