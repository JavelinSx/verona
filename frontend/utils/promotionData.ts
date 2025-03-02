// utils/promotionData.ts
const basePath = process.env.NODE_ENV === 'production' ? '/verona' : '';

export interface DoctorPromotion {
  name: string;
  position: string;
  experience?: string;
  additionalInfo?: string;
}

export interface Promotion {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  price?: string;
  originalPrice?: string;
  validUntil?: string;
  image: string;
  features?: string[];
  doctors?: DoctorPromotion[];
  buttonText?: string;
  buttonLink?: string;
  type: 'consultation' | 'analysis' | 'procedure';
  badge?: string;
}

export const promotionsData: Promotion[] = [
  {
    id: 1,
    title: 'Консультация флеболога или сосудистого хирурга + УЗИ вен',
    price: '2990 р.',
    image: `${basePath}/img/promotions/phlebologist.png`,
    type: 'consultation',
    badge: 'Удобный флебологический чек-лист от опытных флебологов и ангиохирургов Санкт-Петербурга. Выборгский район!',
    doctors: [
      {
        name: 'Азаров Евгений Сергеевич',
        position: 'врач сердечно-сосудистый хирург, Врач УЗИ, Врач-флеболог',
        experience: 'Стаж работы - 10 лет',
      },
      {
        name: 'Моисеенко Савелий Сергеевич',
        position: 'врач-флеболог, сердечно-сосудистый хирург, врач УЗИ, терапевт',
        experience: 'Стаж работы - 5 лет',
        additionalInfo: 'Проведение ЭКГ в рамках приёма',
      },
    ],
    buttonText: 'Записаться на прием',
  },
  {
    id: 2,
    title: 'Забота о Вашем здоровье с клиникой GreenLine:',
    subtitle: 'важные анализы от 100 руб!',
    validUntil: 'до 10.01.2025',
    image: `${basePath}/img/promotions/blood-test.png`,
    type: 'analysis',
    features: [
      'Клинический анализ крови - 200 руб!',
      'Общий анализ мочи - 100 руб!',
      'Снятие и расшифровка ЭКГ - 600 руб.',
    ],
    description: 'Ваше здоровье - наша миссия!',
    buttonText: 'Подробнее',
  },
  {
    id: 3,
    title: 'Консультация терапевта за 2 200 руб. — анализы в подарок!',
    image: `${basePath}/img/promotions/therapist.png`,
    type: 'consultation',
    features: [
      'Консультация опытного терапевта-клинициста',
      'Клинический (общий) анализ крови',
      'Анализ крови на С-реактивный белок',
    ],
    doctors: [
      {
        name: 'Прокопенко Оксана Александровна',
        position: 'врач-терапевт',
      },
      {
        name: 'Моисеенко Савелий Сергеевич',
        position: 'врач-терапевт',
      },
    ],
    buttonText: 'Записаться на прием',
  },
];
