export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  qualifications: string[];
  experience: number; // in years
  rating: number;
  reviewsCount: number;
  availability: string;
  fee: number;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  href: string;
  category: "ayurveda" | "homeopathy" | "digital-health" | "doctor-consult" | "medicine-delivery" | "wellness-ecommerce";
}

export interface DiseaseCategory {
  id: string;
  name: string;
  iconName: string;
  slug: string;
  treatmentCount: string;
}

export interface PatientStory {
  id: string;
  patientName: string;
  age: number;
  location: string;
  rating: number;
  treatmentReceived: string;
  duration: string;
  reviewText: string;
  image?: string;
}

export interface MedicineProduct {
  id: string;
  name: string;
  brand: string;
  category: "ayurveda" | "homeopathy" | "general" | "wellness";
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  tag?: string; // e.g. "Best Seller", "100% Organic", "Prescription Required"
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "ayurveda" | "homeopathy" | "consultation" | "orders";
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}
