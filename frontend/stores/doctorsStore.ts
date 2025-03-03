// stores/doctorsStore.ts
import { defineStore } from 'pinia';
import doctorsJson from '~/json/doctors.json';
import professionsJson from '~/json/profession.json';

export const useDoctorsStore = defineStore('doctors', {
  state: () => ({
    doctors: (doctorsJson.data || []) as Doctor[],
    professions: (professionsJson.data || []) as Profession[],
    isLoading: false,
    error: null as string | null,
  }),

  getters: {
    // Получить всех врачей
    getAllDoctors: (state) => state.doctors,

    // Получить все профессии
    getAllProfessions: (state) => state.professions,

    // Получить врача по ID
    getDoctorById: (state) => (id: number) => {
      return state.doctors.find((doctor) => doctor.id === id) || null;
    },

    // Получить профессию по ID
    getProfessionById: (state) => (id: number) => {
      return state.professions.find((profession) => profession.id === Number(id)) || null;
    },

    // Получить профессию по имени
    getProfessionByName: (state) => (name: string) => {
      return state.professions.find((profession) => profession.name.toLowerCase() === name.toLowerCase()) || null;
    },

    // Получить врачей по профессии
    getDoctorsByProfession: (state) => (professionId: number) => {
      return state.doctors.filter((doctor) => {
        // Проверяем основную профессию
        if (doctor.profession.includes(String(professionId))) {
          return true;
        }
        // Проверяем дополнительную профессию
        if (doctor.second_profession.includes(String(professionId))) {
          return true;
        }
        return false;
      });
    },

    // Получить популярные профессии (с наибольшим количеством врачей)
    getPopularProfessions: (state) => {
      const professionCounts = new Map<number, number>();

      // Подсчитываем количество врачей для каждой профессии
      state.doctors.forEach((doctor) => {
        // Учитываем основные профессии
        doctor.profession.forEach((profId) => {
          const id = Number(profId);
          professionCounts.set(id, (professionCounts.get(id) || 0) + 1);
        });

        // Учитываем дополнительные профессии
        doctor.second_profession.forEach((profId) => {
          if (profId) {
            const id = Number(profId);
            professionCounts.set(id, (professionCounts.get(id) || 0) + 1);
          }
        });
      });

      // Сортируем профессии по количеству врачей
      const sortedProfessionIds = [...professionCounts.entries()].sort((a, b) => b[1] - a[1]).map((entry) => entry[0]);

      // Получаем информацию о профессиях в порядке популярности
      return sortedProfessionIds
        .map((id) => state.professions.find((p) => p.id === id))
        .filter((p) => p !== undefined) as Profession[];
    },
  },

  actions: {
    // Здесь можно добавить действия для асинхронной загрузки данных с сервера
    async fetchDoctors() {
      try {
        this.isLoading = true;
        // В реальном приложении здесь будет запрос к API
        // const { data } = await useFetch('/api/doctors');
        // this.doctors = data.value?.data || [];
        this.isLoading = false;
      } catch (err) {
        this.error = 'Ошибка при загрузке данных о врачах';
        this.isLoading = false;
      }
    },

    async fetchProfessions() {
      try {
        this.isLoading = true;
        // В реальном приложении здесь будет запрос к API
        // const { data } = await useFetch('/api/professions');
        // this.professions = data.value?.data || [];
        this.isLoading = false;
      } catch (err) {
        this.error = 'Ошибка при загрузке данных о профессиях';
        this.isLoading = false;
      }
    },
  },
});
