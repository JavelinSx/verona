<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
      service-rules <!-- Вставляем название страницы из URL -->
    </h1>
    <div class="bg-white rounded-lg shadow-md p-6">
      <p class="text-gray-600 mb-4">
        Страница находится в разработке.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Настройка метаданных страницы
useHead({
  title: 'service-rules - ВеронаМед',
  meta: [
    { name: 'description', content: 'Информация о service-rules в клинике ВеронаМед' }
  ]
})
</script>
