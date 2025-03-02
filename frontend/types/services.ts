// types/service.ts
export interface Service {
  service_id: number;
  code: string;
  sub_code: string;
  title: string;
  category_id: number;
  category_title: string;
  category_path: string;
  profession_id: number | null;
  profession_title: string | null;
  price: number;
  original_price: number | null;
  duration: number | null;
  duration_deferred: number | null;
  lab: string;
  time: number | null;
  time_format: string;
  tax: number | null;
  short_desc: string;
  full_desc: string;
  preparation: string;
  reasons: string;
  restrictions: string;
  alias: string | null;
  types: any[]; // You might want to define a more specific type based on actual data
  type_titles: string | null;
  related_services: any[]; // You might want to define a more specific type based on actual data
  related_services_default: any[]; // You might want to define a more specific type based on actual data
  agent_id: number | null;
  is_deleted: boolean;
  is_hidden: boolean;
  price_types: Record<string, string | null>; // Object with string keys and string or null values
}
