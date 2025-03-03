<!-- components/Footer.vue -->
<template>
    <footer class="bg-white border-t border-gray-200">
        <div class="max-w-screen-lg mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <!-- Основное содержимое футера -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <!-- Первая колонка - Навигация -->
                <div class="space-y-3">
                    <h3 class="text-sm font-medium text-gray-500 mb-3">Навигация</h3>
                    <div class="space-y-2">
                        <NuxtLink v-for="item in mainLinks" :key="item.path" :to="item.path"
                            class="block text-sm text-gray-700 hover:text-green-600 transition-colors">
                            {{ item.title }}
                        </NuxtLink>
                    </div>
                </div>

                <!-- Вторая колонка - О клинике -->
                <div class="space-y-3">
                    <h3 class="text-sm font-medium text-gray-500 mb-3">О клинике</h3>
                    <div class="space-y-2">
                        <NuxtLink v-for="item in aboutLinks" :key="item.path" :to="item.path"
                            class="block text-sm text-gray-700 hover:text-green-600 transition-colors">
                            {{ item.title }}
                        </NuxtLink>
                    </div>
                </div>

                <!-- Третья колонка - Документы -->
                <div class="space-y-3">
                    <h3 class="text-sm font-medium text-gray-500 mb-3">Документы</h3>
                    <div class="space-y-2">
                        <NuxtLink v-for="item in legalLinks" :key="item.path" :to="item.path"
                            class="block text-sm text-gray-700 hover:text-green-600 transition-colors">
                            {{ item.title }}
                        </NuxtLink>
                    </div>
                </div>

                <!-- Четвертая колонка - Контакты -->
                <div class="space-y-3">
                    <h3 class="text-sm font-medium text-gray-500 mb-3">Контакты</h3>
                    <!-- Адрес -->
                    <div class="flex items-start space-x-2">
                        <div class="flex-shrink-0 mt-0.5">
                            <Icon name="heroicons:map-pin" class="w-4 h-4 text-green-600" />
                        </div>
                        <p class="text-sm text-gray-700">
                            Санкт-Петербург, Выборгский район
                        </p>
                    </div>

                    <!-- Телефон -->
                    <div class="flex items-start space-x-2">
                        <div class="flex-shrink-0 mt-0.5">
                            <Icon name="heroicons:phone" class="w-4 h-4 text-green-600" />
                        </div>
                        <p class="text-sm text-green-600 font-medium">+7 (812) 622-98-13</p>
                    </div>

                    <!-- Email -->
                    <div class="flex items-start space-x-2">
                        <div class="flex-shrink-0 mt-0.5">
                            <Icon name="heroicons:envelope" class="w-4 h-4 text-green-600" />
                        </div>
                        <p class="text-sm text-gray-700">info@veronamed.ru</p>
                    </div>

                    <!-- Часы работы -->
                    <div class="flex items-start space-x-2">
                        <div class="flex-shrink-0 mt-0.5">
                            <Icon name="heroicons:clock" class="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                            <p class="text-sm text-gray-700">Пн-Пт: 8:00-20:00</p>
                            <p class="text-sm text-gray-700">Сб-Вс: 9:00-18:00</p>
                        </div>
                    </div>

                    <!-- Социальные сети -->
                    <div class="mt-4">
                        <h4 class="text-sm font-medium text-gray-500 mb-2">Мы в соцсетях</h4>
                        <div class="flex space-x-3">
                            <a href="https://wa.me/78126229813" target="_blank" rel="noopener noreferrer"
                                class="text-gray-500 hover:text-green-600 transition-colors" aria-label="WhatsApp">
                                <div
                                    class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-500 transition-colors">
                                    <Icon name="mdi:whatsapp" class="w-5 h-5" />
                                </div>
                            </a>
                            <a href="viber://chat?number=+78126229813"
                                class="text-gray-500 hover:text-green-600 transition-colors" aria-label="Viber">
                                <div
                                    class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-500 transition-colors">
                                    <Icon name="mdi:viber" class="w-5 h-5" />
                                </div>
                            </a>
                            <a href="https://t.me/veronamed" target="_blank" rel="noopener noreferrer"
                                class="text-gray-500 hover:text-green-600 transition-colors" aria-label="Telegram">
                                <div
                                    class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-500 transition-colors">
                                    <Icon name="mdi:telegram" class="w-5 h-5" />
                                </div>
                            </a>
                            <a href="https://www.youtube.com/channel/UCxxxxxxxxxxxxx" target="_blank"
                                rel="noopener noreferrer" class="text-gray-500 hover:text-green-600 transition-colors"
                                aria-label="YouTube">
                                <div
                                    class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-500 transition-colors">
                                    <Icon name="mdi:youtube" class="w-5 h-5" />
                                </div>
                            </a>
                            <a href="https://vk.com/veronamed" target="_blank" rel="noopener noreferrer"
                                class="text-gray-500 hover:text-green-600 transition-colors" aria-label="ВКонтакте">
                                <div
                                    class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-500 transition-colors">
                                    <Icon name="mdi:vk" class="w-5 h-5" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Средняя секция с кнопкой записи -->
            <div class="mt-8 py-6 border-t border-gray-200">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div class="mb-4 md:mb-0 md:w-2/3">
                        <h3 class="text-lg font-medium text-gray-800 mb-2">Нужна консультация специалиста?</h3>
                        <p class="text-gray-600">Запишитесь на прием к нашим специалистам онлайн или позвоните по
                            телефону</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <NuxtLink to="/appointment"
                            class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors">
                            <Icon name="heroicons:calendar" class="mr-2 w-5 h-5" />
                            Записаться
                        </NuxtLink>
                        <a href="tel:+78126229813"
                            class="inline-flex items-center justify-center px-6 py-3 border border-green-500 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors">
                            <Icon name="heroicons:phone" class="mr-2 w-5 h-5" />
                            Позвонить
                        </a>
                    </div>
                </div>
            </div>

            <!-- Карта сайта для SEO -->
            <div class="mt-8 py-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <h3 class="text-sm font-medium text-gray-500 mb-3">Направления</h3>
                    <div class="space-y-2">
                        <NuxtLink v-for="(direction, index) in directionsLinks" :key="index" :to="direction.path"
                            class="block text-xs text-gray-600 hover:text-green-600 transition-colors">
                            {{ direction.title }}
                        </NuxtLink>
                    </div>
                </div>
                <div>
                    <h3 class="text-sm font-medium text-gray-500 mb-3">Анализы</h3>
                    <div class="space-y-2">
                        <NuxtLink v-for="(analysis, index) in analysisLinks" :key="index" :to="analysis.path"
                            class="block text-xs text-gray-600 hover:text-green-600 transition-colors">
                            {{ analysis.title }}
                        </NuxtLink>
                    </div>
                </div>
                <div>
                    <h3 class="text-sm font-medium text-gray-500 mb-3">Процедуры</h3>
                    <div class="space-y-2">
                        <NuxtLink v-for="(procedure, index) in proceduresLinks" :key="index" :to="procedure.path"
                            class="block text-xs text-gray-600 hover:text-green-600 transition-colors">
                            {{ procedure.title }}
                        </NuxtLink>
                    </div>
                </div>
                <div>
                    <h3 class="text-sm font-medium text-gray-500 mb-3">Специалисты</h3>
                    <div class="space-y-2">
                        <NuxtLink v-for="(specialist, index) in specialistsLinks" :key="index" :to="specialist.path"
                            class="block text-xs text-gray-600 hover:text-green-600 transition-colors">
                            {{ specialist.title }}
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Правовая информация -->
            <div class="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-500">
                <p class="mb-2">
                    Размещаемая информация на данной странице предоставляется исключительно в информационных целях и не
                    является медицинским заключением. Определение диагноза и выбор методики лечения должны
                    осуществляться только вашим лечащим врачом.
                </p>
                <p class="mb-2">
                    ООО "ВЕРОНАМЕД" не несет ответственности за возможные отрицательные последствия, возникшие в
                    результате использования информации, размещенной на сайте veronamed.ru
                </p>
                <div class="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <p>© ВеронаМед, {{ currentYear }}. Все права защищены.</p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <NuxtLink to="/privacy-policy" class="text-gray-500 hover:text-green-600 transition-colors">
                            Политика конфиденциальности
                        </NuxtLink>
                        <NuxtLink to="/terms" class="text-gray-500 hover:text-green-600 transition-colors">
                            Пользовательское соглашение
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = new Date().getFullYear();

// Примеры ссылок для футера - в реальном приложении лучше хранить в сторе или получать с сервера
const mainLinks = [
    { title: 'Главная', path: '/' },
    { title: 'Все услуги', path: '/services' },
    { title: 'Цены', path: '/prices' },
    { title: 'Блог', path: '/blog' },
    { title: 'Лечение', path: '/treatment' }
];

const aboutLinks = [
    { title: 'О клинике', path: '/about' },
    { title: 'Лицензии и документы', path: '/licenses' },
    { title: 'Договор оказания платных медицинских услуг', path: '/contract' },
    { title: 'Налоговый вычет', path: '/tax-deduction' },
    { title: 'Правила оплаты по безналичному расчету', path: '/payment-rules' },
    { title: 'Правила предоставления платных медицинских услуг', path: '/service-rules' }
];

const legalLinks = [
    { title: 'Политика обработки персональных данных пациентов', path: '/privacy-policy' },
    { title: 'Согласие на обработку персональных данных', path: '/data-consent' },
    { title: 'Соглашение об использовании сайта', path: '/terms' },
    { title: 'Контролирующие органы', path: '/controlling-authorities' },
    { title: 'Федеральный закон', path: '/federal-law' }
];

// Дополнительные ссылки для карты сайта
const directionsLinks = [
    { title: 'Терапия', path: '/directions/therapy' },
    { title: 'Флебология', path: '/directions/phlebology' },
    { title: 'Кардиология', path: '/directions/cardiology' },
    { title: 'Неврология', path: '/directions/neurology' },
    { title: 'Гастроэнтерология', path: '/directions/gastroenterology' }
];

const analysisLinks = [
    { title: 'Общеклинические исследования', path: '/analyses/general-clinical' },
    { title: 'Биохимические исследования', path: '/analyses/biochemical' },
    { title: 'Гормональные исследования', path: '/analyses/hormones' },
    { title: 'Иммунологические исследования', path: '/analyses/immunological' },
    { title: 'Аллергологические исследования', path: '/analyses/allergological' }
];

const proceduresLinks = [
    { title: 'УЗИ-диагностика', path: '/procedures/ultrasound' },
    { title: 'ЭКГ', path: '/procedures/ecg' },
    { title: 'Капельницы', path: '/procedures/drips' },
    { title: 'Забор анализов', path: '/procedures/blood-sampling' },
    { title: 'Инъекции', path: '/procedures/injections' }
];

const specialistsLinks = [
    { title: 'Терапевты', path: '/doctors/therapists' },
    { title: 'Кардиологи', path: '/doctors/cardiologists' },
    { title: 'Флебологи', path: '/doctors/phlebologists' },
    { title: 'Неврологи', path: '/doctors/neurologists' },
    { title: 'Эндокринологи', path: '/doctors/endocrinologists' }
];
</script>