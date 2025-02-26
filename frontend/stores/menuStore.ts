// stores/menuStore.ts
import { defineStore } from 'pinia';
import { directionsData, mainSections } from '~/utils/menuData';
import type { MenuItem, MenuSection } from '~/types/menu';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    isMenuOpen: false,
    isMobileMenuOpen: false,
    directions: directionsData,
    mainSections: mainSections,
  }),
  getters: {
    isOpen: (state) => state.isMenuOpen,
    getAllDirections: (state) => state.directions,
    getMainSections: (state) => state.mainSections,
  },
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
  },
});
