// types/menu.ts
export interface MenuItem {
  title: string;
  icon: string;
  items: string[];
}

export interface MenuSection {
  title: string;
  path?: string;
  icon?: string;
}

export interface MenuState {
  isOpen: boolean;
  directions: MenuItem[];
  mainSections: MenuSection[];
  isMobileMenuOpen: boolean;
}
