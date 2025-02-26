// utils/menuData.ts
import type { MenuItem, MenuSection } from '~/types/menu';

export const mainSections: MenuSection[] = [
  { title: 'О клинике', path: '/about' },
  { title: 'Врачи', path: '/doctors' },
  { title: 'Цены', path: '/prices' },
  { title: 'Акции', path: '/promotions' },
  { title: 'Отзывы', path: '/reviews' },
  { title: 'Контакты', path: '/contacts' },
];

export const directionsData: MenuItem[] = [
  {
    title: 'Взрослое отделение',
    icon: 'heroicons:user-group',
    items: [
      {
        name: 'Акушерство-гинекология',
        path: '/directions/obstetrics-gynecology',
        subItems: [],
      },
      {
        name: 'Гастроэнтерология',
        path: '/directions/gastroenterology',
        subItems: [],
      },
      {
        name: 'Дерматология',
        path: '/directions/dermatology',
        subItems: [],
      },
      {
        name: 'Дерматовенерология',
        path: '/directions/dermatovenereology',
        subItems: [],
      },
      {
        name: 'Кардиология',
        path: '/directions/cardiology',
        subItems: [],
      },
      {
        name: 'Неврология',
        path: '/directions/neurology',
        subItems: [],
      },
      {
        name: 'Ортопедия',
        path: '/directions/orthopedics',
        subItems: [],
      },
      {
        name: 'Терапия',
        path: '/directions/therapy',
        subItems: [],
      },
      {
        name: 'Урология',
        path: '/directions/urology',
        subItems: [],
      },
      {
        name: 'Флебология',
        path: '/directions/phlebology',
        subItems: [],
      },
      {
        name: 'Эндокринология',
        path: '/directions/endocrinology',
        subItems: [],
      },
    ],
  },
  {
    title: 'Медицинские справки',
    icon: 'heroicons:document-text',
    items: [
      {
        name: 'Справка в бассейн',
        path: '/documents/swimming-pool',
        subItems: [],
      },
      {
        name: 'Больничный лист',
        path: '/documents/sick-leave',
        subItems: [],
      },
    ],
  },
  {
    title: 'Анализы',
    icon: 'heroicons:beaker',
    items: [
      {
        name: 'Общеклинические исследования',
        path: '/analyses/general-clinical',
        subItems: [
          { name: 'Гемостазиология и изосерология', path: '/analyses/general-clinical/hemostasis' },
          { name: 'Биохимические исследования', path: '/analyses/general-clinical/biochemical' },
          { name: 'Серологические и иммунохимические исследования', path: '/analyses/general-clinical/serological' },
          { name: 'Исследования уровня гормонов и онкомаркеров', path: '/analyses/general-clinical/hormones' },
          { name: 'Молекулярная диагностика', path: '/analyses/general-clinical/molecular' },
        ],
      },
      {
        name: 'Микробиологические исследования',
        path: '/analyses/microbiological',
        subItems: [],
      },
      {
        name: 'Цитологические, морфологические и гистохимические исследования',
        path: '/analyses/cytological',
        subItems: [],
      },
      {
        name: 'Аутоиммунные заболевания',
        path: '/analyses/autoimmune',
        subItems: [],
      },
      {
        name: 'Лекарственный мониторинг',
        path: '/analyses/drug-monitoring',
        subItems: [],
      },
      {
        name: 'Цитогенетические исследования',
        path: '/analyses/cytogenetic',
        subItems: [],
      },
      {
        name: 'Генетическое установление родства',
        path: '/analyses/genetic-relationship',
        subItems: [],
      },
      {
        name: 'Экспресс-тестирование',
        path: '/analyses/express-testing',
        subItems: [],
      },
      {
        name: 'Генетические исследования',
        path: '/analyses/genetic',
        subItems: [],
      },
      {
        name: 'Наркотические вещества',
        path: '/analyses/drugs',
        subItems: [],
      },
      {
        name: 'Иммунологические исследования',
        path: '/analyses/immunological',
        subItems: [],
      },
      {
        name: 'Аллергологические исследования',
        path: '/analyses/allergological',
        subItems: [],
      },
      {
        name: 'Панели тестов и алгоритмы обследования',
        path: '/analyses/test-panels',
        subItems: [],
      },
    ],
  },
  {
    title: 'УЗИ',
    icon: 'heroicons:variable',
    items: [
      {
        name: 'Акушерство-гинекология',
        path: '/uzi/obstetrics-gynecology',
        subItems: [],
      },
      {
        name: 'Гастроэнтерология',
        path: '/uzi/gastroenterology',
        subItems: [],
      },
      {
        name: 'Кардиология',
        path: '/uzi/cardiology',
        subItems: [],
      },
      {
        name: 'Неврология',
        path: '/uzi/neurology',
        subItems: [],
      },
      {
        name: 'Ортопедия',
        path: '/uzi/orthopedics',
        subItems: [],
      },
      {
        name: 'Терапия',
        path: '/uzi/therapy',
        subItems: [],
      },
      {
        name: 'Урология',
        path: '/uzi/urology',
        subItems: [],
      },
      {
        name: 'Флебология',
        path: '/uzi/phlebology',
        subItems: [],
      },
      {
        name: 'Эндокринология',
        path: '/uzi/endocrinology',
        subItems: [],
      },
    ],
  },
  {
    title: 'Процедурный кабинет',
    icon: 'heroicons:clipboard-document-list',
    items: [
      {
        name: 'Витаминные капельницы',
        path: '/procedures/vitamin-drips',
        subItems: [],
      },
      {
        name: 'Внутрисуставная инъекция «Дипроспан»',
        path: '/procedures/diprospan',
        subItems: [],
      },
      {
        name: 'Внутрисуставная инъекция гиалуроновой кислоты',
        path: '/procedures/hyaluronic-acid',
        subItems: [],
      },
      {
        name: 'Инъекции (уколы)',
        path: '/procedures/injections',
        subItems: [],
      },
      {
        name: 'Капельница при алкогольной интоксикации',
        path: '/procedures/alcohol-detox',
        subItems: [],
      },
      {
        name: 'Капельницы',
        path: '/procedures/drips',
        subItems: [],
      },
      {
        name: 'Капельницы с Гепатралом',
        path: '/procedures/heptral-drips',
        subItems: [],
      },
      {
        name: 'Лечебные блокады',
        path: '/procedures/therapeutic-blockades',
        subItems: [],
      },
      {
        name: 'Подготовка к операции',
        path: '/procedures/surgery-preparation',
        subItems: [],
      },
      {
        name: 'Экспресс-тест на глюкозу',
        path: '/procedures/glucose-test',
        subItems: [],
      },
    ],
  },
];
