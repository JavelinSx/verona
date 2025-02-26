// types/menu.ts
export interface SubItem {
  name: string;
  path: string;
}

export interface DirectionItem {
  name: string;
  path: string;
  subItems: SubItem[];
}

export interface MenuItem {
  title: string;
  icon: string;
  items: DirectionItem[];
}

export interface MenuSection {
  title: string;
  path: string;
}
