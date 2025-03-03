<!-- pages/about.vue -->
<template>
    <div class="mt-20">
        <!-- Заголовок страницы с фоном -->
        <div class="bg-green-50 py-8 mb-8 mt-20">
            <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-800">О клинике</h1>
                <p class="mt-2 text-lg text-gray-600">Современная медицинская клиника с индивидуальным подходом к
                    каждому пациенту</p>
            </div>
        </div>

        <!-- Основное содержимое -->
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <!-- О клинике -->
            <section class="mb-12">
                <div class="bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="md:flex">
                        <div class="md:w-1/2 p-8">
                            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Наша клиника</h2>
                            <p class="text-gray-700 mb-4">
                                Медицинский центр «ВеронаМед» — это современная многопрофильная клиника, оснащенная
                                новейшим оборудованием и укомплектованная высококвалифицированными специалистами.
                            </p>
                            <p class="text-gray-700 mb-4">
                                Мы предлагаем полный спектр медицинских услуг для взрослых пациентов: от
                                профилактических осмотров до сложных диагностических процедур и лечения различных
                                заболеваний.
                            </p>
                            <p class="text-gray-700">
                                Наша миссия — обеспечивать пациентов качественной медицинской помощью, основанной на
                                принципах доказательной медицины, с использованием современных методов диагностики и
                                лечения.
                            </p>
                        </div>
                        <div class="md:w-1/2">
                            <!-- <img src="/img/clinic/clinic-building.jpg" alt="Здание клиники"
                                class="w-full h-full object-cover" /> -->
                        </div>
                    </div>
                </div>
            </section>

            <!-- Наши преимущества -->
            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">Наши преимущества</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center p-3 bg-green-100 rounded-full">
                                    <Icon name="heroicons:user-group" class="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-lg font-medium text-gray-800 mb-2">Квалифицированные специалисты</h3>
                                <p class="text-gray-600">
                                    Врачи нашей клиники — опытные специалисты с многолетним стажем работы, регулярно
                                    повышающие свою квалификацию.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center p-3 bg-green-100 rounded-full">
                                    <Icon name="heroicons:beaker" class="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-lg font-medium text-gray-800 mb-2">Современное оборудование</h3>
                                <p class="text-gray-600">
                                    Клиника оснащена новейшим диагностическим и лечебным оборудованием ведущих мировых
                                    производителей.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center p-3 bg-green-100 rounded-full">
                                    <Icon name="heroicons:clock" class="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-lg font-medium text-gray-800 mb-2">Удобный график работы</h3>
                                <p class="text-gray-600">
                                    Мы работаем 7 дней в неделю, чтобы вы могли получить медицинскую помощь в удобное
                                    для вас время.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center p-3 bg-green-100 rounded-full">
                                    <Icon name="heroicons:banknotes" class="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-lg font-medium text-gray-800 mb-2">Прозрачная ценовая политика</h3>
                                <p class="text-gray-600">
                                    Мы предлагаем честные цены без скрытых платежей и даем подробную консультацию по
                                    всем процедурам.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Лицензии и сертификаты -->
            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">Лицензии и сертификаты</h2>

                <div class="bg-white rounded-xl shadow-md overflow-hidden p-8">
                    <p class="text-gray-700 mb-6">
                        Медицинский центр «ВеронаМед» осуществляет свою деятельность на основании лицензии на
                        медицинскую деятельность, выданной Комитетом по здравоохранению Санкт-Петербурга.
                    </p>

                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        <div v-for="index in 4" :key="index" class="bg-gray-100 rounded-md overflow-hidden">
                            <!-- <img :src="`/img/licenses/license-${index}.jpg`" alt="Лицензия"
                                class="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" /> -->
                        </div>
                    </div>

                    <div class="mt-4 text-center">
                        <button class="text-green-600 hover:text-green-700 font-medium">
                            Посмотреть все документы
                        </button>
                    </div>
                </div>
            </section>

            <!-- История клиники -->
            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">История клиники</h2>

                <div class="bg-white rounded-xl shadow-md overflow-hidden p-8">
                    <div class="relative">
                        <div class="border-l-4 border-green-500 pl-6">
                            <div class="mb-8">
                                <h3 class="text-lg font-medium text-gray-800 mb-2">2021 год</h3>
                                <p class="text-gray-700">
                                    Открытие медицинского центра «ВеронаМед» в Выборгском районе Санкт-Петербурга.
                                    Начало работы основных направлений: терапия, кардиология, гастроэнтерология.
                                </p>
                            </div>

                            <div class="mb-8">
                                <h3 class="text-lg font-medium text-gray-800 mb-2">2022 год</h3>
                                <p class="text-gray-700">
                                    Расширение спектра услуг: открытие отделений неврологии, флебологии и
                                    эндокринологии. Внедрение современных диагностических методик.
                                </p>
                            </div>

                            <div class="mb-8">
                                <h3 class="text-lg font-medium text-gray-800 mb-2">2023 год</h3>
                                <p class="text-gray-700">
                                    Запуск процедурного кабинета и расширение спектра лабораторных исследований.
                                    Внедрение сервиса онлайн-записи и личного кабинета пациента.
                                </p>
                            </div>

                            <div class="mb-8">
                                <h3 class="text-lg font-medium text-gray-800 mb-2">2024 год</h3>
                                <p class="text-gray-700">
                                    Получение международной аккредитации. Начало работы отделения клинических
                                    исследований «КлиниВел». Внедрение новых методов диагностики и лечения.
                                </p>
                            </div>

                            <div>
                                <h3 class="text-lg font-medium text-gray-800 mb-2">2025 год</h3>
                                <p class="text-gray-700">
                                    Ребрендинг и запуск современного сайта под новым брендом «ВеронаМед». Внедрение
                                    системы электронных медицинских карт и интеграция с медицинской информационной
                                    системой. Дальнейшее расширение спектра медицинских услуг и внедрение инновационных
                                    технологий.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Наша команда (краткая информация) -->
            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">Наша команда</h2>

                <div class="bg-white rounded-xl shadow-md overflow-hidden p-8">
                    <p class="text-gray-700 mb-6">
                        В медицинском центре «ВеронаМед» работают опытные врачи различных специальностей с многолетним
                        стажем работы и высокой квалификацией. Наши специалисты регулярно проходят курсы повышения
                        квалификации и участвуют в профессиональных конференциях, внедряя передовые методики диагностики
                        и лечения.
                    </p>

                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div class="text-center">
                            <div class="mb-3 mx-auto w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                                <!-- <img src="/img/doctors/doctor1.jpg" alt="Азаров Евгений Сергеевич"
                                    class="w-full h-full object-cover" /> -->
                            </div>
                            <h3 class="font-medium text-gray-800">Азаров Е.С.</h3>
                            <p class="text-sm text-green-600">Флеболог, Сосудистый хирург</p>
                        </div>
                        <div class="text-center">
                            <div class="mb-3 mx-auto w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                                <!-- <img src="/img/doctors/doctor2.jpg" alt="Моисеенко Савелий Сергеевич"
                                    class="w-full h-full object-cover" /> -->
                            </div>
                            <h3 class="font-medium text-gray-800">Моисеенко С.С.</h3>
                            <p class="text-sm text-green-600">Флеболог, Терапевт</p>
                        </div>
                        <div class="text-center">
                            <div class="mb-3 mx-auto w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                                <!-- <img src="/img/doctors/doctor3.jpg" alt="Прокопенко Оксана Александровна"
                                    class="w-full h-full object-cover" /> -->
                            </div>
                            <h3 class="font-medium text-gray-800">Прокопенко О.А.</h3>
                            <p class="text-sm text-green-600">Терапевт</p>
                        </div>
                        <div class="text-center">
                            <div class="mb-3 mx-auto w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                                <!-- <img src="/img/doctors/doctor4.jpg" alt="Еще один врач"
                                    class="w-full h-full object-cover" /> -->
                            </div>
                            <h3 class="font-medium text-gray-800">Иванов А.П.</h3>
                            <p class="text-sm text-green-600">Кардиолог</p>
                        </div>
                    </div>

                    <div class="mt-6 text-center">
                        <NuxtLink to="/doctors"
                            class="inline-flex items-center justify-center px-6 py-2 border border-green-500 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors">
                            Все специалисты
                            <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
                        </NuxtLink>
                    </div>
                </div>
            </section>

            <!-- Отзывы пациентов -->
            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">Отзывы наших пациентов</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6">
                        <div class="flex items-start mb-4">
                            <div class="flex-shrink-0">
                                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <span class="text-green-600 font-medium">А</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-medium text-gray-800">Анна В.</h3>
                                <div class="flex items-center">
                                    <Icon v-for="star in 5" :key="star" name="heroicons:star"
                                        class="w-4 h-4 text-yellow-400" />
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600">
                            "Благодарю врачей клиники ВеронаМед за профессионализм и внимательное отношение. Проходила
                            обследование у кардиолога, очень довольна качеством обслуживания и результатами. Врач дал
                            подробные рекомендации и назначил эффективное лечение. Рекомендую всем, кто ищет надежную
                            медицинскую помощь."
                        </p>
                        <p class="mt-2 text-sm text-gray-500">15 февраля 2025</p>
                        <p class="mt-1 text-xs text-green-600">Яндекс.Карты</p>
                    </div>

                    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6">
                        <div class="flex items-start mb-4">
                            <div class="flex-shrink-0">
                                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <span class="text-green-600 font-medium">М</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-medium text-gray-800">Михаил К.</h3>
                                <div class="flex items-center">
                                    <Icon v-for="star in 5" :key="star" name="heroicons:star" class="w-4 h-4"
                                        :class="star <= 4 ? 'text-yellow-400' : 'text-gray-300'" />
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600">
                            "Отличная клиника с современным оборудованием. Обращался к флебологу с проблемами вен,
                            сделали УЗИ и назначили лечение. Все процедуры проведены на высоком уровне, персонал
                            вежливый и внимательный. Единственный минус - немного задержали время приема."
                        </p>
                        <p class="mt-2 text-sm text-gray-500">10 февраля 2025</p>
                        <p class="mt-1 text-xs text-green-600">2ГИС</p>
                    </div>

                    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6">
                        <div class="flex items-start mb-4">
                            <div class="flex-shrink-0">
                                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <span class="text-green-600 font-medium">Е</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-medium text-gray-800">Елена С.</h3>
                                <div class="flex items-center">
                                    <Icon v-for="star in 5" :key="star" name="heroicons:star"
                                        class="w-4 h-4 text-yellow-400" />
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600">
                            "Хочу выразить благодарность врачу-терапевту Прокопенко О.А. за внимательное отношение и
                            грамотное лечение. Обращалась с жалобами на общее недомогание, после комплексного
                            обследования был поставлен точный диагноз и назначено лечение, которое быстро помогло.
                            Приятно, что в клинике есть возможность сдать все анализы и пройти диагностику в одном
                            месте."
                        </p>
                        <p class="mt-2 text-sm text-gray-500">5 февраля 2025</p>
                        <p class="mt-1 text-xs text-green-600">Отзовик</p>
                    </div>

                    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6">
                        <div class="flex items-start mb-4">
                            <div class="flex-shrink-0">
                                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <span class="text-green-600 font-medium">С</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-medium text-gray-800">Сергей Д.</h3>
                                <div class="flex items-center">
                                    <Icon v-for="star in 5" :key="star" name="heroicons:star" class="w-4 h-4"
                                        :class="star <= 5 ? 'text-yellow-400' : 'text-gray-300'" />
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600">
                            "Проходил обследование в клинике ВеронаМед по рекомендации коллеги. Удобная запись через
                            сайт, никаких очередей, приятная атмосфера. Особенно порадовало отношение персонала - все
                            очень доброжелательны и профессиональны. Результаты анализов прислали на email, а врач дал
                            подробную консультацию по телефону. Буду обращаться еще."
                        </p>
                        <p class="mt-2 text-sm text-gray-500">1 февраля 2025</p>
                        <p class="mt-1 text-xs text-green-600">ПроДокторов</p>
                    </div>
                </div>

                <div class="mt-6 text-center">
                    <NuxtLink to="/reviews"
                        class="inline-flex items-center justify-center px-6 py-2 border border-green-500 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors">
                        Все отзывы
                        <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
                    </NuxtLink>
                </div>
            </section>

            <!-- Блок СМО «КлиниВел» -->
            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">Клинические исследования «КлиниВел»</h2>

                <div class="bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="md:flex">
                        <div class="md:w-1/2 p-8">
                            <h3 class="text-xl font-semibold text-gray-800 mb-4">О блоке СМО</h3>
                            <p class="text-gray-700 mb-4">
                                Наша клиника активно участвует в клинических исследованиях в рамках специализированного
                                блока СМО «КлиниВел». Мы сотрудничаем с ведущими фармацевтическими компаниями и
                                научно-исследовательскими центрами для развития и внедрения новых методов лечения.
                            </p>
                            <p class="text-gray-700 mb-4">
                                Все клинические исследования проводятся под строгим контролем Локального Этического
                                Комитета (ЛЭК) и соответствуют международным стандартам качества и безопасности.
                            </p>
                            <div class="mt-6">
                                <NuxtLink to="/clinivel"
                                    class="inline-flex items-center justify-center px-6 py-2 border border-green-500 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors">
                                    Подробнее о «КлиниВел»
                                    <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="md:w-1/2 relative bg-gray-100">
                            <!-- <img src="/img/clinic/clinical-research.jpg" alt="Клинические исследования"
                                class="w-full h-full object-cover" /> -->
                            <div class="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Блок обратной связи -->
            <section class="mb-12">
                <div class="bg-green-50 rounded-xl shadow-md overflow-hidden">
                    <div class="md:flex">
                        <div class="md:w-2/3 p-8">
                            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Остались вопросы?</h2>
                            <p class="text-gray-700 mb-6">
                                Если у вас возникли вопросы о работе клиники «ВеронаМед» или вы хотите получить
                                дополнительную информацию о наших услугах, оставьте свои контактные данные. Наш
                                специалист свяжется с вами в ближайшее время.
                            </p>

                            <form class="space-y-4">
                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label for="name" class="block text-sm font-medium text-gray-700">Имя</label>
                                        <input id="name" type="text"
                                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500" />
                                    </div>

                                    <div>
                                        <label for="phone"
                                            class="block text-sm font-medium text-gray-700">Телефон</label>
                                        <input id="phone" type="tel"
                                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500" />
                                    </div>
                                </div>

                                <div>
                                    <label for="message"
                                        class="block text-sm font-medium text-gray-700">Сообщение</label>
                                    <textarea id="message" rows="3"
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500"></textarea>
                                </div>

                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="terms" type="checkbox"
                                            class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="terms" class="font-medium text-gray-700">Я согласен с <NuxtLink
                                                to="/terms" class="text-green-600 hover:text-green-500">условиями
                                                обработки</NuxtLink> моих персональных данных</label>
                                    </div>
                                </div>

                                <button type="submit"
                                    class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                    Отправить
                                </button>
                            </form>
                        </div>
                        <div class="hidden md:block md:w-1/3 bg-gray-100">
                            <!-- <img src="/img/clinic/doctor-consultation.jpg" alt="Консультация врача"
                                class="w-full h-full object-cover" /> -->
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default'
});

// Заголовок страницы для SEO
useHead({
    title: 'О клинике ВеронаМед - Современный медицинский центр в Санкт-Петербурге',
    meta: [
        {
            name: 'description',
            content: 'Медицинский центр ВеронаМед - многопрофильная клиника с современным оборудованием и опытными специалистами. Качественная медицинская помощь в Выборгском районе Санкт-Петербурга.'
        }
    ]
});
</script>