<!-- pages/index.vue -->
<template>
    <div>
        <!-- Промо-баннер с кнопками (отображается сразу под меню) -->
        <div class="relative w-full mb-12">
            <div class="max-w-screen-lg mx-auto">
                <!-- Используем наш PromotionSlider из уже существующих компонентов -->
                <ClientOnly>
                    <PromotionSlider />
                </ClientOnly>
            </div>
        </div>

        <!-- Секции главной страницы (используем компоненты) -->
        <DirectionsSection />
        <DoctorsSection />
        <BenefitsSection />
    </div>
</template>

<script setup>

// Используем макет по умолчанию
definePageMeta({
    layout: 'default'
});

// Заголовок страницы для SEO
useHead({
    title: 'ВеронаМед - Многопрофильная клиника в Санкт-Петербурге',
    meta: [
        {
            name: 'description',
            content: 'Клиника ВеронаМед предлагает полный спектр медицинских услуг. Запись к врачу онлайн, современное оборудование и опытные специалисты в Выборгском районе Санкт-Петербурга.'
        }
    ]
});
</script>