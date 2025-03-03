<!-- pages/doctors/[id].vue -->
<template>
  <div v-if="doctor" class="mt-28">
    <!-- Заголовок страницы с фоном -->
    <div class="bg-green-50 py-8 mb-8">
      <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-center">
          <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mx-auto md:mx-0">
              <img v-if="doctor.avatar" :src="doctor.avatar" :alt="doctor.name" class="w-full h-full object-cover" />
              <div v-else class="w-full h-full flex items-center justify-center bg-green-50">
                <Icon name="heroicons:user" class="w-16 h-16 text-green-200" />
              </div>
            </div>
          </div>
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">{{ doctor.name }}</h1>
            <p class="mt-2 text-lg text-green-600 font-medium text-center md:text-left">
              {{ doctor.profession_titles }}
              <span v-if="doctor.second_profession_titles">
                {{ doctor.second_profession_titles ? ', ' + doctor.second_profession_titles : '' }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Основная информация -->
    <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="md:flex">
          <!-- Левая колонка - основная информация -->
          <div class="md:w-2/3 p-6 md:p-8">
            <!-- Опыт работы -->
            <div class="mb-6" v-if="doctor.work_period || doctor.qualification">
              <h2 class="text-xl font-semibold text-gray-800 mb-3">Опыт работы</h2>
              <div class="space-y-2">
                <p v-if="doctor.work_period" class="flex items-center text-gray-700">
                  <Icon name="heroicons:clock" class="w-5 h-5 text-green-500 mr-2" />
                  Стаж работы: {{ doctor.work_period }}
                </p>
                <p v-if="doctor.qualification" class="flex items-center text-gray-700">
                  <Icon name="heroicons:academic-cap" class="w-5 h-5 text-green-500 mr-2" />
                  {{ doctor.qualification }}
                </p>
              </div>
            </div>

            <!-- Образование -->
            <div class="mb-6" v-if="doctor.education">
              <h2 class="text-xl font-semibold text-gray-800 mb-3">Образование</h2>
              <div v-html="formatText(doctor.education)" class="prose-sm text-gray-700"></div>
            </div>

            <!-- Курсы повышения квалификации -->
            <div class="mb-6" v-if="doctor.education_courses">
              <h2 class="text-xl font-semibold text-gray-800 mb-3">Повышение квалификации</h2>
              <div v-html="formatText(doctor.education_courses)" class="prose-sm text-gray-700"></div>
            </div>

            <!-- Дополнительная информация -->
            <div v-if="doctor.doctor_info">
              <h2 class="text-xl font-semibold text-gray-800 mb-3">Дополнительная информация</h2>
              <div v-html="formatText(doctor.doctor_info)" class="prose-sm text-gray-700"></div>
            </div>
          </div>

          <!-- Правая колонка - запись на прием -->
          <div class="md:w-1/3 bg-gray-50 p-6 md:p-8">
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h2 class="text-xl font-semibold text-gray-800 mb-4">Запись на приём</h2>

              <!-- Детали приема -->
              <div class="space-y-3 mb-6">
                <p v-if="doctor.avg_time" class="flex items-center text-gray-700">
                  <Icon name="heroicons:clock" class="w-5 h-5 text-green-500 mr-2" />
                  Длительность приёма: {{ doctor.avg_time }} мин.
                </p>

                <p v-if="hasPricing" class="flex items-center text-gray-700">
                  <Icon name="heroicons:currency-dollar" class="w-5 h-5 text-green-500 mr-2" />
                  {{ getPricingText() }}
                </p>

                <!-- Возрастные ограничения -->
                <p v-if="hasAgeRestrictions" class="flex items-start text-gray-700">
                  <Icon name="heroicons:information-circle" class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>
                    Принимает пациентов
                    <template v-if="doctor.patient_age_from !== null && doctor.patient_age_to !== null">
                      от {{ doctor.patient_age_from }} до {{ doctor.patient_age_to }} лет
                    </template>
                    <template v-else-if="doctor.patient_age_from !== null">
                      от {{ doctor.patient_age_from }} лет
                    </template>
                    <template v-else-if="doctor.patient_age_to !== null">
                      до {{ doctor.patient_age_to }} лет
                    </template>
                  </span>
                </p>
              </div>

              <!-- Кнопки действия -->
              <div class="space-y-3">
                <NuxtLink :to="`/appointment?doctor=${doctor.id}`"
                  class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors w-full">
                  <Icon name="heroicons:calendar" class="w-5 h-5 mr-2" />
                  Записаться на приём
                </NuxtLink>

                <a href="tel:+78126229813"
                  class="inline-flex items-center justify-center px-4 py-2 border border-green-500 text-sm font-medium rounded-md text-green-600 hover:bg-green-50 transition-colors w-full">
                  <Icon name="heroicons:phone" class="w-5 h-5 mr-2" />
                  Позвонить
                </a>
              </div>

              <!-- Телемедицина -->
              <div v-if="doctor.is_telemedicine" class="mt-6 p-4 bg-green-50 rounded-md">
                <div class="flex items-start">
                  <Icon name="heroicons:video-camera" class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <p class="text-sm font-medium text-gray-800">Доступна онлайн-консультация</p>
                    <p class="text-xs text-gray-500">Проконсультируйтесь с врачом, не выходя из дома</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Похожие врачи -->
    <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 mb-12" v-if="similarDoctors.length > 0">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">Похожие специалисты</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DoctorCard v-for="similarDoctor in similarDoctors" :key="similarDoctor.id" :doctor="similarDoctor" />
      </div>
    </div>
  </div>
  <div v-else class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
    <Icon name="heroicons:face-frown" class="h-16 w-16 text-gray-300 mx-auto mb-4" />
    <h3 class="text-lg font-medium text-gray-900">Врач не найден</h3>
    <p class="mt-2 text-gray-500">
      К сожалению, запрашиваемый врач не найден. Возможно, он больше не работает в клинике.
    </p>
    <div class="mt-6">
      <NuxtLink to="/doctors"
        class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors">
        Вернуться к списку врачей
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDoctorsStore } from '~/stores/doctorsStore';
import DoctorCard from '~/components/Doctors/DoctorCard.vue';

// Инициализация хранилища
const doctorsStore = useDoctorsStore();

// Получение ID врача из URL
const route = useRoute();
const doctorId = computed(() => Number(route.params.id));

// Получение данных о враче
const doctor = computed(() => doctorsStore.getDoctorById(doctorId.value));

// Определяем, есть ли возрастные ограничения
const hasAgeRestrictions = computed(() => {
  return doctor.value && (doctor.value.patient_age_from !== null || doctor.value.patient_age_to !== null);
});

// Определяем, есть ли информация о цене
const hasPricing = computed(() => {
  // В этой реализации данных о ценах нет - можно реализовать заглушку или добавить реальные данные
  return false;
});

// Получение текста о цене приема
const getPricingText = () => {
  return 'Стоимость приёма от 2500 ₽'; // Заглушка, т.к. нет реальных данных о ценах
};

// Форматирование текста (замена HTML-тегов на безопасные)
const formatText = (text: string) => {
  if (!text) return '';

  // Заменяем <br> и <br /> на перенос строки в HTML
  const formattedText = text
    .replace(/<br\s*\/?>/gi, '<br>')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&quot;/gi, '"');

  return formattedText;
};

// Получение похожих врачей (с такой же профессией)
const similarDoctors = computed(() => {
  if (!doctor.value) return [];

  // Получаем ID всех профессий врача (основных и дополнительных)
  const doctorProfessions = [
    ...doctor.value.profession.map(id => Number(id)),
    ...doctor.value.second_profession.filter(id => id).map(id => Number(id))
  ];

  // Получаем всех врачей с такими же профессиями
  const sameProfessionDoctors = doctorsStore.getAllDoctors.filter(otherDoctor => {
    // Пропускаем текущего врача
    if (otherDoctor.id === doctor.value?.id) return false;

    // Проверяем, есть ли общие профессии
    const otherProfessions = [
      ...otherDoctor.profession.map(id => Number(id)),
      ...otherDoctor.second_profession.filter(id => id).map(id => Number(id))
    ];

    return doctorProfessions.some(profId => otherProfessions.includes(profId));
  });

  // Возвращаем до 3 похожих врачей
  return sameProfessionDoctors.slice(0, 3);
});

// Установка заголовка страницы
useHead(() => {
  if (!doctor.value) {
    return {
      title: 'Врач не найден - ВеронаМед',
    };
  }

  const professionTitle = doctor.value.profession_titles ||
    doctorsStore.getProfessionById(Number(doctor.value.profession[0]))?.name || '';

  return {
    title: `${doctor.value.name} - ${professionTitle} | Клиника ВеронаМед`,
    meta: [
      {
        name: 'description',
        content: `${doctor.value.name} - ${professionTitle} в клинике ВеронаМед. ${doctor.value.work_period ? `Стаж работы ${doctor.value.work_period}.` : ''} Запись на приём онлайн или по телефону.`
      }
    ]
  };
});
</script>