// types/doctor.ts
export interface Doctor {
  id: number;
  avatar: string | null;
  avatar_small: string | null;
  name: string;
  birth_date: string | null;
  gender: number | null;
  role: string[];
  role_titles: string;
  document_number: string;
  document_date: string | null;
  profession: string[];
  profession_titles: string | null;
  second_profession: string[];
  second_profession_titles: string | null;
  clinic: string[];
  clinic_titles: string | null;
  avg_time: number | null;
  has_company: boolean;
  avg_time_company: number | null;
  avg_time_repeat: number | null;
  avg_time_repeat_company: number | null;
  default_clinic: number | null;
  default_room: string;
  is_child_doctor: boolean;
  is_adult_doctor: boolean;
  patient_age_from: number | null;
  patient_age_to: number | null;
  is_outside: boolean;
  is_telemedicine: boolean;
  date_work_from: string | null;
  work_period: string | null;
  work_degree: string | null;
  work_rank: string | null;
  work_academy_status: string | null;
  qualification: string | null;
  doctor_info: string | null;
  external_link: string | null;
  education: string;
  education_courses: string;
  services: any[]; // Можно заменить на Service[] если определим интерфейс Service
  is_deleted: boolean;
}

export interface DoctorsResponse {
  error: number;
  data: Doctor[];
}

export interface ProfessionsResponse {
  error: number;
  data: Profession[];
}
