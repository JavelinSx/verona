// stores/menuStore.ts
import { defineStore } from 'pinia';
import type { MenuState } from '~/types/menu';

export const useMenuStore = defineStore('menu', {
  state: (): MenuState => ({
    isOpen: false,
    isMobileMenuOpen: false,
    directions: [
      {
        title: 'Диагностика',
        items: ['УЗИ', 'Анализы', 'Обследования'],
        icon: 'heroicons:beaker',
      },
      {
        title: 'Лечение',
        items: ['Терапия', 'Кардиология', 'Эндокринология', 'Гинекология', 'Урология', 'Хирургия'],
        icon: 'heroicons:heart',
      },
      {
        title: 'Специальные направления',
        items: ['Дневной стационар', 'Онкология', 'Клинические исследования'],
        icon: 'heroicons:academic-cap',
      },
    ],
    mainSections: [
      {
        title: 'Врачи',
        path: '/doctors',
        icon: 'heroicons:user-group',
      },
      {
        title: 'Цены',
        path: '/prices',
        icon: 'heroicons:currency-dollar',
      },
      {
        title: 'О клинике',
        path: '/about',
        icon: 'heroicons:information-circle',
      },
    ],
  }),

  actions: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) this.isMobileMenuOpen = false;
    },
    closeMenu() {
      this.isOpen = false;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      if (this.isMobileMenuOpen) this.isOpen = false;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
  },

  getters: {
    isMenuOpen: (state) => state.isOpen,
    isMobileMenuVisible: (state) => state.isMobileMenuOpen,
    getAllDirections: (state) => state.directions,
    getMainSections: (state) => state.mainSections,
  },
});
