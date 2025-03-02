// types/doctor.ts
export interface Doctor {
  id: number;
  avatar: string;
  avatar_small: string;
  name: string;
  birth_date: string;
  gender: number;
  role: string[];
  role_titles: string;
  document_number: string;
  document_date: string | null;
  profession: string[];
  profession_titles: string;
  second_profession: string[];
  second_profession_titles: string;
  clinic: string[];
  clinic_titles: string;
  avg_time: number;
  has_company: boolean;
  avg_time_company: number | null;
  avg_time_repeat: number;
  avg_time_repeat_company: number | null;
  default_clinic: number;
  default_room: string;
  is_child_doctor: boolean;
  is_adult_doctor: boolean;
  patient_age_from: number;
  patient_age_to: number;
  is_outside: boolean;
  is_telemedicine: boolean;
  date_work_from: string;
  work_period: string;
  work_degree: string | null;
  work_rank: string | null;
  work_academy_status: string | null;
  qualification: string;
  doctor_info: string | null;
  external_link: string | null;
  education: string;
  education_courses: string;
  services: any[]; // You might want to replace with Service[] if you have a Service interface
  is_deleted: boolean;
}
