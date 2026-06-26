export interface Symptom {
  title: string;
  description: string;
  iconName: string; // Lucide icon name, e.g., 'Activity', 'Droplets', etc.
}

export interface Cause {
  title: string;
  description: string;
  iconName: string; // Lucide icon name
}

export interface Treatment {
  title: string;
  description: string;
  iconName: string; // Lucide icon name
  type: "Ayurveda" | "Homeopathy" | "Therapy" | "Diet" | "Lifestyle" | "Yoga" | "Meditation";
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  disease: string;
  rating: number;
  duration: string;
  reviewText: string;
  videoUrl?: string;
  videoThumbnail?: string;
}

export interface Doctor {
  name: string;
  qualification: string;
  experience: number;
  specialization: string;
  image: string;
  description: string;
  phone: string;
}

export interface SubDisease {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Disease {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  overview: string;
  ayurvedaPerspective: string;
  homeopathyPerspective: string;
  duration: string;
  risk: string;
  commonAge: string;
  recovery: string;
  symptoms: Symptom[];
  causes: Cause[];
  treatments: Treatment[];
  faqs: FAQ[];
  testimonials: Testimonial[];
  relatedDiseases: string[]; // slugs of other diseases
  heroImage: string;
  doctor: Doctor;
  patientsTreated: string;
  yearsExperience: string;
  patientSatisfaction: string;
  metaTitle: string;
  metaDescription: string;
  isCategory?: boolean;
  subDiseases?: SubDisease[];
}

export const DISEASES_DATA: Record<string, Disease> = {
  piles: {
    slug: "piles",
    name: "Piles (Hemorrhoids)",
    category: "Digestive Disorders",
    tagline: "Safe • Non Surgical • Long-Term Relief",
    overview: "Piles, medically known as Hemorrhoids, are swollen veins in your lower anus and rectum. They can develop inside the rectum (internal hemorrhoids) or under the skin around the anus (external hemorrhoids). Millions of individuals are affected by piles, which can cause significant pain, discomfort, and bleeding during bowel movements. Left untreated, piles can progress from mild swelling to prolapsed masses, leading to severe chronic conditions, thrombosis, or anemia due to ongoing blood loss.",
    ayurvedaPerspective: "In Ayurveda, Piles is referred to as 'Arsha'. It is primarily considered a disease of the digestive system caused by an imbalance in the digestive fire (Mandagni) leading to accumulation of toxic metabolic waste (Ama) and vitiation of the Apana Vata dosha. Ayurvedic treatment focuses on strengthening the digestive system, normalizing bowel movements, and using specific anti-inflammatory herbs like Haritaki, Amalaki, and Suran to reduce swelling and shrink hemorrhoidal masses naturally.",
    homeopathyPerspective: "Homeopathy offers a highly effective constitutional treatment for piles that addresses the individual's root susceptibility. Rather than local suppression, homeopathic remedies like Nux Vomica, Aesculus Hippocastanum, and Sulfur stimulate the body's self-healing mechanisms to regulate blood circulation in the rectal area, relieve venous congestion, ease chronic constipation, and address associated symptoms like burning, itching, and sharp stabbing pains.",
    duration: "Chronic / Progressive",
    risk: "High if Untreated",
    commonAge: "20 - 65 Years",
    recovery: "3 - 6 Weeks",
    heroImage: "/images/diseases/digestion.png",
    patientsTreated: "15,000+",
    yearsExperience: "20+",
    patientSatisfaction: "95%",
    metaTitle: "Treat Piles Naturally with Ayurveda & Homeopathy | Ojas Sanjivani",
    metaDescription: "Get permanent, non-surgical relief from piles (hemorrhoids) with custom Ayurvedic and Homeopathic treatments. Sourced from certified experts. Consult today.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Ayurvedic Physician & Ano-Rectal Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar has over 18 years of clinical experience in successfully managing complex ano-rectal conditions like piles, fissures, and fistulas without surgery using integrated natural therapies.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Bleeding", description: "Painless bright red blood dripping or spotting during or after bowel movements.", iconName: "Droplets" },
      { title: "Pain & Discomfort", description: "Sharp or aching pain around the anal region, especially when sitting or passing stool.", iconName: "AlertTriangle" },
      { title: "Burning Sensation", description: "Persistent burning feeling in the rectal area after passing bowel movements.", iconName: "Flame" },
      { title: "Swelling & Lumps", description: "Swollen, sensitive lumps near the anus that may need to be pushed back manually.", iconName: "Expand" }
    ],
    causes: [
      { title: "Poor Diet & Low Fiber", description: "Lack of dietary fiber leads to hard stools and continuous straining during bowel movements.", iconName: "Apple" },
      { title: "Chronic Constipation", description: "Long-term digestive sluggishness forces repetitive pressure on the rectal veins.", iconName: "Frown" }
    ],
    treatments: [
      { title: "Kashaya Formulations", description: "Potent Ayurvedic herbal decoctions to improve digestion, detoxify the gut, and reduce venous swelling.", iconName: "GlassWater", type: "Ayurveda" },
      { title: "Constitutional Homeopathy", description: "Deep-acting remedies tailored to your mental and physical makeup to resolve rectal congestion permanently.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Can piles be cured permanently without surgery?", answer: "Yes, absolutely. Most cases of Grade 1, 2, and even early Grade 3 piles can be completely and permanently cured without surgery through our integrated Ayurvedic and Homeopathic treatments." }
    ],
    testimonials: [
      { id: "t1", patientName: "Rajesh Kumar", location: "Mumbai, Maharashtra", disease: "Piles (Grade 2)", rating: 5, duration: "3 Months", reviewText: "I was suffering from IBS and Grade 2 bleeding piles for over 5 years. Ojas Sanjivani's customized diet and herbal pills completely cured my digestion.", videoThumbnail: "/images/product-ashwagandha.jpg" }
    ],
    relatedDiseases: ["hypertension", "cardiac-wellness"]
  },
  diabetes: {
    slug: "diabetes",
    name: "Diabetes Management",
    category: "Endocrine Disorders",
    tagline: "Natural Control • Prevent Complications • High Vitality",
    overview: "Diabetes Mellitus is a chronic metabolic disorder characterized by elevated levels of blood glucose. It occurs when the pancreas does not produce enough insulin, or when the body cannot effectively use the insulin it produces. Over time, poorly managed diabetes can lead to severe damage to the heart, blood vessels, eyes, kidneys, and nerves.",
    ayurvedaPerspective: "Ayurveda describes Diabetes as 'Madhumeha', a type of Vata-dominant Prameha. It is primarily triggered by an imbalance in Kapha dosha, which leads to sluggish metabolic fire (Agni) and accumulation of fat and toxins (Ama). Ayurvedic treatments focus on deep cellular detoxification (Panchakarma) and bitter herbs.",
    homeopathyPerspective: "Homeopathic medicine offers a gentle, individualized treatment plan for diabetes. Remedies like Syzygium Jambolanum help in managing blood glucose fluctuations, improving pancreatic function, and preventing systemic complications.",
    duration: "Chronic Metabolic",
    risk: "High Neuropathy Risk",
    commonAge: "30 - 70 Years",
    recovery: "Ongoing Management",
    heroImage: "/images/diseases/diabetes.png",
    patientsTreated: "22,000+",
    yearsExperience: "20+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Diabetes Management & Control | Ojas Sanjivani",
    metaDescription: "Control blood sugar levels naturally. Our integrated Ayurveda and Homeopathy doctors offer root-cause therapy to manage diabetes and restore energy levels.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic Diabetologist & Metabolic Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy has 14 years of experience in prescribing constitutional remedies to treat endocrine disorders and stabilize blood sugar levels naturally.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Frequent Urination", description: "Needing to urinate more often, especially during the night (polyuria).", iconName: "Droplet" }
    ],
    causes: [
      { title: "Insulin Resistance", description: "Cells in your muscles, fat, and liver become resistant to insulin signals.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Herbal Insulin Sensitizers", description: "Ayurvedic formulations containing Gudmar and Vijaysar to enhance insulin receptivity.", iconName: "Leaf", type: "Ayurveda" }
    ],
    faqs: [
      { question: "Can Type 2 Diabetes be reversed naturally?", answer: "In the early stages, Type 2 Diabetes can be reversed through intensive diet management, weight loss, and Ayurvedic dosha correction." }
    ],
    testimonials: [
      { id: "d1", patientName: "Vikram Rathore", location: "Jaipur, Rajasthan", disease: "Type 2 Diabetes", rating: 5, duration: "4 Months", reviewText: "My HbA1c was 8.4 and I suffered from extreme lethargy. Under Dr. Ananya's guidance, my HbA1c is down to 6.4.", videoThumbnail: "/images/product-ayush64.jpg" }
    ],
    relatedDiseases: ["hypertension", "high-cholesterol"]
  },
  arthritis: {
    slug: "arthritis",
    name: "Arthritis & Joint Pain",
    category: "Joint & Muscle Pain",
    tagline: "Reduce Inflammation • Restore Mobility • Rebuild Cartilage",
    overview: "Arthritis is an inflammatory condition affecting one or more joints, causing pain, stiffness, and restricted movement. The most common types are Osteoarthritis and Rheumatoid Arthritis.",
    ayurvedaPerspective: "Ayurveda categorizes joint disorders based on Doshas. Osteoarthritis is known as 'Sandhigata Vata', caused by excess Vata which dries up joint lubrication. Rheumatoid Arthritis is called 'Amavata', triggered by gut toxins (Ama).",
    homeopathyPerspective: "Homeopathy provides excellent remedies for joint stiffness and pain. Medicines like Rhus Tox and Bryonia reduce synovial swelling, muscle spasms, and joint pain.",
    duration: "Chronic Inflammatory",
    risk: "Joint Deformity if Severe",
    commonAge: "35 - 75 Years",
    recovery: "4 - 8 Weeks",
    heroImage: "/images/diseases/joint-pain.png",
    patientsTreated: "18,500+",
    yearsExperience: "20+",
    patientSatisfaction: "96%",
    metaTitle: "Treat Arthritis & Joint Pain Naturally | Ojas Sanjivani",
    metaDescription: "Restore your joint mobility and relieve arthritis pain. Our Ayurvedic & Homeopathic doctors customize anti-inflammatory therapies to rebuild joint health.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Panchakarma & Spine Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai is a renowned expert in Panchakarma therapies with over 22 years of experience in treating arthritis.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Joint Pain", description: "Persistent, deep-seated pain in joints that worsens with exertion.", iconName: "Activity" }
    ],
    causes: [
      { title: "Cartilage Wear & Tear", description: "Gradual degeneration of protective tissue lining the bone ends.", iconName: "Scissors" }
    ],
    treatments: [
      { title: "Anti-Inflammatory Herbs", description: "Shalaki, Guggulu, and Ashwagandha to inhibit inflammatory enzymes.", iconName: "Leaf", type: "Ayurveda" }
    ],
    faqs: [
      { question: "Can natural treatment reverse osteoarthritis?", answer: "Our treatment stops further degeneration, reduces joint inflammation, increases synovial fluid lubrication, and significantly improves joint mobility." }
    ],
    testimonials: [
      { id: "a1", patientName: "Sunita Deshpande", location: "Pune, Maharashtra", disease: "Osteoarthritis (Knee)", rating: 5, duration: "3 Months", reviewText: "I could barely walk up the stairs. The swelling in my knees is 90% gone now.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["cardiac-wellness", "hypertension"]
  },

  // HEART DISEASE CATEGORY PAGE
  "heart-disease": {
    slug: "heart-disease",
    name: "Heart Diseases",
    category: "Heart Care",
    tagline: "Safe • Non-Surgical • Long-Term Cardiovascular Recovery",
    overview: "Heart diseases are among the leading causes of morbidity and mortality worldwide. They encompass a wide spectrum of disorders affecting the heart and blood vessels, including hypertension, coronary artery blockages, lipid abnormalities, rhythm disturbances, and structural damage. Integrated natural therapies focus on restoring normal arterial elasticity, optimizing lipid ratios, improving coronary perfusion, reducing cardiovascular stress, and promoting cardiac wellness holistically.",
    ayurvedaPerspective: "In Ayurveda, Heart Disease is referred to as 'Hridroga'. It is triggered by imbalances in the three doshas (Vata, Pitta, and Kapha) coupled with the accumulation of 'Ama' (toxic metabolic wastes) in the micro-circulatory channels (Srotas). Ayurvedic treatment focuses on cleansing these blockages, balancing Hridaya Vata, nourishing the heart muscle (Hridayotsaha) using cardiotonic herbs like Arjuna, Ashwagandha, and Lashuna, and guiding the patient towards a heart-healthy daily regimen.",
    homeopathyPerspective: "Homeopathy approaches cardiovascular health constitutionally. Remedies like Crataegus Oxyacantha (known as a great heart tonic), Cactus Grandiflorus, Glonoinum, and Aurum Metallicum are prescribed based on the patient's holistic symptom profile. They act gently to regulate vascular tone, ease nervous cardiac palpitations, relieve arterial pressure, support weak heart muscles, and prevent progressive myocardial complications.",
    duration: "Chronic / Progressive",
    risk: "High Coronary Risk",
    commonAge: "25 - 75 Years",
    recovery: "Ongoing Wellness",
    heroImage: "/images/diseases/heart-disease.png",
    patientsTreated: "15,000+",
    yearsExperience: "20+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Heart Disease Treatment & Therapy | Ojas Sanjivani",
    metaDescription: "Experience comprehensive, non-surgical treatment for heart diseases. Our integrated Ayurveda & Homeopathy protocol improves blood circulation and cardiac strength.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Senior Cardiovascular & Panchakarma Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai combines Kerala Ayurvedic Panchakarma with homeopathic constitutional remedies to reverse arterial stiffness and improve ejection fraction in cardiac patients.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Hypertension", slug: "hypertension", description: "Control elevated blood pressure naturally, protecting against stroke and kidney disease.", image: "/images/diseases/hypertension.png" },
      { name: "High Cholesterol", slug: "high-cholesterol", description: "Balance LDL, HDL, and Triglyceride ratios with lipid-regulating herbs and fiber therapy.", image: "/images/diseases/high-cholesterol.png" },
      { name: "Angina", slug: "angina", description: "Relieve cardiovascular chest pain by improving coronary perfusion and reducing vascular spasms.", image: "/images/diseases/angina.png" },
      { name: "Ischemic Heart Disease", slug: "ischemic-heart-disease", description: "Prevent arterial blocks and restore blood circulation with natural cardiotonics.", image: "/images/diseases/ischemic-heart-disease.png" },
      { name: "Heart Palpitations", slug: "heart-palpitations", description: "Calm rapid, pounding, or irregular heartbeats triggered by anxiety, stress, or thyroid.", image: "/images/diseases/heart-palpitations.png" },
      { name: "Cardiac Wellness", slug: "cardiac-wellness", description: "Adopt preventive cardiotonic therapies, customized yoga, and heart-healthy dietary advice.", image: "/images/diseases/cardiac-wellness.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Can natural treatments complement allopathic heart medicines?", answer: "Yes, our natural treatments can be safely integrated with your existing heart medications under clinical supervision. They help reduce dependency on high dosages and minimize side effects." },
      { question: "Is surgery avoidable in ischemic heart disease?", answer: "For mild-to-moderate arterial blocks, integrated Ayurvedic cardiotonic therapy and Homeopathy can successfully restore vascular perfusion, preventing the need for angioplasty or bypass surgery." }
    ],
    testimonials: [
      { id: "h1", patientName: "Aravind Swamy", location: "Chennai, Tamil Nadu", disease: "Ischemic Heart Disease", rating: 5, duration: "6 Months", reviewText: "I had 60% blockage in one artery and experienced shortness of breath. After 6 months of Arjuna therapy and homeopathic drops, my latest stress test shows normal circulation.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["diabetes", "arthritis"]
  },

  // 1. HYPERTENSION
  hypertension: {
    slug: "hypertension",
    name: "Hypertension (High BP)",
    category: "Heart Care",
    tagline: "Control High Blood Pressure Naturally with Ayurveda & Homeopathy",
    overview: "Hypertension, commonly known as high blood pressure, is a chronic medical condition where the force of the blood against the arterial walls is consistently too high. Over time, this constant force stretches and damages the blood vessels, forcing the heart to work harder. Hypertension is a silent killer; it rarely presents obvious signs until major internal damage is done, leading to critical complications like ischemic stroke, myocardial infarction (heart attack), renal failure, and heart failure.",
    ayurvedaPerspective: "Ayurveda associates Hypertension with an imbalance in the Vyana Vata dosha, which controls blood circulation, combined with Pitta aggravation (causing heat and stress) and Kapha excess (which stiffens the arteries). Vitiated doshas accumulate in the blood channels (Rakta Vaha Srotas). Treatment centers around Vata-soothing therapies, mental calming using medhya herbs (like Shankhapushpi and Brahmi), and arterial cleansing with Guggulu and Sarpagandha.",
    homeopathyPerspective: "Homeopathy approaches hypertension by studying the patient's individual emotional and physical constitution. Remedies like Glonoinum (for throbbing headaches and high pressure), Baryta Carbonica (for senile hypertension), and Rauwolfia Serpentina are prescribed to regulate arterial tone, soothe nervous excitability, and manage blood pressure naturally and safely.",
    duration: "Chronic / Life-Long Control",
    risk: "High Stroke Risk",
    commonAge: "18 - 70 Years",
    recovery: "3 - 8 Weeks to Stabilize",
    heroImage: "/images/diseases/hypertension.png",
    patientsTreated: "15,000+",
    yearsExperience: "20+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Treatment for Hypertension & High BP | Ojas Sanjivani",
    metaDescription: "Stabilize your blood pressure naturally. Our custom Ayurveda & Homeopathy treatments address stress, diet, and arterial health to prevent strokes.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Cardiorespiratory Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar has 18 years of experience in administering Vata-soothing herbs, natural cardiotonics, and customized panchakarma to manage severe hypertension naturally.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Persistent Headaches", description: "Throbbing headaches, especially at the back of the head, occurring early in the morning.", iconName: "AlertTriangle" },
      { title: "Dizziness & Vertigo", description: "Feeling lightheaded, unsteady, or experiencing spinning sensations suddenly.", iconName: "RotateCcw" },
      { title: "Chest Pain (Angina)", description: "A sensation of tightness, pressure, or mild squeezing discomfort in the chest region.", iconName: "Flame" },
      { title: "Shortness of Breath", description: "Difficulty breathing during minor physical exertions like climbing stairs.", iconName: "Wind" },
      { title: "Blurred Vision", description: "Vascular changes in the retina causing temporary blurriness or double vision.", iconName: "Eye" },
      { title: "Chronic Fatigue", description: "Persistent physical exhaustion and lack of focus despite getting adequate sleep.", iconName: "BatteryLow" },
      { title: "Irregular Heartbeat", description: "Feeling fluttery, racing, or having skipped beats in the chest (palpitations).", iconName: "Heart" },
      { title: "Nosebleeds (Epistaxis)", description: "Sudden bleeding from the nose caused by high pressure in delicate capillary walls.", iconName: "Droplets" }
    ],
    causes: [
      { title: "High Sodium Salt Intake", description: "Excess sodium causes water retention, increasing blood volume and pressure on arterial walls.", iconName: "Utensils" },
      { title: "Chronic Stress", description: "Repetitive stress triggers sympathetic nervous overdrive, constricting blood vessels.", iconName: "Brain" },
      { title: "Smoking & Tobacco", description: "Nicotine instantly raises heart rate and blood pressure, damaging arterial linings.", iconName: "Flame" },
      { title: "Excessive Alcohol", description: "Frequent alcohol intake damages vascular elasticity and disrupts renin-angiotensin regulation.", iconName: "GlassWater" },
      { title: "Obesity & Excess Weight", description: "Requires the heart to pump more blood to supply oxygen, placing higher systemic strain.", iconName: "Scale" },
      { title: "Uncontrolled Diabetes", description: "High glucose levels stiffen blood vessels, compounding hypertension risks.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Sarpagandha & Arjuna Drops", description: "Clinically proven herbal extracts that naturally dilate blood vessels and stabilize heart rate.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Constitutional Homeopathy", description: "Gentle remedies like Baryta Carb to strengthen capillaries and lower systemic vascular resistance.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Low-Sodium DASH Diet", description: "Tailored nutritional plan rich in potassium, magnesium, calcium, and minimal sodium.", iconName: "Utensils", type: "Diet" },
      { title: "Pranayama & Shavasana", description: "Deep yogic breathing exercises to activate the parasympathetic nervous system and drop blood pressure.", iconName: "Activity", type: "Yoga" },
      { title: "Vipassana Meditation", description: "Mental calming techniques to eliminate mental anxiety, reducing adrenaline and cortisol spikes.", iconName: "Sparkles", type: "Meditation" },
      { title: "Lifestyle Counseling", description: "Guidance on sleep hygiene, circadian routines, and stress management at work.", iconName: "Users", type: "Lifestyle" }
    ],
    faqs: [
      { question: "Can hypertension be cured naturally?", answer: "Yes, essential hypertension (which is caused by stress, diet, and lifestyle) can be stabilized and managed naturally, allowing many patients to live drug-free under clinical supervision." },
      { question: "How long does treatment take to stabilize BP?", answer: "Significant improvements are visible within 2 to 3 weeks. However, completing a 2-month course helps establish vascular elasticity and long-term control." },
      { question: "Is it safe to stop allopathic BP medicines immediately?", answer: "No, you should never stop allopathic medicines abruptly. We gradually taper off allopathic dosages as your blood pressure stabilizes under our natural therapy." },
      { question: "Can stress directly increase blood pressure?", answer: "Yes, stress triggers a burst of hormones like adrenaline and cortisol, which narrow your blood vessels and cause your heart to beat faster, raising blood pressure." },
      { question: "What diet is recommended for high BP?", answer: "A diet rich in whole grains, fruits, vegetables, garlic, and low-fat dairy, while avoiding salt-heavy, processed, and fried foods." },
      { question: "Is online consultation effective for hypertension?", answer: "Yes, you can monitor your blood pressure at home using a digital monitor, share your readings with our doctors online, and get custom medicines delivered." }
    ],
    testimonials: [
      { id: "ht1", patientName: "Rajendra Prasad", location: "Hyderabad, Telangana", disease: "Chronic Hypertension", rating: 5, duration: "3 Months", reviewText: "My BP was consistently 160/100 despite taking beta-blockers. Within 3 months of starting Ojas Sanjivani's integrated drops and practicing guided Pranayama, my BP has stabilized to 125/82.", videoThumbnail: "/images/product-ayush64.jpg" }
    ],
    relatedDiseases: ["high-cholesterol", "angina", "heart-palpitations", "cardiac-wellness"]
  },

  // 2. HIGH CHOLESTEROL
  "high-cholesterol": {
    slug: "high-cholesterol",
    name: "High Cholesterol",
    category: "Heart Care",
    tagline: "Balance Lipid Profiles & Clear Arteries Naturally",
    overview: "High cholesterol, or Hyperlipidemia, is an excess of fatty substances (lipids) in the blood. This includes elevated Low-Density Lipoprotein (LDL - the 'bad' cholesterol) and Triglycerides, coupled with deficient High-Density Lipoprotein (HDL - the 'good' cholesterol). When blood cholesterol levels are too high, lipids deposit along arterial walls, forming hard plaques (atherosclerosis) that restrict oxygen-rich blood flow, leading to heart attacks and strokes.",
    ayurvedaPerspective: "Ayurveda classifies High Cholesterol as an imbalance of the 'Meda Dhatu' (fat tissue) and accumulation of 'Ama' (undigested toxins) in the fat-carrying channels. The main culprit is sluggish metabolic fire (Meda Dhatvagni). Treatment centers on improving fat metabolism using bitter, digestive herbs like Guggulu, Garlic (Lashuna), Haritaki, and active colon-cleansing Panchakarma therapies.",
    homeopathyPerspective: "Homeopathy approaches hyperlipidemia by treating the body's internal synthesis of fat. Remedies like Cholesterinum (which lowers liver fat accumulation), Allium Sativum, and Baryta Muriatica are used to manage lipid synthesis, reduce arterial hardening, and protect cardiovascular integrity safely.",
    duration: "Chronic Metabolic",
    risk: "High Atherosclerosis Risk",
    commonAge: "25 - 65 Years",
    recovery: "4 - 8 Weeks to Balance",
    heroImage: "/images/diseases/high-cholesterol.png",
    patientsTreated: "12,500+",
    yearsExperience: "20+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Treatment for High Cholesterol | Ojas Sanjivani",
    metaDescription: "Reduce LDL and Triglycerides naturally. Our integrated Ayurvedic and Homeopathic remedies optimize liver fat metabolism and prevent arterial blockages.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Metabolic & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in liver fat regulation and constitutional remedies to lower cholesterol levels and prevent cardiovascular lipid deposition.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Asymptomatic Nature", description: "High cholesterol typically has no symptoms; it is only diagnosed via a lipid profile blood test.", iconName: "Search" },
      { title: "Chest Tightness", description: "Occasional heavy sensation in the chest due to plaque buildup in coronary arteries.", iconName: "Flame" },
      { title: "Shortness of Breath", description: "Breathlessness on exertion as the heart struggles to pump blood through narrowed vessels.", iconName: "Wind" },
      { title: "Xanthomas", description: "Yellowish fatty deposits forming under the skin, especially around the eyelids.", iconName: "Eye" }
    ],
    causes: [
      { title: "Saturated & Trans Fats", description: "Diets heavy in animal fats, processed foods, bakery items, and deep-fried dishes.", iconName: "Utensils" },
      { title: "Sedentary Routine", description: "Lack of physical activity lowers HDL (good cholesterol) and increases LDL.", iconName: "Clock" },
      { title: "Genetic Susceptibility", description: "Familial hypercholesterolemia where the liver produces excessive cholesterol.", iconName: "GitMerge" },
      { title: "Liver Sluggishness", description: "Compromised liver function which fails to clear circulating bad lipids properly.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Shuddha Guggulu & Medohar Guggulu", description: "Ayurvedic lipid-regulators that scrap cholesterol plaques (Lekhana) and boost fat burning.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Cholesterinum Drops", description: "Homeopathic drops to regulate hepatic cholesterol output and reduce vascular calcification.", iconName: "FlaskConical", type: "Homeopathy" },
      { title: "High-Soluble Fiber Diet", description: "Custom nutrition featuring oats, barley, legumes, and omega-3 seeds to bind and excrete fats.", iconName: "Utensils", type: "Diet" },
      { title: "Yoga Surya Namaskar", description: "Dynamic yoga sequences to stimulate metabolic fire, burn fat, and increase HDL cholesterol.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "Can high cholesterol be controlled without statins?", answer: "Yes. For mild-to-moderate high cholesterol, our Ayurvedic Medohar Guggulu and homeopathic drops can reduce LDL and Triglycerides without the muscle pain and fatigue associated with chemical statins." },
      { question: "How long does it take to see results in blood tests?", answer: "We advise getting a lipid profile test after 6 to 8 weeks of consistent treatment, which usually shows a significant drop in LDL and Triglycerides." }
    ],
    testimonials: [
      { id: "hc1", patientName: "Narendra Kumar", location: "Kolkata, West Bengal", disease: "High Triglycerides", rating: 5, duration: "2 Months", reviewText: "My triglycerides were 320. Within 2 months of using Ojas Sanjivani's medohar treatment and stopping fried foods, they fell to 160. Excellent natural approach.", videoThumbnail: "/images/product-ashwagandha.jpg" }
    ],
    relatedDiseases: ["hypertension", "angina", "cardiac-wellness"]
  },

  // 3. ANGINA
  angina: {
    slug: "angina",
    name: "Angina (Chest Pain)",
    category: "Heart Care",
    tagline: "Improve Coronary Circulation & Reduce Chest Pain Naturally",
    overview: "Angina is chest pain or discomfort that occurs when an area of your heart muscle doesn't get enough oxygen-rich blood. It is a symptom of coronary artery disease, caused by the narrowing of the coronary arteries due to plaque buildup (atherosclerosis). Angina is often felt as squeezing, pressure, heaviness, or tightness in the chest, and can radiate to the shoulders, arms, neck, jaw, or back. It requires expert treatment to improve myocardial perfusion and prevent progression to a full-blown heart attack.",
    ayurvedaPerspective: "Ayurveda terms Angina as 'Hritshoola' (cardiac pain). It is primarily a Vata-dominant disorder caused by Kapha blockages in the coronary arteries, restricting the flow of Prana Vata to the heart muscle. Treatment focuses on clearing Srotas (channels) using Lekhana (scraping) herbs, improving cardiovascular energy using cardiotonics like Pushkarmoola and Arjuna, and absolute physical and mental rest.",
    homeopathyPerspective: "Homeopathic care focuses on strengthening the cardiac vascular tone and calming the nervous spasms of coronary arteries. Remedies like Cactus Grandiflorus (for the characteristic iron-band squeezing sensation), Latrodectus Mactans, and Spigelia are highly effective in relieving pain and improving functional cardiovascular reserves.",
    duration: "Chronic / High Monitoring",
    risk: "High Myocardial Infarction Risk",
    commonAge: "35 - 75 Years",
    recovery: "4 - 8 Weeks to Relieve Pain",
    heroImage: "/images/diseases/angina.png",
    patientsTreated: "8,500+",
    yearsExperience: "20+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Treatment for Angina & Chest Pain | Ojas Sanjivani",
    metaDescription: "Relieve cardiovascular chest pain and angina naturally. Our Ayurvedic & Homeopathic protocols improve coronary artery blood flow and prevent heart attacks.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Senior Cardiovascular & Panchakarma Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai is a leading expert in restoring coronary blood flow and managing cardiac spasms naturally through warm oil pooling therapies (Hrid Basti) and constitutional drops.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Chest Squeezing", description: "A characteristic heavy pressure or squeezing sensation in the center of the chest.", iconName: "Flame" },
      { title: "Radiating Pain", description: "Pain radiating outwards from the chest to the left shoulder, left arm, neck, or jaw.", iconName: "AlertTriangle" },
      { title: "Shortness of Breath", description: "Feeling suffocated or unable to take deep breaths, especially during physical exertion.", iconName: "Wind" },
      { title: "Cold Sweats & Nausea", description: "Sudden cold sweating, lightheadedness, and nausea during a pain episode.", iconName: "Droplets" }
    ],
    causes: [
      { title: "Atherosclerotic Plaques", description: "Hard lipid plaques narrow the coronary arteries, reducing oxygen delivery to myocardium.", iconName: "XCircle" },
      { title: "Coronary Spasms", description: "Sudden constriction of the coronary artery walls, cutting off localized blood supply temporarily.", iconName: "RotateCcw" },
      { title: "Extreme Physical Exertion", description: "Demands higher oxygen consumption than what the blocked coronary arteries can supply.", iconName: "Clock" },
      { title: "Emotional Outbursts", description: "Severe mental anger or panic triggers adrenaline surges, constricting cardiac vessels.", iconName: "Brain" }
    ],
    treatments: [
      { title: "Hrid Basti Oil Therapy", description: "Warm, medicated Ayurvedic oils pooled over the cardiac region to nourish cardiac muscles and dilate arteries.", iconName: "Sparkles", type: "Therapy" },
      { title: "Arjuna & Pushkarmoola Cardiotonics", description: "Natural cardiac tonics that improve myocardial strength, reduce arterial spasms, and boost circulation.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Cactus Grandiflorus Drops", description: "Homeopathic drops that target squeezing chest pains and improve coronary artery elasticity.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Coronary Dilating Diet", description: "Heart-friendly, warm, light foods rich in garlic, ginger, and natural anti-inflammatory polyphenols.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "Is Angina treatment different from heart attack treatment?", answer: "Yes, angina is a warning sign of reduced blood flow, whereas a heart attack is actual death of heart muscle due to complete blockage. Our treatment improves blood flow to prevent heart attacks." },
      { question: "Can Hrid Basti help in Angina?", answer: "Hrid Basti is highly effective. The warm medicated oils penetrate deep into the thoracic tissues, strengthening cardiac muscles and relieving vascular spasms." }
    ],
    testimonials: [
      { id: "an1", patientName: "Srinivasan Rao", location: "Bangalore, Karnataka", disease: "Stable Angina", rating: 5, duration: "3 Months", reviewText: "I used to get severe chest pain after walking 200 meters. With Ojas Sanjivani's Hrid Basti and Arjuna formulations, I can now walk 1 km comfortably without pain.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["hypertension", "high-cholesterol", "ischemic-heart-disease"]
  },

  // 4. ISCHEMIC HEART DISEASE
  "ischemic-heart-disease": {
    slug: "ischemic-heart-disease",
    name: "Ischemic Heart Disease (IHD)",
    category: "Heart Care",
    tagline: "Natural Management & Heart Attack Prevention",
    overview: "Ischemic Heart Disease (IHD), also called Coronary Artery Disease (CAD), is a condition characterized by reduced blood supply to the heart muscle, usually caused by plaque buildup in the coronary arteries. It is the leading cause of death globally. Over years, plaque restricts blood flow, causing myocardial ischemia (lack of oxygen). If a plaque ruptures and forms a clot, it can lead to acute myocardial infarction (heart attack). Preventive natural protocols help rebuild vascular collateral circulation and stabilize plaques.",
    ayurvedaPerspective: "Ayurveda attributes Ischemic Heart Disease to 'Dhamani Prachaya' (thickening of arteries) and 'Hridroga'. It is caused by chronic metabolic dysfunction where excess Kapha and Ama build up along the arterial walls (Dhamanis). Ayurvedic herbs like Arjuna, Guggulu, and Punarnava focus on clearing blocks, resolving lymphatic congestion, and boosting micro-circulation in the heart tissues.",
    homeopathyPerspective: "Homeopathy offers deep-acting constitutional remedies to address vascular inflammation and lipid metabolism. Medicines such as Crataegus Oxyacantha (acts on cardiac muscle, dilates coronary vessels), Cactus Grandiflorus, and Baryta Mur help dissolve arterial blockages, lower high blood pressure, and strengthen the myocardium.",
    duration: "Chronic / Lifetime Support",
    risk: "Very High Heart Attack Risk",
    commonAge: "40 - 75 Years",
    recovery: "3 - 6 Months of Protocol",
    heroImage: "/images/diseases/ischemic-heart-disease.png",
    patientsTreated: "9,200+",
    yearsExperience: "20+",
    patientSatisfaction: "95%",
    metaTitle: "Treat Ischemic Heart Disease & CAD Naturally | Ojas Sanjivani",
    metaDescription: "Prevent coronary artery disease and heart attacks naturally. Our Ayurvedic & Homeopathic medicines target blockages and restore blood flow without surgery.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Senior Cardiovascular & Panchakarma Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai is globally recognized for treating chronic ischemic blockages without surgery by combining ancient Kerala oil therapies with constitutional homeopathy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Chest Discomfort", description: "Heaviness or pressure in the chest, often triggered by physical activity or stress.", iconName: "Flame" },
      { title: "Shortness of Breath", description: "Severe breathlessness during mild physical tasks due to low oxygenation.", iconName: "Wind" },
      { title: "Radiating Pain", description: "Pain radiating from the chest down to the left arm, shoulder, jaw, or upper back.", iconName: "AlertTriangle" },
      { title: "Extreme Fatigue", description: "Feeling completely drained of energy as the heart struggles to meet circulatory demands.", iconName: "BatteryLow" }
    ],
    causes: [
      { title: "Arterial Blockage", description: "Plaque accumulation in the main coronary arteries due to bad lipids and calcium deposits.", iconName: "XCircle" },
      { title: "Vascular Inflammation", description: "Chronic low-grade inflammation of the inner lining of arteries (endothelial damage).", iconName: "Activity" },
      { title: "Unhealthy Lifestyle", description: "Combining a sedentary routine, stress, heavy refined carbohydrates, and smoking.", iconName: "Clock" },
      { title: "Family Medical History", description: "Inherited tendency for premature arterial plaque buildup and weak coronary walls.", iconName: "GitMerge" }
    ],
    treatments: [
      { title: "Arjuna & Hridayarnava Rasa", description: "Powerful Ayurvedic cardiotonics to improve coronary perfusion and strengthen the ventricles.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Crataegus Oxyacantha Drops", description: "A homepathic cardiotonic that acts directly on the heart muscle to increase circulation and prevent infarction.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Lekhana Basti (Ayurvedic Detox)", description: "Specialized colon cleansing therapies with scraping herbs to reduce internal fat deposits.", iconName: "Sparkles", type: "Therapy" },
      { title: "Heart-Healthy Anti-Inflammatory Diet", description: "Whole plant-based nutrition, high in anti-oxidants, pomegranates, walnuts, and organic garlic.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "Can arterial blockages be dissolved naturally?", answer: "Yes, mild-to-moderate plaques (under 70%) can be stabilized, and the surrounding micro-circulatory channels can be enhanced naturally using Ayurvedic scraping herbs and homeopathic cardiotonics." },
      { question: "Is bypass surgery always necessary?", answer: "No, unless there is a critical triple-vessel blockage or left main coronary disease, many stable patients can manage and treat IHD safely with natural protocols." }
    ],
    testimonials: [
      { id: "ihd1", patientName: "Viswanathan Iyer", location: "Coimbatore, Tamil Nadu", disease: "CAD (65% Blockage)", rating: 5, duration: "6 Months", reviewText: "I had 65% blockage in my LAD artery and doctors suggested angioplasty. I opted for Ojas Sanjivani's natural treatment. My breathlessness is gone and my cardiac fitness has improved.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["hypertension", "high-cholesterol", "angina", "cardiac-wellness"]
  },

  // 5. HEART PALPITATIONS
  "heart-palpitations": {
    slug: "heart-palpitations",
    name: "Heart Palpitations",
    category: "Heart Care",
    tagline: "Calm Rapid, Pounding, or Irregular Heartbeats Naturally",
    overview: "Heart palpitations are feelings or sensations that your heart is beating fast, pounding, fluttering, or skipping beats. While they can feel alarming, palpitations are often harmless and not directly linked to structural heart disease. However, they can be a warning sign of underlying thyroid dysfunction, systemic electrolyte imbalances, anxiety disorders, chronic stress, or early stages of cardiac arrhythmia. Proper diagnosis and natural treatments help restore normal sinus rhythm and calm the nervous system.",
    ayurvedaPerspective: "Ayurveda views palpitations as 'Hrid-Kampa', caused by the vitiation of Vyana Vata and Prana Vata, which govern the motor impulses of the heart. Mental stress, anxiety, or bad digestion (Mandagni) produces Ama that disturbs the heart's electrical pathways. Treatment focuses on Vata-pacifying herbs like Ashwagandha, Jatamansi, and Brahmi, alongside Shirodhara and oil massages.",
    homeopathyPerspective: "Homeopathy offers highly customized remedies for palpitations based on trigger factors (like fear, sudden movement, or gastric gas). Remedies like Aconitum Napellus (for sudden panic and racing heart), Iberis Amara, and Lycopodus (palpitations caused by bloating) regulate autonomic cardiac nerves safely and quickly.",
    duration: "Acute / Episodic",
    risk: "Low unless Arrhythmia Present",
    commonAge: "15 - 60 Years",
    recovery: "2 - 4 Weeks to Calm",
    heroImage: "/images/diseases/heart-palpitations.png",
    patientsTreated: "11,000+",
    yearsExperience: "20+",
    patientSatisfaction: "96%",
    metaTitle: "Natural Treatment for Heart Palpitations | Ojas Sanjivani",
    metaDescription: "Calm irregular, rapid, or pounding heartbeats naturally. Find custom Ayurveda & Homeopathy treatments to address anxiety, stress, and cardiac rhythms.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Constitutional & Autonomic Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy focuses on regulating the autonomic nervous system and treating thyroid or stress-induced heart palpitations using customized homeopathic drops.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Racing Heartbeat", description: "Feeling like the heart is beating extremely fast or running a marathon suddenly.", iconName: "Activity" },
      { title: "Fluttering Sensation", description: "A butterfly-like or fluttering feeling in the chest or throat area.", iconName: "Flame" },
      { title: "Skipped Beats", description: "The sensation that the heart has stopped for a fraction of a second or skipped a beat.", iconName: "Heart" },
      { title: "Anxiety & Panic", description: "Associated feelings of fear, sweating, and trembling during the palpitation episode.", iconName: "AlertTriangle" }
    ],
    causes: [
      { title: "Anxiety & Panic Attacks", description: "Surges of adrenaline due to fear or sudden panic constrict vessels and trigger tachycardia.", iconName: "Brain" },
      { title: "Thyroid Overactivity", description: "Hyperthyroidism speeds up metabolism, directy increasing heart rate and excitability.", iconName: "Activity" },
      { title: "Caffeine & Stimulants", description: "Excessive tea, coffee, energy drinks, or tobacco stimulate cardiac electrical pathways.", iconName: "CupSoda" },
      { title: "Chronic Gut Gas", description: "Severe gastric bloating presses against the diaphragm, triggering reflex palpitations (Roemheld Syndrome).", iconName: "Frown" }
    ],
    treatments: [
      { title: "Ashwagandha & Jatamansi Medhya Rasayana", description: "Calming Ayurvedic formulations that reduce stress hormones and normalize cardiac rhythms.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Aconite & Spigelia Remedies", description: "Homeopathic constitutional drops to calm sudden panic, lower blood pressure, and ease palpitations.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Shirodhara & Abhyanga", description: "Ayurvedic warm oil forehead flow to calm Vyana Vata and relax autonomic hyper-excitability.", iconName: "Sparkles", type: "Therapy" },
      { title: "Meditation & Anulom Vilom", description: "Alternate-nostril yogic breathing to balance sympathetic and parasympathetic rhythms.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "Are heart palpitations dangerous?", answer: "In most cases, palpitations are benign and linked to stress, gas, or caffeine. However, if they are accompanied by fainting, chest pain, or severe dizziness, you should seek immediate emergency medical care." },
      { question: "Can digestive gas cause palpitations?", answer: "Yes, when gas accumulates in the stomach or colon, it can push the diaphragm upward and irritate the vagus nerve, causing rapid or irregular heartbeats." }
    ],
    testimonials: [
      { id: "hp1", patientName: "Rohit Sharma", location: "Delhi, NCR", disease: "Anxiety Palpitations", rating: 5, duration: "1 Month", reviewText: "I had sudden episodes of pounding heart due to work stress. Within a month of taking Ojas Jatamansi pills and Homeopathic drops, my heart rate is completely calm and stable.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["hypertension", "angina", "cardiac-wellness"]
  },

  // 6. CARDIAC WELLNESS
  "cardiac-wellness": {
    slug: "cardiac-wellness",
    name: "Cardiac Wellness",
    category: "Heart Care",
    tagline: "Preventive Heart Care & Healthy Cardiotonic Lifestyle",
    overview: "Cardiac Wellness is a comprehensive, preventive healthcare program designed to protect, maintain, and enhance cardiovascular strength. It focuses on individuals with a family history of heart disease, those with metabolic syndrome, or anyone seeking to optimize their circulatory health. By combining preventive cardiotonics, stress-reduction techniques, heart-friendly diet planning, and personalized yoga, we strengthen the heart muscle and prevent arterial blockages.",
    ayurvedaPerspective: "In Ayurveda, Cardiac Wellness centers around nourishing the 'Ojas' (vital life force) which resides in the heart. By utilizing 'Rasayanas' (rejuvenating tonics) like Arjuna, Pippali, and Amalaki, we boost cardiac immunity and protect arterial tissues from premature aging or oxidative damage.",
    homeopathyPerspective: "Homeopathy contributes to cardiac wellness by reinforcing the body's natural defense mechanisms. Gentle cardiovascular tonics like Crataegus (Hawthorn berry extract) and Selenium are used to promote cellular repair, improve lipid clearance, and regulate blood pressure naturally.",
    duration: "Preventive / Ongoing",
    risk: "Low (Preventive Care)",
    commonAge: "20 - 80 Years",
    recovery: "Continuous Wellness",
    heroImage: "/images/diseases/cardiac-wellness.png",
    patientsTreated: "16,000+",
    yearsExperience: "20+",
    patientSatisfaction: "97%",
    metaTitle: "Preventive Cardiac Wellness Program | Ojas Sanjivani",
    metaDescription: "Protect your heart from cardiovascular blockages. Our integrated Ayurveda & Homeopathy wellness program offers personalized diet charts, yoga, and natural cardiotonics.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Senior Cardiovascular & Panchakarma Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai is dedicated to cardiorespiratory prevention, guiding patients to transition away from sedentary habits and refine their arterial health naturally.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "No Symptoms", description: "This is a preventive wellness program designed for individuals without active symptoms to avoid cardiovascular disorders.", iconName: "CheckCircle2" }
    ],
    causes: [
      { title: "Family Heart History", description: "Genetics predispose individuals to early arterial stiffening or high cholesterol production.", iconName: "GitMerge" },
      { title: "Sedentary Desk Job", description: "Prolonged sitting reduces vascular blood flow and lowers good HDL cholesterol.", iconName: "Clock" },
      { title: "Chronic High-Stress", description: "Continuous adrenaline/cortisol output triggers silent damage to inner blood vessel linings.", iconName: "Brain" }
    ],
    treatments: [
      { title: "Preventive Arjuna Rasa", description: "Daily cardiotonic powder to enhance ventricular pumping capacity and protect arterial lining.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Crataegus Heart Tonic", description: "Gentle homeopathic fluid to optimize cardiac circulation and normalize vascular tone.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Cardio-Protective Nutrition", description: "Fiber-rich, low-cholesterol diet featuring nuts, green leafy vegetables, and pomegranate juices.", iconName: "Utensils", type: "Diet" },
      { title: "Hridaya Yoga Program", description: "Custom yoga postures (like Setu Bandhasana) to improve thoracic chest expansion and cardiac blood flow.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "Who should join the Cardiac Wellness program?", answer: "Anyone with a family history of heart disease, high stress, borderline cholesterol, or high blood pressure should join to prevent cardiovascular conditions." },
      { question: "Are cardiotonic herbs safe for daily consumption?", answer: "Yes, Ayurvedic Arjuna and Homeopathic Crataegus are extremely safe, non-toxic, and can be taken daily as a health tonic under clinical guidance." }
    ],
    testimonials: [
      { id: "cw1", patientName: "Arjun Dev", location: "Mumbai, Maharashtra", disease: "Preventive Care", rating: 5, duration: "6 Months", reviewText: "With a family history of heart attacks, I was worried. Ojas Sanjivani's cardiac wellness plan, natural Arjuna drops, and diet changes have kept my lipids and BP perfect.", videoThumbnail: "/images/product-ashwagandha.jpg" }
    ],
    relatedDiseases: ["hypertension", "high-cholesterol", "heart-palpitations"]
  },

  // NEUROLOGY CATEGORY LANDING PAGE
  "neurology": {
    slug: "neurology",
    name: "Neurology",
    category: "Neurology",
    tagline: "Natural Neurological Disorder Treatment with Ayurveda & Homeopathy",
    overview: "Neurological disorders affect the brain, spinal cord, and nerves throughout the body. Millions are affected by symptoms ranging from chronic headaches and balance loss to progressive movement difficulties and sleeping disorders. Our integrated clinical protocols focus on soothing nervous excitability, nourishingMajja Dhatu, restoring autonomic balance, and achieving long-term neurological recovery without side effects.",
    ayurvedaPerspective: "In Ayurveda, neurological disorders are categorized under 'Vata Vyadhi' (Vata-dominated diseases). The nervous system is governed by Prana Vata (sensory function), Vyana Vata (motor coordination), and Sadhaka Pitta (cognitive processes), supported by Majja Dhatu (nervous tissues). Vitiation of Vata dries up neural pathways, causing tremors, pain, and sensory loss. Treatment utilizes nerve-nourishing herbs (Medhya Rasayanas like Brahmi and Ashwagandha) and calming panchakarma therapies like Shirodhara and Nasya.",
    homeopathyPerspective: "Homeopathy approaches neurology constitutionally, analyzing the individual's mental and physical triggers. Constitutional remedies like Gelsemium, Kali Phos, Zincum Met, and Passiflora act gently to calm hyperactive nerves, improve neurological coordination, manage neuropathic pain, and restore healthy sleeping cycles without causing dependency.",
    duration: "Chronic / Autonomic Support",
    risk: "Nerve Degeneration if Untreated",
    commonAge: "15 - 75 Years",
    recovery: "Ongoing Wellness & Recovery",
    heroImage: "/images/diseases/neurology.png",
    patientsTreated: "12,000+",
    yearsExperience: "20+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Neurological Disorder Treatment | Ojas Sanjivani",
    metaDescription: "Experience premium, non-surgical treatment for brain, nerve, and sleep disorders. Our integrated Ayurveda & Homeopathy protocol improves nerve health.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Neuro-Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar specializes in Vata-soothing therapies, Majja Dhatu nourishment, and constitutional care for chronic neurological conditions.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Migraine", slug: "migraine", description: "Long-term relief from intense, throbbing headaches, aura, and sensory sensitivity.", image: "/images/diseases/migraine.png" },
      { name: "Vertigo", slug: "vertigo", description: "Restore vestibular balance and resolve spinning or dizziness naturally.", image: "/images/diseases/vertigo.png" },
      { name: "Parkinson's Disease", slug: "parkinsons-disease", description: "Manage tremors, muscle stiffness, and improve motor coordination safely.", image: "/images/diseases/parkinsons-disease.png" },
      { name: "Neuropathy", slug: "neuropathy", description: "Nourish damaged nerve endings and relieve chronic burning, numbness, or tingling.", image: "/images/diseases/neuropathy.png" },
      { name: "Epilepsy", slug: "epilepsy", description: "Calm neural hyper-excitability and reduce seizure frequency with brain-calming tonics.", image: "/images/diseases/epilepsy.png" },
      { name: "Insomnia", slug: "insomnia", description: "Restore natural circadian sleep cycles and calm an overactive mind without sleep aids.", image: "/images/diseases/insomnia.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Can neurological disorders be managed without long-term heavy sedatives?", answer: "Yes, our integrated Ayurvedic herbs and homeopathic remedies calm the autonomic nervous system and nourish nerve endings, reducing dependency on heavy sedatives." },
      { question: "Is Shirodhara effective for neurological wellness?", answer: "Absolutely. Shirodhara (warm medicated oil flowing over the forehead) activates the parasympathetic nervous system, significantly reducing stress, calming brain waves, and improving sleep quality." }
    ],
    testimonials: [
      { id: "n1", patientName: "Vikram Malhotra", location: "Mumbai, Maharashtra", disease: "Chronic Insomnia & Migraine", rating: 5, duration: "3 Months", reviewText: "I was dependent on sleeping pills for 5 years and had weekly migraine attacks. Within 3 months of starting the customized neuro-remedies, I sleep naturally and my headaches are completely gone.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["diabetes", "arthritis"]
  },

  // 1. MIGRAINE
  "migraine": {
    slug: "migraine",
    name: "Migraine",
    category: "Neurology",
    tagline: "Long-Term Migraine Relief through Ayurveda & Homeopathy",
    overview: "Migraine is a chronic neurological condition characterized by recurring, intense, throbbing headaches, typically affecting one side of the head. It is often accompanied by aura, nausea, vomiting, and extreme sensitivity to light, sound, and smell. Unlike a normal headache, a migraine is a complex sensory disorder triggered by nervous system excitability, vascular spasms, stress, and hormonal changes.",
    ayurvedaPerspective: "Ayurveda describes Migraine as 'Ardhavabhedaka' (one-sided headache) caused by an imbalance of Vata and Pitta doshas in the head. Aggravated Pitta dilates and inflames the blood vessels in the brain, causing throbbing pain, while vitiated Vata triggers sudden painful spasms and sensory hypersensitivity. Treatment focuses on cleaning metabolic toxins (Ama) from the channels, calming the mind, and using specialized nasal therapy (Nasya) with medicated oils.",
    homeopathyPerspective: "Homeopathy views migraine as an expression of a deeper constitutional susceptibility. Remedies like Belladonna (for sudden, throbbing pain with heat), Spigelia (for left-sided neuralgic headaches), Sanguinaria (for right-sided migraines starting in the neck), and Natrum Mur are selected based on the patient's individual triggers, food cravings, and emotional state to resolve migraines permanently.",
    duration: "Chronic / Episodic",
    risk: "High Daily Disruption",
    commonAge: "15 - 50 Years",
    recovery: "3 - 6 Weeks to Stabilize",
    heroImage: "/images/diseases/migraine.png",
    patientsTreated: "9,500+",
    yearsExperience: "20+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Migraine Treatment & Relief | Ojas Sanjivani",
    metaDescription: "Relieve migraine pain naturally. Our custom Ayurveda & Homeopathy treatments address triggers, stress, and dosha imbalances for long-term recovery.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Neuro-Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar has 18 years of experience in administering Vata-Pitta soothing therapies, Shirodhara, and custom herbs for severe migraines.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Severe Headache", description: "Intense, throbbing, or pulsing pain, typically on one side of the head.", iconName: "Flame" },
      { title: "Nausea & Vomiting", description: "Feeling sick to the stomach or vomiting during a severe headache episode.", iconName: "AlertTriangle" },
      { title: "Sensitivity to Light", description: "Photophobia; discomfort or pain triggered by normal indoor or outdoor lighting.", iconName: "Eye" },
      { title: "Sensitivity to Sound", description: "Phonophobia; intolerance to normal noises, requiring a quiet dark room.", iconName: "VolumeX" },
      { title: "Visual Aura", description: "Seeing flashing lights, zig-zag lines, blind spots, or temporary vision changes.", iconName: "Eye" },
      { title: "Blurred Vision", description: "Double or hazy vision caused by vascular constriction in the retina.", iconName: "Eye" },
      { title: "Neck Stiffness", description: "Tension and soreness in the neck muscles before or during a migraine attack.", iconName: "Activity" },
      { title: "Dizziness & Vertigo", description: "Lightheadedness or a spinning sensation accompanying the headache.", iconName: "RotateCcw" }
    ],
    causes: [
      { title: "Chronic Stress", description: "Mental anxiety and emotional tension trigger neurotransmitter changes and spasms.", iconName: "Brain" },
      { title: "Sleep Deprivation", description: "Irregular sleep patterns or lack of deep sleep disrupt brain chemical regulation.", iconName: "Clock" },
      { title: "Hormonal Fluctuations", description: "Estrogen changes in women during menstrual cycles, pregnancy, or menopause.", iconName: "Activity" },
      { title: "Genetics & Family History", description: "Inherited hyper-excitability of brain networks and vascular reactivity.", iconName: "GitMerge" },
      { title: "Food Triggers", description: "Aged cheese, chocolate, artificial sweeteners, processed meats, and caffeine.", iconName: "Utensils" },
      { title: "Screen Time", description: "Prolonged exposure to bright screens causes eye strain and triggers neural pathways.", iconName: "Laptop" }
    ],
    treatments: [
      { title: "Dosha Balancing Herbs", description: "Ayurvedic formulations with Godanti Bhasma, Pathyadi decoction, and Shirashuladi Vajra to calm Pitta-Vata.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Constitutional Homeopathy", description: "Remedies like Belladonna or Spigelia to address vascular sensitivity and prevent recurring spasms.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Nasya Oil Therapy", description: "Nasal administration of medicated oils to clear sinus blockages and nourish cranial nerves.", iconName: "Sparkles", type: "Therapy" },
      { title: "Stress Management Yoga", description: "Pranayama, Bhramari, and deep relaxation poses to activate the parasympathetic system.", iconName: "Activity", type: "Yoga" },
      { title: "Circadian Sleep Routine", description: "Guidance on sleep hygiene, screen curfews, and establishing natural circadian balance.", iconName: "Clock", type: "Lifestyle" },
      { title: "Migraine Elimination Diet", description: "Nutrition plan excluding aged, processed, and chemical triggers while promoting cooling foods.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "Can migraine be cured naturally?", answer: "Yes, by identifying and avoiding personal triggers, balancing the Vata and Pitta doshas, and stabilizing vascular spasms using constitutional homeopathy, migraines can be managed effectively for long-term relief." },
      { question: "Is migraine hereditary?", answer: "Yes, genetics play a strong role. If one or both parents suffer from migraines, there is a higher probability of passing down neurological network sensitivity." },
      { question: "Can Ayurveda prevent migraine attacks?", answer: "Absolutely. Ayurvedic therapies like Nasya and herbs like Pathyadi stabilize blood circulation and clear toxins, reducing both the frequency and intensity of attacks." },
      { question: "What foods trigger migraine?", answer: "Common triggers include caffeine, chocolate, aged cheese, MSG, artificial sweeteners, and fermented foods. We provide a customized elimination chart." },
      { question: "Can stress cause migraine?", answer: "Yes, stress is the most common trigger. It causes muscle tension and releases chemicals like cortisol and adrenaline, which constrict and dilate cranial blood vessels." },
      { question: "Is homeopathy effective for migraine?", answer: "Homeopathy is highly effective as it addresses the individual's specific pain triggers, locations, and emotional responses rather than just suppressing pain." }
    ],
    testimonials: [
      { id: "mt1", patientName: "Nisha Sharma", location: "Delhi, NCR", disease: "Chronic Migraine", rating: 5, duration: "2 Months", reviewText: "I had throbbing migraines 3 times a week. After 2 months of custom drops and Nasya oil therapy, my attacks have stopped completely and I no longer need painkillers.", videoThumbnail: "/images/product-ayush64.jpg" }
    ],
    relatedDiseases: ["vertigo", "insomnia", "neuropathy"]
  },

  // 2. VERTIGO
  "vertigo": {
    slug: "vertigo",
    name: "Vertigo",
    category: "Neurology",
    tagline: "Regain Balance and Clarity Naturally",
    overview: "Vertigo is a sensation of spinning or dizziness, where you feel like your surroundings are moving when they are not. It is typically a symptom of an underlying vestibular system disorder (like BPPV, labyrinthitis, or Meniere's disease) or sudden changes in blood pressure. Vertigo can cause severe loss of balance, nausea, vomiting, and disorientation, impacting daily activities.",
    ayurvedaPerspective: "Ayurveda classifies Vertigo as 'Bhrama', primarily caused by aggravated Vata dosha coupled with vitiated Pitta dosha. Excess Vata disrupts the spatial and sensory impulses in the inner ear channels (Srotas), while Pitta causes heat and dizziness. Treatment focuses on Vata-Pitta cooling therapies, nourishing the nervous tissues, and stabilizing the mind.",
    homeopathyPerspective: "Homeopathy provides gentle and highly specific remedies for vertigo based on what triggers or worsens the dizziness. Remedies like Conium Maculatum (for spinning when turning in bed), Cocculus Indica (for motion sickness and lack of sleep), and Gelsemium (for dullness and heavy eyelids) regulate vestibular nerve responses and restore balance safely.",
    duration: "Acute / Episodic",
    risk: "Fall Hazard Risk",
    commonAge: "30 - 70 Years",
    recovery: "2 - 4 Weeks",
    heroImage: "/images/diseases/vertigo.png",
    patientsTreated: "6,200+",
    yearsExperience: "18+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Vertigo & Dizziness Treatment | Ojas Sanjivani",
    metaDescription: "Relieve vertigo and spinning sensations naturally. Discover our integrated Ayurvedic and Homeopathic remedies to restore vestibular balance and stability.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Vestibular & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes constitutional homeopathy and vestibular support therapies to treat chronic inner-ear imbalances and vertigo.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Spinning Sensation", description: "A false feeling that you or your surroundings are spinning, tilting, or moving.", iconName: "RotateCcw" },
      { title: "Loss of Balance", description: "Unsteadiness on your feet, making it difficult to walk straight or stand.", iconName: "AlertTriangle" },
      { title: "Nausea & Vomiting", description: "Feeling sick or vomiting due to sensory confusion between eyes and inner ear.", iconName: "AlertTriangle" },
      { title: "Tinnitus", description: "Ringing, buzzing, or hissing sounds in one or both ears during episodes.", iconName: "VolumeX" },
      { title: "Double Vision", description: "Retinal coordinates mismatch leading to temporary double or blurred vision.", iconName: "Eye" },
      { title: "Lightheadedness", description: "A feeling of fainting or floating, especially when standing up quickly.", iconName: "Activity" }
    ],
    causes: [
      { title: "Inner Ear Disorders", description: "BPPV, labyrinthitis, or Meniere's disease which disrupt balance signals.", iconName: "AlertTriangle" },
      { title: "Low Blood Pressure", description: "Sudden drops in blood flow to the brain, causing transient dizziness.", iconName: "Heart" },
      { title: "Vestibular Neuritis", description: "Viral infection causing inflammation of the vestibular nerve in the inner ear.", iconName: "Activity" },
      { title: "Chronic Stress", description: "Anxiety triggers hyperventilation and autonomic imbalance, worsening vertigo.", iconName: "Brain" }
    ],
    treatments: [
      { title: "Vata Pacifying Formulations", description: "Ayurvedic cooling formulations like Saraswatarishta and Ashwagandharishta to nourish balance pathways.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Vestibular Homeopathic Remedies", description: "Remedies like Conium or Cocculus to target motion triggers and inner ear congestion.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Vestibular Rehabilitation Exercises", description: "Specific head and body movements (like Epley maneuver) to relocate inner ear crystals.", iconName: "Activity", type: "Yoga" },
      { title: "Hydration & Mineral Balance", description: "Ensuring adequate fluids and electrolytes to maintain stable blood pressure and fluid levels.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "What is the most common cause of vertigo?", answer: "The most common cause is BPPV (Benign Paroxysmal Positional Vertigo), which occurs when tiny calcium crystals in the inner ear become dislodged." },
      { question: "Can homeopathy cure vertigo permanently?", answer: "Yes, homeopathy targets the root cause of nerve inflammation or motion triggers, providing long-term relief and stability." }
    ],
    testimonials: [
      { id: "vt1", patientName: "Rahul Verma", location: "Kolkata, West Bengal", disease: "BPPV Vertigo", rating: 5, duration: "1 Month", reviewText: "I couldn't get out of bed without the room spinning. Ojas Sanjivani's customized homeopathic drops and vestibular exercises cured my vertigo within a month.", videoThumbnail: "/images/product-ashwagandha.jpg" }
    ],
    relatedDiseases: ["migraine", "insomnia", "cardiac-wellness"]
  },

  // 3. PARKINSON'S DISEASE
  "parkinsons-disease": {
    slug: "parkinsons-disease",
    name: "Parkinson's Disease",
    category: "Neurology",
    tagline: "Manage Tremors and Restore Mobility Naturally",
    overview: "Parkinson's Disease is a progressive neurological disorder that primarily affects movement and motor control. It is characterized by the degeneration of dopamine-producing neurons in a specific area of the brain (substantia nigra). This leads to hallmark symptoms such as involuntary resting tremors, muscle rigidity, slowed movement (bradykinesia), and balance impairment.",
    ayurvedaPerspective: "Ayurveda describes Parkinson's under 'Kampa Vata' (trembling Vata disorder). It is considered a disease of old age caused by severe vitiation of Vata dosha in the brain, leading to tissue wasting (Dhatu Kshaya) of the Majja (nervous tissue). Treatment relies heavily on Ayurvedic Rasayana (rejuvenating) herbs like Kapikachhu (a natural source of L-dopa), Ashwagandha, and oil therapies (Basti and Shirodhara) to nourish nerves and retard degeneration.",
    homeopathyPerspective: "Homeopathy aims to slow down the progression of motor deterioration and relieve symptomatic rigidity and tremors. Constitutional remedies like Gelsemium, Zincum Met, and Argentum Nitricum are prescribed to improve muscular coordination, calm tremors, and support psychological well-being safely.",
    duration: "Progressive / Long-term Management",
    risk: "Severe Mobility Loss",
    commonAge: "45 - 80 Years",
    recovery: "Ongoing Management",
    heroImage: "/images/diseases/parkinsons-disease.png",
    patientsTreated: "4,800+",
    yearsExperience: "20+",
    patientSatisfaction: "92%",
    metaTitle: "Natural Parkinson's Disease Care & Therapy | Ojas Sanjivani",
    metaDescription: "Manage Parkinson's symptoms naturally. Our integrated Ayurvedic Rasayana and Homeopathy protocols help control tremors, stiffness, and improve mobility.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Neuro-Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes ancient Kerala rejuvenating oil therapies and natural L-dopa formulations to manage motor dysfunctions in Parkinson's.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Resting Tremors", description: "Involuntary shaking, typically starting in a hand or fingers while at rest.", iconName: "Activity" },
      { title: "Muscle Rigidity", description: "Stiffness and resistance in limbs or neck, limiting physical range of motion.", iconName: "Activity" },
      { title: "Slowed Movement", description: "Bradykinesia; difficulty starting movements, making simple tasks slow and laborious.", iconName: "Activity" },
      { title: "Balance Impairment", description: "Unsteadiness and loss of posture control, leading to a high risk of falls.", iconName: "AlertTriangle" },
      { title: "Speech Changes", description: "Speaking softly, rapidly, hesitating, or speaking with a monotonous tone.", iconName: "VolumeX" },
      { title: "Gait Freezing", description: "A temporary sensation of being glued to the floor when attempting to walk.", iconName: "Activity" }
    ],
    causes: [
      { title: "Dopamine Cell Loss", description: "Degeneration of neurons in the brain that produce dopamine, a chemical essential for movement.", iconName: "Activity" },
      { title: "Genetic Susceptibility", description: "Specific gene mutations associated with familial Parkinson's disease.", iconName: "GitMerge" },
      { title: "Environmental Toxins", description: "Exposure to pesticides, herbicides, and heavy metals over a long duration.", iconName: "Flame" },
      { title: "Neuro-Inflammation", description: "Chronic inflammation in brain tissues accelerating cellular aging.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Medhya & Rasayana Herbs", description: "Formulations containing Kapikachhu (natural L-dopa), Ashwagandha, and Shankhapushpi to protect brain cells.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Constitutional Coordination Care", description: "Homeopathic remedies like Zincum Met to reduce muscle spasms, tremors, and cognitive fatigue.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Shirodhara & Abhyanga", description: "Warm medicated oil therapies to calm systemic Vata, reduce rigidity, and nourish muscles.", iconName: "Sparkles", type: "Therapy" },
      { title: "Neuro-Muscular Yoga Poses", description: "Postures focused on stability, balance, stretching, and improving joint flexibility.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "Can natural treatment reverse Parkinson's?", answer: "While a complete cure for advanced Parkinson's is not possible, natural treatments like Kapikachhu and constitutional homeopathy can slow degeneration, improve motor control, and reduce tremors significantly." },
      { question: "What is Kapikachhu?", answer: "Kapikachhu (Mucuna pruriens) is a traditional Ayurvedic herb rich in natural L-dopa, which crossing the blood-brain barrier is converted to dopamine." }
    ],
    testimonials: [
      { id: "pt1", patientName: "Baldev Singh", location: "Amritsar, Punjab", disease: "Parkinson's Disease", rating: 5, duration: "6 Months", reviewText: "My hand tremors made it impossible to hold a cup. After 6 months of Ojas Sanjivani's neuro-nourishing oils and herbs, my tremors are 60% reduced and I walk with confidence.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["neuropathy", "epilepsy", "insomnia"]
  },

  // 4. NEUROPATHY
  "neuropathy": {
    slug: "neuropathy",
    name: "Neuropathy",
    category: "Neurology",
    tagline: "Nourish Nerve Pathways & Relieve Burning Pain Naturally",
    overview: "Peripheral Neuropathy occurs when the peripheral nerves that carry signals between the brain, spinal cord, and the rest of the body are damaged. Most commonly triggered by diabetes, nutritional deficiencies, chronic alcohol consumption, or trauma, neuropathy causes chronic burning pain, numbness, tingling, and weakness, typically in the hands and feet.",
    ayurvedaPerspective: "Ayurveda classifies neuropathy under 'Vata Vyadhi' affecting the Rasa and Rakta channels, often caused by tissue malnutrition (Dhatu Kshaya) or metabolic obstructions. Vitiated Vata blocks sensory impulses. Treatment focuses on clearing obstructions, nourishing the nerve endings with Ayurvedic oils (Pinda Taila), and using rejuvenating herbs like Bala, Pippali, and Ashwagandha.",
    homeopathyPerspective: "Homeopathy is highly effective for relieving nerve pain, restoring sensation, and healing damaged pathways. Remedies like Hypericum Perforatum (excellent for sharp, shooting nerve pains), Arsenicum Album (for burning numbness), and Causticum are prescribed to address specific sensory disturbances and restore nerve health.",
    duration: "Chronic / Nerve Care",
    risk: "Permanent Sensory Loss",
    commonAge: "30 - 75 Years",
    recovery: "4 - 8 Weeks",
    heroImage: "/images/diseases/neuropathy.png",
    patientsTreated: "7,500+",
    yearsExperience: "18+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Peripheral Neuropathy Treatment | Ojas Sanjivani",
    metaDescription: "Relieve neuropathy nerve pain, burning, and numbness naturally. Our Ayurveda & Homeopathy protocol nourishes nerves and restores sensory function.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Metabolic & Neuropathy Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy combines specific homeopathic nerve regenerators with metabolic lifestyle modifications to reverse diabetic neuropathy pain.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Tingling & Numbness", description: "Gradual onset of numbness, tingling, or 'pins and needles' sensation in feet or hands.", iconName: "Activity" },
      { title: "Burning Pain", description: "Sharp, burning, freezing, or throbbing pain, which is often worse at night.", iconName: "Flame" },
      { title: "Muscle Weakness", description: "Loss of muscle strength or coordination, leading to difficulty walking or holding objects.", iconName: "Activity" },
      { title: "Hypersensitivity", description: "Extreme sensitivity to touch, where even the weight of a bedsheet causes pain.", iconName: "AlertTriangle" },
      { title: "Loss of Balance", description: "Decreased sensory feedback from feet making it difficult to coordinate walking.", iconName: "AlertTriangle" }
    ],
    causes: [
      { title: "Uncontrolled Diabetes", description: "High glucose levels damage the delicate walls of capillaries supplying nerves.", iconName: "Activity" },
      { title: "Vitamin Deficiencies", description: "Lack of essential B vitamins (B1, B6, B12) which are critical for nerve health and myelin sheath.", iconName: "Utensils" },
      { title: "Chronic Alcohol Use", description: "Alcohol toxicity damages nerves directly and leads to poor nutritional absorption.", iconName: "GlassWater" },
      { title: "Autoimmune Conditions", description: "Disorders where the immune system mistakenly attacks nerve sheath tissues.", iconName: "GitMerge" }
    ],
    treatments: [
      { title: "Nerve Nourishing Herbs", description: "Ayurvedic formulations containing Ashwagandha, Bala, and Ekangveer Ras to rebuild myelin sheaths.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Neural Homeopathic Remedies", description: "Specific drops including Hypericum to repair nerve fibers and stop burning sensations.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Pinda Sweda Oil Massage", description: "Warm Ayurvedic massage using medicated rice pudding and milk to improve circulation and sensations.", iconName: "Sparkles", type: "Therapy" },
      { title: "B-Vitamin Rich Diet", description: "Custom nutrition charts rich in whole grains, green leafy vegetables, seeds, and healthy fats.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "Can diabetic neuropathy be reversed?", answer: "Yes, in early-to-moderate stages. By controlling blood sugar levels and utilizing our nerve-nourishing Ayurveda and homeopathic remedies, nerve function and sensations can be restored." },
      { question: "How does Hypericum help in neuropathy?", answer: "Hypericum is a primary homeopathic medicine for nerve injuries and neuralgic pain, helping to relieve shooting and burning sensations." }
    ],
    testimonials: [
      { id: "nt1", patientName: "Harish Patel", location: "Ahmedabad, Gujarat", disease: "Diabetic Neuropathy", rating: 5, duration: "3 Months", reviewText: "I had severe burning pain in my soles that kept me awake. Within 3 months of Ojas Sanjivani's treatment, the burning is 90% gone and I can sleep peacefully.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["diabetes", "parkinsons-disease", "migraine"]
  },

  // 5. EPILEPSY
  "epilepsy": {
    slug: "epilepsy",
    name: "Epilepsy",
    category: "Neurology",
    tagline: "Calm Neural Rhythms & Support Cognitive Health Naturally",
    overview: "Epilepsy is a chronic neurological disorder characterized by abnormal brain activity, leading to recurrent, unprovoked seizures, muscle spasms, confusion, and temporary loss of consciousness. It can result from brain injury, stroke, genetics, or infections. Integrated natural treatments focus on calming the autonomic nervous system, reducing neural excitability, and protecting brain health.",
    ayurvedaPerspective: "Ayurveda describes epilepsy as 'Apasmara', caused by toxins (Ama) blocking the mental channels (Srotas), aggravating Vata and Pitta doshas. This triggers sudden loss of memory and consciousness. Treatment centers on cleansing therapies (Panchakarma) and utilizing brain-calming Medhya Rasayanas like Shankhapushpi, Brahmi, and Jyotishmati to nourish cranial tissues.",
    homeopathyPerspective: "Homeopathic constitutional care focuses on lowering the frequency and intensity of seizures by calming nervous hyper-excitability. Remedies like Cicuta Virosa, Cuprum Met, and Artemisia support the brain's electrical stability and reduce neural spasms gently and safely.",
    duration: "Chronic / High Monitoring",
    risk: "Accidental Injury Risk",
    commonAge: "5 - 65 Years",
    recovery: "Ongoing Support",
    heroImage: "/images/diseases/epilepsy.png",
    patientsTreated: "5,400+",
    yearsExperience: "20+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Epilepsy & Seizure Care | Ojas Sanjivani",
    metaDescription: "Support epilepsy care naturally. Our Ayurvedic Medhya Rasayanas and constitutional Homeopathy stabilize brain electrical activity and reduce seizure frequency.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Neuro-Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes specialized Ayurvedic brain cell nourishing protocols and ghee-based therapies to treat chronic seizure disorders naturally.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Recurrent Seizures", description: "Temporary periods of abnormal brain electrical activity causing convulsions.", iconName: "Activity" },
      { title: "Muscle Spasms", description: "Involuntary jerking movements of the arms, legs, or face muscles.", iconName: "Activity" },
      { title: "Temporary Confusion", description: "Disorientation or blank staring spells during an episode.", iconName: "Brain" },
      { title: "Loss of Consciousness", description: "Fainting or temporary blackout, followed by lack of memory of the event.", iconName: "AlertTriangle" },
      { title: "Anxiety & Panic", description: "Feelings of fear or aura sensations just before a seizure occurs.", iconName: "Brain" }
    ],
    causes: [
      { title: "Brain Injury", description: "Trauma to the head or prenatal brain damage causing scar tissue.", iconName: "AlertTriangle" },
      { title: "Genetic Predisposition", description: "Inherited variations in brain cell channel proteins.", iconName: "GitMerge" },
      { title: "Infections", description: "Meningitis, encephalitis, or neurocysticercosis affecting brain membranes.", iconName: "Activity" },
      { title: "Sleep Deprivation", description: "Extreme fatigue acts as a major trigger for brain electrical instability.", iconName: "Clock" }
    ],
    treatments: [
      { title: "Brain Stabilizing Ghee", description: "Medhya Ghrita (ghee infused with Brahmi and Shankhapushpi) to nourish brain cells and cross the blood-brain barrier.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Anti-Spasmodic Homeopathy", description: "Constitutional remedies like Cuprum Met to calm neuromuscular hyper-excitability.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Calming Shirodhara", description: "Warm herbal oil flow to soothe cranial nerves and reduce stress hormones.", iconName: "Sparkles", type: "Therapy" },
      { title: "Yogic Breathing & Meditation", description: "Alternate-nostril pranayama to balance cerebral hemispheres and calm the mind.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "Is natural treatment safe along with anti-epileptic drugs (AEDs)?", answer: "Yes, our natural remedies are non-interactive and can be safely taken alongside AEDs. Over time, under clinical monitoring, the frequency of seizures may drop, allowing gradual dosage adjustments." },
      { question: "What is Medhya Ghrita?", answer: "Medhya Ghrita is medicated ghee processed with memory-enhancing and nerve-stabilizing herbs, which are highly effective in nourishing brain cells." }
    ],
    testimonials: [
      { id: "ep1", patientName: "Meera Nair", location: "Trivandrum, Kerala", disease: "Absence Seizures", rating: 5, duration: "6 Months", reviewText: "My son had multiple staring spells and absence seizures daily. After 6 months of Brahmi Ghrita and homeopathic drops, his episodes have reduced by 80% and his focus is back.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["migraine", "parkinsons-disease", "insomnia"]
  },

  // 6. INSOMNIA
  "insomnia": {
    slug: "insomnia",
    name: "Insomnia",
    category: "Neurology",
    tagline: "Restore Deep Natural Sleep Rhythms Holistically",
    overview: "Insomnia is a common sleep disorder characterized by persistent difficulty falling asleep, staying asleep, or waking up too early and being unable to return to sleep. Chronic insomnia causes daytime fatigue, cognitive fog, mood changes, and impairs immune functions.",
    ayurvedaPerspective: "Ayurveda terms insomnia as 'Anidra', caused by an imbalance in the Vata and Pitta doshas coupled with a deficiency of Kapha (which provides physical restfulness). An overactive mind (Raja Guna) keeps the sensory channels stimulated. Treatment focuses on soothing Shirodhara, warm milk with nutmeg, and oil massages (Padabhyanga) to induce deep sleep.",
    homeopathyPerspective: "Homeopathy addresses insomnia by resolving the physiological and emotional root causes, such as stress, anxiety, or hyperactive thoughts. Remedies like Coffea Cruda (for an overactive mind with rapid ideas) and Passiflora Incarnata promote gentle, natural sleep without causing grogginess or dependency.",
    duration: "Chronic / Autonomic",
    risk: "Cognitive Decline & Fatigue",
    commonAge: "18 - 65 Years",
    recovery: "2 - 4 Weeks to Calm",
    heroImage: "/images/diseases/insomnia.png",
    patientsTreated: "10,500+",
    yearsExperience: "18+",
    patientSatisfaction: "96%",
    metaTitle: "Natural Treatment for Insomnia & Sleep | Ojas Sanjivani",
    metaDescription: "Overcome insomnia naturally. Our custom Ayurvedic and Homeopathic sleep therapies calm your mind, regulate melatonin, and restore healthy circadian rhythm.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Constitutional & Autonomic Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in treating stress-induced sleep disorders using customized homeopathic passiflora tonics and circadian counseling.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Difficulty Falling Asleep", description: "Lying awake for hours, unable to quiet the mind or relax the body.", iconName: "Clock" },
      { title: "Frequent Waking", description: "Waking up multiple times during the night and struggling to fall back asleep.", iconName: "Clock" },
      { title: "Daytime Fatigue", description: "Feeling exhausted, sluggish, or sleepy throughout the day.", iconName: "BatteryLow" },
      { title: "Poor Concentration", description: "Difficulty focusing on tasks, memory lapses, or slow reactions.", iconName: "Brain" },
      { title: "Mood Irritability", description: "Increased anxiety, mood swings, or irritability due to lack of deep REM sleep.", iconName: "Frown" }
    ],
    causes: [
      { title: "High Mental Stress", description: "Work pressure, financial anxiety, or personal worries keep the nervous system alert.", iconName: "Brain" },
      { title: "Poor Sleep Habits", description: "Irregular sleep times, screen use in bed, or an uncomfortable sleep environment.", iconName: "Laptop" },
      { title: "Hormonal Imbalances", description: "Disruptions in melatonin, cortisol, or thyroid hormones.", iconName: "Activity" },
      { title: "Caffeine & Stimulants", description: "Consuming tea, coffee, or energy drinks close to bedtime.", iconName: "CupSoda" }
    ],
    treatments: [
      { title: "Nourishing Ashwagandha & Nutmeg", description: "Ayurvedic formulations containing Ashwagandha and Tagar to soothe Vata and calm the nervous system.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Sleep Inducing Homeopathy", description: "Remedies like Passiflora or Coffea to quieten overactive thoughts and promote peaceful rest.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Shirodhara & foot massage", description: "Therapeutic warm oil pouring and padabhyanga to reduce cranial tension and induce deep sleep.", iconName: "Sparkles", type: "Therapy" },
      { title: "Circadian Hygiene & Meditation", description: "A guided meditation routine and screen-free sleep schedule to regulate natural melatonin production.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "Are natural sleep remedies habit-forming?", answer: "No, unlike chemical sleeping pills, our Ayurvedic and homeopathic treatments are non-addictive, cause no morning grogginess, and restore natural sleep patterns." },
      { question: "What is the best Ayurvedic sleep therapy?", answer: "Shirodhara combined with Padabhyanga (medicated foot massage) is the premier therapy to lower Vata dosha and induce restful sleep." }
    ],
    testimonials: [
      { id: "in1", patientName: "Aarti Mehta", location: "Mumbai, Maharashtra", disease: "Chronic Insomnia", rating: 5, duration: "1 Month", reviewText: "I used to wake up at 2 AM and couldn't sleep again. After 1 month of taking Tagar pills and Passiflora drops, I sleep straight for 7 hours and feel active.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["migraine", "vertigo", "cardiac-wellness"]
  },

  // ==========================================
  // SEXUAL PROBLEMS CATEGORY
  // ==========================================
  "sexual-problems": {
    slug: "sexual-problems",
    name: "Sexual Problems",
    category: "Sexual Problems",
    tagline: "Natural Sexual Wellness Treatment with Ayurveda & Homeopathy",
    overview: "Sexual health issues and reproductive concerns can deeply impact confidence, relationship satisfaction, and mental well-being. At Ojas Sanjivani, we provide fully confidential, non-hormonal, and personalized treatment protocols combining specialized Ayurvedic Vajikarana therapies and constitutional Homeopathic remedies to restore natural vitality, stamina, and reproductive health.",
    ayurvedaPerspective: "In Ayurveda, sexual wellness is addressed under 'Vajikarana' (the science of virility and rejuvenation). Sexual problems are linked to imbalances in Apana Vata (the downward flow of energy governing reproductive organs) and depletion of Shukra Dhatu (reproductive tissue/semen). Treatment utilizes highly nourishing Vajikarana herbs like Ashwagandha, Safed Musli, Shatavari, and Kapikachhu to rebuild vitality, regulate mental stress, and strengthen Shukra Dhatu.",
    homeopathyPerspective: "Homeopathy approaches sexual wellness by addressing the physical and psychological components simultaneously. Remedies like Lycopodium (for performance anxiety and physical weakness), Agnus Castus (for low libido and fatigue), and Selenium Met are selected constitutionally to resolve chronic issues and restore vitality without chemical dependency.",
    duration: "4 - 8 Weeks to Restore Vitality",
    risk: "Chronic Anxiety & Relationship Stress",
    commonAge: "18 - 65 Years",
    recovery: "Confidential Natural Recovery",
    heroImage: "/images/diseases/sexual-problems.png",
    patientsTreated: "8,500+",
    yearsExperience: "20+",
    patientSatisfaction: "94%",
    metaTitle: "Confidential Natural Sexual Wellness Care | Ojas Sanjivani",
    metaDescription: "Restore vitality and confidence. We offer fully confidential, personalized treatments for Erectile Dysfunction, Premature Ejaculation, Low Libido, and Infertility.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Rejuvenation & Vajikarana Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes customized Ayurvedic Vajikarana Rasayanas and lifestyle guidance to treat chronic performance and fertility conditions.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Erectile Dysfunction", slug: "erectile-dysfunction", description: "Improve vascular blood flow and performance confidence naturally.", image: "/images/diseases/sexual-problems.png" },
      { name: "Premature Ejaculation", slug: "premature-ejaculation", description: "Regulate nervous response and prolong performance time safely.", image: "/images/diseases/sexual-problems.png" },
      { name: "Low Libido", slug: "low-libido", description: "Boost natural sexual desire, energy levels, and hormonal balance.", image: "/images/diseases/sexual-problems.png" },
      { name: "Performance Anxiety", slug: "performance-anxiety", description: "Overcome psychological fears, performance stress, and mental blocks.", image: "/images/diseases/stress-anxiety.png" },
      { name: "Infertility Support", slug: "infertility-support", description: "Enhance sperm count, sperm motility, and male reproductive vitality.", image: "/images/diseases/sexual-problems.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Are natural sexual wellness treatments safe and free from side effects?", answer: "Yes. Unlike chemical pills, our Ayurvedic Vajikarana herbs and homeopathic remedies are non-hormonal, non-toxic, and free from harmful side effects like headaches or cardiac strain." },
      { question: "Is the consultation kept fully confidential?", answer: "Absolutely. Patient privacy is our highest priority. All medical files, consultation details, and shipping packaging are kept fully confidential and discrete." }
    ],
    testimonials: [
      { id: "sp1", patientName: "Aman Kapoor", location: "Pune, Maharashtra", disease: "Erectile Dysfunction & Stress", rating: 5, duration: "3 Months", reviewText: "I had severe performance issues due to high work stress. Dr. Bhaskar's discrete plan restored my health and stamina. The results are permanent and natural.", videoThumbnail: "/images/product-ashwagandha.jpg" }
    ],
    relatedDiseases: ["hypertension", "diabetes", "stress-anxiety"]
  },

  "erectile-dysfunction": {
    slug: "erectile-dysfunction",
    name: "Erectile Dysfunction",
    category: "Sexual Problems",
    tagline: "Improve Vascular Flow and Performance Confidence Naturally",
    overview: "Erectile Dysfunction (ED) is the persistent difficulty in achieving or maintaining an erection firm enough for satisfactory performance. ED can stem from physical causes (such as poor circulation, diabetes, obesity, or heart disease) as well as psychological factors like stress and anxiety. Our natural protocol focuses on improving pelvic blood flow and relaxing nervous tension.",
    ayurvedaPerspective: "In Ayurveda, ED is known as 'Klaibya'. It is caused by vitiation of Vata dosha affecting the pelvic channels (Apana Vata) and depletion of Shukra Dhatu. Rejuvenating Vajikarana therapy uses powerful herbs like Ashwagandha and Safed Musli to improve local circulation, strengthen pelvic nerves, and calm the mind.",
    homeopathyPerspective: "Homeopathy addresses ED by identifying the constitutional factors. Remedies like Lycopodium (for ED caused by worry or low self-esteem), Selenium Met (for ED accompanied by physical weakness), and Caladium are chosen to restore natural erectile function gently.",
    duration: "4 - 6 Weeks",
    risk: "Severe Performance Anxiety",
    commonAge: "21 - 65 Years",
    recovery: "3 - 5 Weeks",
    heroImage: "/images/diseases/sexual-problems.png",
    patientsTreated: "7,200+",
    yearsExperience: "20+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Erectile Dysfunction Treatment | Ojas Sanjivani",
    metaDescription: "Regain natural stamina and vascular health. Our integrated Ayurveda & Homeopathy treatments address pelvic circulation and performance stress safely.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Rejuvenation & Vajikarana Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar has treated thousands of cases of vascular and psychogenic ED using targeted Ayurvedic therapies.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Difficulty Achieving Erection", description: "Struggling to achieve an erection at the start of physical intimacy.", iconName: "AlertTriangle" },
      { title: "Weak Erection", description: "Inability to maintain a firm erection during intercourse.", iconName: "Activity" },
      { title: "Low Confidence", description: "Mental hesitation, self-doubt, and fear of performance failure.", iconName: "Brain" },
      { title: "Reduced Performance", description: "Lack of physical stamina, leading to shorter performance cycles.", iconName: "Activity" }
    ],
    causes: [
      { title: "Diabetes Mellitus", description: "High sugar levels damage vascular walls and pelvic nerves.", iconName: "Activity" },
      { title: "Chronic Stress", description: "Anxiety releases cortisol which constricts blood vessels and lowers drive.", iconName: "Brain" },
      { title: "Obesity & Sedentary Habits", description: "Poor circulation and low cardiovascular fitness restrict pelvic blood flow.", iconName: "Scale" },
      { title: "Hormonal Imbalance", description: "Low testosterone levels due to aging or lifestyle disorders.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Vajikarana Herbs", description: "Custom herbs like Ashwagandha and Safed Musli to strengthen pelvic tissue and blood flow.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Constitutional Remedies", description: "Homeopathic Lycopodium or Selenium to restore vitality and address performance fear.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Vascular Pelvic Yoga", description: "Asanas like Mula Bandha and Ashwini Mudra to strengthen the pelvic floor muscles.", iconName: "Activity", type: "Yoga" },
      { title: "Pelvic Nutrition Plan", description: "Diet rich in L-arginine, zinc, seeds, and cooling herbs to support circulation.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "Is ED reversible without chemical pills?", answer: "Yes, by improving vascular circulation, reducing pelvic nerve inflammation, and managing anxiety, natural erectile function can be restored permanently." },
      { question: "How long does the treatment take?", answer: "Most patients experience significant improvements in stamina and erection quality within 4 to 8 weeks of starting the protocol." }
    ],
    testimonials: [
      { id: "ed1", patientName: "Rahul Sen", location: "Mumbai, Maharashtra", disease: "Vascular ED", rating: 5, duration: "2 Months", reviewText: "I was embarrassed by my performance. Ojas Sanjivani's non-chemical treatment restored my confidence and physical stamina. Truly life-changing.", videoThumbnail: "/images/product-ashwagandha.jpg" }
    ],
    relatedDiseases: ["premature-ejaculation", "low-libido", "performance-anxiety"]
  },

  "premature-ejaculation": {
    slug: "premature-ejaculation",
    name: "Premature Ejaculation",
    category: "Sexual Problems",
    tagline: "Regulate Nervous Response & Prolong Performance Time Safely",
    overview: "Premature Ejaculation (PE) is characterized by ejaculating sooner than desired during physical intimacy, often causing stress for both partners. It is highly associated with hypersensitive pelvic nerves, high anxiety, hormonal imbalances, and stressful lifestyles. Our integrated treatment calm hyper-excitability and strengthen ejaculatory control.",
    ayurvedaPerspective: "Ayurveda calls PE 'Shukragata Vata'. It is triggered by highly active Vata dosha in the reproductive channels (Apana Vata), which hastens ejaculation. Treatment focuses on grounding Vata using sweet and cooling herbs (Shatavari, Ashwagandha) and stabilizing the mind.",
    homeopathyPerspective: "Homeopathy offers excellent remedies like Agnus Castus, Gelsemium, and Graphites, which work on the autonomic nervous system to desensitize hyper-responsive nerve pathways and relieve anxiety.",
    duration: "4 - 8 Weeks",
    risk: "High Relationship Stress",
    commonAge: "18 - 50 Years",
    recovery: "3 - 6 Weeks",
    heroImage: "/images/diseases/sexual-problems.png",
    patientsTreated: "6,800+",
    yearsExperience: "18+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Premature Ejaculation Treatment | Ojas Sanjivani",
    metaDescription: "Prolong performance and reduce performance anxiety naturally. Our Ayurveda & Homeopathy therapies calm overactive nerves and improve control.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Rejuvenation & Vajikarana Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar specializes in Vata-grounding protocols to resolve Shukragata Vata and premature ejaculation.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Early Ejaculation", description: "Ejaculating within one minute of penetration or before desired.", iconName: "AlertTriangle" },
      { title: "Anxiety & Stress", description: "Extreme worry regarding performance timing, worsening the issue.", iconName: "Brain" },
      { title: "Reduced Satisfaction", description: "Feelings of guilt, frustration, and lack of fulfillment in intimacy.", iconName: "Frown" }
    ],
    causes: [
      { title: "Psychological Stress", description: "Anxiety, guilt, or pressure to perform triggers early autonomic discharge.", iconName: "Brain" },
      { title: "Hormonal Imbalance", description: "Disrupted thyroid or prolactin hormone levels affecting reflexes.", iconName: "Activity" },
      { title: "Hypersensitive Nerves", description: "Hyper-excitability of pelvic spinal cord reflexes.", iconName: "Activity" },
      { title: "Poor Lifestyle", description: "Lack of physical activity, smoking, and sleep deprivation.", iconName: "Scale" }
    ],
    treatments: [
      { title: "Vata Grounding Herbs", description: "Formulations containing Tagar, Shatavari, and Ashwagandha to calm hyper-responsive nerves.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Nerve Desensitizing Homeopathy", description: "Remedies like Agnus Castus to reduce nervous tension and increase physical endurance.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Pelvic Muscle Exercises", description: "Kegel exercises and breath control (Pranayama) to delay ejaculation reflexes.", iconName: "Activity", type: "Yoga" },
      { title: "Anxiety Reducer Routine", description: "Evening meditation and avoiding stimulants like caffeine before bed.", iconName: "Brain", type: "Lifestyle" }
    ],
    faqs: [
      { question: "Can premature ejaculation be cured permanently?", answer: "Yes, by training the pelvic muscles, calming the sympathetic nervous system, and nourishing Vata dosha, ejaculatory control can be restored permanently." },
      { question: "Are these treatments habit-forming?", answer: "Not at all. Our treatments are purely herbal and homeopathic, designed to heal and strengthen the body naturally without dependency." }
    ],
    testimonials: [
      { id: "pe1", patientName: "Sumit Dave", location: "Pune, Maharashtra", disease: "Psychogenic PE", rating: 5, duration: "2 Months", reviewText: "My performance anxiety was ruining my relationship. Dr. Bhaskar's herbs and breathing exercises helped me gain perfect control. Highly recommended.", videoThumbnail: "/images/product-ashwagandha.jpg" }
    ],
    relatedDiseases: ["erectile-dysfunction", "performance-anxiety", "low-libido"]
  },

  "low-libido": {
    slug: "low-libido",
    name: "Low Libido",
    category: "Sexual Problems",
    tagline: "Boost Natural Sexual Desire & Hormonal Balance",
    overview: "Low Libido refers to a persistent decrease in sexual desire, drive, or interest in intimacy. It can be triggered by fatigue, chronic stress, depression, metabolic disorders, or hormonal imbalances like low testosterone. Our natural treatment focuses on nourishing the endocrine system and relieving mental exhaustion.",
    ayurvedaPerspective: "Ayurveda links low libido to a depleted Shukra Dhatu and low 'Ojas' (the vital essence of life). Excess stress (Raja Guna) depletes energy reserves. Vajikarana Rasayana therapies using nourishing herbs like Shatavari, Gokshura, and Ashwagandha boost libido, balance hormones, and increase life energy.",
    homeopathyPerspective: "Homeopathy treats low libido constitutionally. Remedies like Agnus Castus (for complete lack of sexual desire with coldness), Onosmodium, and Phosphoric Acid address mental burnout and fatigue to restore natural drive.",
    duration: "4 - 8 Weeks",
    risk: "Low Vitality & Chronic Fatigue",
    commonAge: "25 - 60 Years",
    recovery: "3 - 6 Weeks",
    heroImage: "/images/diseases/sexual-problems.png",
    patientsTreated: "5,900+",
    yearsExperience: "20+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Treatment for Low Libido | Ojas Sanjivani",
    metaDescription: "Restore natural vitality and drive. Our Ayurvedic Vajikarana herbs and constitutional Homeopathy balance hormones and combat fatigue safely.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Endocrine & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes specific homeopathic energy restorers and lifestyle counseling to reverse stress-induced low libido.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Reduced Sexual Desire", description: "Persistent lack of interest or motivation for physical intimacy.", iconName: "AlertTriangle" },
      { title: "Chronic Fatigue", description: "Feeling physically drained and lacking general vitality.", iconName: "BatteryLow" },
      { title: "Hormonal Imbalance", description: "Underlying low testosterone, high prolactin, or thyroid sluggishness.", iconName: "Activity" }
    ],
    causes: [
      { title: "Mental Exhaustion", description: "Overwork, depression, and high stress levels deplete vital hormones.", iconName: "Brain" },
      { title: "Hormonal Sluggishness", description: "Declining endocrine function due to aging or poor dietary habits.", iconName: "Activity" },
      { title: "Chronic Illnesses", description: "Diabetes, high cholesterol, and obesity deplete the body's stamina.", iconName: "Scale" },
      { title: "Lack of Sleep", description: "Inadequate sleep prevents testosterone synthesis and increases fatigue.", iconName: "Clock" }
    ],
    treatments: [
      { title: "Ojas Nourishing Herbs", description: "Ayurvedic formulations containing Gokshura, Safed Musli, and Shatavari to balance hormones.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Endocrine Homeopathy", description: "Remedies like Agnus Castus or Onosmodium to restore physical energy and libido.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Energy Boosting Diet", description: "Nutrition plan rich in dates, almonds, ghee, pumpkin seeds, and clean proteins.", iconName: "Utensils", type: "Diet" },
      { title: "Daily Rejuvenating Yoga", description: "Surya Namaskar and deep pranayama to improve systemic vitality and circulation.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "How does stress affect libido?", answer: "Stress releases high levels of cortisol, which directly inhibits testosterone production and constricts blood vessels, leading to a drop in sexual interest." },
      { question: "Can natural herbs boost testosterone?", answer: "Yes, herbs like Ashwagandha and Gokshura support the luteinizing hormone and adrenal glands, promoting natural testosterone production safely." }
    ],
    testimonials: [
      { id: "ll1", patientName: "Ketan Mehta", location: "Mumbai, Maharashtra", disease: "Stress Induced Low Libido", rating: 5, duration: "1 Month", reviewText: "I felt constantly tired and had zero drive. Within a month of Ojas Sanjivani's treatment, my energy is back and my marital life is restored.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["erectile-dysfunction", "performance-anxiety", "insomnia"]
  },

  "performance-anxiety": {
    slug: "performance-anxiety",
    name: "Performance Anxiety",
    category: "Sexual Problems",
    tagline: "Overcome Psychological Fears & Performance Stress",
    overview: "Performance Anxiety is a form of sexual dysfunction where fear of failing to perform satisfactorily during intimacy prevents a person from fully engaging or achieving physiological response. It triggers the sympathetic 'fight-or-flight' nervous response, resulting in rapid loss of erection or premature ejaculation. Our treatment focuses on calming mental stress and building autonomic confidence.",
    ayurvedaPerspective: "Ayurveda attributes performance anxiety to an overactive mind (vitiated Raja Guna and Vata dosha). This restricts the steady flow of Prana Vata, leading to cognitive blocks and nervous spasms. Treatment focuses on mind-stabilizing herbs (Medhya Rasayanas like Shankhapushpi and Brahmi) and grounding yoga.",
    homeopathyPerspective: "Homeopathy is highly effective for anticipatory and performance anxiety. Remedies like Argentum Nitricum (for nervous apprehension and hurry), Lycopodium (for fear of failure despite high capability), and Gelsemium soothe the nervous system and prevent anxiety-induced physical failures.",
    duration: "2 - 4 Weeks",
    risk: "Chronic Intimacy Avoidance",
    commonAge: "18 - 45 Years",
    recovery: "2 - 3 Weeks",
    heroImage: "/images/diseases/stress-anxiety.png",
    patientsTreated: "5,100+",
    yearsExperience: "18+",
    patientSatisfaction: "96%",
    metaTitle: "Natural Performance Anxiety Treatment | Ojas Sanjivani",
    metaDescription: "Overcome intimacy fear and anticipatory stress naturally. Discover our calming Ayurvedic Medhya herbs and homeopathic Argentum Nitricum.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Constitonomic & Anxiety Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy combines specific homeopathic nerve stabilizers with autonomic breathing techniques to resolve psychogenic performance fears.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Fear of Failure", description: "Persistent worry about not satisfying one's partner before intimacy.", iconName: "Brain" },
      { title: "Sympathetic Arousal", description: "Rapid heart rate, sweating, and cold extremities due to adrenaline spikes.", iconName: "AlertTriangle" },
      { title: "Loss of Focus", description: "Intrusive thoughts and inability to remain present during intimacy.", iconName: "Brain" }
    ],
    causes: [
      { title: "Anticipatory Anxiety", description: "Worrying about past negative experiences, creating a recurring mental loop.", iconName: "Brain" },
      { title: "Stressful Lifestyle", description: "Chronic mental fatigue makes it harder for the brain to regulate arousal.", iconName: "Activity" },
      { title: "Relationship Strain", description: "Lack of open communication or partner pressure increases fear.", iconName: "Frown" }
    ],
    treatments: [
      { title: "Medhya Mind-Calming Herbs", description: "Brahmi, Shankhapushpi, and Ashwagandha to calm the nervous system and lower cortisol.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Anticipatory Anxiety Homeopathy", description: "Remedies like Argentum Nitricum or Lycopodium to soothe anticipatory nerves.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Vagus Nerve Activation Yoga", description: "Shavasana, Bhramari Pranayama, and meditation to activate parasympathetic calm.", iconName: "Activity", type: "Yoga" },
      { title: "Mindfulness Coaching", description: "Focusing on connection rather than goals to dismantle performance pressure.", iconName: "Brain", type: "Lifestyle" }
    ],
    faqs: [
      { question: "Can performance anxiety cause physical erectile dysfunction?", answer: "Yes, when you feel anxious, your body releases adrenaline, which constricts the arteries supplying blood to the pelvic area, preventing an erection." },
      { question: "Is counseling part of the treatment?", answer: "Yes, we integrate lifestyle counseling, breathing exercises, and natural remedies to help dismantle the psychological triggers." }
    ],
    testimonials: [
      { id: "pa1", patientName: "Vikrant Patil", location: "Pune, Maharashtra", disease: "Performance Anxiety", rating: 5, duration: "3 Weeks", reviewText: "I was trapped in a cycle of fear. Dr. Roy's homeopathic drops and breathing advice calmed my mind. Intimacy is natural and stress-free now.", videoThumbnail: "/images/product-ayush64.jpg" }
    ],
    relatedDiseases: ["erectile-dysfunction", "premature-ejaculation", "insomnia"]
  },

  "infertility-support": {
    slug: "infertility-support",
    name: "Infertility Support",
    category: "Sexual Problems",
    tagline: "Enhance Sperm Count, Sperm Motility & Reproductive Vitality",
    overview: "Male infertility refers to the inability to conceive due to issues such as low sperm count (oligospermia), poor sperm motility (asthenozoospermia), abnormal sperm morphology, or general pelvic blockages. Often caused by poor nutrition, environmental toxins, heat exposure, stress, or varicocele, natural protocols focus on purifying blood, nourishing reproductive tissues, and improving cellular health.",
    ayurvedaPerspective: "In Ayurveda, male fertility relies on 'Shukra Dhatu'. Impure or depleted Shukra leads to poor fertility. Treatment uses specialized 'Vajikarana' and 'Rasayana' herbs (Kapikachhu, Safed Musli, Ashwagandha) to nourish the germinal epithelium, increase sperm count and motility, and clear blockages in the channels.",
    homeopathyPerspective: "Homeopathy offers constitutional remedies like Selenium, X-Ray, and Phosphoric Acid, which act at a cellular level to optimize spermatogenesis, improve sperm quality, and manage varicocele-related stagnation without hormone injections.",
    duration: "8 - 12 Weeks (Spermatogenesis Cycle)",
    risk: "Chronic Conception Difficulty",
    commonAge: "22 - 48 Years",
    recovery: "3 Months (Natural Cycle)",
    heroImage: "/images/diseases/sexual-problems.png",
    patientsTreated: "4,200+",
    yearsExperience: "20+",
    patientSatisfaction: "92%",
    metaTitle: "Natural Male Infertility Support | Ojas Sanjivani",
    metaDescription: "Improve sperm count and motility naturally. Our Ayurvedic Vajikarana and constitutional Homeopathy protocols support reproductive cellular health.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Rejuvenation & Vajikarana Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes specialized Ayurvedic Rasayanas to improve sperm morphology, count, and overall reproductive tissue vitality.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Low Sperm Count", description: "Sperm count below 15 million/ml (oligospermia) diagnosed in semen analysis.", iconName: "AlertTriangle" },
      { title: "Poor Sperm Motility", description: "Slow moving sperm, making it difficult to reach and fertilize the egg.", iconName: "Activity" },
      { title: "Poor Sperm Morphology", description: "Abnormal sperm shapes, reducing fertilizing capability.", iconName: "Activity" },
      { title: "Reduced Semen Volume", description: "Low ejaculation volume due to dehydration or seminal vesicle sluggishness.", iconName: "Activity" }
    ],
    causes: [
      { title: "Environmental Toxins", description: "Exposure to pesticides, plastics (phthalates), heavy metals, or radiation.", iconName: "Flame" },
      { title: "Chronic Pelvic Heat", description: "Prolonged sitting, tight clothing, or hot baths raise scrotal temperature.", iconName: "AlertTriangle" },
      { title: "Nutritional Deficiencies", description: "Lack of zinc, selenium, vitamin C, and antioxidants necessary for sperm formation.", iconName: "Utensils" },
      { title: "Varicocele Stagnation", description: "Swelling of pelvic veins, reducing blood drainage and heating testicles.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Spermatogenic Vajikarana Herbs", description: "Kapikachhu, Ashwagandha, and Safed Musli to promote healthy sperm production.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Cellular Rejuvenator Homeopathy", description: "Selenium and Acid Phos to improve sperm count, morphology, and motility at a cellular level.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Antioxidant Rich Diet", description: "Menu including spinach, walnuts (rich in Omega-3), pumpkin seeds (high in zinc), citrus fruits, and berries.", iconName: "Utensils", type: "Diet" },
      { title: "Pelvic Cooling Lifestyle", description: "Switching to loose clothing, avoiding hot baths, and incorporating cold water sprays.", iconName: "Sparkles", type: "Lifestyle" }
    ],
    faqs: [
      { question: "How long does it take to improve sperm count naturally?", answer: "Since a new sperm cycle takes approximately 72 to 90 days to mature, a minimum of 3 months of consistent treatment is required to see improvements in a semen analysis." },
      { question: "Can varicocele-induced low sperm count be managed naturally?", answer: "Yes, in early-to-moderate stages (Grade 1 & 2), homeopathic and Ayurvedic remedies can improve vein circulation, reduce heat, and improve sperm quality without surgery." }
    ],
    testimonials: [
      { id: "is1", patientName: "Manish Joshi", location: "Mumbai, Maharashtra", disease: "Oligospermia", rating: 5, duration: "3 Months", reviewText: "Our family doctor said I had very low motility. After 3 months of Dr. Bhaskar's plan, my count increased from 10 million to 35 million, and motility is perfect.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["low-libido", "erectile-dysfunction", "diabetes"]
  },

  // ==========================================
  // AUTOIMMUNE DISORDERS CATEGORY
  // ==========================================
  "autoimmune-disorders": {
    slug: "autoimmune-disorders",
    name: "Autoimmune Disorders",
    category: "Autoimmune Disorders",
    tagline: "Natural Autoimmune Disease Treatment with Ayurveda & Homeopathy",
    overview: "Autoimmune disorders occur when the body's immune system mistakenly attacks healthy cells, leading to chronic inflammation, joint pain, tissue damage, and fatigue. Conventional treatments often rely on lifelong immunosuppressants that carry severe side effects. Our integrated clinical protocols aim to modulate the immune response, detoxify the tissues (Ama), reduce chronic inflammation, and restore natural balance safely.",
    ayurvedaPerspective: "Ayurveda explains autoimmune diseases as a state of 'Ama' (undigested metabolic toxins) accumulating in the deep tissues (Dhatus) and blocking the channels (Srotas). When Ama mixes with the tissues, the body's intelligence (Ojas) becomes confused, triggering a self-attack. Treatment centers on detoxifying the body (Panchakarma), strengthening the digestive fire (Agni), and utilizing immunomodulatory herbs (Rasayanas like Guduchi, Turmeric, and Ashwagandha) to retrain the immune system.",
    homeopathyPerspective: "Homeopathy views autoimmune conditions as deep-seated constitutional imbalances. By analyzing the individual's genetic predispositions, emotional triggers, and symptom details, remedies like Thuja, Silicea, and Sulphur are selected to correct the immune dysfunction from its roots, providing long-term relief.",
    duration: "Chronic / Long-term Modulation",
    risk: "Progressive Joint & Tissue Damage",
    commonAge: "20 - 60 Years",
    recovery: "Progressive Remission & Control",
    heroImage: "/images/diseases/autoimmune-disorders.png",
    patientsTreated: "9,200+",
    yearsExperience: "20+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Autoimmune Disease Treatment | Ojas Sanjivani",
    metaDescription: "Regain immune balance naturally. Our custom Ayurveda & Homeopathy treatments address Rheumatoid Arthritis, Psoriasis, Lupus, Celiac, and MS without side effects.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Immunomodulation Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar has 18 years of experience treating complex autoimmune conditions through Ama detoxification and customized Rasayana therapies.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Rheumatoid Arthritis", slug: "rheumatoid-arthritis", description: "Reduce joint inflammation, swelling, and morning stiffness naturally.", image: "/images/diseases/joint-pain.png" },
      { name: "Psoriasis", slug: "psoriasis", description: "Detoxify the blood, calm skin scaling, itching, and red patches.", image: "/images/diseases/hair-skin.png" },
      { name: "Lupus (SLE)", slug: "lupus", description: "Manage systemic immune flare-ups, chronic fatigue, and joint pain.", image: "/images/diseases/joint-pain.png" },
      { name: "Celiac Disease", slug: "celiac-disease", description: "Heal the intestinal lining and manage gluten sensitivity naturally.", image: "/images/diseases/digestion.png" },
      { name: "Multiple Sclerosis", slug: "multiple-sclerosis", description: "Support nervous system myelin sheaths and improve mobility.", image: "/images/diseases/neurology.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "How do natural treatments manage autoimmune diseases without suppressing the immune system?", answer: "Instead of suppressing the entire immune system (which leaves the body open to infections), our Ayurvedic immunomodulators like Guduchi and homeopathic remedies regulate and balance the immune response, helping it distinguish between self and non-self cells." },
      { question: "Is dietary modification important in autoimmune conditions?", answer: "Absolutely. Since 70% of the immune system resides in the gut, eliminating inflammatory foods, dairy, sugar, and gluten is key to reducing systemic flares." }
    ],
    testimonials: [
      { id: "ad1", patientName: "Rita Sen", location: "Kolkata, West Bengal", disease: "Rheumatoid Arthritis Remission", rating: 5, duration: "6 Months", reviewText: "I had severe swelling and pain in all joints. Lifelong painkillers were damaging my stomach. Ojas Sanjivani's deep detox and herbs put my RA into remission. I walk pain-free.", videoThumbnail: "/images/product-ayush64.jpg" }
    ],
    relatedDiseases: ["joint-pain", "arthritis", "diabetes"]
  },

  "rheumatoid-arthritis": {
    slug: "rheumatoid-arthritis",
    name: "Rheumatoid Arthritis",
    category: "Autoimmune Disorders",
    tagline: "Reduce Joint Inflammation, Swelling & Morning Stiffness Naturally",
    overview: "Rheumatoid Arthritis (RA) is a chronic inflammatory autoimmune disorder that affects the lining of the joints, causing painful swelling, bone erosion, and joint deformity. RA commonly starts in small joints (fingers, toes) and progresses to wrists, knees, and ankles. Our treatment focuses on removing systemic toxins (Ama) and reducing joint inflammation.",
    ayurvedaPerspective: "Ayurveda describes RA as 'Amavata'. It occurs when weak digestion (Mandagni) produces Ama (undigested toxins) that travel to the joints via Vata dosha, causing swelling, pain, and stiffness. Treatment centers on strict anti-inflammatory diets, hot fomentation (Valuka Sweda), and Vata-Ama clearing herbs like Guggulu, Rasna, and Ginger.",
    homeopathyPerspective: "Homeopathy treats RA constitutionally to regulate the hyperactive immune response and relieve chronic pain. Remedies like Rhus Tox (for joint stiffness that improves with motion), Bryonia (for pain that worsens with motion), and Actea Spicata help relieve joint congestion without gastrointestinal side effects.",
    duration: "8 - 12 Weeks to Reduce Pain",
    risk: "Progressive Joint Deformity",
    commonAge: "25 - 60 Years",
    recovery: "3 - 6 Months",
    heroImage: "/images/diseases/joint-pain.png",
    patientsTreated: "6,500+",
    yearsExperience: "20+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Rheumatoid Arthritis (Amavata) Treatment | Ojas Sanjivani",
    metaDescription: "Relieve RA pain, swelling, and morning stiffness naturally. Our integrated Ayurvedic detoxification and Homeopathy protocols reduce joint inflammation.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Immunomodulation Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar specializes in Amavata treatment using traditional Panchakarma therapies and custom anti-inflammatory herbs.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Joint Pain & Swelling", description: "Painful, swollen, and tender joints, often occurring symmetrically on both sides of the body.", iconName: "AlertTriangle" },
      { title: "Morning Stiffness", description: "Stiffness in joints that lasts for more than an hour after waking up.", iconName: "Activity" },
      { title: "Joint Warmth & Redness", description: "Inflammation makes the skin over affected joints feel hot and look red.", iconName: "Flame" },
      { title: "Chronic Fatigue", description: "Generalized exhaustion and low energy due to persistent systemic inflammation.", iconName: "BatteryLow" }
    ],
    causes: [
      { title: "Immune System Confusion", description: "Antibodies target the synovium (lining of membranes surrounding joints).", iconName: "GitMerge" },
      { title: "Accumulated Toxins (Ama)", description: "Poor gut health leads to metabolic toxins entering the joint tissues.", iconName: "Activity" },
      { title: "Genetic Predisposition", description: "Specific HLA-DR4 gene markers increase vulnerability to RA.", iconName: "GitMerge" },
      { title: "Environmental Triggers", description: "Chronic infections, smoking, and high stress levels ignite the immune flare.", iconName: "Flame" }
    ],
    treatments: [
      { title: "Ama Pachana & Guggulu Herbs", description: "Ayurvedic herbs like Simhanada Guggulu and Shunthi to digest toxins and clear joint pathways.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Constitutional Joint Homeopathy", description: "Rhus Tox and Bryonia to alleviate stiffness, swelling, and chronic pain safely.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Valuka Sweda (Sand Fomentation)", description: "Dry heat fomentation to reduce fluid accumulation and stiffness in inflamed joints.", iconName: "Sparkles", type: "Therapy" },
      { title: "Anti-Amavata Diet", description: "Strict warm, light diet excluding curd, heavy lentils, cold foods, and sugar.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "How does Amavata differ from Osteoarthritis?", answer: "Amavata (RA) is an autoimmune inflammatory condition affecting joint linings symmetrically and is worse at rest, while Osteoarthritis is a wear-and-tear condition of joint cartilage worse with exertion." },
      { question: "Can natural treatment stop joint deformities?", answer: "Yes, by starting treatment early to digest Ama and regulate the immune system, chronic joint erosion and subsequent deformities can be prevented." }
    ],
    testimonials: [
      { id: "ra1", patientName: "Sushma Gupta", location: "Delhi, NCR", disease: "Rheumatoid Arthritis", rating: 5, duration: "3 Months", reviewText: "I couldn't close my fingers in the morning. Within 3 months of Dr. Bhaskar's Ama-clearing herbs and Rhus Tox, my joint stiffness has resolved completely.", videoThumbnail: "/images/product-ayush64.jpg" }
    ],
    relatedDiseases: ["joint-pain", "arthritis", "lupus"]
  },

  "psoriasis": {
    slug: "psoriasis",
    name: "Psoriasis",
    category: "Autoimmune Disorders",
    tagline: "Detoxify Blood and Calm Skin Scaling Naturally",
    overview: "Psoriasis is a chronic, non-contagious autoimmune skin disorder characterized by rapid skin cell multiplication. This causes cells to build up rapidly on the skin surface, forming thick, red, itchy patches covered with silvery scales, commonly on elbows, knees, scalp, and lower back. Our treatment focuses on purifying the blood and modulating skin cellular growth.",
    ayurvedaPerspective: "Ayurveda classifies Psoriasis under 'Kustha Roga' (specifically 'Kitibha' or 'Eka Kustha'). It is caused by an imbalance in Vata and Kapha doshas, which toxins (Ama) carry into the blood (Rakta), lymph (Lasika), and skin tissues (Twak). Treatment focuses on blood purification (Raktamokshana or internal detox), liver support, and cooling herbs like Neem, Khadir, and Manjistha.",
    homeopathyPerspective: "Homeopathy approaches psoriasis constitutionally to address the underlying immune dysfunction and emotional triggers (like stress or trauma). Remedies like Arsenicum Album (for dry, scaling patches), Graphites, and Sulphur soothe itching and promote natural skin healing without external steroid creams.",
    duration: "6 - 12 Weeks",
    risk: "Psoriatic Arthritis & Skin Infections",
    commonAge: "15 - 45 Years",
    recovery: "4 - 8 Weeks",
    heroImage: "/images/diseases/hair-skin.png",
    patientsTreated: "5,800+",
    yearsExperience: "18+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Psoriasis Treatment & Care | Ojas Sanjivani",
    metaDescription: "Soothe red patches, itching, and silvery scaling naturally. Our integrated Ayurvedic blood detoxification and Homeopathy protocols heal skin from within.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Autoimmune Skin & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in treating chronic psoriasis and eczema using constitutional homeopathic remedies that target root immune dysfunction.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Red Patches", description: "Raised, inflamed skin lesions covered with thick, silvery scales.", iconName: "AlertTriangle" },
      { title: "Itching & Burning", description: "Severe itching, soreness, or burning sensations around the affected patches.", iconName: "Flame" },
      { title: "Dry, Cracked Skin", description: "Skin that is extremely dry, prone to cracking, and minor bleeding.", iconName: "Activity" },
      { title: "Nail Changes", description: "Pitted, thickened, or discolored fingernails or toenails.", iconName: "Activity" }
    ],
    causes: [
      { title: "T-Cell Overactivity", description: "Immune cells mistakenly attack healthy skin cells, accelerating the cell growth cycle.", iconName: "GitMerge" },
      { title: "Blood Impurity (Rakta Dusti)", description: "Accumulation of toxins in the blood and liver due to poor diet or metabolism.", iconName: "Activity" },
      { title: "High Emotional Stress", description: "Stress is a major trigger that activates the nervous-immune pathway, causing flare-ups.", iconName: "Brain" },
      { title: "Skin Injuries", description: "Cuts, vaccinations, or severe sunburns (Koebner phenomenon) triggering localized psoriasis.", iconName: "AlertTriangle" }
    ],
    treatments: [
      { title: "Rakta Prasadana Herbs", description: "Neem, Khadir, and Manjistha to purify the blood, support the liver, and soothe skin cells.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Constitutional Skin Homeopathy", description: "Remedies like Arsenicum Album or Graphites to address skin scaling and halt overactive cell growth.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Virechana (Therapeutic Purgation)", description: "Ayurvedic detoxification therapy to eliminate excess Pitta and toxins from the gut.", iconName: "Sparkles", type: "Therapy" },
      { title: "Skin Hydration & Cooling Diet", description: "Hydrating diet excluding sour, salty, spicy, and fermented foods while promoting coconut and aloe.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "Can Psoriasis be cured permanently?", answer: "While psoriasis is a chronic autoimmune condition, integrated natural treatments can achieve complete remission, clearing skin patches and preventing future flares without steroid dependency." },
      { question: "Why should steroid creams be avoided?", answer: "Steroid creams provide temporary suppression but often cause thinning of the skin and result in severe rebound flare-ups once stopped." }
    ],
    testimonials: [
      { id: "ps1", patientName: "Vikram Shah", location: "Ahmedabad, Gujarat", disease: "Plaque Psoriasis", rating: 5, duration: "3 Months", reviewText: "My elbows and scalp were covered in scaling patches. Dr. Roy's treatment cleared my skin completely within 3 months, and there has been no relapse.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["hair-skin", "lupus", "celiac-disease"]
  },

  "lupus": {
    slug: "lupus",
    name: "Lupus (SLE)",
    category: "Autoimmune Disorders",
    tagline: "Manage Systemic Immune Flares and Fatigue Naturally",
    overview: "Systemic Lupus Erythematosus (SLE) is a complex autoimmune disease where the immune system attacks various tissues, including joints, skin, kidneys, blood cells, brain, heart, and lungs. It is characterized by periods of flares and remission, causing chronic fatigue, joint pains, and a characteristic butterfly-shaped facial rash. Our treatment focuses on immunomodulation and organ protection.",
    ayurvedaPerspective: "Ayurveda views Lupus as a 'Dhatugata Vata' and 'Ojavisramsa' (displacement of Ojas). Toxins disturb the cellular intelligence, causing the body's defensive system to destroy its own tissues (Dhatus). Treatment focuses on gentle, non-irritating 'Rasayana' herbs (Guduchi, Amalaki), balancing the three doshas, and supporting digestion.",
    homeopathyPerspective: "Homeopathy approaches Lupus constitutionally. By analyzing individual symptoms, stress triggers, and organ involvement, remedies like Apis Mellifica, Arsenicum Album, and Phosphorus are selected to restore immune coordination and calm systemic inflammation.",
    duration: "Chronic / Long-term Support",
    risk: "Kidney & Vascular Damage",
    commonAge: "15 - 45 Years (primarily women)",
    recovery: "Ongoing Management & Flares Reduction",
    heroImage: "/images/diseases/autoimmune-disorders.png",
    patientsTreated: "3,500+",
    yearsExperience: "20+",
    patientSatisfaction: "91%",
    metaTitle: "Natural Lupus (SLE) Treatment & Care | Ojas Sanjivani",
    metaDescription: "Manage Lupus flares naturally. Our integrated Ayurvedic Ojas-stabilizing herbs and constitutional Homeopathy reduce joint pain, fatigue, and rashes.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Immunomodulation Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes customized, non-heating immunomodulators and soothing panchakarma therapies to support SLE patients.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Butterfly Rash", description: "A red, butterfly-shaped rash spreading across the cheeks and bridge of the nose.", iconName: "AlertTriangle" },
      { title: "Severe Fatigue", description: "Deep, debilitating exhaustion that does not improve with sleep.", iconName: "BatteryLow" },
      { title: "Joint Pain & Stiffness", description: "Painful, swollen, and stiff joints, especially in fingers, wrists, and knees.", iconName: "Activity" },
      { title: "Photosensitivity", description: "Skin rashes or joint flares triggered by sun exposure.", iconName: "Flame" }
    ],
    causes: [
      { title: "Immune Autoantibodies", description: "Production of ANA (Anti-Nuclear Antibodies) which attack cell nucleus materials.", iconName: "GitMerge" },
      { title: "Ojas Dysfunction", description: "Depletion of body's vital essence leading to disordered cellular defense.", iconName: "Activity" },
      { title: "Hormonal Triggers", description: "Estrogen dominance, explaining high incidence in women of childbearing age.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Soothing Ojas Rasayanas", description: "Formulations with Guduchi, Amalaki, and Ashwagandha to balance immune intelligence.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Constitutional SLE Remedies", description: "Homeopathic drops to regulate inflammatory responses and reduce fatigue.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Anti-Inflammatory Nutrition", description: "Diet rich in Omega-3, turmeric, celery juice, and excluding nightshades and processed meats.", iconName: "Utensils", type: "Diet" },
      { title: "Restorative Yoga & Meditation", description: "Gentle stretches and deep breathing to manage chronic pain and mental stress.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "Can natural treatment manage Lupus flares?", answer: "Yes, our natural immunomodulators stabilize the immune system, reducing both the frequency and severity of Lupus flare-ups." },
      { question: "Is Lupus hereditary?", answer: "Genetics increase susceptibility, but environmental triggers like infections or severe stress are required to activate the disease." }
    ],
    testimonials: [
      { id: "lp1", patientName: "Nisha Rao", location: "Bangalore, Karnataka", disease: "Systemic Lupus (SLE)", rating: 5, duration: "4 Months", reviewText: "My kidney markers were borderline and my joints were swollen. Dr. Bhaskar's cooling herbs stabilized my reports, and I feel active again.", videoThumbnail: "/images/product-ayush64.jpg" }
    ],
    relatedDiseases: ["rheumatoid-arthritis", "psoriasis", "multiple-sclerosis"]
  },

  "celiac-disease": {
    slug: "celiac-disease",
    name: "Celiac Disease",
    category: "Autoimmune Disorders",
    tagline: "Heal Intestinal Lining and Manage Gluten Sensitivity Naturally",
    overview: "Celiac Disease is an autoimmune reaction to eating gluten (a protein found in wheat, barley, and rye). In celiac patients, eating gluten damages the villi (tiny hair-like projections) of the small intestine, preventing nutrient absorption (malabsorption) and leading to diarrhea, bloating, weight loss, and nutritional deficiencies. Our treatment focuses on gut healing and digestive restoration.",
    ayurvedaPerspective: "Ayurveda views Celiac Disease as a severe imbalance of 'Grahani' (duodenum/small intestine) caused by extremely weak digestive fire (Mandagni) and accumulation of Ama. Gluten acts as a heavy, sticky toxin that the inflamed gut cannot digest. Treatment focuses on strengthening the Agni, healing the intestinal mucosal lining with herbs like Kutaja, Bilva, and Yashtimadhu, and detoxifying the gut.",
    homeopathyPerspective: "Homeopathy treats Celiac Disease by reducing gut hyper-sensitivity and healing the gastrointestinal lining. Remedies like Lycopodium, Arsenicum Album, and Silicea address abdominal bloating, diarrhea, and nutrient absorption to help restore digestive health.",
    duration: "6 - 12 Weeks",
    risk: "Severe Malnutrition & Osteoporosis",
    commonAge: "5 - 50 Years",
    recovery: "4 - 8 Weeks",
    heroImage: "/images/diseases/digestion.png",
    patientsTreated: "4,600+",
    yearsExperience: "18+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Celiac Disease & Gut Healing | Ojas Sanjivani",
    metaDescription: "Heal your gut naturally. Our Ayurvedic Grahani treatments and constitutional Homeopathy reduce gluten-induced bloating, diarrhea, and restore nutrient absorption.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Digestive & Autoimmune Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy combines specific homeopathic gut healers with specialized nutritional plans to reverse chronic intestinal inflammation.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Abdominal Bloating", description: "Severe gas, distension, and painful cramps after eating gluten.", iconName: "AlertTriangle" },
      { title: "Chronic Diarrhea", description: "Frequent, loose, foul-smelling, or fatty stools due to fat malabsorption.", iconName: "AlertTriangle" },
      { title: "Unexplained Weight Loss", description: "Losing weight despite eating normally, due to nutrient malabsorption.", iconName: "Scale" },
      { title: "Nutritional Deficiencies", description: "Anemia (iron deficiency), vitamin D deficiency, and weak bones (osteoporosis).", iconName: "BatteryLow" }
    ],
    causes: [
      { title: "Gluten Autoimmune Attack", description: "Gluten ingestion triggers T-cells to attack the lining of the small intestine.", iconName: "GitMerge" },
      { title: "Weak Digestive Fire (Mandagni)", description: "Sluggish metabolic fire allows undigested gluten to ferment, producing Ama.", iconName: "Activity" },
      { title: "Genetic Markers", description: "Presence of HLA-DQ2 and HLA-DQ8 genes associated with celiac disease.", iconName: "GitMerge" }
    ],
    treatments: [
      { title: "Agni Deepana & Grahani Herbs", description: "Bilva, Kutaja, and Dadimastaka to bind stools, soothe inflammation, and strengthen Agni.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Intestinal Healing Homeopathy", description: "Remedies like Lycopodium or Sulphur to reduce gut sensitivity and improve absorption.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Strict Gluten-Free Nutrition", description: "Eliminating wheat, rye, and barley, substituting with millets (ragi, jowar), quinoa, and rice.", iconName: "Utensils", type: "Diet" },
      { title: "Lacto-Vegetarian Gut Restoration", description: "Consuming buttermilk (Takra) infused with cumin to restore beneficial gut microflora.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "Is a gluten-free diet permanently required?", answer: "In true celiac disease, eliminating gluten is necessary to prevent intestinal damage. However, our natural treatments heal the gut lining, eliminating bloating and preventing secondary food sensitivities." },
      { question: "How does buttermilk help in celiac disease?", answer: "Ayurvedic Takra (buttermilk with spices) is considered the best medicine for Grahani (IBS/Celiac) as it is light, easy to digest, and rich in natural probiotics." }
    ],
    testimonials: [
      { id: "cd1", patientName: "Aarav Shah", location: "Mumbai, Maharashtra", disease: "Celiac Disease", rating: 5, duration: "3 Months", reviewText: "I had constant diarrhea and was severely anemic. Ojas Sanjivani's gut healing herbs and diet plan restored my digestion. My biopsy reports show healthy villi now.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["digestion", "neuropathy", "autoimmune-disorders"]
  },

  "multiple-sclerosis": {
    slug: "multiple-sclerosis",
    name: "Multiple Sclerosis",
    category: "Autoimmune Disorders",
    tagline: "Support Nervous System Myelin Sheaths and Improve Mobility",
    overview: "Multiple Sclerosis (MS) is a disabling autoimmune disease of the central nervous system. The immune system attacks the protective myelin sheath that covers nerve fibers, disrupting communication between the brain and the rest of the body. This causes muscle weakness, vision problems, balance issues, and coordination loss. Our treatment focuses on neuro-protection and nerve nourishment.",
    ayurvedaPerspective: "Ayurveda explains MS as a progressive 'Majja Dhatu Gata Vata' combined with Ama blocking the neural channels. The loss of myelin is seen as a drying (Ruksha) effect of vitiated Vata on the nervous tissue. Rejuvenating 'Rasayana' therapies using Ashwagandha, Bala, and Kapikachhu nourish the Majja Dhatu, strengthen muscles, and slow down myelin degeneration.",
    homeopathyPerspective: "Homeopathy approaches MS constitutionally to manage neurological coordination and reduce inflammation in the spinal cord. Remedies like Gelsemium (for deep muscle weakness and double vision), Causticum, and Lathyrus Sativus help restore gait control and slow down progression safely.",
    duration: "Progressive / Long-term Support",
    risk: "Severe Coordination Loss",
    commonAge: "20 - 45 Years",
    recovery: "Ongoing Neurological Support",
    heroImage: "/images/diseases/neurology.png",
    patientsTreated: "2,800+",
    yearsExperience: "20+",
    patientSatisfaction: "90%",
    metaTitle: "Natural Multiple Sclerosis Care & Therapy | Ojas Sanjivani",
    metaDescription: "Support myelin sheath health and motor coordination naturally. Our Ayurvedic neuro-protective herbs and constitutional Homeopathy improve mobility.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Neuro-Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar specializes in neurological rehabilitation using targeted Ayurvedic rasayana and panchakarma protocols.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Muscle Weakness", description: "Weakness or numbness in one or more limbs, typically on one side of the body.", iconName: "Activity" },
      { title: "Vision Problems", description: "Double vision, blurry vision, or painful vision loss in one eye (optic neuritis).", iconName: "Eye" },
      { title: "Balance & Gait Issues", description: "Unsteadiness, difficulty walking, and loss of physical coordination.", iconName: "AlertTriangle" },
      { title: "Electric-Shock Sensations", description: "Lhermitte's sign; electric shocks occurring with specific neck movements.", iconName: "Activity" }
    ],
    causes: [
      { title: "Myelin Sheath Destruction", description: "Autoimmune cells strip the protective fatty coating around brain and spinal nerve axons.", iconName: "GitMerge" },
      { title: "Vata Tissue Wasting", description: "Aggravated dry Vata depletes Majja Dhatu, impairing nerve impulse conduction.", iconName: "Activity" },
      { title: "Environmental Triggers", description: "Low vitamin D levels, viral infections (like Epstein-Barr), and chronic stress.", iconName: "Flame" }
    ],
    treatments: [
      { title: "Neuro-Protective Rasayanas", description: "Bala, Ashwagandha, and Brahmi to nourish myelin, improve muscle strength, and protect neurons.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Constitutional Coordination Care", description: "Homeopathic Gelsemium or Causticum to target motor weakness and double vision.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Shirodhara & Basti", description: "Medicated oil enemas (Basti) to directly calm central Vata dosha and reduce spasticity.", iconName: "Sparkles", type: "Therapy" },
      { title: "Neuro-Rehab Yoga Exercises", description: "Gentle balance-restoring poses (Tadasana, Vrikshasana) to retrain proprioception and coordination.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "Can natural treatment slow Multiple Sclerosis progression?", answer: "Yes, by nourishing the myelin sheath, reducing neuro-inflammation, and strengthening muscle fibers, natural treatments can slow down progression and improve daily function." },
      { question: "What Ayurvedic herbs protect nerves?", answer: "Ashwagandha (Withania somnifera) and Bala (Sida cordifolia) are premier Ayurvedic neuro-protective herbs that promote muscle tone and nerve regeneration." }
    ],
    testimonials: [
      { id: "ms1", patientName: "Rajesh Nair", location: "Trivandrum, Kerala", disease: "Relapsing-Remitting MS", rating: 5, duration: "6 Months", reviewText: "I had severe leg weakness and double vision. The customized Basti therapies and homeopathic drops restored my vision, and I walk without support now.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["neuropathy", "parkinsons-disease", "lupus"]
  },

  // ==========================================
  // LIVER & GALL CATEGORY
  // ==========================================
  "liver-gall": {
    slug: "liver-gall",
    name: "Liver & Gall",
    category: "Liver & Gall",
    tagline: "Natural Liver & Gallbladder Treatment with Ayurveda & Homeopathy",
    overview: "The liver and gallbladder are key metabolic and digestive organs, responsible for detoxification, bile production, and fat metabolism. Conditions like fatty liver, jaundice, gallstones, and hepatitis cause severe digestive disruptions, fatigue, and pain. At Ojas Sanjivani, we offer non-surgical, natural treatment protocols to restore liver enzymes, dissolve small gallstones, and detoxify the biliary system safely.",
    ayurvedaPerspective: "In Ayurveda, the liver (Yakrit) and gallbladder (Kloma/Pitta Ashaya) are the primary seats of 'Ranjaka Pitta' (the heating element responsible for blood formation and metabolic chemistry). Liver disorders are classified under 'Yakrit Roga' and are driven by aggravated Pitta dosha blocking the channels. Treatment utilizes cooling, bitter herbs (Katuki, Kalmegh, Bhringraj) to detoxify the liver, stimulate bile flow, and restore metabolic balance.",
    homeopathyPerspective: "Homeopathy offers excellent hepatic and biliary support. Remedies like Chelidonium Majus (for liver pain, jaundice, and gallbladder issues), Carduus Marianus (for fatty liver and sluggish portal circulation), and Lycopodium are selected to optimize liver cellular function and bile drainage gently.",
    duration: "4 - 8 Weeks to Restore Liver Functions",
    risk: "Liver Fibrosis & Biliary Blockage",
    commonAge: "18 - 70 Years",
    recovery: "Progressive Digestive Healing",
    heroImage: "/images/diseases/liver-gall.png",
    patientsTreated: "10,200+",
    yearsExperience: "20+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Liver & Gallbladder Treatment | Ojas Sanjivani",
    metaDescription: "Restore liver function naturally. We offer clinical Ayurveda & Homeopathy treatments for Fatty Liver, Jaundice, Gallstones, and Liver Detoxification.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Hepatic & Digestive Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in non-invasive liver restoration and biliary cleansing using specific homeopathic and dietetic protocols.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Fatty Liver", slug: "fatty-liver", description: "Reverse liver fat accumulation and normalize elevated SGOT/SGPT enzymes.", image: "/images/diseases/digestion.png" },
      { name: "Jaundice", slug: "jaundice", description: "Strengthen liver cells, clear excess bilirubin, and restore energy levels.", image: "/images/diseases/digestion.png" },
      { name: "Gallstones", slug: "gallstones", description: "Non-surgical biliary support to thin bile and manage gallbladder sludge.", image: "/images/diseases/digestion.png" },
      { name: "Liver Detoxification", slug: "liver-detoxification", description: "Flush out metabolic toxins, support digestion, and boost immunity.", image: "/images/diseases/weight-management.png" },
      { name: "Hepatitis Support", slug: "hepatitis-support", description: "Reduce liver cell inflammation, fight viral stress, and enhance immunity.", image: "/images/diseases/digestion.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Can fatty liver be reversed naturally?", answer: "Yes. Grade 1 and Grade 2 fatty liver can be completely reversed by correcting diet, reducing weight, and using liver-protecting herbs like Kalmegh and Chelidonium." },
      { question: "Is it possible to manage gallstones without removing the gallbladder?", answer: "Small cholesterol stones and gallbladder sludge (under 10mm) can often be managed and flushed out naturally using bile-thinning herbs. Larger or calcified stones require close clinical evaluation." }
    ],
    testimonials: [
      { id: "lg1", patientName: "Vikram Jadhav", location: "Pune, Maharashtra", disease: "Grade 2 Fatty Liver", rating: 5, duration: "2 Months", reviewText: "My liver enzymes (SGPT) were over 120. Within 2 months of Ojas Sanjivani's liver detox plan, my enzymes are down to 35, and my ultrasound shows a normal liver.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["digestion", "diabetes", "weight-management"]
  },

  "fatty-liver": {
    slug: "fatty-liver",
    name: "Fatty Liver",
    category: "Liver & Gall",
    tagline: "Reverse Liver Fat Accumulation & Normalize Enzymes Naturally",
    overview: "Fatty Liver Disease (Steatosis) is the accumulation of excess fat in liver cells. It is divided into Non-Alcoholic Fatty Liver Disease (NAFLD, linked to obesity, diabetes, and high-carb diets) and Alcoholic Fatty Liver Disease (AFLD). If left untreated, it can progress to liver inflammation (NASH) and liver fibrosis. Our treatment focuses on fat metabolism and liver enzyme correction.",
    ayurvedaPerspective: "Ayurveda attributes Fatty Liver to 'Yakridalyodara' driven by an accumulation of Kapha and Meda Dhatu (fatty tissue) blocking the Ranjaka Pitta pathways in the liver. Treatment focuses on bitter, scraping (Lekhana) herbs like Katuki, Kalmegh, and Triphala to clear fat deposit blockages and stimulate liver fire (Dhatvagni).",
    homeopathyPerspective: "Homeopathy uses liver-protecting remedies to reduce fat cells and normalize liver function. Remedies like Carduus Marianus (a premier liver tonic), Chelidonium Majus (for liver congestion), and Phosphorus are selected to halt hepatic fatty infiltration.",
    duration: "4 - 8 Weeks",
    risk: "Liver Fibrosis & Cirrhosis",
    commonAge: "25 - 60 Years",
    recovery: "4 - 6 Weeks",
    heroImage: "/images/diseases/liver-gall.png",
    patientsTreated: "6,900+",
    yearsExperience: "18+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Fatty Liver Treatment | Ojas Sanjivani",
    metaDescription: "Reverse Grade 1 & 2 Fatty Liver naturally. Normalize SGOT/SGPT enzymes using Ayurvedic bitter herbs and homeopathic hepatoprotectors.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Hepatic & Digestive Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in metabolic-liver conditions and fatty liver reversal using constitutional homeopathy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Chronic Fatigue", description: "Constant tiredness and lack of energy due to sluggish liver metabolism.", iconName: "BatteryLow" },
      { title: "Abdominal Discomfort", description: "A feeling of heaviness or mild pain in the upper right side of the abdomen.", iconName: "AlertTriangle" },
      { title: "Elevated Enzymes", description: "Increased levels of SGOT, SGPT, and Alkaline Phosphatase in blood tests.", iconName: "Activity" }
    ],
    causes: [
      { title: "Insulin Resistance", description: "Poor glucose control leads to excess free fatty acids depositing in the liver.", iconName: "Activity" },
      { title: "High-Carb Diet", description: "Excess consumption of refined sugar, deep-fried foods, and processed carbs.", iconName: "Utensils" },
      { title: "Obesity & Sedentary Habits", description: "Lack of physical activity slows down systemic fat burning and hepatic metabolism.", iconName: "Scale" }
    ],
    treatments: [
      { title: "Bitter Hepato-Protectors", description: "Katuki, Kalmegh, and Bhumyamalaki to scrap fat and restore cell membranes.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Hepatoprotective Homeopathy", description: "Carduus Marianus and Chelidonium to dissolve fat deposits and normalize SGOT/SGPT.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Liver-Fat Clearance Diet", description: "Diet excluding sugar, white flour, and heavy dairy, emphasizing green vegetables and fiber.", iconName: "Utensils", type: "Diet" },
      { title: "Daily Hepatic Yoga", description: "Asanas like Ardha Matsyendrasana and Kapalabhati pranayama to stimulate liver organs.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "Can Grade 2 fatty liver be fully reversed?", answer: "Yes, Grade 1 and 2 fatty liver are highly reversible within 2 to 3 months of starting our natural treatment, combined with active lifestyle changes." },
      { question: "What is the role of Kalmegh in fatty liver?", answer: "Kalmegh (Andrographis paniculata) is a powerful bitter herb that protects liver cells, increases bile flow, and reduces fat accumulation." }
    ],
    testimonials: [
      { id: "fl1", patientName: "Sanjay Patil", location: "Pune, Maharashtra", disease: "Grade 2 Fatty Liver", rating: 5, duration: "2 Months", reviewText: "I had constant bloating and elevated liver enzymes. After 2 months of this treatment, my SGPT returned to normal and I lost 5 kg.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["jaundice", "gallstones", "diabetes"]
  },

  "jaundice": {
    slug: "jaundice",
    name: "Jaundice",
    category: "Liver & Gall",
    tagline: "Strengthen Liver Cells & Clear Bilirubin Naturally",
    overview: "Jaundice is a condition characterized by yellowing of the skin, whites of the eyes (sclera), and mucous membranes, caused by elevated levels of bilirubin in the blood. Jaundice is a symptom of liver dysfunction, bile duct blockage, or rapid blood breakdown. Our natural treatment focuses on strengthening liver cells, clearing bile blockages, and flushing bilirubin.",
    ayurvedaPerspective: "Ayurveda describes Jaundice as 'Kamala'. It is a pure Pitta-dominated disorder where excessive Pitta destroys blood cells (Rakta Dhatu) and inflames liver tissues (Yakrit). Kamala is treated using bitter and cooling laxative herbs like Bhumyamalaki, Katuki, and Avipattikar Churna to purge excess Pitta.",
    homeopathyPerspective: "Homeopathy offers highly specific bilirubin-clearing remedies. Chelidonium Majus (for yellow skin with right-sided liver pain), Phosphorus (for viral liver damage), and Chionanthus Virginica are selected to reduce jaundice and restore liver tone safely.",
    duration: "2 - 4 Weeks",
    risk: "Severe Hepatic Cell Necrosis",
    commonAge: "5 - 70 Years",
    recovery: "2 - 3 Weeks",
    heroImage: "/images/diseases/liver-gall.png",
    patientsTreated: "5,200+",
    yearsExperience: "20+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Jaundice (Kamala) Treatment | Ojas Sanjivani",
    metaDescription: "Clear excess bilirubin and restore liver health naturally. Discover our cooling Ayurvedic herbs and homeopathic Chelidonium remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Hepatic & Digestive Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in acute liver cell restoration and yellow jaundice management using targeted homeopathic protocols.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Yellow Skin & Eyes", description: "Characteristic yellow pigmentation due to high bilirubin levels in blood.", iconName: "AlertTriangle" },
      { title: "Dark Urine", description: "Urine appears dark yellow or brownish due to renal excretion of bilirubin.", iconName: "AlertTriangle" },
      { title: "Severe Fatigue", description: "Debilitating exhaustion and loss of appetite as liver detoxification slows.", iconName: "BatteryLow" }
    ],
    causes: [
      { title: "Viral Hepatitis", description: "Viral infection causing severe inflammation of liver cells.", iconName: "Activity" },
      { title: "Bile Duct Obstruction", description: "Gallstones or inflammation blocking the flow of bile from liver.", iconName: "AlertTriangle" },
      { title: "Drug Toxicity", description: "Overuse of painkillers or alcohol causing sudden liver cell damage.", iconName: "Flame" }
    ],
    treatments: [
      { title: "Pitta Purging Herbs", description: "Bhumyamalaki and Katuki to clear excess Pitta and repair liver cell membranes.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Bilirubin Clearing Homeopathy", description: "Chelidonium and Chionanthus to stimulate bile excretion and restore skin color.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Ultra-Light cooling Diet", description: "Strict sugar-cane juice, coconut water, barley water, excluding all oil, spices, and heavy proteins.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "Why is Bhumyamalaki used in Jaundice?", answer: "Bhumyamalaki (Phyllanthus niruri) is clinically proven to protect hepatocytes, reduce viral load, and lower bilirubin levels rapidly." },
      { question: "How long does it take for bilirubin to normalize?", answer: "With our integrated treatment and strict oil-free diet, bilirubin levels typically normalize within 10 to 20 days." }
    ],
    testimonials: [
      { id: "ja1", patientName: "Meera Nair", location: "Trivandrum, Kerala", disease: "Hepatic Jaundice", rating: 5, duration: "3 Weeks", reviewText: "My bilirubin was 6.5. Ojas Sanjivani's cooling herbs and diet plan brought it down to 1.1 in just 18 days. My energy is fully restored.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["fatty-liver", "hepatitis-support", "liver-detoxification"]
  },

  "gallstones": {
    slug: "gallstones",
    name: "Gallstones",
    category: "Liver & Gall",
    tagline: "Non-Surgical Biliary Support & Sludge Management",
    overview: "Gallstones (Cholelithiasis) are hardened deposits of digestive fluid (cholesterol or bilirubin) that form in the gallbladder. They can range from the size of a grain of sand to a golf ball. When a stone blocks the bile duct, it triggers sudden, intense pain in the upper right abdomen (biliary colic), nausea, and vomiting. Our treatment focuses on thinning the bile and dissolving small cholesterol stones.",
    ayurvedaPerspective: "Ayurveda views Gallstones as 'Pitta Ashmari'. They occur due to vitiation of Kapha dosha mixing with Pitta in the gallbladder, causing bile to thicken and crystallize. Treatment utilizes 'Asmarighna' (stone-breaking) and cholagogue herbs like Gokshura, Varuna, and Punarnava to thin the bile and flush out sludge.",
    homeopathyPerspective: "Homeopathy provides effective remedies to reduce gallbladder inflammation, thin bile, and relieve painful spasms. Remedies like Chelidonium Majus, Fel Tauri (to emulsify fat and thin bile), and Carduus Marianus help manage biliary colic and sludge naturally.",
    duration: "8 - 12 Weeks",
    risk: "Biliary Duct Blockage & Pancreatitis",
    commonAge: "30 - 60 Years",
    recovery: "2 - 3 Months",
    heroImage: "/images/diseases/liver-gall.png",
    patientsTreated: "4,900+",
    yearsExperience: "18+",
    patientSatisfaction: "92%",
    metaTitle: "Natural Gallstones & Biliary Support | Ojas Sanjivani",
    metaDescription: "Thin bile and dissolve small gallstones naturally. Discover our non-surgical Ayurvedic stone-flushing herbs and homeopathic Fel Tauri remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Hepatic & Digestive Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes specific homeopathic bile emulsifiers to thin gallbladder sludge and manage small gallstones.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Right Abdominal Pain", description: "Sudden, sharp pain in the upper right side of the abdomen (biliary colic).", iconName: "AlertTriangle" },
      { title: "Nausea & Vomiting", description: "Feeling sick to the stomach during painful episodes after eating fatty meals.", iconName: "AlertTriangle" },
      { title: "Back & Shoulder Pain", description: "Referred pain spreading to the back between shoulder blades or right shoulder.", iconName: "Activity" }
    ],
    causes: [
      { title: "Thickened Bile", description: "Gallbladder doesn't empty properly, causing bile to become highly concentrated.", iconName: "AlertTriangle" },
      { title: "High-Cholesterol Diet", description: "Bile contains too much cholesterol to dissolve, forming crystals.", iconName: "Utensils" },
      { title: "Rapid Weight Loss", description: "Causes the liver to secrete extra cholesterol into bile, increasing stone risk.", iconName: "Scale" }
    ],
    treatments: [
      { title: "Bile-Thinning Herbs", description: "Varuna, Punarnava, and Gokshura to thin bile, reduce spasm, and flush gallbladder sludge.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Biliary Emulsifier Homeopathy", description: "Chelidonium and Fel Tauri to dissolve cholesterol crystals and manage colic pain.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Low-Fat Biliary Diet", description: "Diet excluding deep-fried foods, heavy oils, and refined sugar, emphasizing apple cider, lemons, and fiber.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "Can large gallstones be dissolved naturally?", answer: "Stones under 10mm and gallbladder sludge respond very well to natural treatment. Large or calcified stones are difficult to dissolve and must be monitored to prevent duct blockage." },
      { question: "Why does pain occur after fatty meals?", answer: "Eating fat triggers the gallbladder to contract and squeeze out bile. If a stone is blocking the duct, these contractions result in sharp pain." }
    ],
    testimonials: [
      { id: "gs1", patientName: "Aarti Patil", location: "Pune, Maharashtra", disease: "Gallbladder Sludge (8mm)", rating: 5, duration: "3 Months", reviewText: "I had frequent pain in my right side. Dr. Roy's homeopathic drops and diet changes cleared my 8mm sludge completely. The repeat ultrasound is normal.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["fatty-liver", "jaundice", "digestion"]
  },

  "liver-detoxification": {
    slug: "liver-detoxification",
    name: "Liver Detoxification",
    category: "Liver & Gall",
    tagline: "Flush Out Metabolic Toxins & Support Digestion Naturally",
    overview: "Liver Detoxification is a preventive wellness program designed to flush out accumulated metabolic toxins, pollutants, and heavy metals from the liver cells. In today's lifestyle, exposure to processed foods, alcohol, environmental toxins, and medications overburdens the liver, leading to chronic fatigue, sluggish digestion, skin breakouts, and weakened immunity. A natural detox restores liver efficiency and revitalizes the body.",
    ayurvedaPerspective: "Ayurveda describes liver detox as 'Yakrit Shodhana'. Ranjaka Pitta, when overloaded with toxins (Ama), becomes sluggish, polluting the blood (Rakta). Detoxification uses bitter, blood-purifying herbs (Bhringraj, Neem, Kalmegh) and digestive stimulants to clear Ama and balance Pitta.",
    homeopathyPerspective: "Homeopathy uses liver organ-cleansing remedies like Carduus Marianus and Nux Vomica to stimulate portal circulation, improve metabolic waste clearance, and repair hepatocytes from toxic exposure.",
    duration: "2 - 4 Weeks (Preventive)",
    risk: "Systemic Sluggishness & Low Energy",
    commonAge: "18 - 65 Years",
    recovery: "2 Weeks (Complete Flush)",
    heroImage: "/images/diseases/liver-gall.png",
    patientsTreated: "8,200+",
    yearsExperience: "18+",
    patientSatisfaction: "96%",
    metaTitle: "Natural Liver Detoxification Program | Ojas Sanjivani",
    metaDescription: "Flush out toxins and boost your energy. Our Ayurvedic Yakrit Shodhana and Homeopathic portal tonics clean and revitalize your liver.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Hepatic & Digestive Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in clinical liver detoxification and metabolic restoration using homeopathic remedies.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Sluggish Digestion", description: "Chronic bloating, gas, acidity, and difficulty digesting fats.", iconName: "AlertTriangle" },
      { title: "Chronic Fatigue", description: "Waking up tired, low energy levels, and brain fog despite resting.", iconName: "BatteryLow" },
      { title: "Skin Breakouts", description: "Acne, dull skin, or itching caused by toxic load in blood circulation.", iconName: "Activity" }
    ],
    causes: [
      { title: "Processed Foods & Alcohol", description: "Refined sugars, trans fats, preservative chemicals, and alcohol strain liver cells.", iconName: "Utensils" },
      { title: "Medication Overuse", description: "Chronic consumption of painkillers, antibiotics, or statins overloading liver pathways.", iconName: "Flame" },
      { title: "Environmental Pollutants", description: "Inhaling or consuming pesticides, plastic residues, and heavy metals.", iconName: "Flame" }
    ],
    treatments: [
      { title: "Yakrit Shodhana Herbs", description: "Kalmegh, Bhringraj, and Katuki to stimulate liver enzymes and bile drainage.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Portal Tonic Homeopathy", description: "Carduus Mar and Nux Vomica to flush toxins, repair liver cells, and relieve bloating.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Liver-Cleansing Green Diet", description: "Diet rich in beetroot, leafy greens, garlic, lemon juice, turmeric, and green tea.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "How often should I detox my liver?", answer: "For general wellness, we recommend a 2 to 4-week liver detoxification program once every 6 months to maintain high energy and optimal digestion." },
      { question: "Is Nux Vomica effective for liver detox?", answer: "Yes, Nux Vomica is an exceptional homeopathic remedy to repair liver cells damaged by alcohol, rich food, or pharmaceutical overuse." }
    ],
    testimonials: [
      { id: "ld1", patientName: "Prashant Joshi", location: "Mumbai, Maharashtra", disease: "Sluggish Liver & Fatigue", rating: 5, duration: "2 Weeks", reviewText: "I felt constantly tired and bloated. The 2-week Ojas liver detox cleared my skin, improved my digestion, and my energy levels shot up.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["fatty-liver", "jaundice", "digestion"]
  },

  "hepatitis-support": {
    slug: "hepatitis-support",
    name: "Hepatitis Support",
    category: "Liver & Gall",
    tagline: "Reduce Liver Inflammation & Fight Viral Stress Naturally",
    overview: "Hepatitis is an inflammatory condition of the liver, most commonly caused by viral infections (Hepatitis A, B, C) or autoimmune responses. Chronic hepatitis can lead to progressive liver cell damage, scarring (cirrhosis), and liver failure. Our natural support protocol focuses on reducing liver cell inflammation, boosting the body's antiviral immunity, and preventing liver fibrosis.",
    ayurvedaPerspective: "Ayurveda classifies Hepatitis under 'Kamala' and 'Yakrit Roga' driven by intense Ranjaka Pitta vitiation. Treatment focuses on protecting the liver cell membranes using cooling, antiviral herbs like Bhumyamalaki, Kalmegh, and Guduchi to strengthen cellular defense (Ojas) and clear hepatic inflammation.",
    homeopathyPerspective: "Homeopathy provides valuable support in hepatitis by reducing hepatic congestion, calming viral stress, and strengthening hepatocyte recovery. Remedies like Phosphorus, Chelidonium, and Lachesis are selected according to individual viral and physical symptoms.",
    duration: "Chronic / High Monitoring",
    risk: "Liver Cirrhosis & Scarring",
    commonAge: "10 - 70 Years",
    recovery: "Ongoing Immune Support",
    heroImage: "/images/diseases/liver-gall.png",
    patientsTreated: "2,900+",
    yearsExperience: "20+",
    patientSatisfaction: "92%",
    metaTitle: "Natural Hepatitis Support & Therapy | Ojas Sanjivani",
    metaDescription: "Reduce liver cell inflammation and support viral defense naturally. Discover our Ayurvedic Bhumyamalaki and Homeopathic hepatoprotectors.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Hepatic & Digestive Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes specific homeopathic anti-inflammatory remedies and liver cell regenerators to support chronic hepatitis patients.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Liver Inflammation", description: "Swelling and soreness in liver cells, causing discomfort in upper right abdomen.", iconName: "AlertTriangle" },
      { title: "Persistent Fatigue", description: "Deep fatigue, muscle aches, and joint discomfort caused by chronic viral stress.", iconName: "BatteryLow" },
      { title: "Nausea & Appetite Loss", description: "Strong aversion to food and persistent nausea due to reduced liver function.", iconName: "AlertTriangle" }
    ],
    causes: [
      { title: "Viral Infections", description: "Hepatitis A, B, or C viruses causing acute or chronic hepatic cell injury.", iconName: "Activity" },
      { title: "Autoimmune Reaction", description: "Body's immune system attacking its own liver cells, causing chronic inflammation.", iconName: "GitMerge" },
      { title: "Toxic Overload", description: "Excessive alcohol or chemical toxicity leading to severe liver cell swelling.", iconName: "Flame" }
    ],
    treatments: [
      { title: "Antiviral Hepatic Herbs", description: "Bhumyamalaki and Guduchi to inhibit viral replication and protect liver cells.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Hepatocyte Rebuilder Homeopathy", description: "Phosphorus and Chelidonium to reduce liver cell swelling and improve enzyme markers.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Hepatitis Restorative Diet", description: "Strict warm, easily digestible diet rich in boiled vegetables, barley water, and avoiding fats.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "Can natural herbs manage chronic Hepatitis B?", answer: "Yes, immunomodulating herbs like Bhumyamalaki and Guduchi help lower the viral load, reduce liver cell inflammation, and normalize liver enzymes safely." },
      { question: "How does Phosphorus help in hepatitis?", answer: "Phosphorus is a leading homeopathic remedy for severe liver cell inflammation, helping to prevent cellular degeneration and cirrhosis." }
    ],
    testimonials: [
      { id: "hs1", patientName: "Rajendra Prasad", location: "Kolkata, West Bengal", disease: "Chronic Hepatitis B Support", rating: 5, duration: "4 Months", reviewText: "My liver enzymes were persistently high due to Hep B. Ojas Sanjivani's treatment brought my SGPT down to normal and greatly improved my strength.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["jaundice", "fatty-liver", "liver-detoxification"]
  },

  // ==========================================
  // PSYCHOLOGICAL ISSUES CATEGORY
  // ==========================================
  "psychological-issues": {
    slug: "psychological-issues",
    name: "Psychological Issues",
    category: "Psychological Issues",
    tagline: "Natural Mental Wellness with Ayurveda & Homeopathy",
    overview: "Mental and emotional wellness are foundational to overall health. Psychological issues like chronic anxiety, depression, panic attacks, mood swings, and stress-related fatigue can severely disrupt daily life, sleep, and physical health. Our integrated mind-body clinical protocols focus on calming an overactive nervous system, balancing neurotransmitters naturally, and building emotional resilience without sedatives or addictive side effects.",
    ayurvedaPerspective: "Ayurveda describes mental health through the three Gunas (attributes of the mind): Sattva (purity/calm), Rajas (activity/agitation), and Tamas (inertia/darkness). Imbalances in Prana Vata (governing thoughts and senses) and Sadhaka Pitta (emotional processing) disturb the Gunas, leading to mental disorders. Treatment utilizes Medhya Rasayanas (brain rejuvenating herbs like Shankhapushpi, Brahmi, and Ashwagandha) to calm Rajas, clear Tamas, and restore Sattvic balance.",
    homeopathyPerspective: "Homeopathy has a profound, individualized approach to mental health. Because mind and body are inseparable, remedies like Ignatia (for grief and emotional shock), Aconite (for acute panic and fear), and Natrum Mur (for silent depression and chronic stress) are prescribed based on the patient's emotional history to restore neuro-emotional balance gently.",
    duration: "4 - 8 Weeks to Restore Emotional Calm",
    risk: "Chronic Insomnia, Fatigue & Cognitive Fog",
    commonAge: "15 - 65 Years",
    recovery: "Gentle Emotional Restoration",
    heroImage: "/images/diseases/stress-anxiety.png",
    patientsTreated: "11,500+",
    yearsExperience: "20+",
    patientSatisfaction: "96%",
    metaTitle: "Natural Mental & Emotional Wellness Care | Ojas Sanjivani",
    metaDescription: "Restore peace of mind naturally. We offer personalized Ayurveda & Homeopathy treatments for Anxiety, Depression, Stress, Panic, and Mood Swings.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Neuro-Psychological & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in treating stress, anxiety, and depression using customized homeopathic and cognitive-lifestyle counseling.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Anxiety Disorders", slug: "anxiety-disorders", description: "Calm excessive worry, restlessness, palpitations, and nervous tension.", image: "/images/diseases/stress-anxiety.png" },
      { name: "Depression", slug: "depression", description: "Elevate mood, combat chronic fatigue, and restore interest in life naturally.", image: "/images/diseases/stress-anxiety.png" },
      { name: "Chronic Stress", slug: "chronic-stress", description: "Relieve mental burnout, tension headaches, and stress-related fatigue.", image: "/images/diseases/stress-anxiety.png" },
      { name: "Panic Attacks", slug: "panic-attacks", description: "Control sudden fear, chest tightness, and hyperventilation safely.", image: "/images/diseases/stress-anxiety.png" },
      { name: "Mood Swings", slug: "mood-swings", description: "Balance emotional instability, irritability, and hormonal anxiety.", image: "/images/diseases/stress-anxiety.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Are natural mental wellness treatments safe and free from dependency?", answer: "Yes, absolutely. Our Ayurvedic Medhya herbs and homeopathic remedies do not act as heavy chemical sedatives. They normalize neurotransmitters and calm nerves naturally, carrying zero risk of addiction or morning grogginess." },
      { question: "How does Shirodhara help in psychological conditions?", answer: "Shirodhara (flowing warm oil on the forehead) stimulates the pituitary gland and hypothalamus, releasing serotonin and endorphins. It lowers cortisol (stress hormone) levels and triggers deep parasympathetic relaxation." }
    ],
    testimonials: [
      { id: "pi1", patientName: "Aishwarya Sen", location: "Kolkata, West Bengal", disease: "Chronic Anxiety & Insomnia", rating: 5, duration: "2 Months", reviewText: "My mind was constantly racing. I was dependent on anxiety pills. Dr. Roy's homeopathic drops and brain-calming herbs helped me quit the pills, and I feel calm and happy.", videoThumbnail: "/images/product-ayush64.jpg" }
    ],
    relatedDiseases: ["insomnia", "migraine", "cardiac-wellness"]
  },

  "anxiety-disorders": {
    slug: "anxiety-disorders",
    name: "Anxiety Disorders",
    category: "Psychological Issues",
    tagline: "Calm Excessive Worry, Palpitations & Nervous Tension Naturally",
    overview: "Anxiety Disorders are characterized by persistent, excessive, and unrealistic worry about everyday things. This leads to physical symptoms such as a racing heart (palpitations), muscle tension, restlessness, sweating, and sleep difficulties. Our natural treatment focuses on calming an overactive sympathetic nervous system and balancing brain chemistry.",
    ayurvedaPerspective: "Ayurveda attributes anxiety to an aggravation of 'Raja Guna' and Prana Vata, which destabilizes the mind-body connection (Manovaha Srotas). Treatment centers on Vata-calming herbs (Shankhapushpi, Brahmi, Tagar), nourishing diets, and shirodhara to calm the nervous system.",
    homeopathyPerspective: "Homeopathy offers excellent remedies for chronic anxiety. Remedies like Arsenicum Album (for anxiety with restlessness and need for order), Argentum Nitricum (for anticipatory anxiety and hurry), and Gelsemium soothe the nervous pathways and restore emotional balance.",
    duration: "4 - 8 Weeks",
    risk: "Chronic Insomnia & Panic Attacks",
    commonAge: "15 - 55 Years",
    recovery: "3 - 5 Weeks",
    heroImage: "/images/diseases/stress-anxiety.png",
    patientsTreated: "7,900+",
    yearsExperience: "18+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Anxiety Treatment & Relief | Ojas Sanjivani",
    metaDescription: "Calm chronic worry and nervous tension naturally. Our customized Ayurvedic Medhya herbs and constitutional Homeopathy balance overactive nerves safely.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Neuro-Psychological & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in treating generalized anxiety disorder (GAD) and panic conditions using constitutional homeopathy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Excessive Worry", description: "Constant, uncontrollable fearful thoughts about daily life and future events.", iconName: "Brain" },
      { title: "Rapid Heartbeat", description: "Palpitations or chest thumping triggered by adrenaline spikes.", iconName: "Activity" },
      { title: "Restlessness", description: "Inability to sit still, muscle twitching, or constant fidgeting.", iconName: "Activity" },
      { title: "Cold Sweating", description: "Sweating of palms, soles, or face during anxious episodes.", iconName: "AlertTriangle" }
    ],
    causes: [
      { title: "Neurotransmitter Imbalance", description: "Low levels of GABA or serotonin, which are natural brain calming chemicals.", iconName: "Brain" },
      { title: "Anticipatory Stress", description: "Worrying about future failures or traumatic memories, activating flight-or-fight response.", iconName: "Brain" },
      { title: "Adrenal Exhaustion", description: "Overworked adrenal glands due to poor sleep, caffeine, or chronic lifestyle stress.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Medhya Brain Herbs", description: "Shankhapushpi and Brahmi to nourish brain cells, lower cortisol, and boost GABA.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Nervous Calming Homeopathy", description: "Remedies like Arsenicum Album or Gelsemium to stop physical palpitations and fear.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Pranayama & Yoga Nidra", description: "Slowing down breath (Bhramari Pranayama) to directly activate the vagus nerve and calm the mind.", iconName: "Activity", type: "Yoga" },
      { title: "Circadian Stress Management", description: "Avoiding news or screens before bed, drinking warm ashwagandha milk, and establishing consistent routines.", iconName: "Utensils", type: "Lifestyle" }
    ],
    faqs: [
      { question: "How does natural treatment help anxiety palpitations?", answer: "Our remedies lower adrenaline output and stimulate the vagus nerve, which naturally slows down the heart rate and relaxes chest tightness." },
      { question: "Is Shankhapushpi safe for daily use?", answer: "Yes, Shankhapushpi is a completely non-toxic, cooling Ayurvedic brain tonic that can be taken daily to improve memory and calm anxiety." }
    ],
    testimonials: [
      { id: "ax1", patientName: "Aarti Sen", location: "Kolkata, West Bengal", disease: "Generalized Anxiety", rating: 5, duration: "1 Month", reviewText: "I had constant chest tightness and panic thoughts. After 1 month of this treatment, I feel calm, sleep peacefully, and no longer panic.", videoThumbnail: "/images/product-ayush64.jpg" }
    ],
    relatedDiseases: ["panic-attacks", "chronic-stress", "insomnia"]
  },

  "depression": {
    slug: "depression",
    name: "Depression",
    category: "Psychological Issues",
    tagline: "Elevate Mood, Combat Fatigue & Restore Interest Naturally",
    overview: "Depression (Clinical Depression) is a persistent mood disorder characterized by feelings of sadness, emptiness, low energy, and a lack of interest in previously enjoyed activities. It can cause changes in sleep patterns, appetite, and cognitive focus. Our treatment focuses on boosting natural serotonin levels, nourishing brain tissue, and restoring vital energy.",
    ayurvedaPerspective: "Ayurveda attributes depression to a combination of vitiated Tamas Guna (mental inertia) and aggravated Kapha dosha blocking the neurological channels (Manovaha Srotas). This slows down mental fire (Prana Agni). Rejuvenating 'Rasayana' herbs like Ashwagandha and Brahmi, combined with Pitta-balancing herbs, restore mental clarity and spark drive.",
    homeopathyPerspective: "Homeopathy approaches depression by treating the unique emotional history (grief, disappointment, or stress). Remedies like Ignatia Amara (for acute grief and silent crying), Natrum Mur (for long-standing reserved sadness), and Aurum Metallicum are selected to restore emotional balance.",
    duration: "8 - 12 Weeks to Stabilize",
    risk: "Severe Chronic Fatigue & Social Isolation",
    commonAge: "18 - 60 Years",
    recovery: "Progressive Mood Elevation",
    heroImage: "/images/diseases/stress-anxiety.png",
    patientsTreated: "6,800+",
    yearsExperience: "20+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Depression Treatment & Support | Ojas Sanjivani",
    metaDescription: "Elevate mood and restore interest in life naturally. Our customized Ayurvedic Rasayanas and emotional Homeopathy help resolve depression gently.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Neuro-Psychological & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in treating emotional trauma and depressive states using constitutional homeopathic remedies.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Persistent Sadness", description: "Feelings of emptiness, hopelessness, and crying spells without obvious cause.", iconName: "Frown" },
      { title: "Severe Fatigue", description: "Lacking physical energy to complete simple daily tasks; feeling constantly drained.", iconName: "BatteryLow" },
      { title: "Loss of Interest", description: "Anhedonia; complete lack of pleasure or interest in hobbies or social interactions.", iconName: "AlertTriangle" },
      { title: "Poor Sleep Patterns", description: "Chronic insomnia or oversleeping (hypersomnia) due to neurotransmitter imbalances.", iconName: "Clock" }
    ],
    causes: [
      { title: "Neurotransmitter Depletion", description: "Low levels of serotonin, dopamine, and norepinephrine in synaptic pathways.", iconName: "Brain" },
      { title: "Emotional Trauma", description: "Unresolved grief, relationship setbacks, or chronic stress exhausting mental reserves.", iconName: "Brain" },
      { title: "Agni & Gut Sluggishness", description: "Poor digestion creates toxins (Ama) that block brain channels, causing inertia.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Ayurvedic Rasayana Herbs", description: "Brahmi, Ashwagandha, and Vacha to clear Kapha blockages, boost energy, and elevate mood.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Constitutional Emotional Care", description: "Homeopathic Ignatia or Natrum Mur to address emotional grief and silent sadness.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Circadian Vitality Diet", description: "Nutritious diet rich in fresh fruits, almonds, saffron, and eliminating stale or heavy foods.", iconName: "Utensils", type: "Diet" },
      { title: "Sattva-Promoting Yoga", description: "Active yoga poses (Surya Namaskar, backbends) and pranayama to build physical energy and confidence.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "Can natural remedies be taken with antidepressant medications?", answer: "Yes, our natural remedies are safe and non-reactive. They support brain health and can help reduce the side effects of conventional medicines under clinical supervision." },
      { question: "How does Ignatia help in depression?", answer: "Ignatia Amara is a premier homeopathic remedy for emotional shock, grief, and silent depressive states, helping to release blocked emotions." }
    ],
    testimonials: [
      { id: "dp1", patientName: "Nitesh Sharma", location: "Delhi, NCR", disease: "Chronic Depressive State", rating: 5, duration: "3 Months", reviewText: "I had zero energy and felt constantly sad. Ojas Sanjivani's custom drops and counseling lifted my spirits and restored my interest in work and family life.", videoThumbnail: "/images/product-ayush64.jpg" }
    ],
    relatedDiseases: ["anxiety-disorders", "chronic-stress", "insomnia"]
  },

  "chronic-stress": {
    slug: "chronic-stress",
    name: "Chronic Stress",
    category: "Psychological Issues",
    tagline: "Relieve Mental Burnout & Stress-Related Fatigue Naturally",
    overview: "Chronic Stress is a prolonged state of emotional and physiological arousal, typically caused by work pressure, family problems, or lifestyle imbalances. It keeps the body's 'fight-or-flight' response constantly active, exhausting the adrenal glands. This leads to physical symptoms such as tension headaches, chronic fatigue, irritability, muscle stiffness, and insomnia. Our treatment focuses on restoring adrenal vitality and calming the nervous system.",
    ayurvedaPerspective: "Ayurveda explains chronic stress as an excess of 'Rajas' (agitation) Guna which depletes 'Ojas' (vital immune energy) and vitiates Vata dosha. This causes dryness and wasting in tissues. Treatment focuses on soothing Shirodhara, and adaptogenic herbs like Ashwagandha and Yashtimadhu to nourish the adrenals and rebuild Ojas.",
    homeopathyPerspective: "Homeopathy treats chronic stress by targeting the physical and emotional expressions of burnout. Remedies like Nux Vomica (for workaholics suffering from stress, anger, and acidity), Phosphoric Acid (for complete mental and physical collapse), and Kali Phos help restore nervous vitality.",
    duration: "4 - 6 Weeks",
    risk: "Adrenal Burnout & Hypertension",
    commonAge: "18 - 60 Years",
    recovery: "2 - 4 Weeks",
    heroImage: "/images/diseases/stress-anxiety.png",
    patientsTreated: "8,900+",
    yearsExperience: "18+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Treatment for Chronic Stress | Ojas Sanjivani",
    metaDescription: "Restore adrenal energy and clear mental burnout naturally. Our Ayurvedic adaptogens and Homeopathic Kali Phos relieve fatigue and headaches safely.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Neuro-Psychological & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes specific homeopathic nerve tonics and stress-reduction counseling to help patients recover from burnout.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Mental Burnout & Fatigue", description: "Constant exhaustion, lack of motivation, and cognitive fog.", iconName: "BatteryLow" },
      { title: "Tension Headaches", description: "Dull, squeezing pain around the forehead or neck muscles.", iconName: "Flame" },
      { title: "High Irritability", description: "Overreacting to small triggers due to constant nervous system overload.", iconName: "Frown" },
      { title: "Stress Insomnia", description: "Lying awake at night with a racing mind, unable to fall asleep.", iconName: "Clock" }
    ],
    causes: [
      { title: "Work & Lifestyle Pressure", description: "Long hours, high demands, and lack of relaxation keep cortisol high.", iconName: "Clock" },
      { title: "Adrenal Fatigue", description: "Adrenal glands are unable to produce adequate cortisol, causing deep exhaustion.", iconName: "Activity" },
      { title: "Overactive Sympathetic System", description: "Constant flight-or-fight response blocks digestive and restorative systems.", iconName: "Brain" }
    ],
    treatments: [
      { title: "Adaptogenic Adrenal Herbs", description: "Ashwagandha, Yashtimadhu, and Shatavari to nourish adrenal glands and lower cortisol.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Nerve Vitalizing Homeopathy", description: "Kali Phos and Nux Vomica to restore neural energy and relieve stress-related acidity.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Vata Soothing Massage", description: "Full-body warm oil massage (Abhyanga) and Shirodhara to lower sympathetic drive.", iconName: "Sparkles", type: "Therapy" },
      { title: "Stress-Release Meditation", description: "Daily mindfulness practice and deep breathing to activate parasympathetic recovery.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "What is Kali Phos?", answer: "Kali Phosphoricum is an exceptional homeopathic nerve nutrient used to treat mental fatigue, tension headaches, and nervous sleeplessness." },
      { question: "How does Ashwagandha help in chronic stress?", answer: "Ashwagandha is a premier adaptogenic herb that lowers cortisol levels, reduces anxiety, and builds physical stamina." }
    ],
    testimonials: [
      { id: "cs1", patientName: "Rajiv Sethi", location: "Mumbai, Maharashtra", disease: "Executive Burnout", rating: 5, duration: "1 Month", reviewText: "I was suffering from daily headaches, acidity, and fatigue. Dr. Roy's homeopathic plan and Ashwagandha drops cleared my symptoms within 4 weeks.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["anxiety-disorders", "insomnia", "migraine"]
  },

  "panic-attacks": {
    slug: "panic-attacks",
    name: "Panic Attacks",
    category: "Psychological Issues",
    tagline: "Control Sudden Fear, Palpitations & Breathlessness Safely",
    overview: "A Panic Attack is a sudden episode of intense fear or anxiety that triggers severe physical reactions when there is no real danger or apparent cause. Symptoms include a racing heart (palpitations), chest tightness, sweating, trembling, shortness of breath, and a feeling of losing control. Our natural treatment focuses on stabilizing autonomic reflexes and calming the mind.",
    ayurvedaPerspective: "Ayurveda classifies panic attacks under 'Bhaya' (sudden fear psychosis) caused by a sudden spike of Vata dosha in the heart and mind channels (Manovaha Srotas). This destabilizes the Prana Vata and Sadhaka Pitta. Treatment uses instant Vata-soothing herbs (Jatamansi, Tagar, Brahmi) and breathing techniques to ground the energy.",
    homeopathyPerspective: "Homeopathy is renowned for providing rapid and safe relief during panic states. Remedies like Aconite (for sudden, intense panic with fear of death), Argentum Nitricum (for claustrophobic panic), and Gelsemium soothe the autonomic nervous system and prevent recurring attacks.",
    duration: "4 - 8 Weeks",
    risk: "Agoraphobia & Hyperventilation",
    commonAge: "18 - 45 Years",
    recovery: "3 - 5 Weeks",
    heroImage: "/images/diseases/stress-anxiety.png",
    patientsTreated: "4,200+",
    yearsExperience: "18+",
    patientSatisfaction: "96%",
    metaTitle: "Natural Panic Attack Treatment | Ojas Sanjivani",
    metaDescription: "Relieve sudden fear, chest tightness, and hyperventilation naturally. Our custom Ayurvedic herbs and homeopathic Aconite stabilize your nerves.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Neuro-Psychological & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes specific homeopathic nerve calmers and vagus nerve breathing techniques to prevent panic attacks.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Sudden Intense Fear", description: "A wave of overwhelming panic, fear of losing control, or impending doom.", iconName: "Brain" },
      { title: "Chest Tightness", description: "Sensation of chest pressure, rapid heart rate, or thumping palpitations.", iconName: "Activity" },
      { title: "Cold Sweating & Trembling", description: "Involuntary shaking, cold sweats, and lightheadedness.", iconName: "AlertTriangle" },
      { title: "Shortness of Breath", description: "Hyperventilation or feeling like you cannot draw a deep breath.", iconName: "Activity" }
    ],
    causes: [
      { title: "Autonomic Hyper-Reactivity", description: "Sudden, unexplained firing of the sympathetic fight-or-flight nervous system.", iconName: "Brain" },
      { title: "Chronic Suppressed Anxiety", description: "Unresolved mental stress accumulating and erupting as physical panic.", iconName: "Brain" },
      { title: "Stimulant Sensitivities", description: "Excessive caffeine or chemical triggers aggravating the nervous system.", iconName: "Flame" }
    ],
    treatments: [
      { title: "Vata-Grounding Medhya Herbs", description: "Jatamansi, Brahmi, and Tagar to stabilize brain waves and reduce hyper-reactivity.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Anticipatory Panic Homeopathy", description: "Aconite and Argentum Nitricum to soothe nerves and prevent sudden panic triggers.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Vagus Nerve Breathing", description: "4-7-8 deep breathing techniques to instantly activate parasympathetic calm during panic.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "How does homeopathic Aconite help in panic attacks?", answer: "Aconite is a premier homeopathic medicine that rapidly calms acute, sudden fear, palpitations, and physical restlessness during an attack." },
      { question: "Can panic attacks cause permanent heart damage?", answer: "No, panic attacks do not cause physical heart damage. The chest tightness and rapid heart rate are temporary autonomic responses to adrenaline." }
    ],
    testimonials: [
      { id: "pa_t1", patientName: "Aman Sen", location: "Delhi, NCR", disease: "Panic Disorder", rating: 5, duration: "2 Months", reviewText: "I used to get sudden panic attacks while driving. Dr. Roy's homeopathic plan and breathing advice completely resolved them. I drive with full confidence now.", videoThumbnail: "/images/product-ayush64.jpg" }
    ],
    relatedDiseases: ["anxiety-disorders", "chronic-stress", "heart-palpitations"]
  },

  "mood-swings": {
    slug: "mood-swings",
    name: "Mood Swings",
    category: "Psychological Issues",
    tagline: "Balance Emotional Instability & Irritability Naturally",
    overview: "Mood Swings are rapid, intense changes in a person's emotional state, transitioning from happiness to irritability, anger, or sadness without obvious triggers. They are highly linked to hormonal imbalances (PMS, menopause, thyroid issues), high stress, neurotransmitter fluctuations, or chronic fatigue. Our natural treatment focuses on endocrine balance and mental stability.",
    ayurvedaPerspective: "Ayurveda explains mood swings as a fluctuation of Rajas and Tamas Gunas driven by Pitta and Vata dosha imbalances. Aggravated Pitta causes sudden anger and irritability, while Vata triggers anxiety and sudden crying. Treatment focuses on cooling Pitta, grounding Vata, and nourishing the mind with herbs like Shatavari, Brahmi, and Ashwagandha.",
    homeopathyPerspective: "Homeopathy excels in treating mood swings by addressing the hormonal and emotional balance. Remedies like Pulsatilla (for weepy, changeable moods seeking comfort), Lachesis (for mood swings with irritability), and Sepia (for emotional indifference and hormonal changes) are prescribed to restore steady mood levels.",
    duration: "4 - 8 Weeks",
    risk: "Severe Relationship Stress",
    commonAge: "15 - 55 Years",
    recovery: "3 - 5 Weeks",
    heroImage: "/images/diseases/stress-anxiety.png",
    patientsTreated: "5,400+",
    yearsExperience: "18+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Treatment for Mood Swings | Ojas Sanjivani",
    metaDescription: "Balance emotional instability and irritability naturally. Our custom Ayurvedic herbs and constitutional Homeopathy restore hormonal peace safely.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Neuro-Psychological & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in female endocrine disorders and mood swing management using constitutional homeopathy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Emotional Instability", description: "Rapid shifts between happiness, anger, sadness, and anxiety within a short period.", iconName: "Frown" },
      { title: "High Irritability", description: "Feeling easily annoyed, angry, or impatient over minor daily situations.", iconName: "AlertTriangle" },
      { title: "Hormonal Anxiety", description: "Anxiety spikes linked to menstrual cycles, thyroid changes, or menopause.", iconName: "Brain" }
    ],
    causes: [
      { title: "Hormonal Imbalances", description: "Fluctuations in estrogen, progesterone, or thyroid hormones.", iconName: "Activity" },
      { title: "Neurotransmitter Spikes", description: "Fluctuating serotonin and dopamine levels in brain synapses.", iconName: "Brain" },
      { title: "Chronic Lack of Sleep", description: "Sleep exhaustion impairs the prefrontal cortex's ability to regulate emotions.", iconName: "Clock" }
    ],
    treatments: [
      { title: "Hormonal Balancing Herbs", description: "Shatavari, Ashwagandha, and Brahmi to nourish the endocrine system and calm Vata-Pitta.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Changeable Mood Homeopathy", description: "Remedies like Pulsatilla, Sepia, or Lachesis to target hormonal changes and emotional stability.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Cooling & Balancing Diet", description: "Diet focusing on fresh sweet fruits, green vegetables, avoiding sour, salty, and fermented foods.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "How does Pulsatilla help in mood swings?", answer: "Pulsatilla is a premier homeopathic remedy for emotional instability, especially in individuals whose moods are changeable, gentle, and weep easily." },
      { question: "Can thyroid problems cause mood swings?", answer: "Yes, an overactive or underactive thyroid directly impacts brain neurotransmitter levels, leading to sudden anxiety or depression." }
    ],
    testimonials: [
      { id: "ms_t1", patientName: "Aishwarya Sen", location: "Kolkata, West Bengal", disease: "Hormonal Mood Swings", rating: 5, duration: "2 Months", reviewText: "I had severe irritability before my periods. Dr. Roy's Sepia drops and Shatavari herbs restored my calm and hormonal balance.", videoThumbnail: "/images/product-ayush64.jpg" }
    ],
    relatedDiseases: ["anxiety-disorders", "insomnia", "women-health"]
  },

  // === 1. URINARY DISORDERS ===
  "urinary-disorders": {
    slug: "urinary-disorders",
    name: "Urinary Disorders",
    category: "Urinary Disorders",
    tagline: "Natural Urinary Health Treatment with Ayurveda & Homeopathy",
    overview: "Urinary disorders encompass a range of conditions affecting the kidneys, bladder, and urethra. From painful kidney stones and recurrent tract infections to prostate enlargement and bladder leakage, urinary health issues cause extreme discomfort and disrupt daily life. Our integrated clinical protocols focus on cooling urinary tract inflammation, clearing blockages, strengthening bladder tone, and restoring healthy renal filtration naturally.",
    ayurvedaPerspective: "In Ayurveda, urinary disorders are categorized under 'Mutravaha Srotas Roga' (diseases of the urinary channels). Imbalances in Apana Vata (pelvic movement) and Pitta dosha (heat) lead to conditions like Mutrashmari (renal calculi) and Mutrakrichra (dysuria). Treatment utilizes cooling, diuretic, and stone-dissolving (Ashmarighna) herbs like Gokshura, Varuna, Punarnava, and Pashanbhed to clear toxins and restore channel health.",
    homeopathyPerspective: "Homeopathy approaches urinary health constitutionally, selecting remedies that target local irritation, nerve-bladder coordination, and metabolic imbalances. Remedies like Cantharis (for intense burning), Berberis Vulgaris (for kidney stone pain), and Sarsaparilla act gently to relieve spasm, assist in stone passage, and resolve chronic susceptibility to infections.",
    duration: "Acute / Chronic Management",
    risk: "Renal Strain & Blockage",
    commonAge: "18 - 75 Years",
    recovery: "2 - 6 Weeks",
    heroImage: "svg:urinary",
    patientsTreated: "8,900+",
    yearsExperience: "18+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Urinary Health & Stone Treatment | Ojas Sanjivani",
    metaDescription: "Clear kidney stones, UTIs, and urinary tract irritation naturally. Our integrated Ayurveda & Homeopathy specialists restore renal and bladder health.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Renal & Uro-Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar specializes in Mutravaha Srotas detoxification, non-surgical kidney stone flushing, and prostate wellness using targeted herbs.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Kidney Stones", slug: "kidney-stones", description: "Dissolve and flush out renal calculi naturally while preventing recurrent stone formation.", image: "svg:urinary" },
      { name: "UTI", slug: "uti", description: "Relieve burning urination and eradicate bacterial urinary tract infections naturally.", image: "svg:urinary" },
      { name: "Prostate Enlargement", slug: "prostate-enlargement", description: "Reduce benign prostatic hyperplasia (BPH) symptoms, easing urinary flow and frequency.", image: "svg:urinary" },
      { name: "Dysuria", slug: "dysuria", description: "Cool bladder heat and relieve painful, difficult, or hesitant urination.", image: "svg:urinary" },
      { name: "Urinary Incontinence", slug: "incontinence", description: "Strengthen pelvic floor muscles and bladder sphincter control to prevent leakage.", image: "/images/diseases/liver-gall.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Can kidney stones be dissolved without surgery?", answer: "Yes, small to medium-sized stones (typically under 8-10mm) can be successfully dissolved, broken down, and flushed out using Ayurvedic stone-dissolving herbs and homeopathic renal remedies." },
      { question: "How does Ojas treat chronic, recurring UTIs?", answer: "Instead of temporary antibiotic suppression, we strengthen local bladder immunity, restore healthy urinary pH, and flush pathogens using natural antimicrobials and diuretics." }
    ],
    testimonials: [
      { id: "ud_t1", patientName: "Manish Sharma", location: "Delhi", disease: "8mm Kidney Stone", rating: 5, duration: "6 Weeks", reviewText: "I had excruciating flank pain due to an 8mm kidney stone. Within 6 weeks of starting Dr. Bhaskar's Varuna and Gokshura capsules, the stone broke and passed out painlessly.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["hypertension", "diabetes"]
  },

  "kidney-stones": {
    slug: "kidney-stones",
    name: "Kidney Stones",
    category: "Urinary Disorders",
    tagline: "Dissolve Renal Calculi & Prevent Recurrence Naturally",
    overview: "Kidney Stones (Renal Calculi) are mineral deposits that crystallize in the kidneys, causing severe sharp pain in the side, back, and lower abdomen as they travel through the urinary tract. Recurrence is extremely common. Our natural protocol utilizes specific lithotriptic (stone-dissolving) herbs and mineral-balancing remedies to break down calculi and flush them out safely.",
    ayurvedaPerspective: "In Ayurveda, kidney stones are called 'Mutrashmari'. They are formed when dried toxins (Ama) and excessive Vata dosha dehydrate and crystallize urinary salts. Treatment uses diuretic (Mutrala) and stone-breaking (Ashmarighna) herbs like Pashanbhed, Varuna, and Gokshura to dissolve stones into fine particles for safe elimination.",
    homeopathyPerspective: "Homeopathy uses constitutional and localized remedies to relieve acute renal colic (pain) and address the metabolic tendency to form stones. Remedies like Berberis Vulgaris, Lycopodium, and Cantharis help ease ureteral spasms and facilitate stone passage.",
    duration: "4 - 8 Weeks",
    risk: "Ureteral Blockage & Hydronephrosis",
    commonAge: "20 - 55 Years",
    recovery: "3 - 6 Weeks",
    heroImage: "svg:urinary",
    patientsTreated: "4,500+",
    yearsExperience: "18+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Kidney Stones Treatment | Ojas Sanjivani",
    metaDescription: "Dissolve and flush kidney stones without surgery. Ayurvedic Pashanbhed and homeopathic Berberis remedies ease pain and prevent crystallization.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Renal & Uro-Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes specific Ayurvedic 'Ashmarighna' therapies to break down renal stones and restore normal urinary flow.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Severe Flank Pain", description: "Sharp, cramping pain in the back and side, radiating to the lower abdomen and groin.", iconName: "AlertTriangle" },
      { title: "Painful Urination", description: "Burning sensation or sharp pain during urination as crystals pass.", iconName: "Flame" },
      { title: "Hematuria", description: "Pink, red, or brown urine caused by stones scratching the urinary tract walls.", iconName: "Droplets" }
    ],
    causes: [
      { title: "Dehydration", description: "Low fluid intake concentrates urine, allowing minerals to crystallize.", iconName: "GlassWater" },
      { title: "Dietary Excess", description: "High intake of oxalates, sodium, animal protein, and refined sugar.", iconName: "Utensils" }
    ],
    treatments: [
      { title: "Lithotriptic Herbs", description: "Ayurvedic Varuna and Pashanbhed to actively break down calcium oxalate crystals.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Constitutional Renal Remedies", description: "Homeopathic Berberis Vulgaris and Lycopodium to ease ureter spasms and aid passage.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Stone Prevention Diet", description: "Low oxalate, low sodium dietary plan with high fluid intake and lemon extract.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "What size of kidney stones can be dissolved naturally?", answer: "Stones up to 8mm usually pass successfully with our natural treatment. Larger stones require careful monitoring but can often be reduced in size." },
      { question: "How can I prevent kidney stones from returning?", answer: "By correcting your urinary pH, staying hydrated, and taking mild Ayurvedic renal tonics periodically, you can permanently halt recurrence." }
    ],
    testimonials: [
      { id: "ks_t1", patientName: "Aman Gupta", location: "Chandigarh", disease: "7mm Renal Stone", rating: 5, duration: "4 Weeks", reviewText: "I had a 7mm stone in my left kidney. Ojas medicines helped pass it within a month. No pain, no surgery!", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["uti", "dysuria"]
  },

  "uti": {
    slug: "uti",
    name: "Urinary Tract Infection (UTI)",
    category: "Urinary Disorders",
    tagline: "Eradicate Bladder Infection & Soothe Burning Urination Naturally",
    overview: "Urinary Tract Infection (UTI) is an infection in any part of the urinary system, most commonly the bladder (cystitis) and urethra. It causes a strong, persistent urge to urinate, a burning sensation during urination, and cloudy or strong-smelling urine. Our treatment targets bacterial clearance while strengthening the bladder's mucosal lining to prevent chronic recurrence.",
    ayurvedaPerspective: "In Ayurveda, UTI is known as 'Mutrakrichra' (difficult urination), caused by an excess of Pitta dosha in the urinary channels (Mutravaha Srotas). Treatment utilizes cooling, antimicrobial, and cleansing herbs like Chandana, Gokshura, and Ushira to calm heat, soothe irritation, and flush toxins.",
    homeopathyPerspective: "Homeopathy provides immediate symptomatic relief for UTIs and stops recurrent patterns. Remedies like Cantharis (for intense burning and urging), Sarsaparilla, and Apis Mellifica target urinary inflammation and boost local immunity.",
    duration: "1 - 2 Weeks",
    risk: "Kidney Infection if Untreated",
    commonAge: "15 - 65 Years",
    recovery: "5 - 7 Days",
    heroImage: "svg:urinary",
    patientsTreated: "6,200+",
    yearsExperience: "14+",
    patientSatisfaction: "93%",
    metaTitle: "Natural UTI & Burning Urination Treatment | Ojas Sanjivani",
    metaDescription: "Relieve UTI burning and frequency naturally. Discover cooling Ayurvedic herbs and homeopathic Cantharis to flush out bacteria safely.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes constitutional homeopathy and anti-inflammatory natural therapeutics to manage recurring bladder infections.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Burning Micturition", description: "A hot, painful, or stinging sensation during or immediately after passing urine.", iconName: "Flame" },
      { title: "Urinary Urgency", description: "An intense, sudden need to urinate, even when the bladder is empty.", iconName: "Clock" },
      { title: "Cloudy or Smelly Urine", description: "Urine that appears turbid, dark, or has a strong, unpleasant odor due to bacterial activity.", iconName: "AlertTriangle" }
    ],
    causes: [
      { title: "Bacterial Infiltration", description: "E. coli or other bacteria entering the urethra and colonizing the bladder.", iconName: "Activity" },
      { title: "Weak Mucosal Immunity", description: "Depleted local bladder defenses make it easy for bacteria to attach and multiply.", iconName: "ShieldCheck" }
    ],
    treatments: [
      { title: "Pitta-Cooling Herbs", description: "Ayurvedic formulations of Gokshuradi Guggulu and Chandraprabha Vati to soothe the urinary tract.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Antimicrobial Homeopathy", description: "Homeopathic Cantharis and Staphysagria to relieve burning pain and stop bacterial growth.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Alkalizing Diet & Hydration", description: "High water intake, coconut water, barley water, and avoiding spicy, acidic foods.", iconName: "Utensils", type: "Diet" }
    ],
    faqs: [
      { question: "Can UTIs be treated without antibiotics?", answer: "Yes, mild to moderate UTIs respond exceptionally well to natural antimicrobials and bladder flushing herbs, avoiding antibiotic side effects and resistance." },
      { question: "Why do my UTIs keep coming back?", answer: "Recurrent UTIs are due to low local mucosal immunity and incomplete clearance of biofilms. Our treatment targets and strengthens your body's defenses to break this cycle." }
    ],
    testimonials: [
      { id: "uti_t1", patientName: "Sneha Nair", location: "Kochi, Kerala", disease: "Chronic UTI", rating: 5, duration: "3 Weeks", reviewText: "I had recurrent UTIs every few months. The homeopathic treatment from Ojas cured the infection completely, and I haven't had a single flare-up in a year.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["kidney-stones", "dysuria"]
  },

  "prostate-enlargement": {
    slug: "prostate-enlargement",
    name: "Prostate Enlargement (BPH)",
    category: "Urinary Disorders",
    tagline: "Reduce Prostate Swelling & Ease Urinary Flow Naturally",
    overview: "Benign Prostatic Hyperplasia (BPH) is a non-cancerous enlargement of the prostate gland, common in aging men. As the prostate swells, it squeezes the urethra, causing weak urine flow, difficulty starting urination, and frequent night trips to the bathroom. Our protocol focuses on reducing prostate tissue inflammation, balancing hormones, and strengthening the bladder.",
    ayurvedaPerspective: "Ayurveda describes prostate enlargement as 'Vatashthila'. It is caused by vitiated Apana Vata accumulating in the pelvic area, creating a firm, swelling-like mass. Treatment uses Vata-soothing, diuretic, and swelling-reducing herbs like Kanchanar Guggulu, Gokshura, and Shilajit.",
    homeopathyPerspective: "Homeopathic treatment focuses on slowing prostate enlargement, improving bladder tone, and relieving urinary hesitation. Remedies like Sabal Serrulata (the premier prostate remedy), Conium, and Chimaphila are chosen based on specific flow symptoms.",
    duration: "8 - 12 Weeks",
    risk: "Urinary Retention & Bladder Infections",
    commonAge: "50 - 80 Years",
    recovery: "6 - 8 Weeks",
    heroImage: "svg:urinary",
    patientsTreated: "3,800+",
    yearsExperience: "18+",
    patientSatisfaction: "92%",
    metaTitle: "Natural Prostate Enlargement (BPH) Treatment | Ojas Sanjivani",
    metaDescription: "Relieve weak urine flow and night frequency naturally. Discover Ayurvedic Kanchanar and homeopathic Sabal Serrulata prostate therapies.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Renal & Uro-Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar has successfully managed hundreds of cases of BPH using targeted Ayurvedic gland-reducing herbs.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Weak Urine Flow", description: "A slow, weak, or interrupted stream of urine during micturition.", iconName: "AlertTriangle" },
      { title: "Nocturia", description: "Waking up multiple times during the night with an urgent need to urinate.", iconName: "Clock" },
      { title: "Urinary Hesitancy", description: "Difficulty starting the urine stream, requiring straining or waiting.", iconName: "Activity" }
    ],
    causes: [
      { title: "Hormonal Aging", description: "Imbalance in testosterone and dihydrotestosterone (DHT) levels stimulates prostate cell growth.", iconName: "Activity" },
      { title: "Pelvic Congestion", description: "Poor pelvic circulation and chronic Vata accumulation inflame the gland.", iconName: "Frown" }
    ],
    treatments: [
      { title: "Gland-Reducing Herbs", description: "Ayurvedic Kanchanar Guggulu and Varuna to reduce prostate swelling and ease pressure.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Flow-Restoring Homeopathy", description: "Homeopathic Sabal Serrulata and Baryta Carb to improve bladder contraction and urine stream.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Pelvic Congestion Exercises", description: "Kegel exercises and targeted yoga asanas to improve pelvic blood flow and reduce pressure.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "Can BPH be reversed without surgery?", answer: "Yes, mild to moderate BPH (Grade 1 & 2) responds very well to natural therapies, significantly reducing gland volume and restoring normal urination." },
      { question: "Is Sabal Serrulata effective for prostate health?", answer: "Absolutely. Sabal Serrulata (Saw Palmetto) is clinically proven in homeopathy to reduce DHT conversion, easing urinary hesitation and night frequency." }
    ],
    testimonials: [
      { id: "pe_t1", patientName: "Harish Mehta", location: "Pune, Maharashtra", disease: "Grade 2 BPH", rating: 5, duration: "2 Months", reviewText: "I had to wake up 4-5 times every night to urinate. After 2 months of Ojas treatment, my urine flow is strong and I only wake up once.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["kidney-stones", "dysuria"]
  },

  "dysuria": {
    slug: "dysuria",
    name: "Dysuria (Painful Urination)",
    category: "Urinary Disorders",
    tagline: "Soothe Urinary Tract Inflammation & Relieve Painful Urination",
    overview: "Dysuria refers to painful, burning, or difficult urination. It is a common symptom of underlying urinary tract irritation, infection, inflammation, or stones. Our treatment focuses on diagnosing the root cause, cooling pelvic heat, and providing rapid relief from pain and burning.",
    ayurvedaPerspective: "In Ayurveda, Dysuria is called 'Mutrakrichra'. It occurs when aggravated Pitta dosha heats up and inflames the urinary tract. Treatment uses cooling, demulcent, and soothing herbs like Ushira, Chandana, and Coriander water to quench the burning sensation.",
    homeopathyPerspective: "Homeopathy offers fast-acting, target-specific remedies for painful urination. Remedies like Cantharis (for burning, drop-by-drop urination), Petroselinum (for sudden, severe pain), and Apis Mellifica reduce swelling and soothe urethral irritation.",
    duration: "1 - 2 Weeks",
    risk: "Systemic Infection Spread",
    commonAge: "10 - 70 Years",
    recovery: "3 - 5 Days",
    heroImage: "svg:urinary",
    patientsTreated: "3,100+",
    yearsExperience: "14+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Dysuria (Painful Urination) Relief | Ojas Sanjivani",
    metaDescription: "Relieve painful and burning urination naturally. Discover cooling Ayurvedic herbs and homeopathic remedies for fast urethral comfort.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy focuses on constitutional analysis and immediate natural bladder anti-inflammatories for painful urination.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Urinary Burning", description: "Sharp, stinging, or hot sensation while passing urine.", iconName: "Flame" },
      { title: "Urinary Hesitancy", description: "Difficulty initiating flow due to severe pain and spasms.", iconName: "Activity" }
    ],
    causes: [
      { title: "Urinary Inflammation", description: "Inflammation of the bladder or urethra due to infection or chemical irritants.", iconName: "AlertTriangle" },
      { title: "Dehydration", description: "Highly concentrated acidic urine irritating the urethral lining.", iconName: "GlassWater" }
    ],
    treatments: [
      { title: "Cooling Demulcents", description: "Ayurvedic Chandanasava and Trinapanchamula decoctions to soothe mucosal lining and flush heat.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Urethral Relief Homeopathy", description: "Homeopathic Cantharis or Sarsaparilla to calm burning pain and bladder spasms.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How quickly can natural remedies relieve painful urination?", answer: "Most patients experience significant relief from burning and pain within 24 to 48 hours of starting our cooling natural protocol." }
    ],
    testimonials: [
      { id: "dy_t1", patientName: "Rahul Sharma", location: "Noida", disease: "Dysuria", rating: 5, duration: "1 Week", reviewText: "I had severe burning while urinating. The Ojas drops worked like magic, relieving the pain within a single day.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["uti", "kidney-stones"]
  },

  "incontinence": {
    slug: "incontinence",
    name: "Urinary Incontinence",
    category: "Urinary Disorders",
    tagline: "Strengthen Bladder Muscles & Prevent Involuntary Leakage Naturally",
    overview: "Urinary Incontinence is the involuntary leakage of urine, commonly presenting as Stress Incontinence (leakage during coughing, laughing, or exercising) or Urge Incontinence (sudden, uncontrollable urge to urinate). It occurs due to weakened pelvic floor muscles or hyperactive bladder nerves. Our natural protocol focuses on strengthening sphincter muscles and calming bladder hypersensitivity.",
    ayurvedaPerspective: "Ayurveda attributes urinary leakage to an imbalance in Apana Vata, which controls the lower excretory functions. Weakness in the bladder muscles (Basti) allows urine to escape. Treatment focuses on strengthening pelvic tissues using herbs like Ashwagandha and Shatavari, alongside local nourishing therapies.",
    homeopathyPerspective: "Homeopathy uses muscle-toning and nerve-calming remedies. Remedies like Causticum (for leakage during coughing or sneezing), Pulsatilla, and Sepia are selected to restore sphincter control and bladder stability.",
    duration: "6 - 10 Weeks",
    risk: "Chronic Skin Irritation & Low Confidence",
    commonAge: "40 - 75 Years",
    recovery: "4 - 6 Weeks",
    heroImage: "svg:urinary",
    patientsTreated: "2,700+",
    yearsExperience: "22+",
    patientSatisfaction: "91%",
    metaTitle: "Natural Urinary Incontinence Treatment | Ojas Sanjivani",
    metaDescription: "Stop bladder leakage and strengthen control naturally. Discover pelvic-toning Ayurvedic herbs and homeopathic Causticum remedies.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Panchakarma & Spine Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai combines localized Ayurvedic pelvic-toning therapies with yoga to help patients regain bladder control.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Accidental Leakage", description: "Involuntary loss of urine during physical exertion, sneezing, coughing, or laughing.", iconName: "AlertTriangle" },
      { title: "Sudden Urge", description: "An overwhelming, sudden necessity to urinate, followed by immediate leakage.", iconName: "Clock" }
    ],
    causes: [
      { title: "Weak Pelvic Floor", description: "Stretching and weakening of pelvic muscles due to childbirth, aging, or obesity.", iconName: "Frown" },
      { title: "Bladder Overactivity", description: "Spasmodic contraction of bladder detrusor muscles caused by nerve irritation.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Pelvic-Toning Herbs", description: "Ayurvedic Ashwagandha and Bala to strengthen bladder sphincter muscles and calm Vata.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Sphincter-Strengthening Homeopathy", description: "Homeopathic Causticum and Sepia to improve muscular tone and bladder nerve control.", iconName: "ShieldCheck", type: "Homeopathy" },
      { title: "Mula Bandha (Kegel Yoga)", description: "Specific pelvic floor contraction exercises to build muscle thickness and bladder support.", iconName: "Activity", type: "Yoga" }
    ],
    faqs: [
      { question: "Is bladder leakage reversible without surgery?", answer: "Yes, by rebuilding pelvic floor muscle thickness and restoring nerve coordination, most cases of stress and urge incontinence can be completely resolved." }
    ],
    testimonials: [
      { id: "ui_t1", patientName: "Nirmala Devi", location: "Kochi, Kerala", disease: "Stress Incontinence", rating: 5, duration: "2 Months", reviewText: "I used to leak urine whenever I coughed. After 2 months of pelvic yoga and Ojas medicines, my leakage has completely stopped.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["uti", "prostate-enlargement"]
  },

  // === 2. ONCOLOGY SUPPORT ===
  "oncology-support": {
    slug: "oncology-support",
    name: "Oncology Support",
    category: "Oncology Support",
    tagline: "Natural Integrative Care to Rebuild Immunity & Strength",
    overview: "Our Oncology Support program provides holistic, non-curative care to assist patients undergoing or recovering from cancer treatments. We do not claim to treat or cure cancer. Instead, we focus on rebuilding the body's natural defense mechanism, restoring vital energy (Ojas), managing treatment side effects (like nausea, fatigue, and appetite loss), and improving the overall quality of life.",
    ayurvedaPerspective: "In Ayurveda, cancer-supportive care focuses on restoring 'Ojas' (vital life force) and correcting 'Dhatu Agni' (tissue metabolism) depleted by aggressive therapies. We use non-toxic, gentle, cellular-nourishing herbs (Rasayanas like Ashwagandha, Guduchi, and Amalaki) to strengthen healthy tissues and detoxify the body.",
    homeopathyPerspective: "Homeopathy is highly effective as supportive care in oncology, particularly for relieving side effects of chemotherapy and radiation. Gentle remedies like Ipecac (for persistent nausea), Radium Bromide (for radiation burns/fatty tissue fatigue), and Arsenicum Album improve appetite and manage emotional distress.",
    duration: "Integrative / Ongoing Support",
    risk: "High Vitality Depletion",
    commonAge: "Any Age",
    recovery: "Continuous Strength Rebuilding",
    heroImage: "svg:oncology",
    patientsTreated: "5,400+",
    yearsExperience: "22+",
    patientSatisfaction: "93%",
    metaTitle: "Integrative Oncology Support & Recovery | Ojas Sanjivani",
    metaDescription: "Rebuild immunity, restore strength, and manage chemotherapy side effects naturally. Discover our gentle Ayurvedic & Homeopathic oncology support care.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Senior Integrative Oncology Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai focuses on non-curative, tissue-restorative Ayurvedic Rasayanas to improve quality of life for recovery patients.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Cancer Recovery Support", slug: "cancer-recovery", description: "Supportive care to rebuild cellular vitality and systemic strength post-treatment.", image: "/images/diseases/autoimmune-disorders.png" },
      { name: "Immunity Rebuilding", slug: "immunity-rebuilding", description: "Boost white blood cell defense and immune coordination naturally.", image: "svg:oncology" },
      { name: "Strength Restoration", slug: "strength-restoration", description: "Combat severe cancer-related fatigue and restore muscular energy.", image: "svg:oncology" },
      { name: "Nausea & Appetite Relief", slug: "nausea-relief", description: "Manage digestive side effects, chemo nausea, and regain healthy weight.", image: "/images/diseases/autoimmune-disorders.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Does this program cure cancer?", answer: "No, we do not treat or cure cancer. Our program is strictly supportive and integrative, designed to work alongside conventional treatments to help you rebuild strength and manage side effects." },
      { question: "Is this safe to take alongside chemotherapy?", answer: "Yes, our supportive therapies use gentle, non-interactive, and nourishing natural substances specifically selected not to interfere with conventional cancer protocols." }
    ],
    testimonials: [
      { id: "os_t1", patientName: "Gopal Krishnan", location: "Chennai", disease: "Post-Chemo Fatigue", rating: 5, duration: "3 Months", reviewText: "After my chemo sessions, I was extremely weak and couldn't eat. Dr. Pillai's gentle recovery tonics restored my appetite and energy, helping me stand on my feet again.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["autoimmune-disorders", "diabetes"]
  },

  "cancer-recovery": {
    slug: "cancer-recovery",
    name: "Cancer Recovery Support",
    category: "Oncology Support",
    tagline: "Rebuild Cellular Vitality & Life Quality Post-Treatment",
    overview: "Cancer Recovery Support is an integrative, non-curative wellness plan for patients who have completed conventional cancer therapies. It is designed to clear residual toxic waste, rebuild healthy tissues, restore damaged cellular vitality, and improve overall physical and psychological well-being. We do not claim to treat cancer.",
    ayurvedaPerspective: "Ayurvedic recovery utilizes 'Rasayana Chikitsa' (rejuvenation therapy) to rebuild 'Dhatus' (tissues) damaged by toxic exposure. It uses sweet, nourishing, and cooling herbs like Shatavari, Ashwagandha, and Yashtimadhu to support tissue repair.",
    homeopathyPerspective: "Homeopathy focuses on constitutional recovery, treating post-treatment toxicosis and restoring vital force. Remedies like Nux Vomica, Cadmium Sulph, and Radium Bromide assist in neutralizing side effects.",
    duration: "12 - 24 Weeks",
    risk: "Severe Post-Treatment Toxicity",
    commonAge: "18 - 80 Years",
    recovery: "Gradual Rejuvenation",
    heroImage: "svg:oncology",
    patientsTreated: "2,200+",
    yearsExperience: "22+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Post-Treatment Cancer Recovery Support | Ojas Sanjivani",
    metaDescription: "Holistic support to rebuild strength after cancer treatments. Gentle Ayurvedic Rasayanas and homeopathic detox remedies improve quality of life.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Senior Integrative Oncology Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai specializes in Ayurvedic Rasayana Chikitsa to restore cellular health and strength post-therapy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Chronic Muscle Fatigue", description: "Deep exhaustion and muscular weakness that does not resolve with rest.", iconName: "BatteryLow" },
      { title: "Toxic Overload", description: "Sluggish liver and kidney function following heavy chemical treatments.", iconName: "AlertTriangle" }
    ],
    causes: [
      { title: "Conventional Side Effects", description: "Aggressive chemotherapy and radiation drain body fluids (Ojas) and destroy healthy tissues.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Rasayana Rejuvenation", description: "Ayurvedic Ashwagandha and Guduchi to stimulate tissue growth and restore vital immunity.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Toxicosis Clearance", description: "Homeopathic Nux Vomica and Radium Bromide to detoxify the liver and kidneys.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is this supportive treatment safe?", answer: "Absolutely. We use highly purified, non-toxic herbal extracts and ultra-diluted homeopathic remedies that do not place any metabolic strain on the body." }
    ],
    testimonials: [
      { id: "cr_t1", patientName: "Siddharth Sen", location: "Kolkata", disease: "Post-Therapy Recovery", rating: 5, duration: "3 Months", reviewText: "This recovery program helped me regain my weight and energy after radiation. I feel normal and active again.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["immunity-rebuilding", "strength-restoration"]
  },

  "immunity-rebuilding": {
    slug: "immunity-rebuilding",
    name: "Immunity Rebuilding",
    category: "Oncology Support",
    tagline: "Boost Natural Cellular Defenses & White Blood Cells Safely",
    overview: "Immunity Rebuilding focuses on supporting and strengthening the body's natural defense systems after conventional cancer treatments, which often severely deplete white blood cells (neutropenia). We utilize gentle, non-stimulating immunomodulators to help the bone marrow and lymphatic systems recover.",
    ayurvedaPerspective: "Ayurveda describes immunity as 'Vyadhikshamatva', governed by Ojas. Rebuilding Ojas uses immunomodulating (Rasayana) herbs like Guduchi (Giloy), Amalaki, and Tulsi, which strengthen macrophages and defend against secondary infections.",
    homeopathyPerspective: "Homeopathy uses immune-balancing remedies to restore bone marrow vitality and blood cell counts. Remedies like Echinacea, Silicea, and Thuja are utilized to stabilize immune responses.",
    duration: "8 - 12 Weeks",
    risk: "Secondary Infections Risk",
    commonAge: "Any Age",
    recovery: "Ongoing Defense Recovery",
    heroImage: "svg:oncology",
    patientsTreated: "1,900+",
    yearsExperience: "18+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Immunity Rebuilding & White Blood Cell Support | Ojas",
    metaDescription: "Restore your immune health naturally. Discover Ayurvedic Giloy and homeopathic Echinacea to rebuild white blood cell defense safely.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Renal & Uro-Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes targeted Vata-Pitta balancing immunomodulators to support bone marrow recovery.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Frequent Infections", description: "High susceptibility to colds, skin infections, or fevers due to low white blood cell counts.", iconName: "AlertTriangle" },
      { title: "Extreme Vulnerability", description: "Feeling physically fragile and easily catches seasonal viruses.", iconName: "ShieldCheck" }
    ],
    causes: [
      { title: "Myelosuppression", description: "Suppression of bone marrow activity by chemotherapy, resulting in fewer immune cells.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Giloy & Tulsi Extracts", description: "Ayurvedic Guduchi to elevate platelet and WBC counts naturally and clear systemic heat.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Immune-Tonic Homeopathy", description: "Homeopathic Echinacea Mother Tincture to stimulate white blood cell production and fight pathogens.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How does Giloy help in rebuilding immunity?", answer: "Giloy (Guduchi) is a proven immunomodulator that boosts the phagocytic activity of macrophages and stimulates white blood cell generation." }
    ],
    testimonials: [
      { id: "ir_t1", patientName: "Rita Banerjee", location: "Kolkata", disease: "Low WBC Count", rating: 5, duration: "2 Months", reviewText: "My WBC count was very low after treatment. Giloy extracts and Echinacea from Ojas helped bring my counts back to normal.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["cancer-recovery", "strength-restoration"]
  },

  "strength-restoration": {
    slug: "strength-restoration",
    name: "Strength Restoration",
    category: "Oncology Support",
    tagline: "Combat Cancer-Related Fatigue & Restore Vital Muscular Energy",
    overview: "Strength Restoration is designed to manage Cancer-Related Fatigue (CRF), a persistent, subjective sense of physical, emotional, and cognitive exhaustion that does not match recent activity. Our natural program focuses on improving mitochondrial energy, restoring muscle mass, and correcting metabolic sluggishness.",
    ayurvedaPerspective: "Ayurveda attributes extreme weakness to 'Mamsa-Medas Dhatu Kshaya' (depletion of muscle and fat tissues). Treatment uses muscle-building, vitalizing herbs like Bala, Ashwagandha, and Shatavari to nourish tissues and increase muscular strength.",
    homeopathyPerspective: "Homeopathy targets deep-seated weakness and post-viral or post-chemical exhaustion. Remedies like China (Cinchona Officinalis - for loss of vital fluids), Phosphoric Acid, and Kalium Phosphoricum provide physical and mental energy.",
    duration: "8 - 12 Weeks",
    risk: "Muscle Wasting & Cachexia",
    commonAge: "18 - 80 Years",
    recovery: "4 - 8 Weeks",
    heroImage: "svg:oncology",
    patientsTreated: "2,100+",
    yearsExperience: "22+",
    patientSatisfaction: "92%",
    metaTitle: "Natural Strength Restoration & Fatigue Relief | Ojas Sanjivani",
    metaDescription: "Relieve cancer-related muscle fatigue and exhaustion naturally. Our Ayurvedic Bala and homeopathic China remedies rebuild energy levels.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Senior Integrative Oncology Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai specializes in tissue-nourishing Ayurvedic protocols and Vrishya therapies to restore muscle strength.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Severe Fatigue", description: "Constant, heavy tiredness that makes even simple tasks like walking feel impossible.", iconName: "BatteryLow" },
      { title: "Muscle Wasting", description: "Loss of muscle tone and physical mass (sarcopenia) due to prolonged metabolic stress.", iconName: "Scale" }
    ],
    causes: [
      { title: "Mitochondrial Depletion", description: "Cellular energy centers damaged by toxic therapies, leading to low ATP production.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Mamsa-Nourishing Herbs", description: "Ayurvedic Ashwagandha and Bala to enhance protein synthesis and rebuild muscle fibers.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Vital Fluid Homeopathy", description: "Homeopathic China and Acid Phos to combat physical drainage and restore nerve energy.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How does Ashwagandha help in muscle recovery?", answer: "Ashwagandha acts as a natural anabolic agent, facilitating muscle tissue repair, reducing cortisol levels, and boosting mitochondrial energy." }
    ],
    testimonials: [
      { id: "sr_t1", patientName: "Karan Johar", location: "Mumbai", disease: "Cancer Fatigue", rating: 5, duration: "6 Weeks", reviewText: "I could barely walk around my room. Within 6 weeks of starting these natural strength remedies, I can walk 2km daily.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["cancer-recovery", "nausea-relief"]
  },

  "nausea-relief": {
    slug: "nausea-relief",
    name: "Nausea & Appetite Relief",
    category: "Oncology Support",
    tagline: "Manage Chemotherapy Nausea & Regain Healthy Digestive Vitality",
    overview: "Chemotherapy-Induced Nausea and Vomiting (CINV) and severe appetite loss (anorexia) can lead to malnutrition and delay recovery. Our supportive program focuses on calming the stomach lining, relaxing the nervous system's vomiting centers, and stimulating natural hunger pathways safely.",
    ayurvedaPerspective: "Ayurveda views chemo-induced nausea as a disturbance in 'Udana Vata' (upward movement) and 'Pachaka Pitta' (digestive heat). Treatment uses cooling, carminative, and stomach-calming herbs like Dadima (Pomegranate), Ardraka (Ginger), Ela (Cardamom), and Yashtimadhu.",
    homeopathyPerspective: "Homeopathy is renowned for relieving nausea and vomiting without side effects. Remedies like Ipecacuanha (for constant nausea), Nux Vomica (for metallic taste and stomach heaviness), and Colchicum are highly effective.",
    duration: "4 - 8 Weeks",
    risk: "Severe Dehydration & Malnutrition",
    commonAge: "Any Age",
    recovery: "1 - 2 Weeks",
    heroImage: "svg:oncology",
    patientsTreated: "1,700+",
    yearsExperience: "14+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Chemo Nausea & Appetite Support | Ojas Sanjivani",
    metaDescription: "Relieve chemotherapy nausea and restore appetite naturally. Discover stomach-calming Ayurvedic ginger and homeopathic Ipecac remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes gentle homeopathic anti-emetics and digestive stimulators to relieve nausea in post-chemo care.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Persistent Nausea", description: "Constant feeling of stomach sickness, salivation, or gagging reflex.", iconName: "AlertTriangle" },
      { title: "Complete Loss of Appetite", description: "Aversion to food, metallic taste in the mouth, and inability to digest meals.", iconName: "Frown" }
    ],
    causes: [
      { title: "Vagus Nerve Irritation", description: "Conventional treatments irritate the gut mucosa, releasing serotonin which triggers the brain's vomiting center.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Deepana & Pachana Herbs", description: "Ayurvedic Ginger-Lime mixtures and Dadimadi Ghrita to soothe the stomach and stimulate taste buds.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Anti-Emetic Homeopathy", description: "Homeopathic Ipecacuanha and Nux Vomica to soothe gut linings and block the gag reflex.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How does Nux Vomica help in chemotherapy nausea?", answer: "Nux Vomica calms the liver and digestive tract, neutralizing the toxic feeling, metallic taste, and stomach heaviness that follow chemical infusions." }
    ],
    testimonials: [
      { id: "nr_t1", patientName: "Meera Nair", location: "Chennai", disease: "Chemo Nausea", rating: 5, duration: "3 Weeks", reviewText: "I was losing weight rapidly due to nausea. These homeopathic drops helped me eat without throwing up.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["strength-restoration", "cancer-recovery"]
  },

  // === 3. ENT ===
  "ent": {
    slug: "ent",
    name: "ENT Disorders",
    category: "ENT",
    tagline: "Natural Ear, Nose & Throat Care with Ayurveda & Homeopathy",
    overview: "Ear, Nose, and Throat (ENT) disorders affect key sensory and respiratory functions. Conditions like chronic sinusitis, allergic rhinitis, tonsil inflammation, ear infections, and tinnitus cause constant congestion, pain, and sensory impairment. Our integrated clinical protocols focus on clearing blockages, soothing inflamed mucosal tissues, boosting local immunity, and achieving long-term ENT wellness naturally.",
    ayurvedaPerspective: "In Ayurveda, ENT disorders are classified under 'Shalakya Tantra' (supraclavicular diseases). Aggravation of Kapha and Vata doshas in the head area blocks the sensory channels. Treatment focuses on 'Nasyam' (nasal administration of oils) and Kapha-clearing herbs like Tulsi, Pippali, Haridra, and Yashtimadhu to clear sinuses and ears.",
    homeopathyPerspective: "Homeopathy treats ENT disorders by identifying constitutional allergies and tissue susceptibilities. Remedies like Kali Bich (for thick sinus discharge), Hepar Sulph (for painful tonsils), Belladonna (for acute ear congestion), and Chininum Sulph (for ear ringing) provide rapid, gentle relief.",
    duration: "Acute / Chronic Support",
    risk: "Hearing & Respiratory Strain",
    commonAge: "5 - 75 Years",
    recovery: "2 - 4 Weeks",
    heroImage: "svg:ent",
    patientsTreated: "9,500+",
    yearsExperience: "14+",
    patientSatisfaction: "94%",
    metaTitle: "Natural ENT, Sinus & Ear Ringing Treatment | Ojas Sanjivani",
    metaDescription: "Relieve chronic sinusitis, tonsillitis, ear infections, and tinnitus naturally. Our expert integrated Ayurveda & Homeopathy doctors restore ENT health.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic ENT Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in pediatric and adult chronic sinusitis, recurring tonsillitis, and allergic rhinitis management using homeopathy.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Sinusitis", slug: "sinusitis", description: "Clear nasal passages, relieve headache, and reduce sinus cavity inflammation.", image: "svg:ent" },
      { name: "Tonsillitis", slug: "tonsillitis", description: "Soothe throat pain, reduce swelling, and prevent recurring tonsil infections.", image: "svg:ent" },
      { name: "Tinnitus", slug: "tinnitus", description: "Calm auditory nerve irritation and manage persistent ringing in the ears.", image: "svg:ent" },
      { name: "Allergic Rhinitis", slug: "allergic-rhinitis", description: "Control sneezing, runny nose, and itchy eyes caused by environmental allergens.", image: "svg:ent" },
      { name: "Ear Infections", slug: "ear-infections", description: "Relieve earache, drain fluid congestion, and clear middle ear infections.", image: "svg:ent" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Can chronic sinusitis be cured without nasal sprays?", answer: "Yes, by draining thick mucus naturally, clearing chronic inflammation, and strengthening local nasal immunity, we cure sinusitis without habit-forming chemical sprays." },
      { question: "Is tonsillectomy avoidable in kids?", answer: "In over 85% of pediatric tonsillitis cases, constitutional homeopathic remedies and Kapha-balancing Ayurvedic herbs successfully shrink tonsils, avoiding surgery." }
    ],
    testimonials: [
      { id: "ent_t1", patientName: "Aman Sen", location: "Kolkata", disease: "Chronic Sinusitis", rating: 5, duration: "2 Months", reviewText: "I had daily morning headaches and nasal blocks. Dr. Roy's homeopathic drops and Ayurvedic Nasya oil cleared my sinuses completely.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["asthma", "bronchitis"]
  },

  "sinusitis": {
    slug: "sinusitis",
    name: "Sinusitis",
    category: "ENT",
    tagline: "Drain Congested Sinuses & Relieve Facial Headache Naturally",
    overview: "Sinusitis (Sinus Infection) is the inflammation of the tissue lining the sinuses, leading to blocked nasal passages, thick mucus discharge, facial pressure, and throbbing headaches around the eyes. Chronic sinusitis persists for months. Our treatment focuses on draining congested mucus, fighting bacterial/viral activity, and reducing mucosal swelling.",
    ayurvedaPerspective: "Ayurveda calls Sinusitis 'Pinasa' or 'Dushta Pratishyaya', primarily caused by Kapha and Vata doshas blocking the head channels. Treatment employs 'Nasya' (herbal nasal drops) to liquefy and expel mucus, along with warming herbs like Haridra (Turmeric) and Sunthi (Dry Ginger).",
    homeopathyPerspective: "Homeopathy provides specific remedies to thin thick, stringy mucus and relieve facial pain. Remedies like Kali Bichromicum, Pulsatilla, and Silicea reduce sinus inflammation and enhance drainage naturally.",
    duration: "2 - 4 Weeks",
    risk: "Chronic Bronchitic Congestion",
    commonAge: "15 - 60 Years",
    recovery: "1 - 2 Weeks",
    heroImage: "svg:ent",
    patientsTreated: "3,900+",
    yearsExperience: "14+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Sinusitis & Sinus Headache Relief | Ojas Sanjivani",
    metaDescription: "Relieve sinus congestion and pressure naturally. Discover Ayurvedic Nasya oil and homeopathic Kali Bich remedies for clear sinuses.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic ENT Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes constitutional homeopathy and anti-inflammatory natural therapeutics to manage recurring sinus blockages.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Nasal Congestion", description: "Difficulty breathing through the nose due to thick, blocked nasal discharge.", iconName: "AlertTriangle" },
      { title: "Facial Pressure", description: "Throbbing pain or tenderness around the eyes, cheeks, forehead, and bridge of the nose.", iconName: "Activity" }
    ],
    causes: [
      { title: "Kapha Accumulation", description: "Excess Kapha (mucus) forming a breeding ground for bacterial and viral infections.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Anu Taila Nasya", description: "Ayurvedic herbal nasal drops to liquefy stuck mucus, lubricate nasal lining, and reduce pressure.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Mucus-Clearing Homeopathy", description: "Homeopathic Kali Bich and Silicea to resolve thick yellow-green discharge and ease facial pain.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is Nasya therapy painful?", answer: "No, Nasya involves gently instilling 2-4 drops of warm medicated oil into each nostril. It is soothing and highly effective for sinus drainage." }
    ],
    testimonials: [
      { id: "sn_t1", patientName: "Rahul Sen", location: "Kolkata", disease: "Chronic Sinusitis", rating: 5, duration: "3 Weeks", reviewText: "My sinus headache is completely gone after starting these remedies. Highly recommend!", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["allergic-rhinitis", "tonsillitis"]
  },

  "tonsillitis": {
    slug: "tonsillitis",
    name: "Tonsillitis",
    category: "ENT",
    tagline: "Shrink Swollen Tonsils & Soothe Throat Pain Naturally",
    overview: "Tonsillitis is the inflammation of the tonsils, two oval-shaped pads of tissue at the back of the throat, caused by viral or bacterial infections. It causes severe sore throat, difficulty swallowing, swollen lymph nodes, and fever. Repeated episodes often lead to surgical recommendations. Our natural care shrinks tonsils and builds lymphatic defense.",
    ayurvedaPerspective: "Ayurveda calls Tonsillitis 'Tundikeri', a Kapha-Pitta disorder where toxins (Ama) inflame the throat tissue. Treatment utilizes gargling with anti-inflammatory decoctions (Kavala) like Triphala or turmeric water, and taking herbs like Khadiradi Vati to fight infections.",
    homeopathyPerspective: "Homeopathy is highly effective for reducing tonsil enlargement and relieving acute throat pain. Remedies like Baryta Carbonica (for kids prone to tonsillitis), Belladonna (for bright red, painful throat), and Hepar Sulph are primary choices.",
    duration: "1 - 3 Weeks",
    risk: "Recurrent Strep Throat & Surgery",
    commonAge: "3 - 20 Years",
    recovery: "5 - 7 Days",
    heroImage: "svg:ent",
    patientsTreated: "3,200+",
    yearsExperience: "14+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Tonsillitis & Sore Throat Treatment | Ojas Sanjivani",
    metaDescription: "Avoid tonsil surgery naturally. Discover Ayurvedic gargles and homeopathic Baryta Carb to shrink swollen tonsils and boost throat immunity.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic ENT Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy focuses on pediatric tonsillar hypertrophy and lymphatic immune stabilization using homeopathy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Difficulty Swallowing", description: "Severe pain and constriction in the throat while swallowing food or liquids (dysphagia).", iconName: "AlertTriangle" },
      { title: "Swollen Tonsils", description: "Enlarged, red tonsils at the back of the throat, sometimes with white pus spots.", iconName: "Activity" }
    ],
    causes: [
      { title: "Lymphatic Congestion", description: "Weak throat defenses allow viral or bacterial pathogens to colonize tonsillar tissue.", iconName: "ShieldCheck" }
    ],
    treatments: [
      { title: "Kavala (Herbal Gargles)", description: "Ayurvedic warm decoctions of Triphala, Turmeric, and Honey to reduce throat congestion.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Tonsil-Shrinking Homeopathy", description: "Homeopathic Baryta Carb and Belladonna to clear throat heat and reduce glandular swelling.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Can swollen tonsils shrink back to normal?", answer: "Yes, by clearing local lymphatic congestion and controlling chronic infection, our natural remedies can successfully shrink tonsils to their normal size." }
    ],
    testimonials: [
      { id: "ts_t1", patientName: "Aryan Gupta", location: "Delhi", disease: "Recurrent Tonsillitis", rating: 5, duration: "2 Months", reviewText: "My son's tonsils were so swollen he couldn't swallow. Dr. Roy's homeopathic drops shrank them, saving him from surgery.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["sinusitis", "ear-infections"]
  },

  "tinnitus": {
    slug: "tinnitus",
    name: "Tinnitus",
    category: "ENT",
    tagline: "Calm Auditory Nerve Irritation & Reduce Ear Ringing Naturally",
    overview: "Tinnitus is the perception of noise or ringing in the ears when no external sound is present. It can manifest as buzzing, roaring, clicking, or whistling, and is often linked to age-related hearing loss, ear injury, or circulatory disorders. It causes severe sleep issues and anxiety. Our treatment focuses on calming auditory nerve excitability and improving local blood flow.",
    ayurvedaPerspective: "Ayurveda calls Tinnitus 'Karnanada'. It is a classic Vata vyadhi where excessive Vata dosha accumulates in the ear channels (Shabdavaha Srotas), causing sound disturbances. Treatment uses ear-filling therapies (Karna Purana) with warm medicated oils like Bilva Taila and Vata-pacifying herbs.",
    homeopathyPerspective: "Homeopathic treatment focuses on reducing auditory nerve sensitivity and stabilizing inner ear blood circulation. Remedies like Chininum Sulphuricum (for roaring/ringing), Natrum Salicylia, and Kali Phosphoricum are primary.",
    duration: "8 - 16 Weeks",
    risk: "Chronic Auditory Fatigue & Sleep Loss",
    commonAge: "30 - 70 Years",
    recovery: "6 - 12 Weeks",
    heroImage: "svg:ent",
    patientsTreated: "2,500+",
    yearsExperience: "22+",
    patientSatisfaction: "90%",
    metaTitle: "Natural Tinnitus (Ear Ringing) Treatment | Ojas Sanjivani",
    metaDescription: "Calm buzzing and ringing in your ears naturally. Discover Ayurvedic Karna Purana and homeopathic Chininum Sulph ear therapies.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Panchakarma & Spine Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai combines ear-lubricating Karna Purana and nervous system balancing Vata herbs to manage Tinnitus.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Ringing or Buzzing", description: "Constant or intermittent ringing, buzzing, roaring, or whistling noise in one or both ears.", iconName: "AlertTriangle" },
      { title: "Mental Distress", description: "Difficulty concentrating, insomnia, and irritability caused by persistent internal noise.", iconName: "Brain" }
    ],
    causes: [
      { title: "Vata Dryness", description: "Dehydration of auditory nerves and micro-capillaries of the inner ear due to elevated Vata.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Karna Purana Oil", description: "Ayurvedic warm Bilva Taila or Apamarga Kshar Taila instilled in the ears to lubricate auditory pathways.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Nerve-Calming Homeopathy", description: "Homeopathic Chininum Sulph and Kali Phos to reduce nerve hyperexcitablity and roaring sensations.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is Karna Purana safe for open eardrums?", answer: "No, Karna Purana is only performed if the eardrum (tympanic membrane) is intact. Our doctors carefully examine your ear canal before initiating oil therapy." }
    ],
    testimonials: [
      { id: "ti_t1", patientName: "Prem Prakash", location: "Kochi, Kerala", disease: "Tinnitus", rating: 5, duration: "3 Months", reviewText: "I had a constant high-pitched whistle in my left ear. The Karna Purana oil and tablets reduced the sound by 80%. I can finally sleep in peace.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["sinusitis", "migraine"]
  },

  "allergic-rhinitis": {
    slug: "allergic-rhinitis",
    name: "Allergic Rhinitis",
    category: "ENT",
    tagline: "Desensitize Nasal Allergies & Stop Sneezing Naturally",
    overview: "Allergic Rhinitis (Hay Fever) is an allergic response to specific airborne allergens like pollen, dust mites, pet dander, or mold. It triggers severe fits of sneezing, watery eyes, an itchy nose, nasal congestion, and post-nasal drip. Our integrated program desensitizes your body's immune response rather than temporarily drying up mucus.",
    ayurvedaPerspective: "Ayurveda classifies allergic rhinitis as 'Vata-Kaphaja Pratishyaya', linked to low metabolic fire (Agni) causing accumulation of toxins (Ama) which makes the respiratory lining hyper-reactive. Treatment uses digestive spices, Nasya oil, and herbs like Haridra Khanda.",
    homeopathyPerspective: "Homeopathic treatment focuses on immune desensitization, reducing hypersensitivity to dust and pollen. Remedies like Allium Cepa (for burning runny nose/tears), Arsenicum Album, and Sabadilla provide excellent long-term relief.",
    duration: "4 - 8 Weeks",
    risk: "Progression to Allergic Asthma",
    commonAge: "10 - 55 Years",
    recovery: "3 - 5 Weeks",
    heroImage: "svg:ent",
    patientsTreated: "4,700+",
    yearsExperience: "14+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Allergic Rhinitis & Sneezing Relief | Ojas Sanjivani",
    metaDescription: "Overcome dust and pollen allergies naturally. Discover Ayurvedic Haridra and desensitizing homeopathic Allium Cepa remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic ENT Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes constitutional desensitization to permanent relieve patients from environmental allergies.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Violent Sneezing", description: "Repetitive, severe sneezing fits, especially in the mornings or upon exposure to dust.", iconName: "AlertTriangle" },
      { title: "Watery Itchy Eyes", description: "Red, irritated, and watering eyes due to histaminic reactions.", iconName: "Droplets" }
    ],
    causes: [
      { title: "Hyper-Reactive Mast Cells", description: "An overactive immune system releasing excess histamine in response to harmless dust or pollen.", iconName: "ShieldCheck" }
    ],
    treatments: [
      { title: "Haridra Khanda", description: "Ayurvedic turmeric-based granule preparation to build respiratory tissue strength and reduce allergen reaction.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Allium Cepa Drops", description: "Homeopathic Allium Cepa and Sabadilla to soothe runny nose, watery eyes, and stop sneezing fits.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Can homeopathy cure dust allergy permanently?", answer: "Yes. By altering your body's constitutional susceptibility, homeopathy desensitizes your immune system so it no longer triggers allergic rhinitis upon dust exposure." }
    ],
    testimonials: [
      { id: "ar_t1", patientName: "Nisha Varghese", location: "Kochi, Kerala", disease: "Chronic Dust Allergy", rating: 5, duration: "2 Months", reviewText: "I used to sneeze 20 times every morning. The Ojas remedies completely cured my allergy, and I no longer need daily antihistamines.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["sinusitis", "asthma"]
  },

  "ear-infections": {
    slug: "ear-infections",
    name: "Ear Infections",
    category: "ENT",
    tagline: "Clear Otitis Media & Relieve Acute Ear Pain Naturally",
    overview: "Ear Infections (Otitis Media/Externa) are bacterial or viral infections of the ear canal or middle ear cavity, often secondary to colds and sinus blocks. They cause sharp, shooting earache, fluid discharge, temporary hearing dampness, and fever. Our treatment focuses on draining fluid from the Eustachian tube, clearing infection, and reducing painful swelling.",
    ayurvedaPerspective: "In Ayurveda, ear infections are known as 'Karnashula' (ear pain) or 'Karnaroga'. They occur due to vitiation of Kapha and Vata doshas pushing fluid up into the ear. Treatment uses warm antibacterial oils like Apamarga Kshar Taila (only if the eardrum is intact) and gargling.",
    homeopathyPerspective: "Homeopathy offers swift and highly effective relief for acute ear pain and middle ear fluid. Remedies like Chamomilla (for severe pain in kids), Belladonna, Pulsatilla (for thick ear discharge), and Hepar Sulph are primary.",
    duration: "1 - 2 Weeks",
    risk: "Eardrum Perforation & Hearing Loss",
    commonAge: "2 - 50 Years",
    recovery: "3 - 5 Days",
    heroImage: "svg:ent",
    patientsTreated: "2,800+",
    yearsExperience: "14+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Ear Infection & Earache Treatment | Ojas Sanjivani",
    metaDescription: "Relieve earache and clear ear fluid naturally. Discover Ayurvedic antibacterial drops and homeopathic Pulsatilla ear therapies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic ENT Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in pediatric middle ear infections and drainage of fluid congestion using gentle homeopathy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Sharp Earache", description: "Intense, throbbing, or shooting pain inside the ear canal, worsening at night.", iconName: "AlertTriangle" },
      { title: "Fluid Discharge", description: "Yellow, watery, or pus-like discharge draining from the ear canal (otorrhea).", iconName: "Droplets" }
    ],
    causes: [
      { title: "Eustachian Tube Blockage", description: "Cold or sinus swelling blocks fluid drainage from the middle ear, allowing bacteria to grow.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Apamarga Kshar Taila", description: "Ayurvedic alkaline and antibacterial ear drops to dry fluid buildup and soothe pain.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Pulsatilla & Chamomilla", description: "Homeopathic remedies to reduce inner ear swelling, ease pain, and dry pus discharge.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is it safe to put ear drops if the eardrum is ruptured?", answer: "No, never. If there is a hole in the eardrum, liquid should never be put into the ear. We prescribe oral homeopathic remedies which dry the infection from within." }
    ],
    testimonials: [
      { id: "ei_t1", patientName: "Aarav Sharma", location: "Delhi", disease: "Acute Otitis Media", rating: 5, duration: "1 Week", reviewText: "My daughter was crying from ear pain. Dr. Roy's remedies relieved the pain within hours and the fluid drained out safely.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["tonsillitis", "sinusitis"]
  },

  // === 4. CHILD HEALTH ===
  "child-health": {
    slug: "child-health",
    name: "Child Health",
    category: "Child Health",
    tagline: "Gentle & Non-Toxic Pediatric Care with Ayurveda & Homeopathy",
    overview: "Child health requires special care, utilizing natural, non-habit-forming, and non-toxic treatments. From low immunity and recurring colds to poor appetite, hyperactivity, and bedwetting, pediatric issues can be gently corrected by restoring metabolic fire and calming nervous systems. Our integrated clinical protocols focus on strengthening children's natural defenses, promoting healthy growth, and building robust cognitive stability safely.",
    ayurvedaPerspective: "In Ayurveda, child healthcare is known as 'Kaumarabhritya'. Children have a naturally Kapha-dominant constitution, making them prone to congestion, low appetite (Agnimandya), and digestive sluggishness. Treatment focuses on gentle, sweet Rasayanas like Aravindasava, Kumaryasava, and herbs like Brahmi, Shankhapushpi, and Madhu (Honey) to stimulate growth and cognitive focus.",
    homeopathyPerspective: "Homeopathy is the ideal therapy for children due to its sweet, easy-to-take pills and complete lack of side effects. It works constitutionally to treat recurrent tonsils, hyperactive behaviors, bedwetting, and weak digestion. Remedies like Chamomilla (for irritability), Calcarea Carb (for slow development), and Baryta Carb build immunity and confidence.",
    duration: "Pediatric / Growth Support",
    risk: "Impaired Growth & Development",
    commonAge: "1 - 14 Years",
    recovery: "2 - 6 Weeks",
    heroImage: "svg:child-health",
    patientsTreated: "7,800+",
    yearsExperience: "14+",
    patientSatisfaction: "95%",
    metaTitle: "Gentle Child Health & Immunity Treatment | Ojas Sanjivani",
    metaDescription: "Boost your child's immunity, appetite, and cognitive health naturally. Discover safe, sweet, and non-toxic Ayurveda & Homeopathy pediatric treatments.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Pediatric Homeopath & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in safe, non-invasive homeopathic care for pediatric recurring allergies, growth issues, and behavioral balance.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Child Immunity", slug: "child-immunity", description: "Build deep immunity against frequent childhood colds, coughs, and fevers.", image: "svg:child-health" },
      { name: "Loss of Appetite", slug: "loss-of-appetite", description: "Stimulate natural hunger and improve nutrient absorption in growing kids.", image: "svg:child-health" },
      { name: "Hyperactivity", slug: "hyperactivity", description: "Calm an overactive nervous system and improve mental focus and school performance.", image: "svg:child-health" },
      { name: "Bedwetting Care", slug: "bedwetting", description: "Strengthen nocturnal bladder tone and resolve stress-induced bedwetting.", image: "svg:child-health" },
      { name: "Pediatric Cough & Cold", slug: "pediatric-cough-cold", description: "Clear nasal passages and relieve chest congestion gently without heavy syrups.", image: "svg:child-health" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Are homeopathic pills safe for infants?", answer: "Yes, homeopathic pills (globules) are highly diluted and completely non-toxic. They are perfectly safe and easy to administer even for newborn infants." },
      { question: "How does Ayurveda improve child immunity?", answer: "By optimizing 'Agni' (digestive fire) and using gentle Rasayana herbs like Pippali, Amalaki, and Yashtimadhu, Ayurveda strengthens a child's natural defense against pathogens." }
    ],
    testimonials: [
      { id: "ch_t1", patientName: "Aaradhya Sen", location: "Kolkata", disease: "Low Pediatric Immunity", rating: 5, duration: "3 Months", reviewText: "My son used to catch a cold every week. After Dr. Roy's homeopathic treatment, he hasn't missed school once in six months.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["allergic-rhinitis", "ear-infections"]
  },

  "child-immunity": {
    slug: "child-immunity",
    name: "Child Immunity",
    category: "Child Health",
    tagline: "Build Strong Natural Defenses Against Frequent Childhood Infections",
    overview: "Child Immunity Support targets children who suffer from recurrent respiratory infections, seasonal fevers, and constant school absences. Instead of relying on repeated antibiotics, our protocol strengthens the child's lymphatic system and mucosal defense lines naturally.",
    ayurvedaPerspective: "In Ayurveda, low child immunity is due to weak 'Bala' (strength) and 'Agni'. We prescribe gentle tonics like Aravindasava and Suvarnaprashana-like formulations containing Guduchi and Madhu to enhance immune tissue response.",
    homeopathyPerspective: "Homeopathy uses deep-acting constitutional remedies to correct immune vulnerabilities. Remedies like Calcarea Carbonica (for sweaty, catch-cold-easily children), Tuberculinum, and Silicea build robust immunity.",
    duration: "8 - 12 Weeks",
    risk: "Recurrent Antibiotic Dependency",
    commonAge: "2 - 12 Years",
    recovery: "6 - 8 Weeks",
    heroImage: "svg:child-health",
    patientsTreated: "3,500+",
    yearsExperience: "14%",
    patientSatisfaction: "96%",
    metaTitle: "Natural Child Immunity & Recurrent Cold Treatment | Ojas",
    metaDescription: "Rebuild your child's natural immunity without antibiotics. Safe, sweet homeopathic and Ayurvedic pediatric remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Pediatric Homeopath & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in constitutional pediatric care to prevent recurring infections and improve growth markers.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Recurrent Colds & Fevers", description: "Frequent viral infections, especially when the weather changes or school starts.", iconName: "AlertTriangle" },
      { title: "Slow Recovery", description: "Child takes a long time to bounce back after falling ill, feeling constantly lethargic.", iconName: "BatteryLow" }
    ],
    causes: [
      { title: "Weak Primary Defenses", description: "Immature lymphatic system and mucosal linings vulnerable to environmental pathogens.", iconName: "ShieldCheck" }
    ],
    treatments: [
      { title: "Ojas-Building Herbs", description: "Ayurvedic Aravindasava and Ashwagandha syrup to nourish tissues and improve digestion.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Constitutional Rebuilders", description: "Homeopathic Calcarea Carb and Silicea to boost lymphatic drainage and strengthen bone/muscle immunity.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How long does it take to see improvements in a child's immunity?", answer: "Parents typically observe a significant reduction in the frequency and severity of colds within 4 to 6 weeks of starting our treatment." }
    ],
    testimonials: [
      { id: "ci_t1", patientName: "Manav Shah", location: "Mumbai", disease: "Low Immunity", rating: 5, duration: "2 Months", reviewText: "This treatment transformed my daughter. Her constant runny nose and lethargy are completely gone.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["pediatric-cough-cold", "tonsillitis"]
  },

  "loss-of-appetite": {
    slug: "loss-of-appetite",
    name: "Loss of Appetite (Pediatric)",
    category: "Child Health",
    tagline: "Stimulate Healthy Hunger & Improve Nutrient Absorption in Kids",
    overview: "Pediatric Loss of Appetite (Agnimandya) leads to nutritional deficiencies, low weight, and developmental delays. Parents often struggle with 'picky eaters'. Our program focuses on correcting the child's digestive fire, clearing gut worms, and stimulating natural hunger pathways.",
    ayurvedaPerspective: "Ayurveda attributes poor appetite to Kapha dosha dampening the 'Jatharagni' (digestive fire) in the stomach. We use carminative, digestive-stimulating herbs like Pippali, Chitrak, Sunthi, and Aravindasava to restore hunger.",
    homeopathyPerspective: "Homeopathy offers excellent appetite-stimulating remedies that resolve metabolic sluggishness and food aversion. Remedies like Alfalfa, Cina (for worm-induced hunger issues), and Lycopodium are primary.",
    duration: "4 - 8 Weeks",
    risk: "Malnutrition & Growth Stunting",
    commonAge: "2 - 10 Years",
    recovery: "2 - 3 Weeks",
    heroImage: "svg:child-health",
    patientsTreated: "2,900+",
    yearsExperience: "14%",
    patientSatisfaction: "94%",
    metaTitle: "Natural Treatment for Loss of Appetite in Children | Ojas",
    metaDescription: "Stimulate your child's appetite naturally. Discover Ayurvedic carminatives and homeopathic Alfalfa tonics for healthy weight gain.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Pediatric Homeopath & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes gentle, non-chemical homeopathic tonics like Alfalfa to stimulate natural metabolism in growing kids.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Refusal of Food", description: "Extreme pickiness, lack of interest in meals, and long eating durations.", iconName: "Frown" },
      { title: "Poor Weight Gain", description: "Failure to meet age-appropriate weight milestones and general physical thinness.", iconName: "Scale" }
    ],
    causes: [
      { title: "Digestive Sluggishness", description: "Weak Jatharagni (digestive fire) leading to slow stomach emptying and gas buildup.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Agni-Stimulating Herbs", description: "Ayurvedic Aravindasava and mild Pippali formulations to boost digestive secretions.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Alfalfa Digestive Tonic", description: "Homeopathic Alfalfa and Lycopodium drops to stimulate appetite and improve nutrient absorption.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Can gut worms cause loss of appetite in kids?", answer: "Yes, intestinal parasites release toxins that suppress appetite or cause sugar-cravings. Homeopathic Cina and Ayurvedic worm-clearing herbs resolve this effectively." }
    ],
    testimonials: [
      { id: "la_t1", patientName: "Aaryan Kapoor", location: "Noida", disease: "Poor Appetite", rating: 5, duration: "1 Month", reviewText: "My son began eating full meals within 3 weeks of starting the Alfalfa drops. His energy levels have skyrocketed.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["child-immunity", "constipation"]
  },

  "hyperactivity": {
    slug: "hyperactivity",
    name: "Hyperactivity & ADHD Support",
    category: "Child Health",
    tagline: "Calm Hyperactive Nerves & Improve Cognitive Focus Naturally",
    overview: "Hyperactivity, impulsivity, and poor attention spans (often diagnosed as ADHD) can affect a child's academic growth and social development. Instead of using heavy behavioral sedatives, our natural protocol pacifies brain Vata, nourishes cognitive tissues, and calms hyperactive neural patterns.",
    ayurvedaPerspective: "Ayurveda links hyperactivity to an instability in Vata dosha affecting the 'Manovaha Srotas' (mental channels). We use 'Medhya Rasayanas' (brain rejuvenators) like Brahmi, Shankhapushpi, and Jyotishmati to ground Vata, nourish brain tissues, and enhance focus.",
    homeopathyPerspective: "Homeopathy acts on the child's neuro-emotional constitution. Remedies like Chamomilla (for restless, angry children), Tarentula Hispanica (for constant physical motion/dancing), and Baryta Carb improve attention span without sedation.",
    duration: "12 - 24 Weeks",
    risk: "Social & Academic Performance Lag",
    commonAge: "4 - 14 Years",
    recovery: "8 - 12 Weeks",
    heroImage: "svg:child-health",
    patientsTreated: "2,100+",
    yearsExperience: "14%",
    patientSatisfaction: "91%",
    metaTitle: "Natural ADHD & Hyperactivity Treatment for Kids | Ojas",
    metaDescription: "Calm child restlessness and improve school focus naturally. Discover Ayurvedic Medhya Rasayanas and homeopathic Tarentula therapies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Pediatric Homeopath & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes constitutional homeopathic medicine to calm sensory systems and balance cognitive pathways in children.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Inability to Sit Still", description: "Constant fidgeting, running around, and squirming in seats.", iconName: "AlertTriangle" },
      { title: "Poor Focus", description: "Easy distractibility, difficulty finishing tasks, and poor listening skills.", iconName: "Brain" }
    ],
    causes: [
      { title: "Neuro-Vata Instability", description: "Hyper-excitability of brain nerves caused by elevated Vata dosha and high sensory overload.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Medhya Rasayanas", description: "Ayurvedic Brahmi and Shankhapushpi syrups to build focus, calm anxiety, and nourish memory.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Sensory-Calming Homeopathy", description: "Homeopathic Tarentula Hisp and Chamomilla to pacify motor restlessness and reduce impulsivity.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Will these medicines make my child sleepy or dull?", answer: "No. Unlike conventional ADHD sedatives, our natural medicines do not cause drowsiness. They improve focus by organizing brain waves and calming nervous tension." }
    ],
    testimonials: [
      { id: "ha_t1", patientName: "Kabir Malhotra", location: "Pune", disease: "ADHD Symptoms", rating: 5, duration: "3 Months", reviewText: "Kabir is much calmer now. His teacher says his school focus and writing have improved tremendously.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["insomnia", "child-immunity"]
  },

  "bedwetting": {
    slug: "bedwetting",
    name: "Bedwetting (Enuresis)",
    category: "Child Health",
    tagline: "Strengthen Bladder Control & Resolve Nocturnal Enuresis Gently",
    overview: "Nocturnal Enuresis (Bedwetting) is involuntary urination during sleep in children who are past the age of toilet training. It is often caused by small functional bladder capacity, deep sleep patterns, or emotional stress. Our treatment focuses on strengthening bladder sphincter muscles and calming nocturnal nerve systems.",
    ayurvedaPerspective: "Ayurveda views bedwetting (Shayya Mutra) as a Vata-Kapha disorder in the urinary tract. Aggravated Kapha creates deep sleep states, while Vata causes bladder muscle weakness. We use strengthening herbs like Ashwagandha and Vacha to balance sleep and bladder tone.",
    homeopathyPerspective: "Homeopathy is highly successful in treating bedwetting by addressing bladder weakness and emotional stress. Remedies like Equisetum (for deep sleepers with bladder pain), Kreosotum (for bedwetting during first sleep), and Causticum are highly effective.",
    duration: "6 - 12 Weeks",
    risk: "Severe Low Self-Esteem",
    commonAge: "5 - 12 Years",
    recovery: "4 - 8 Weeks",
    heroImage: "svg:child-health",
    patientsTreated: "2,400+",
    yearsExperience: "14%",
    patientSatisfaction: "93%",
    metaTitle: "Natural Bedwetting (Enuresis) Treatment for Kids | Ojas",
    metaDescription: "Resolve child bedwetting naturally and safely. Discover sphincter-strengthening Ayurvedic herbs and homeopathic Equisetum remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Pediatric Homeopath & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy focuses on the physical bladder tone and neuro-emotional triggers of bedwetting using gentle homeopathy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Nocturnal Leakage", description: "Involuntary release of urine during deep sleep, occurring multiple times a week.", iconName: "AlertTriangle" },
      { title: "Deep Sleep Pattern", description: "Child sleeps so soundly that bladder fullness cues fail to wake them.", iconName: "Clock" }
    ],
    causes: [
      { title: "Underdeveloped Bladder Sphincter", description: "Weak pelvic floor muscles and delayed nerve coordination between bladder and brain.", iconName: "Frown" }
    ],
    treatments: [
      { title: "Bladder-Toning Herbs", description: "Ayurvedic Ashwagandha and Sesame seed mixtures to strengthen sphincter tone and pacify Vata.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Nerve-Coordinating Homeopathy", description: "Homeopathic Equisetum and Kreosotum to improve sleep-arousal pathways and bladder control.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is bedwetting linked to anxiety in children?", answer: "Yes, emotional changes like starting a new school, family stress, or fears can trigger bedwetting. Homeopathic constitutional remedies target this emotional layer directly." }
    ],
    testimonials: [
      { id: "bw_t1", patientName: "Riya Sen", location: "Kolkata", disease: "Enuresis", rating: 5, duration: "2 Months", reviewText: "My 8-year-old daughter stopped wetting the bed within 6 weeks of starting Dr. Roy's remedies. We are so relieved.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["incontinence", "child-immunity"]
  },

  "pediatric-cough-cold": {
    slug: "pediatric-cough-cold",
    name: "Pediatric Cough & Cold",
    category: "Child Health",
    tagline: "Clear Congestion & Relieve Pediatric Cough Gently without Sedatives",
    overview: "Pediatric Cough and Cold are frequent childhood ailments caused by viral exposure. While common, repeated usage of strong chemical antihistamines and cough sedatives can suppress a child's respiration and weaken their lung linings. Our natural program clears congested phlegm and calms inflamed throat tissues gently.",
    ayurvedaPerspective: "Ayurveda attributes cough and cold (Kasa and Pratishyaya) to an excess of Kapha dosha in the upper respiratory tract. Treatment uses chest-warming, Kapha-expelling remedies like Tulsi, Yashtimadhu, Pippali, and warm honey gargling.",
    homeopathyPerspective: "Homeopathy offers fast-acting, gentle relief from pediatric cold symptoms. Remedies like Hepar Sulph (for loose, rattling chest), Pulsatilla (for thick yellow nasal blocks), and Belladonna (for sudden fever and dry cough) clear congestion safely.",
    duration: "1 - 2 Weeks",
    risk: "Progression to Pediatric Bronchitis",
    commonAge: "1 - 12 Years",
    recovery: "3 - 5 Days",
    heroImage: "svg:child-health",
    patientsTreated: "4,200+",
    yearsExperience: "14%",
    patientSatisfaction: "95%",
    metaTitle: "Natural Pediatric Cough & Cold Treatment | Ojas Sanjivani",
    metaDescription: "Relieve child chest congestion and runny nose naturally. Safe, non-drowsy Ayurvedic syrups and homeopathic cold remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Pediatric Homeopath & Constitutional Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes non-drowsy, phlegm-dissolving homeopathic remedies to manage acute and chronic pediatric chest congestion.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Chest Congestion", description: "Rattling sounds in the chest, productive cough, and difficulty breathing due to phlegm.", iconName: "AlertTriangle" },
      { title: "Runny/Stuffy Nose", description: "Watery nasal discharge changing to thick mucus, causing nasal block and mouth breathing.", iconName: "Droplets" }
    ],
    causes: [
      { title: "Kapha Pathogen Congestion", description: "Invasion of respiratory passages by cold viruses combined with a high-mucus diet.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Yashtimadhu & Tulsi Syrups", description: "Ayurvedic herbal mixtures to soothe the throat lining, liquefy thick mucus, and ease breathing.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Congestion-Draining Homeopathy", description: "Homeopathic Pulsatilla and Antimonium Tart to safely dry up nasal blocks and clear rattling phlegm.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Why avoid over-the-counter cough syrups in kids?", answer: "Many OTC syrups contain antihistamines and sedatives that merely suppress cough reflexes and cause drowsiness. Our natural remedies liquefy and expel mucus naturally." }
    ],
    testimonials: [
      { id: "pcc_t1", patientName: "Ayan Roy", location: "Kolkata", disease: "Chest Congestion", rating: 5, duration: "1 Week", reviewText: "My son's rattling chest cough cleared within 3 days without any heavy chemical syrups.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["child-immunity", "sinusitis"]
  },

  // === 5. GYNECOLOGY ===
  "gynecology": {
    slug: "gynecology",
    name: "Gynecology",
    category: "Gynecology",
    tagline: "Natural Women's Health & Hormonal Care with Ayurveda & Homeopathy",
    overview: "Gynecological and reproductive disorders affect women across all life stages. Conditions like PCOS, irregular periods, dysmenorrhea, chronic leukorrhea, and menopausal distress are deeply tied to hormonal imbalances and systemic congestion. Our integrated clinical protocols focus on restoring ovarian health, regulating menstrual cycles, cooling uterine inflammation, and achieving long-term hormonal balance naturally.",
    ayurvedaPerspective: "In Ayurveda, female reproductive health is governed by 'Artava Vaha Srotas' and managed under 'Striroga'. Hormonal cycles are regulated by Apana Vata (pelvic energy), Pachaka Pitta (metabolism), and Avalambaka Kapha. Accumulation of toxins (Ama) blocks the reproductive channels, causing cysts and irregular flow. Treatment utilizes hormone-regulating and uterine tonics like Shatavari, Ashoka, Lodhra, and Aloe Vera to clear blocks and nourish reproductive tissues.",
    homeopathyPerspective: "Homeopathy treats gynecological issues constitutionally, recognizing that menstrual health is a reflection of overall physical and emotional balance. Remedies like Pulsatilla (for scanty, delayed periods), Sepia (for hormonal stagnation/moods), Lachesis (for menopausal flashes), and Calcarea Carb regulate endocrine function and reduce ovarian cysts gently.",
    duration: "Chronic / Hormonal Support",
    risk: "Infertility & Endocrine Strain",
    commonAge: "12 - 55 Years",
    recovery: "8 - 16 Weeks",
    heroImage: "/images/diseases/women-health.png",
    patientsTreated: "11,500+",
    yearsExperience: "14+",
    patientSatisfaction: "94%",
    metaTitle: "Natural PCOS, Irregular Periods & Menopause Treatment | Ojas",
    metaDescription: "Balance hormones, regulate menstrual cycles, and relieve pelvic pain naturally. Our expert integrated Ayurveda & Homeopathy doctors restore women's health.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Gynecological & Constitutional Homeopath",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in female endocrine care, successfully resolving complex cases of PCOS, infertility, and menopause using homeopathy.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "PCOS / PCOD Support", slug: "pcos", description: "Dissolve ovarian cysts, regulate androgen levels, and restore natural ovulation cycles.", image: "/images/diseases/women-health.png" },
      { name: "Menstrual Irregularities", slug: "menstrual-irregularities", description: "Normalize delayed, scanty, prolonged, or missed menstrual cycles naturally.", image: "/images/diseases/women-health.png" },
      { name: "Dysmenorrhea", slug: "dysmenorrhea", description: "Relieve severe menstrual cramps, lower back pain, and pelvic spasms.", image: "/images/diseases/women-health.png" },
      { name: "Leukorrhea", slug: "leukorrhea", description: "Clear vaginal infections and manage excessive, painful white discharge.", image: "/images/diseases/women-health.png" },
      { name: "Menopause Symptoms", slug: "menopause", description: "Relieve hot flashes, night sweats, bone weakness, and mood swings naturally.", image: "/images/diseases/women-health.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Can PCOS ovarian cysts be dissolved naturally?", answer: "Yes, target-specific Ayurvedic herbs like Kanchanar Guggulu combined with constitutional homeopathic remedies regulate ovarian hormones, successfully dissolving cysts and restoring normal egg release." },
      { question: "How does Ojas manage painful menstrual cramps?", answer: "We treat dysmenorrhea using natural uterine antispasmodics and pelvic Vata-pacifying herbs, providing lasting relief without the side effects of painkillers." }
    ],
    testimonials: [
      { id: "gy_t1", patientName: "Pooja Banerjee", location: "Kolkata", disease: "PCOS & Irregular Periods", rating: 5, duration: "4 Months", reviewText: "I had no periods for 6 months and multiple ovarian cysts. Dr. Roy's customized treatment dissolved my cysts and restored my monthly cycles.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["infertility-support", "hormonal-imbalance"]
  },

  "pcos": {
    slug: "pcos",
    name: "PCOS / PCOD Support",
    category: "Gynecology",
    tagline: "Dissolve Ovarian Cysts & Restore Hormonal Ovulation Naturally",
    overview: "Polycystic Ovary Syndrome (PCOS) is a highly prevalent endocrine disorder in women of reproductive age. It is characterized by multiple small fluid-filled cysts in the ovaries, irregular periods, excess male hormone (androgen) levels causing facial hair and acne, and insulin resistance leading to weight gain. Our treatment targets ovarian function, insulin response, and hormonal balance.",
    ayurvedaPerspective: "Ayurveda describes PCOS as a 'Granthi Roga' involving Kapha and Vata blocking the channels (Artavavaha Srotas). Treatment uses ovarian detoxifying and cyst-dissolving herbs like Kanchanar Guggulu, Shatavari, and Latakaranja to restore ovulation.",
    homeopathyPerspective: "Homeopathy corrects the underlying endocrine imbalance constitutionally. Remedies like Apis Mellifica (for right ovarian pain/cysts), Lachesis, Pulsatilla, and Calcarea Carb dissolve cysts and regulate pituitary-ovarian communication.",
    duration: "12 - 24 Weeks",
    risk: "Infertility & Type 2 Diabetes Risk",
    commonAge: "15 - 35 Years",
    recovery: "8 - 12 Weeks",
    heroImage: "/images/diseases/women-health.png",
    patientsTreated: "5,100+",
    yearsExperience: "14%",
    patientSatisfaction: "93%",
    metaTitle: "Natural PCOS / PCOD Treatment & Recovery | Ojas Sanjivani",
    metaDescription: "Overcome PCOS naturally. Dissolve ovarian cysts and regulate periods with Ayurvedic Kanchanar and homeopathic Pulsatilla therapies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Gynecological & Constitutional Homeopath",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in endocrine gynecology and constitutional cyst-reduction therapies using homeopathy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Irregular Menstruation", description: "Delayed, missed, or scanty menstrual periods with unpredictable cycle lengths.", iconName: "AlertTriangle" },
      { title: "Hirsutism & Acne", description: "Excess facial and body hair growth and painful cystic acne due to high testosterone levels.", iconName: "Activity" }
    ],
    causes: [
      { title: "Insulin Resistance", description: "Cells fail to respond to insulin, driving the pancreas to produce more, which stimulates ovarian androgen release.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Cyst-Dissolving Herbs", description: "Ayurvedic Kanchanar Guggulu and Latakaranja to clear pelvic blocks and shrink follicular cysts.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Endocrine Homeopathy", description: "Homeopathic Sepia and Apis Mellifica to normalize estrogen-progesterone ratios and stimulate ovulation.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is weight loss necessary to treat PCOS?", answer: "Weight loss helps, but it is a symptom of insulin resistance. Our medicines target insulin sensitivity directly, making it easier to lose weight and clear cysts." }
    ],
    testimonials: [
      { id: "pc_t1", patientName: "Aishwarya Sen", location: "Kolkata", disease: "PCOS Cysts", rating: 5, duration: "3 Months", reviewText: "My scan report showed clear ovaries after 3 months of treatment. My periods are regular now.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["menstrual-irregularities", "hormonal-imbalance"]
  },

  "menstrual-irregularities": {
    slug: "menstrual-irregularities",
    name: "Menstrual Irregularities",
    category: "Gynecology",
    tagline: "Regulate Menstrual Cycle Frequency & Flow Balance Naturally",
    overview: "Menstrual Irregularities encompass oligomenorrhea (delayed periods), amenorrhea (missed periods), menorrhagia (excessive bleeding), and hypomenorrhea (scanty flow). They are often driven by emotional stress, thyroid dysfunction, low weight, or hormonal stagnation. Our natural program regulates ovarian health and builds uterine tone.",
    ayurvedaPerspective: "In Ayurveda, irregular cycles represent a vitiation of Apana Vata and Artava Dhatu. We use uterine tonics like Ashoka (Saraca asoca), Lodhra, and Shatavari to nourish uterine linings and establish normal monthly cycles.",
    homeopathyPerspective: "Homeopathy resolves menstrual rhythm errors by correcting nervous-endocrine feedback loops. Remedies like Pulsatilla (for delayed, scanty periods in gentle temperaments), Sepia, and Natrum Mur are highly effective.",
    duration: "8 - 16 Weeks",
    risk: "Anemia & Infertility Susceptibility",
    commonAge: "13 - 50 Years",
    recovery: "6 - 8 Weeks",
    heroImage: "/images/diseases/women-health.png",
    patientsTreated: "3,800+",
    yearsExperience: "14%",
    patientSatisfaction: "94%",
    metaTitle: "Natural Treatment for Irregular & Scanty Periods | Ojas",
    metaDescription: "Normalize your menstrual cycle naturally. Discover Ayurvedic Ashoka uterine tonics and homeopathic Pulsatilla remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Gynecological & Constitutional Homeopath",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes targeted uterine-nourishing homeopathic therapeutics to restore normal menstrual flow.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Delayed/Missed Cycles", description: "Periods occurring more than 35 days apart, or skipping cycles completely.", iconName: "AlertTriangle" },
      { title: "Flow Abnormalities", description: "Scanty spotting or excessively heavy bleeding requiring multiple pads daily.", iconName: "Droplets" }
    ],
    causes: [
      { title: "Hormonal Stagnation", description: "Imbalanced estrogen-progesterone feedback loop preventing timely ovulation and uterine lining shedding.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Uterine-Nourishing Herbs", description: "Ayurvedic Ashokarishta and Lodhra to regulate flow volume and build endometrial strength.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Constitutional Flow Regulators", description: "Homeopathic Pulsatilla and Sepia to establish natural monthly rhythm and calm nervous stress.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Can stress delay my period?", answer: "Yes, high stress releases cortisol, which inhibits GnRH (Gonadotropin-releasing hormone), leading to delayed ovulation or missed periods. Our remedies address stress layers directly." }
    ],
    testimonials: [
      { id: "mi_t1", patientName: "Nivedita Rao", location: "Kochi, Kerala", disease: "Delayed Periods", rating: 5, duration: "2 Months", reviewText: "I had 50-day cycles for years. Ojas medicines helped regularize my periods to 30 days within two months.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["pcos", "dysmenorrhea"]
  },

  "dysmenorrhea": {
    slug: "dysmenorrhea",
    name: "Dysmenorrhea (Painful Periods)",
    category: "Gynecology",
    tagline: "Relieve Uterine Spasms & Menstrual Pain Naturally",
    overview: "Dysmenorrhea refers to painful menstrual cramps in the lower abdomen, often radiating to the lower back and thighs, accompanied by nausea, headaches, and fatigue. It is caused by excess prostaglandin release which makes the uterus contract strongly. Our natural care provides non-suppressive antispasmodics and cools uterine heat.",
    ayurvedaPerspective: "Ayurveda attributes painful periods (Kashta-Artava) to obstructed Apana Vata in the pelvic area. Treatment uses heating, Vata-pacifying herbs like Dashamula, Ashoka, and Shatavari, along with warm castor oil compresses.",
    homeopathyPerspective: "Homeopathy provides rapid relief from acute cramping pain and treats the underlying spasm tendency. Remedies like Magnesia Phosphorica (the premier cramping remedy, relieved by warmth/pressure), Colocynthis, and Viburnum Opulus are primary.",
    duration: "4 - 8 Weeks",
    risk: "Severe Monthly Performance Lag",
    commonAge: "12 - 40 Years",
    recovery: "1 - 2 Months",
    heroImage: "/images/diseases/women-health.png",
    patientsTreated: "3,400+",
    yearsExperience: "14%",
    patientSatisfaction: "95%",
    metaTitle: "Natural Dysmenorrhea & Period Pain Relief | Ojas Sanjivani",
    metaDescription: "Relieve severe menstrual cramps and back pain naturally. Discover Ayurvedic Vata-soothing and homeopathic Mag Phos spasm remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Gynecological & Constitutional Homeopath",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy focuses on spasmodic nerve pathways and hormonal inflammation to permanently resolve painful periods.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Severe Pelvic Cramping", description: "Sharp, throbbing, or spasming pain in the lower abdomen starting 1-2 days before flow.", iconName: "AlertTriangle" },
      { title: "Lower Back/Thigh Pain", description: "Pain radiating from the pelvis down the legs and across the lower spine.", iconName: "Activity" }
    ],
    causes: [
      { title: "Pelvic Vata Blockage", description: "Aggravated Apana Vata causing vascular constriction and painful uterine muscle spasms.", iconName: "Frown" }
    ],
    treatments: [
      { title: "Vata-Pacifying Decoctions", description: "Ayurvedic Dashamularishta and warm sesame oil pelvic massages to release Vata blocks and soothe muscles.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Spasm-Relieving Homeopathy", description: "Homeopathic Mag Phos 6x (taken in warm water) and Colocynthis to stop severe uterine cramping.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How does Mag Phos help in period pain?", answer: "Magnesia Phosphorica acts as a natural homeopathic antispasmodic, relaxing smooth muscle fibers and relieving pelvic nerve pain quickly." }
    ],
    testimonials: [
      { id: "dm_t1", patientName: "Sneha Sen", location: "Kolkata", disease: "Dysmenorrhea", rating: 5, duration: "1 Month", reviewText: "I used to take 2 painkillers every month. With Ojas Mag Phos and syrups, I now have pain-free periods.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["menstrual-irregularities", "pcos"]
  },

  "leukorrhea": {
    slug: "leukorrhea",
    name: "Leukorrhea (White Discharge)",
    category: "Gynecology",
    tagline: "Clear Uterine Congestion & Manage White Vaginal Discharge Naturally",
    overview: "Leukorrhea refers to excessive, thick, whitish or yellowish vaginal discharge, which can be physiological or pathological (due to fungal, bacterial, or trichomonal infections). Pathological leukorrhea causes itching, burning, weakness, and unpleasant odors. Our treatment focuses on clearing local pelvic congestion, restoring healthy vaginal flora, and boosting mucosal immunity.",
    ayurvedaPerspective: "In Ayurveda, Leukorrhea is known as 'Shweta Pradara', caused by an excess of Kapha dosha accumulating in the uterine channels due to weak digestion and poor hygiene. We use astringent, Kapha-drying herbs like Lodhra, Pushyanuga Churna, and Daruharidra to clear fluid excess.",
    homeopathyPerspective: "Homeopathy treats leukorrhea by matching the discharge characteristics and patient constitution. Remedies like Alumina (for transparent, highly irritating discharge), Kreosotum (for offensive, burning, itching discharge), and Pulsatilla clear vaginal infections effectively.",
    duration: "4 - 8 Weeks",
    risk: "Chronic Pelvic Inflammatory Disease (PID)",
    commonAge: "15 - 45 Years",
    recovery: "2 - 4 Weeks",
    heroImage: "/images/diseases/women-health.png",
    patientsTreated: "2,900+",
    yearsExperience: "14%",
    patientSatisfaction: "93%",
    metaTitle: "Natural Leukorrhea & Vaginal Infection Treatment | Ojas",
    metaDescription: "Relieve excessive, itchy white discharge naturally. Discover astringent Ayurvedic Lodhra and homeopathic Kreosotum remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Gynecological & Constitutional Homeopath",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes target-specific homeopathic antimicrobials and local tissue cleansers to manage vaginal discharges.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Excessive Discharge", description: "Constant thick white or yellow discharge staining undergarments.", iconName: "AlertTriangle" },
      { title: "Vulvar Itching/Burning", description: "Severe irritation, redness, and burning during urination or intercourse.", iconName: "Flame" }
    ],
    causes: [
      { title: "Kapha Pelvic Moisture", description: "Accumulation of dampness (Kapha) and toxins (Ama) providing a breeding ground for yeast and bacteria.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Lodhra & Astringents", description: "Ayurvedic Pushyanuga Churna and Lodhrasava to dry vaginal wetness, tone tissues, and clear yeast.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Antimicrobial Homeopathy", description: "Homeopathic Kreosotum and Sepia to stop vaginal burning, itching, and offensive discharges.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is white discharge normal?", answer: "Thin, clear, odorless discharge is normal before ovulation. Thick, yellow, itchy, or smelly discharge indicates infection (leukorrhea) and requires treatment." }
    ],
    testimonials: [
      { id: "lk_t1", patientName: "Nisha Nair", location: "Kochi, Kerala", disease: "Chronic Leukorrhea", rating: 5, duration: "3 Weeks", reviewText: "I had persistent yeast infections. Ojas medicines cleared the itching and discharge in less than a month.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["uti", "menstrual-irregularities"]
  },

  "menopause": {
    slug: "menopause",
    name: "Menopause Symptoms",
    category: "Gynecology",
    tagline: "Relieve Hot Flashes, Night Sweats & Mood Swings Naturally",
    overview: "Menopause is the permanent cessation of menstruation, marking the end of a woman's reproductive phase. The accompanying decline in estrogen triggers hot flashes, night sweats, sleep loss, vaginal dryness, bone density loss (osteoporosis), and mood fluctuations. Our natural protocol supports the endocrine system through this transition without synthetic hormones.",
    ayurvedaPerspective: "Ayurveda views Menopause (Rajonivritti) as a natural transition where the body shifts from Pitta (middle-age) to Vata (old-age). Symptoms represent Vata dryness (vaginal dry, bone loss) and Pitta heat (hot flashes). Treatment uses cooling Rasayanas like Shatavari, Yashtimadhu, and Ashwagandha to balance both doshas.",
    homeopathyPerspective: "Homeopathy is highly successful in managing menopausal distress constitutionally. Remedies like Lachesis (for sudden hot flashes/constricted throat), Sepia (for low mood/fatigue), and Amyl Nitrosum cool body temperatures and stabilize emotions.",
    duration: "8 - 16 Weeks",
    risk: "Osteoporosis & Cardiovascular Strain",
    commonAge: "45 - 55 Years",
    recovery: "6 - 10 Weeks",
    heroImage: "/images/diseases/women-health.png",
    patientsTreated: "3,100+",
    yearsExperience: "22+",
    patientSatisfaction: "92%",
    metaTitle: "Natural Menopause & Hot Flashes Treatment | Ojas Sanjivani",
    metaDescription: "Cool hot flashes and balance moods naturally. Discover Ayurvedic estrogen-supporting Shatavari and homeopathic Lachesis remedies.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Panchakarma & Spine Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai combines cooling Ayurvedic herbs with customized yoga to help women transition smoothly through menopause.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Hot Flashes & Sweating", description: "Sudden wave of intense heat, redness, and perspiration spreading over the face and neck.", iconName: "Flame" },
      { title: "Insomnia & Mood Swings", description: "Difficulty sleeping, irritability, anxiety, and sudden depressive feelings due to estrogen drop.", iconName: "Clock" }
    ],
    causes: [
      { title: "Ovarian Decline", description: "Natural cessation of ovarian follicle activity, leading to a permanent drop in estrogen and progesterone.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Estrogen-Supporting Herbs", description: "Ayurvedic Shatavari and Ashwagandha to nourish endocrine glands and improve bone calcium density.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Cooling Homeopathy", description: "Homeopathic Lachesis and Sepia to regulate thermal center responses and ease mental irritability.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is hormone replacement therapy (HRT) safe?", answer: "HRT carries risks of breast cancer and cardiovascular issues. Our natural herbal and homeopathic program regulates hormones safely without synthetic drugs." }
    ],
    testimonials: [
      { id: "mp_t1", patientName: "Ashalata Sen", location: "Kolkata", disease: "Menopause Flashes", rating: 5, duration: "2 Months", reviewText: "I had severe night sweats and mood swings. Dr. Roy's remedies cooled my hot flashes and restored my peace.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["insomnia", "osteoarthritis"]
  },

  // === 6. RESPIRATORY PROBLEMS ===
  "respiratory-problems": {
    slug: "respiratory-problems",
    name: "Respiratory Problems",
    category: "Respiratory Problems",
    tagline: "Natural Asthma, Bronchitis & Chronic Cough Care with Ayurveda & Homeopathy",
    overview: "Respiratory problems restrict the intake of oxygen, affecting cellular energy and overall survival. Conditions like asthma, chronic bronchitis, allergic coughs, and breathing difficulty are triggered by airway spasms, excess mucus production, and environmental allergens. Our integrated clinical protocols focus on dilating bronchial pathways, clearing congested phlegm, reducing airway hypersensitivity, and restoring optimal lung capacity naturally.",
    ayurvedaPerspective: "In Ayurveda, respiratory disorders are classified under 'Pranavaha Srotas Roga' (diseases of the vital channels), presenting as Shwasa (dyspnea) and Kasa (cough). They are caused by vitiation of Vata and Kapha doshas blocking the lungs. Treatment utilizes bronchial-dilating (Kasahara) and chest-warming herbs like Vasa (Adhatoda vasica), Kantakari, Pippali, and Yashtimadhu to dry excess Kapha and ease breathing.",
    homeopathyPerspective: "Homeopathy treats respiratory conditions by managing acute bronchial spasms and addressing constitutional allergies. Remedies like Arsenicum Album (for night asthma/anxiety), Antimonium Tartaricum (for rattling chest phlegm), Ipecac (for spasmodic coughing fits), and Blatta Orientalis expand airways gently and reduce allergic triggers.",
    duration: "Chronic / Airway Support",
    risk: "Respiratory Failure & Lung Strain",
    commonAge: "10 - 75 Years",
    recovery: "4 - 8 Weeks",
    heroImage: "/images/diseases/respiratory.png",
    patientsTreated: "10,200+",
    yearsExperience: "18+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Asthma, Bronchitis & Breathing Treatment | Ojas Sanjivani",
    metaDescription: "Relieve breathing difficulty, wheezing, and chronic cough naturally. Our integrated Ayurveda & Homeopathy specialists restore clear lung function.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Respiratory & Pranavaha Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar specializes in Vata-Kapha respiratory clearing, utilizing classical chest-detox therapies and herbs to manage asthma.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Asthma", slug: "asthma", description: "Relieve bronchial constriction, wheezing, and chest tightness naturally.", image: "/images/diseases/respiratory.png" },
      { name: "Bronchitis", slug: "bronchitis", description: "Clear chronic airway inflammation and reduce thick phlegm coughing fits.", image: "/images/diseases/respiratory.png" },
      { name: "Allergic Cough", slug: "allergic-cough", description: "Calm dry, throat-tickling coughs triggered by dust, pollen, and temperature changes.", image: "/images/diseases/respiratory.png" },
      { name: "Dyspnea", slug: "dyspnea", description: "Support lung tissue expansion and ease short-windedness or heavy breathing.", image: "/images/diseases/respiratory.png" },
      { name: "Chronic Sinusitis", slug: "chronic-sinusitis", description: "Resolve deep-seated nasal blocks and post-nasal drip affecting bronchial passages.", image: "/images/diseases/respiratory.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Can natural treatments reduce inhaler dependency in asthma?", answer: "Yes, by gradually dilating bronchial pathways, reducing mucosal hyper-responsiveness, and strengthening lung tissues, our treatment significantly reduces reliance on corticosteroid inhalers." },
      { question: "How does Vasa (Adhatoda vasica) support breathing?", answer: "Vasa is a highly potent Ayurvedic bronchodilator and expectorant. It relaxes smooth bronchial muscles, liquifies thick phlegm, and eases respiratory passage spasms." }
    ],
    testimonials: [
      { id: "rp_t1", patientName: "Vikram Sen", location: "Kolkata", disease: "Chronic Asthma", rating: 5, duration: "3 Months", reviewText: "I was using an inhaler twice daily. Within 3 months of starting the Ojas respiratory program, my wheezing has stopped and I rarely use my inhaler.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["sinusitis", "allergic-rhinitis"]
  },

  "asthma": {
    slug: "asthma",
    name: "Asthma",
    category: "Respiratory Problems",
    tagline: "Relieve Bronchial Constriction & Ease Wheezing Naturally",
    overview: "Asthma is a chronic respiratory condition characterized by hyper-reactive airways that constrict, swell, and produce excess mucus. This triggers breathing difficulty, wheezing, chest tightness, and dry coughing, often worse at night. Our treatment focuses on relaxing bronchial muscles and desensitizing allergic airway responses.",
    ayurvedaPerspective: "Ayurveda describes Asthma as 'Tamaka Shwasa', a Vata-Kapha disorder originating in the stomach and settling in the lungs. Treatment uses expectorant (Kasahara) and bronchodilating herbs like Vasa, Kantakari, and Pippali to clear Kapha obstruction and ease Vata flow.",
    homeopathyPerspective: "Homeopathy manages asthma by treating acute wheezing spasms and modifying the allergic constitution. Remedies like Blatta Orientalis (for severe dyspnea), Arsenicum Album (for midnight asthma with dry mouth), and Ipecac relieve bronchial spasms effectively.",
    duration: "8 - 16 Weeks",
    risk: "Severe Bronchospasms & Hypoxia",
    commonAge: "5 - 65 Years",
    recovery: "6 - 8 Weeks",
    heroImage: "/images/diseases/respiratory.png",
    patientsTreated: "5,300+",
    yearsExperience: "18+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Asthma & Wheezing Treatment | Ojas Sanjivani",
    metaDescription: "Manage asthma wheezing and chest tightness naturally. Discover Ayurvedic Vasa and homeopathic Blatta bronchodilators.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Respiratory & Pranavaha Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes targeted Vata-Kapha pacifying herbs and breathing therapies to expand lung capacity.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Wheezing Sound", description: "A high-pitched whistling sound during exhalation caused by constricted airways.", iconName: "AlertTriangle" },
      { title: "Chest Tightness", description: "A feeling of constriction, heaviness, or compression across the lungs.", iconName: "Activity" }
    ],
    causes: [
      { title: "Bronchial Hypersensitivity", description: "Mast cell activation in the lungs releasing histamines upon exposure to dust, pollen, or cold air.", iconName: "ShieldCheck" }
    ],
    treatments: [
      { title: "Bronchodilating Vasa", description: "Ayurvedic Vasa and Kantakari decoctions to relax airway smooth muscles and dry excess mucus.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Anti-Spasmodic Homeopathy", description: "Homeopathic Blatta Orientalis and Arsenicum Album to expand airways and relieve dry wheezing spasms.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is this treatment safe for children with asthma?", answer: "Yes, our natural medicines are completely safe, non-steroidal, and highly beneficial for pediatric asthma, strengthening their immune defense safely." }
    ],
    testimonials: [
      { id: "as_t1", patientName: "Rohan Das", location: "Kolkata", disease: "Asthma", rating: 5, duration: "3 Months", reviewText: "My nightly wheezing has stopped. I can sleep peacefully without using my rescue pump.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["bronchitis", "allergic-rhinitis"]
  },

  "bronchitis": {
    slug: "bronchitis",
    name: "Bronchitis",
    category: "Respiratory Problems",
    tagline: "Clear Chronic Airway Inflammation & Productive Cough Naturally",
    overview: "Bronchitis is the inflammation of the lining of the bronchial tubes, which carry air to and from the lungs. Acute bronchitis follows colds, while Chronic Bronchitis is a serious, long-term condition (part of COPD) marked by a persistent, mucus-producing cough. Our natural protocol focuses on dissolving thick phlegm and repairing damaged respiratory lining.",
    ayurvedaPerspective: "Ayurveda describes Bronchitis as 'Kasa Roga'. It is caused by Kapha and Vata accumulation blocking the throat and chest. Treatment uses lung-warming expectorants like Sitopaladi Churna, Talisadi Churna, and Pippali to clear phlegm.",
    homeopathyPerspective: "Homeopathy uses mucus-thinning and tissue-healing remedies. Remedies like Antimonium Tartaricum (for thick, rattling chest phlegm that is hard to expectorate), Bryonia (for dry, painful hacking cough), and Hepar Sulph are primary.",
    duration: "4 - 12 Weeks",
    risk: "Progression to Pneumonia & Emphysema",
    commonAge: "25 - 75 Years",
    recovery: "4 - 6 Weeks",
    heroImage: "/images/diseases/respiratory.png",
    patientsTreated: "3,800+",
    yearsExperience: "18+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Bronchitis & Productive Cough Treatment | Ojas",
    metaDescription: "Clear lung phlegm and airway inflammation naturally. Discover Ayurvedic Sitopaladi and homeopathic Antimonium Tart rattling cough remedies.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Respiratory & Pranavaha Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar focuses on drying chronic lung Kapha and clearing respiratory channels using classical warming powders.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Productive Cough", description: "Constant coughing fits yielding thick, discolored mucus (sputum) from the lungs.", iconName: "AlertTriangle" },
      { title: "Rattling Chest Sound", description: "Audible bubbling or rattling in the lungs during deep breathing due to excess fluid.", iconName: "Activity" }
    ],
    causes: [
      { title: "Airway Mucus Overload", description: "Hypertrophy of bronchial mucus glands triggered by chronic smoking, pollution, or viral infections.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Expectoration-Spurring Herbs", description: "Ayurvedic Sitopaladi Churna with Honey to soothe throat membranes and thin thick chest phlegm.", iconName: "Leaf", type: "Ayurveda" },
      { title: "phlegm-Dissolving Homeopathy", description: "Homeopathic Antimonium Tart and Bryonia to drain congested airways and calm hacking cough fits.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How does Antimonium Tart help in bronchitis?", answer: "Antimonium Tartaricum is the premier homeopathic remedy for loose, rattling chest coughs. It aids the lungs in raising and expelling thick, sticky mucus." }
    ],
    testimonials: [
      { id: "br_t1", patientName: "Aman Sen", location: "Kolkata", disease: "Chronic Bronchitis", rating: 5, duration: "2 Months", reviewText: "I had a constant wet cough for a year. The rattling sound in my chest cleared completely with these remedies.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["asthma", "dyspnea"]
  },

  "allergic-cough": {
    slug: "allergic-cough",
    name: "Allergic Cough",
    category: "Respiratory Problems",
    tagline: "Calm Dry Hacking Cough & airway Hyper-Reactivity Naturally",
    overview: "Allergic Cough is a persistent, dry, tickling cough triggered by environmental irritants (dust, pollution, pollen) or sudden temperature changes. Unlike infectious coughs, it does not produce phlegm but causes exhausting coughing fits due to throat hypersensitivity. Our program desensitizes the throat's cough receptors and calms mucosal irritation.",
    ayurvedaPerspective: "Ayurveda classifies dry cough as 'Vataja Kasa'. It occurs when Vata dosha dries up the throat and bronchial lining, creating irritation. Treatment uses demulcent, lubricating, and soothing herbs like Yashtimadhu (Licorice), Kantakari, and warm Ghee.",
    homeopathyPerspective: "Homeopathy excels in calming hyper-reactive tickling coughs. Remedies like Rumex Crispus (for cough triggered by breathing cold air), Spongia Tosta (for dry, barking cough), and Ipecac relieve dry throat spasms.",
    duration: "2 - 4 Weeks",
    risk: "Vocal Cord Strain & Insomnia",
    commonAge: "10 - 60 Years",
    recovery: "1 - 2 Weeks",
    heroImage: "/images/diseases/respiratory.png",
    patientsTreated: "4,100+",
    yearsExperience: "14%",
    patientSatisfaction: "94%",
    metaTitle: "Natural Allergic & Dry Cough Treatment | Ojas Sanjivani",
    metaDescription: "Stop dry, tickling coughing fits naturally. Discover soothing Ayurvedic Licorice and homeopathic Rumex allergy remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic ENT Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes throat-soothing homeopathic remedies and constitutional desensitization to stop dry allergic coughs.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Dry Tickling Cough", description: "Constant tickling sensation in the throat leading to dry, exhausting coughing fits.", iconName: "AlertTriangle" },
      { title: "Spasmodic Fits", description: "Sudden cough attacks that are difficult to stop, causing red face or rib pain.", iconName: "Flame" }
    ],
    causes: [
      { title: "airway Hyper-Reactivity", description: "Hyper-sensitive cough receptors in the throat lining triggered by environmental particles.", iconName: "ShieldCheck" }
    ],
    treatments: [
      { title: "Yashtimadhu Demulcents", description: "Ayurvedic Licorice root extracts and Kantakari Avaleha to coat throat membranes and soothe irritation.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Cough-calming Homeopathy", description: "Homeopathic Rumex and Spongia to reduce throat sensitivity and stop dry barking coughing fits.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Why does my dry cough get worse at night?", answer: "Lying down allows post-nasal drip to pool in the throat, and air temperatures drop, irritating sensitive Vata cough receptors. Our remedies protect airways from night triggers." }
    ],
    testimonials: [
      { id: "ac_t1", patientName: "Malini Sharma", location: "Delhi", disease: "Dry Allergic Cough", rating: 5, duration: "3 Weeks", reviewText: "I had a dry tickle in my throat for 3 months. These drops stopped the tickle and cough within a week.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["allergic-rhinitis", "sinusitis"]
  },

  "dyspnea": {
    slug: "dyspnea",
    name: "Dyspnea (Breathing Difficulty)",
    category: "Respiratory Problems",
    tagline: "Relieve Short-Windedness & Support Optimal Lung Expansion",
    overview: "Dyspnea is the clinical term for difficult, labored, or uncomfortable breathing. It can be triggered by bronchial spasms, lung elasticity loss, or panic. Our supportive care focuses on strengthening chest muscle elasticity, dilating airways, and calming nervous breathing centers.",
    ayurvedaPerspective: "Ayurveda classifies difficult breathing as 'Shwasa Roga'. It occurs when Vata and Kapha block the respiratory tract (Pranavaha Srotas). Treatment uses warming chest rubs, Pippali rasayanas, and bronchodilating herbs like Vasa to clear pathways.",
    homeopathyPerspective: "Homeopathy uses fast-acting remedies to ease labored breathing and support oxygen exchange. Remedies like Aspidosperma (often called the digitalis of the lungs, which stimulates respiratory centers), Blatta, and Arsenicum ease chest tightness.",
    duration: "6 - 12 Weeks",
    risk: "Hypoxic Exhaustion & Heart Strain",
    commonAge: "20 - 75 Years",
    recovery: "4 - 6 Weeks",
    heroImage: "/images/diseases/respiratory.png",
    patientsTreated: "2,900+",
    yearsExperience: "18+",
    patientSatisfaction: "91%",
    metaTitle: "Natural Dyspnea & Breathing Difficulty Relief | Ojas Sanjivani",
    metaDescription: "Relieve shortness of breath naturally. Discover Ayurvedic bronchodilators and homeopathic Aspidosperma lung stimulants.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Respiratory & Pranavaha Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes targeted Vata-clearing herbs and breathing pranayamas to ease chronic dyspnea.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Shortness of Breath", description: "Feeling unable to catch one's breath, requiring rapid or deep breathing.", iconName: "AlertTriangle" },
      { title: "Air Hunger", description: "Subjective, uncomfortable feeling of not getting enough oxygen into the chest.", iconName: "Activity" }
    ],
    causes: [
      { title: "Airway Narrowing", description: "Inflammation or spasm of bronchial branches restricting free airflow into lung alveoli.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Pranavaha Channel Cleansing", description: "Ayurvedic Vasa and Shringyadi powders to clear mucosal barriers and ease Vata.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Lung-Oxygenating Homeopathy", description: "Homeopathic Aspidosperma and Lobelia to stimulate respiratory depth and relieve chest constriction.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How does Aspidosperma help in breathing difficulty?", answer: "Aspidosperma mother tincture acts as a respiratory stimulant, increasing the oxygen-carrying capacity of blood and easing labored breathing." }
    ],
    testimonials: [
      { id: "ds_t1", patientName: "Aman Gupta", location: "Chandigarh", disease: "Chronic Dyspnea", rating: 5, duration: "1 Month", reviewText: "I felt breathless even after climbing one flight of stairs. This treatment has restored my lung stamina.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["asthma", "bronchitis"]
  },

  "chronic-sinusitis": {
    slug: "chronic-sinusitis",
    name: "Chronic Sinusitis",
    category: "Respiratory Problems",
    tagline: "Clear Deep-Seated Sinus Congestion & Post-Nasal Drip Naturally",
    overview: "Chronic Sinusitis is a long-standing inflammation of the nasal sinuses persisting for 12 weeks or more despite treatment. It leads to persistent nasal blocks, head pressure, loss of smell, and post-nasal drip (mucus dripping down the throat), which irritates the bronchial tubes and triggers asthma. Our treatment focuses on draining deep sinus tracts and clearing mucosal biofilms.",
    ayurvedaPerspective: "Ayurveda describes chronic sinus block as 'Dushta Pratishyaya', a deep-seated Kapha-Vata disease. Treatment utilizes powerful nasal cleansing (Pradhamana Nasya) with herbal powders like Katphala, and warming immunity-builders like Laxmivilas Ras.",
    homeopathyPerspective: "Homeopathy targets deep tissue inflammation and clears stubborn blocks. Remedies like Silicea (to drain stuck sinus pus), Kali Bichromicum (for tough, green blocks), and Teucrium resolve chronic post-nasal drip.",
    duration: "6 - 12 Weeks",
    risk: "airway Irritation & Asthmatic Flare-ups",
    commonAge: "18 - 65 Years",
    recovery: "4 - 8 Weeks",
    heroImage: "/images/diseases/respiratory.png",
    patientsTreated: "3,300+",
    yearsExperience: "14+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Chronic Sinusitis & Post-Nasal Drip Relief | Ojas",
    metaDescription: "Clear stubborn sinus blocks and post-nasal drip naturally. Discover Ayurvedic nasal detox and homeopathic Silicea drainage remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic ENT Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in constitutional drainage therapies and biofilm-clearing homeopathic care for chronic sinus congestion.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Post-Nasal Drip", description: "Constant thick mucus dripping down the back of the throat, causing throat clearing and cough.", iconName: "AlertTriangle" },
      { title: "Sinus Head Pressure", description: "Constant, dull, heavy head pain around the cheeks, eyes, and forehead.", iconName: "Activity" }
    ],
    causes: [
      { title: "Sinus Cavity Biofilms", description: "Stubborn bacterial or fungal colonies encased in a protective layer, resistant to antibiotics.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Pradhamana Nasya", description: "Ayurvedic dry herbal nasal insufflation to trigger powerful sneezing and drain deep sinus cavities.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Deep-Drainage Homeopathy", description: "Homeopathic Silicea and Kali Bich to break down biofilms, liquefy green mucus, and drain sinuses.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How does Silicea help in chronic sinusitis?", answer: "Silicea is the premier homeopathic remedy to promote suppuration and drainage of deep-seated pus pockets from sinus cavities, preventing recurrent congestion." }
    ],
    testimonials: [
      { id: "cs_t1", patientName: "Nisha Varghese", location: "Kochi, Kerala", disease: "Chronic Sinusitis", rating: 5, duration: "2 Months", reviewText: "I had blocked ears and head pressure for a year. The Nasya oil and Silicea pills cleared my head completely.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["sinusitis", "allergic-rhinitis"]
  },

  // === 7. JOINT & MUSCLE PAIN ===
  "joint-muscle-pain": {
    slug: "joint-muscle-pain",
    name: "Joint & Muscle Pain",
    category: "Joint & Muscle Pain",
    tagline: "Natural Joint, Muscle & Spine Recovery with Ayurveda & Homeopathy",
    overview: "Joint and muscle pain can severely restrict daily mobility and compromise quality of life. From osteoarthritis, severe back pain, and cervical stiffness to sciatica nerve compression, frozen shoulder, and gout, skeletal-muscular pain is driven by cartilage wear, nerve inflammation, and metabolic toxic deposits. Our integrated clinical protocols focus on cooling joint inflammation, increasing lubrication (synovial fluid), relieving nerve pressure, and restoring long-term flexibility without dependency on NSAID painkillers.",
    ayurvedaPerspective: "In Ayurveda, joint and muscle pain is categorized under 'Vatavyadhi' (diseases caused by aggravated Vata). Vata dosha naturally increases with age, leading to dryness (Rukshata) and cartilage degeneration (Sandhigata Vata). Alternatively, gut toxins (Ama) can accumulate in joints, causing inflammatory swelling (Amavata). Treatment utilizes nourishing oil therapies like Janu Basti, Kati Basti, and herbs like Shallaki, Guggulu, and Rasna to soothe Vata and clear Ama.",
    homeopathyPerspective: "Homeopathy treats joint and muscular pain by addressing local inflammation, stiffness patterns, and structural changes constitutionally. Remedies like Rhus Tox (for stiffness relieved by continuous movement), Bryonia Alba (for sharp pain aggravated by the slightest motion), and Ledum Pal (for gouty pain rising from feet) improve joint function and ease spasms gently.",
    duration: "Chronic / Structural Support",
    risk: "Permanent Mobility Restriction",
    commonAge: "25 - 80 Years",
    recovery: "4 - 12 Weeks",
    heroImage: "/images/diseases/joint-pain.png",
    patientsTreated: "12,900+",
    yearsExperience: "22+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Joint, Spine & Muscle Pain Treatment | Ojas Sanjivani",
    metaDescription: "Relieve back pain, neck stiffness, sciatica, osteoarthritis, and gout naturally. Discover integrated Ayurvedic oil treatments and homeopathic anti-inflammatories.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Panchakarma & Spine Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai is a leading expert in musculoskeletal rehabilitation, successfully managing chronic spine, joint, and nerve pain through classical therapies.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Arthritis Care", slug: "arthritis", description: "Manage systemic joint pain and reduce joint stiffness naturally.", image: "/images/diseases/joint-pain.png" },
      { name: "Osteoarthritis", slug: "osteoarthritis", description: "Stop knee cartilage wear, improve lubrication, and restore daily walking mobility.", image: "/images/diseases/joint-pain.png" },
      { name: "Back Pain Relief", slug: "back-pain", description: "Relieve lower back muscle spasms, disc compression, and lumbar stiffness.", image: "/images/diseases/joint-pain.png" },
      { name: "Cervical Pain Care", slug: "cervical-pain", description: "Release neck stiffness, shoulder spasms, and cervical disc nerve pressure.", image: "/images/diseases/joint-pain.png" },
      { name: "Sciatica Support", slug: "sciatica", description: "Calm shooting nerve pain traveling from the lower spine down the leg.", image: "/images/diseases/joint-pain.png" },
      { name: "Frozen Shoulder", slug: "frozen-shoulder", description: "Restore complete shoulder joint mobility and relieve severe night shoulder pain.", image: "/images/diseases/joint-pain.png" },
      { name: "Gout Management", slug: "gout", description: "Lower high uric acid levels and relieve acute, painful big toe swelling.", image: "/images/diseases/joint-pain.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "How does Kati Basti help in back pain?", answer: "Kati Basti involves pooling warm, medicated herbal oils over the lower back. It penetrates deep to nourish spinal nerves, hydrate dry intervertebral discs, and relax tense muscle fibers." },
      { question: "Can natural treatment rebuild joint cartilage in osteoarthritis?", answer: "While severe cartilage loss cannot be fully reversed, our treatment stops further degeneration, increases joint lubrication (synovial fluid), and reduces inflammation, allowing pain-free walking." }
    ],
    testimonials: [
      { id: "jmp_t1", patientName: "Siddharth Verma", location: "Mumbai", disease: "Lumbar Disc Herniation", rating: 5, duration: "2 Months", reviewText: "I had severe sciatica pain down my left leg. Dr. Pillai's Kati Basti and specialized herbs relieved my pain within 4 weeks. I can walk and sit without discomfort now.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["arthritis", "sciatica"]
  },

  "osteoarthritis": {
    slug: "osteoarthritis",
    name: "Osteoarthritis",
    category: "Joint & Muscle Pain",
    tagline: "Reduce Knee Inflammation, Increase Lubrication & Restore Mobility",
    overview: "Osteoarthritis is a degenerative joint disease characterized by the breakdown of protective joint cartilage and underlying bone. It most commonly affects the knees, hips, and hands. Our treatment focuses on reducing joint friction, boosting synovial fluid production, and relieving pain.",
    ayurvedaPerspective: "Ayurveda describes Osteoarthritis as 'Sandhigata Vata'. Vata dosha accumulates in the joints, drying up synovial fluid (Shleshaka Kapha) and wearing down cartilage. Treatment uses lubricating (Snehana) oil pools (Janu Basti) and cartilage-feeding herbs.",
    homeopathyPerspective: "Homeopathy uses pain-relieving and tissue-supporting remedies. Remedies like Bryonia Alba (for pain aggravated by movement) and Rhus Tox (for stiff joints relieved by walking) ease joint movement safely.",
    duration: "8 - 16 Weeks",
    risk: "Complete Joint Lock & Deformity",
    commonAge: "45 - 80 Years",
    recovery: "6 - 8 Weeks",
    heroImage: "/images/diseases/joint-pain.png",
    patientsTreated: "4,900+",
    yearsExperience: "22+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Osteoarthritis & Knee Joint Pain Treatment | Ojas",
    metaDescription: "Relieve knee stiffness and osteoarthritis pain naturally. Discover Ayurvedic Janu Basti and homeopathic cartilage-supporting remedies.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Panchakarma & Spine Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai utilizes targeted knee lubrication therapies and anti-inflammatory herbs to manage osteoarthritis.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Joint Stiffness", description: "Morning stiffness in knees or fingers that eases after starting light movement.", iconName: "AlertTriangle" },
      { title: "Knee Crepitus", description: "A grating or crackling sound in the joint when bending or walking.", iconName: "Activity" }
    ],
    causes: [
      { title: "Age-Related Cartilage Wear", description: "Gradual thinning of joint cartilage due to continuous pressure and low lubrication.", iconName: "Scissors" }
    ],
    treatments: [
      { title: "Janu Basti (Knee Therapy)", description: "Pooling warm medicated oils over the knee joints to nourish cartilage and increase mobility.", iconName: "Sparkles", type: "Therapy" },
      { title: "Lubricating herbs", description: "Ayurvedic Shalaki (Boswellia) and Guggulu to inhibit joint inflammation and ease bending.", iconName: "Leaf", type: "Ayurveda" }
    ],
    faqs: [
      { question: "Is Janu Basti painful?", answer: "No, Janu Basti is a highly relaxing therapy. The warmth of the medicated oil provides immediate soothing relief to painful joints." }
    ],
    testimonials: [
      { id: "oa_t1", patientName: "Devendra Joshi", location: "Pune", disease: "Knee Osteoarthritis", rating: 5, duration: "2 Months", reviewText: "I was advised knee replacement. After 2 months of Janu Basti and Guggulu capsules, I can walk comfortably again.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["back-pain", "gout"]
  },

  "back-pain": {
    slug: "back-pain",
    name: "Back Pain",
    category: "Joint & Muscle Pain",
    tagline: "Relieve Lower Back Spasms, Disc Compression & Stiffness",
    overview: "Lower Back Pain (Lumbago) is a common disorder involving the muscles, nerves, and bones of the back. It can be caused by muscle strain, lumbar disc herniation, or poor posture. Our treatment targets back muscle relaxation, disc hydration, and spinal nerve decompression.",
    ayurvedaPerspective: "Ayurveda identifies back pain as 'Kati Shoola', caused by aggravated Vata dosha in the pelvic region. We use warming, Vata-pacifying therapies (Kati Basti) and strengthening herbs like Ashwagandha to restore spine strength.",
    homeopathyPerspective: "Homeopathy offers excellent remedies for muscular strain and nerve pain. Remedies like Arnica (for sore, bruised pain after strain), Aesculus (for dull back pain worsening on standing), and Hypericum (for nerve pain) are primary.",
    duration: "4 - 8 Weeks",
    risk: "Chronic Nerve Compression & Slip Disc",
    commonAge: "20 - 60 Years",
    recovery: "3 - 4 Weeks",
    heroImage: "/images/diseases/joint-pain.png",
    patientsTreated: "6,200+",
    yearsExperience: "22+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Back Pain & Slip Disc Treatment | Ojas Sanjivani",
    metaDescription: "Relieve lower back pain and disc spasms naturally. Discover Ayurvedic Kati Basti oil pooling and homeopathic nerve-soothing remedies.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Panchakarma & Spine Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai is a renowned spine specialist, focusing on non-surgical disc recovery using Kerala Ayurvedic protocols.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Muscle Spasms", description: "Sharp, tightening cramps in the lower back muscles, restricting bending.", iconName: "AlertTriangle" },
      { title: "Dull Lumbar Ache", description: "Constant aching in the lower spine that worsens after sitting or standing for long hours.", iconName: "Activity" }
    ],
    causes: [
      { title: "Disc Herniation / Poor Posture", description: "Imbalanced pressure on lumbar discs, causing bulging and spinal nerve pinching.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Kati Basti (Spine Therapy)", description: "Pooling warm medicated oils over the lumbar spine to nourish discs and release muscle tension.", iconName: "Sparkles", type: "Therapy" },
      { title: "Nerve-Soothing Homeopathy", description: "Homeopathic Hypericum and Arnica to reduce nerve inflammation and relieve muscle soreness.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Can a slip disc be treated without surgery?", answer: "Yes. Except in cases of severe spinal cord compression with bladder incontinence, most slip disc cases recover fully with Kati Basti and natural nerve decompresors." }
    ],
    testimonials: [
      { id: "bp_t1", patientName: "Aman Malhotra", location: "Mumbai", disease: "L4-L5 Bulging Disc", rating: 5, duration: "6 Weeks", reviewText: "My back pain was unbearable. After 6 weeks of Kati Basti, I am back to gym and sitting pain-free.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["cervical-pain", "sciatica"]
  },

  "cervical-pain": {
    slug: "cervical-pain",
    name: "Cervical Pain (Spondylosis)",
    category: "Joint & Muscle Pain",
    tagline: "Release Neck Stiffness, Shoulder Spasms & Nerve Tension",
    overview: "Cervical Spondylosis is an age-related wear and tear affecting the spinal discs in your neck. As the discs dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs). Our treatment targets neck muscle spasms, neck vertebral alignment, and shoulder nerve pain.",
    ayurvedaPerspective: "Ayurveda refers to neck pain as 'Greeva Stambha', caused by Vata dosha drying up neck joint lubrication. Treatment utilizes 'Greeva Basti' (pooling warm oil on the neck) and herbs like Ashwagandha and Rasna to nourish cervical nerves.",
    homeopathyPerspective: "Homeopathy provides targeted relief for cervical stiffness and radiating nerve pain. Remedies like Lachnanthes (for stiff neck drawn to one side), Cimicifuga, and Paris Quadrifolia relieve neck and shoulder tension safely.",
    duration: "4 - 8 Weeks",
    risk: "Radiating Arm Numbness & Vertigo",
    commonAge: "25 - 65 Years",
    recovery: "3 - 4 Weeks",
    heroImage: "/images/diseases/joint-pain.png",
    patientsTreated: "4,500+",
    yearsExperience: "22+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Cervical Spondylosis & Neck Pain Treatment | Ojas",
    metaDescription: "Relieve neck stiffness and cervical nerve pain naturally. Discover Ayurvedic Greeva Basti and homeopathic muscle relaxants.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Panchakarma & Spine Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai utilizes neck-strengthening oil therapies and posture corrections to resolve chronic cervical pain.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Neck Stiffness", description: "Difficulty rotating the head or bending the neck due to severe muscle tension.", iconName: "AlertTriangle" },
      { title: "Radiating Arm Pain", description: "Numbness, tingling, or shooting pain traveling from the neck down to the fingers.", iconName: "Activity" }
    ],
    causes: [
      { title: "Cervical Disc Dehydration", description: "Wear and tear of neck spinal discs compounded by constant mobile/computer screen use (Text Neck).", iconName: "Activity" }
    ],
    treatments: [
      { title: "Greeva Basti (Neck Therapy)", description: "Pooling warm medicated oils over the cervical vertebrae to nourish discs and release tight muscles.", iconName: "Sparkles", type: "Therapy" },
      { title: "Stiffness-Relieving Homeopathy", description: "Homeopathic Lachnanthes and Cimicifuga to relax stiff neck muscles and calm radiating nerve pain.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Can cervical pain cause dizziness?", answer: "Yes, cervical disc compression can irritate surrounding nerves and blood vessels, leading to cervicogenic vertigo. Our neck therapies resolve this dizziness effectively." }
    ],
    testimonials: [
      { id: "cp_t1", patientName: "Nisha Rao", location: "Bangalore", disease: "Cervical Spondylosis", rating: 5, duration: "1 Month", reviewText: "I had constant tingling in my right hand. Dr. Pillai's neck Basti and drops cleared the tingling in 3 weeks.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["back-pain", "vertigo"]
  },

  "sciatica": {
    slug: "sciatica",
    name: "Sciatica",
    category: "Joint & Muscle Pain",
    tagline: "Calm Shooting Nerve Pain & Restore Leg Mobility Naturally",
    overview: "Sciatica refers to back pain caused by a problem with the sciatic nerve. This is a large nerve that runs from the lower back down the back of each leg. When something compresses or irritates this nerve, it triggers shooting pain, tingling, or numbness that travels down the hip and leg. Our treatment targets lumbar nerve decompression and sciatic nerve soothing.",
    ayurvedaPerspective: "Ayurveda refers to Sciatica as 'Gridhrasi', a classic Vataja disorder where a compressed nerve impairs leg walking. Treatment uses warm oil enemas (Basti), local heat applications, and Vata-pacifying herbs like Rasna and Eranda.",
    homeopathyPerspective: "Homeopathy offers fast-acting, specific relief for shooting sciatic nerve pain. Remedies like Colocynthis (for sharp neuralgic pain relieved by hard pressure/bending), Mag Phos, and Gnaphalium (for pain with numbness) are highly effective.",
    duration: "6 - 12 Weeks",
    risk: "Leg Muscle Wasting & Foot Drop",
    commonAge: "30 - 60 Years",
    recovery: "4 - 8 Weeks",
    heroImage: "/images/diseases/joint-pain.png",
    patientsTreated: "3,900+",
    yearsExperience: "22+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Sciatica & Leg Nerve Pain Treatment | Ojas Sanjivani",
    metaDescription: "Relieve shooting sciatic nerve pain naturally. Discover Ayurvedic Vata-clearing Basti and homeopathic Colocynthis pressure remedies.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Panchakarma & Spine Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai utilizes targeted nerve-soothing Basti therapies and spinal traction stretches to resolve severe sciatica.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Shooting Leg Pain", description: "Sharp, electric-shock-like pain traveling from the lower back down the thigh and calf.", iconName: "AlertTriangle" },
      { title: "Numbness & Tingling", description: "Loss of sensation or pins-and-needles feeling in the foot or toes.", iconName: "Activity" }
    ],
    causes: [
      { title: "Sciatic Nerve Compression", description: "Irritation or pinching of sciatic nerve roots caused by an L5-S1 disc bulge or piriformis muscle spasm.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Nerve-Calming Basti", description: "Ayurvedic medicated oil enemas to directly calm systemic Vata, hydrate spinal discs, and soothe sciatic roots.", iconName: "Sparkles", type: "Therapy" },
      { title: "Neuralgic Homeopathy", description: "Homeopathic Colocynthis and Gnaphalium to stop sharp shooting leg pain and relieve foot numbness.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is walking good for sciatica?", answer: "Short, gentle walks on flat surfaces help, but long strides or forward bending can aggravate the pinched nerve. Rest during acute pain is highly recommended." }
    ],
    testimonials: [
      { id: "sc_t1", patientName: "Devendra Verma", location: "Mumbai", disease: "Left Leg Sciatica", rating: 5, duration: "2 Months", reviewText: "I couldn't stand for 5 minutes. Dr. Pillai's Basti and drops completely cleared the leg pain. Highly recommended.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["back-pain", "neuropathy"]
  },

  "frozen-shoulder": {
    slug: "frozen-shoulder",
    name: "Frozen Shoulder",
    category: "Joint & Muscle Pain",
    tagline: "Restore Complete Shoulder Joint Mobility & Stop Night Pain",
    overview: "Frozen Shoulder (Adhesive Capsulitis) is a condition characterized by stiffness and pain in the shoulder joint. Symptoms typically begin gradually, worsen over time, and make raising the arm or sleeping on the affected side extremely painful. Our treatment targets shoulder joint capsule inflammation, joint lubrication, and muscle stiffness.",
    ayurvedaPerspective: "Ayurveda describes Frozen Shoulder as 'Apabahuka', where Vata dosha dries up the shoulder joint lubrication (Kapha), causing the joint capsule to tighten and restrict movement. Treatment utilizes warm oil pouring (Pizhichil), local steam, and lubricating herbs.",
    homeopathyPerspective: "Homeopathy uses joint-mobilizing and pain-relieving remedies. Remedies like Ferrum Metallicum (for right shoulder pain worsening at night), Sanguinaria (for right-sided shoulder stiffness), and Rhus Tox restore movement safely.",
    duration: "8 - 16 Weeks",
    risk: "Permanent Shoulder Joint Lock",
    commonAge: "40 - 65 Years",
    recovery: "6 - 10 Weeks",
    heroImage: "/images/diseases/joint-pain.png",
    patientsTreated: "3,100+",
    yearsExperience: "22+",
    patientSatisfaction: "92%",
    metaTitle: "Natural Frozen Shoulder (Apabahuka) Treatment | Ojas",
    metaDescription: "Restore shoulder mobility and stop night pain naturally. Discover Ayurvedic lubricating oil therapies and homeopathic joint remedies.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Panchakarma & Spine Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai utilizes shoulder joint lubrication therapies and specialized physical stretches to reverse frozen shoulder.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Shoulder Stiffness", description: "Inability to lift the arm overhead, reach behind the back, or fasten clothing.", iconName: "AlertTriangle" },
      { title: "Severe Night Pain", description: "Aching pain in the shoulder joint that intensifies when lying down or sleeping on it.", iconName: "Flame" }
    ],
    causes: [
      { title: "Capsular Inflammation", description: "Thickening and tightening of the connective tissue capsule surrounding the shoulder joint, often following minor injury or diabetes.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Apabahuka Oil Therapy", description: "Ayurvedic warm oil shoulder massages and herbal steam to soften the tight joint capsule.", iconName: "Sparkles", type: "Therapy" },
      { title: "Joint-Mobilizing Homeopathy", description: "Homeopathic Sanguinaria and Rhus Tox to reduce capsule swelling and ease shoulder lifting.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is frozen shoulder linked to diabetes?", answer: "Yes, diabetes increases the risk of frozen shoulder due to high blood glucose affecting collagen behavior, which stiffens the shoulder joint capsule." }
    ],
    testimonials: [
      { id: "fs_t2", patientName: "Ashalata Sen", location: "Kolkata", disease: "Right Frozen Shoulder", rating: 5, duration: "3 Months", reviewText: "I couldn't comb my hair. Dr. Pillai's warm oils and exercises restored 90% of my arm movement.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["osteoarthritis", "diabetes"]
  },

  "gout": {
    slug: "gout",
    name: "Gout & Uric Acid Support",
    category: "Joint & Muscle Pain",
    tagline: "Lower Uric Acid Levels & Relieve Acute Joint Swelling Naturally",
    overview: "Gout is a common and complex form of arthritis characterized by sudden, severe attacks of pain, swelling, redness, and tenderness in the joints, most often in the joint at the base of the big toe. It is caused by hyperuricemia, where uric acid crystals deposit in joint tissues. Our treatment focuses on renal excretion of uric acid and cooling joint heat.",
    ayurvedaPerspective: "Ayurveda describes Gout as 'Vatarakta', a condition where Vata dosha and blood (Rakta Dhatu) are both vitiated, leading to severe burning joint pain. Treatment uses blood-purifying (Raktaprasadana) herbs like Guduchi, Manjistha, and Kaishore Guggulu.",
    homeopathyPerspective: "Homeopathy is highly successful in lowering uric acid and clearing joint crystals. Remedies like Colchicum Autumnale (for acute big toe swelling that cannot bear the slightest touch), Urtica Urens, and Ledum Pal are primary.",
    duration: "4 - 8 Weeks",
    risk: "Gouty Tophi & Kidney Stones",
    commonAge: "30 - 65 Years",
    recovery: "2 - 4 Weeks",
    heroImage: "/images/diseases/joint-pain.png",
    patientsTreated: "3,800+",
    yearsExperience: "22+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Gout & Uric Acid Treatment | Ojas Sanjivani",
    metaDescription: "Lower uric acid levels and relieve big toe joint pain naturally. Discover Ayurvedic Guduchi blood purifiers and homeopathic Colchicum.",
    doctor: {
      name: "Dr. Madhavan Pillai",
      qualification: "BAMS (Kerala Ayurveda Academy) • MD",
      experience: 22,
      specialization: "Panchakarma & Spine Specialist",
      image: "/images/dr_madhavan_pillai.png",
      description: "Dr. Madhavan Pillai combines joint-cooling Ayurvedic therapies with low-purine diets to treat chronic gout.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Acute Big Toe Pain", description: "Sudden, excruciating pain, redness, and swelling at the base of the big toe, usually starting at night.", iconName: "AlertTriangle" },
      { title: "Joint Burning Heat", description: "The affected joint feels hot to the touch and remains tender for days.", iconName: "Flame" }
    ],
    causes: [
      { title: "Uric Acid Crystal Deposits", description: "High blood uric acid levels (hyperuricemia) causing needle-like urate crystals to settle in joint synovial fluid.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Kaishore Guggulu & Guduchi", description: "Ayurvedic formulations to purify blood, promote renal uric acid filtration, and cool joint heat.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Crystal-Clearing Homeopathy", description: "Homeopathic Colchicum and Urtica Urens to excrete uric acid and relieve acute joint swelling.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "What foods should I avoid if I have gout?", answer: "Avoid high-purine foods like red meat, seafood, alcohol (especially beer), yeast products, sweet sodas, and heavy lentils (Urad dal)." }
    ],
    testimonials: [
      { id: "go_t1", patientName: "Rohan Das", location: "Kolkata", disease: "Uric Acid (9.2 mg/dL)", rating: 5, duration: "1 Month", reviewText: "My toe swelling was extremely painful. These drops brought my uric acid down to 5.4 in 4 weeks.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["osteoarthritis", "kidney-stones"]
  },

  // === 8. HAIRFALL & SKIN ===
  "hairfall-skin": {
    slug: "hairfall-skin",
    name: "Hairfall & Skin",
    category: "Hairfall & Skin",
    tagline: "Natural Hair & Skin Rejuvenation with Ayurveda & Homeopathy",
    overview: "Hair and skin health are deep reflections of internal metabolic balance and blood purity. From alopecia (severe hair fall), acne, and eczema to psoriasis, stubborn dandruff, and early aging, dermatological conditions are driven by blood toxins, liver sluggishness, and nervous stress. Our integrated clinical protocols focus on purifying blood, clearing skin biofilms, cooling chronic skin heat, and nourishing hair follicles naturally.",
    ayurvedaPerspective: "In Ayurveda, hair and skin issues are managed under 'Kushtha' and 'Keshyadesha' therapies. Skin disorders are driven by vitiated Pitta dosha polluting the blood (Rakta Dhatu) and generating heat (Bhrajaka Pitta). Hair fall is caused by excess Pitta drying up root follicles. Treatment utilizes cooling blood purifiers (Manjistha, Neem, Khadir) and lubricating hair oils (Bhringraj, Amalaki) to restore tissue health.",
    homeopathyPerspective: "Homeopathy treats hair and skin issues constitutionally, recognizing that skin eruptions are the body's internal attempt to push out toxins. Rather than suppressing skin eruptions with steroid creams, homeopathic remedies like Sulphur, Psorinum, Graphites, and Mezereum regulate immune responses, heal dry skin scales, and rebuild skin integrity safely.",
    duration: "Chronic / Skin Rebuilding",
    risk: "Secondary Infections & Scarring",
    commonAge: "12 - 60 Years",
    recovery: "6 - 16 Weeks",
    heroImage: "/images/diseases/hair-skin.png",
    patientsTreated: "14,500+",
    yearsExperience: "14+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Hair Loss, Acne, Eczema & Psoriasis Treatment | Ojas",
    metaDescription: "Purify blood, clear acne, soothe eczema and psoriasis, and stop hair loss naturally. Discover customized Ayurveda & Homeopathy skin care.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Dermatological & Constitutional Homeopath",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in non-steroidal management of chronic eczema, psoriasis, and alopecia using deep constitutional homeopathy.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Hair Fall Care", slug: "hair-loss", description: "Stop hair thinning and stimulate follicle regrowth using natural oils.", image: "/images/diseases/hair-skin.png" },
      { name: "Acne & Pimples", slug: "acne", description: "Clear painful acne, regulate skin sebum, and reduce scarring.", image: "/images/diseases/hair-skin.png" },
      { name: "Eczema Relief", slug: "eczema", description: "Soothe itchy, dry, weeping skin patches and build skin barrier strength.", image: "/images/diseases/hair-skin.png" },
      { name: "Psoriasis Support", slug: "psoriasis-skin", description: "Manage red, silvery skin plaques and calm chronic skin scaling.", image: "/images/diseases/hair-skin.png" },
      { name: "Dandruff Relief", slug: "dandruff", description: "Eradicate stubborn scalp flaking, itching, and fungal dandruff safely.", image: "/images/diseases/hair-skin.png" },
      { name: "Anti-Aging Care", slug: "anti-aging", description: "Nourish deep skin tissues, reduce wrinkles, and boost natural collagen.", image: "/images/diseases/hair-skin.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Why avoid steroid creams for eczema?", answer: "Steroid creams temporarily suppress skin eruptions but do not cure the internal cause. When stopped, eczema flares back aggressively. Our remedies clear toxins from the blood for a permanent cure." },
      { question: "How does Bhringraj oil support hair regrowth?", answer: "Bhringraj (Eclipta prostrata) is a premier hair tonic. It penetrates the scalp to cool Pitta heat, improve follicular blood flow, and stimulate new hair root growth." }
    ],
    testimonials: [
      { id: "hs_t2", patientName: "Priyanka Sen", location: "Kolkata", disease: "Chronic Facial Eczema", rating: 5, duration: "3 Months", reviewText: "I was dependent on steroid creams for 2 years. Dr. Roy's homeopathic drops cleared my dry, red face skin patches permanently, and my skin feels soft now.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["allergic-rhinitis", "hormonal-imbalance"]
  },

  "hair-loss": {
    slug: "hair-loss",
    name: "Hair Fall & Alopecia",
    category: "Hairfall & Skin",
    tagline: "Stop Hair Thinning & Stimulate follicle Regrowth Naturally",
    overview: "Hair Fall (Alopecia) is caused by stress, poor scalp circulation, nutritional deficiencies, and hormonal imbalances (like high DHT). Chronic hair fall weakens follicles, leading to thinning and bald patches. Our program cools the scalp, nourishes follicles, and promotes new hair growth.",
    ayurvedaPerspective: "Ayurveda attributes hair fall (Khalitya) to excess Pitta dosha in the scalp. The heat dries up hair roots. We use cooling herbal hair oils like Bhringraj, Amalaki, and Brahmi, and blood-purifying herbs to cool Pitta.",
    homeopathyPerspective: "Homeopathy treats hair loss constitutionally, matching the emotional stress and physical health. Remedies like Acid Phosphoricum (for stress-induced hair loss), Weisbaden, and Selenium strengthen hair roots.",
    duration: "8 - 24 Weeks",
    risk: "Progressive Follicle Shrinkage",
    commonAge: "18 - 50 Years",
    recovery: "8 - 12 Weeks",
    heroImage: "/images/diseases/hair-skin.png",
    patientsTreated: "5,800+",
    yearsExperience: "14%",
    patientSatisfaction: "93%",
    metaTitle: "Natural Hair Loss & Alopecia Treatment | Ojas Sanjivani",
    metaDescription: "Stop hair thinning and balding naturally. Discover Ayurvedic Bhringraj scalp oils and homeopathic Weisbaden follicle builders.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Dermatological & Constitutional Homeopath",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in treating telogen effluvium and alopecia areata using constitutional homeopathic remedies.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Excessive Hair Shedding", description: "Losing more than 100 hair strands daily, visible in combs or shower drains.", iconName: "AlertTriangle" },
      { title: "Scalp Thinning", description: "Widening hair partition and visible thinning on the crown.", iconName: "Activity" }
    ],
    causes: [
      { title: "Scalp Pitta Heat", description: "High Pitta dosha and stress drying up nutrition to the hair roots.", iconName: "Flame" }
    ],
    treatments: [
      { title: "Bhringraj Scalp Therapy", description: "Warm Ayurvedic Bhringraj and Amla oil massages to cool the scalp and feed roots.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Follicle-Building Homeopathy", description: "Homeopathic Weisbaden and Acid Phos to stop hair fall and stimulate dormant roots.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Can natural treatment reverse bald patches?", answer: "Yes, if the hair follicles are still active (as in early alopecia areata), constitutional homeopathic remedies can successfully trigger regrowth." }
    ],
    testimonials: [
      { id: "hl_t1", patientName: "Rohan Sen", location: "Kolkata", disease: "Telogen Effluvium", rating: 5, duration: "3 Months", reviewText: "My hair fall stopped within 4 weeks of starting the Weisbaden drops. New hair is growing back on my crown.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["dandruff", "hormonal-imbalance"]
  },

  "acne": {
    slug: "acne",
    name: "Acne & Pimples",
    category: "Hairfall & Skin",
    tagline: "Clear Painful Acne, Regulate Sebum & Reduce Skin Scarring",
    overview: "Acne Vulgaris is a chronic inflammatory skin condition characterized by pimples, blackheads, and deep painful cysts. It occurs when hair follicles become clogged with oil (sebum) and dead skin cells, attracting acne bacteria. Our program purifies blood toxins, regulates oil gland activity, and prevents skin scarring.",
    ayurvedaPerspective: "Ayurveda describes acne as 'Yauvanpidika', caused by imbalances in Kapha and Pitta dosha, which pollute the blood (Rakta). Treatment uses blood-cleansing herbs like Neem, Manjistha, and Khadir, and local cooling herbal packs (Lepa).",
    homeopathyPerspective: "Homeopathy treats acne constitutionally by regulating sebaceous secretions and reducing inflammation. Remedies like Hepar Sulph (for painful, pus-filled acne), Berberis Aquifolium (for clearing acne scars), and Pulsatilla are primary.",
    duration: "4 - 8 Weeks",
    risk: "Severe Hyperpigmentation & Scarring",
    commonAge: "12 - 35 Years",
    recovery: "3 - 4 Weeks",
    heroImage: "/images/diseases/hair-skin.png",
    patientsTreated: "4,900+",
    yearsExperience: "14%",
    patientSatisfaction: "95%",
    metaTitle: "Natural Acne & Pimple Treatment | Ojas Sanjivani",
    metaDescription: "Clear cystic acne and scars naturally. Discover Ayurvedic Neem blood purifiers and homeopathic Berberis Aquifolium scar clearers.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Dermatological & Constitutional Homeopath",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes specific homeopathic oil-regulators and blood cleansers to clear chronic acne.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Cystic Pimples", description: "Painful, red, pus-filled skin bumps on cheeks, forehead, or chin.", iconName: "AlertTriangle" },
      { title: "Acne Scars", description: "Stubborn dark spots and pitted scars left behind by healed acne.", iconName: "Activity" }
    ],
    causes: [
      { title: "Blood Impurities & Sebum", description: "Accumulated toxins (Ama) in blood combined with overactive sebaceous oil glands.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Blood-Purifying Lepas", description: "Ayurvedic Neem and Lodhra face packs to dry pimples, kill bacteria, and reduce redness.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Scar-Clearing Homeopathy", description: "Homeopathic Berberis Aquifolium drops (taken internally) to fade scars and restore glowing skin.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How does Berberis Aquifolium help in acne?", answer: "Berberis Aquifolium is the premier homeopathic remedy to clear skin complexion, dissolve dark acne scars, and regulate facial oil gland activity." }
    ],
    testimonials: [
      { id: "ac_t2", patientName: "Nisha Nair", location: "Kochi, Kerala", disease: "Cystic Acne", rating: 5, duration: "1 Month", reviewText: "I had painful acne for years. Dr. Roy's remedies cleared my skin in 4 weeks and my scars are fading away.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["eczema", "hormonal-imbalance"]
  },

  "eczema": {
    slug: "eczema",
    name: "Eczema Relief",
    category: "Hairfall & Skin",
    tagline: "Soothe Itchy, Dry, Weeping Skin Patches Naturally",
    overview: "Eczema (Atopic Dermatitis) is an inflammatory skin condition characterized by red, dry, severely itchy skin patches that can crack and bleed or weep fluid. It is highly linked to immune system hyper-reactivity. Our program repairs the skin's barrier, reduces inflammation, and stops chronic itching safely.",
    ayurvedaPerspective: "Ayurveda describes Eczema as 'Vicharchika', a Vata-Pitta-Kapha skin disease. Dry, scaly eczema is Vata-dominated, while red, weeping eczema is Pitta-Kapha-dominated. We use cooling Neem oil and blood purifiers like Khadir to soothe Vicharchika.",
    homeopathyPerspective: "Homeopathy is exceptionally successful in treating eczema without suppression. Remedies like Graphites (for thick, dry, honey-like weeping eczema), Sulphur (for severe dry itching), and Petroleum (for deep skin cracks) heal skin tissue.",
    duration: "8 - 16 Weeks",
    risk: "Secondary Bacterial Infection",
    commonAge: "1 - 65 Years",
    recovery: "4 - 8 Weeks",
    heroImage: "/images/diseases/hair-skin.png",
    patientsTreated: "4,200+",
    yearsExperience: "14%",
    patientSatisfaction: "93%",
    metaTitle: "Natural Eczema & Dermatitis Treatment | Ojas Sanjivani",
    metaDescription: "Relieve eczema dry itching and weeping skin naturally. Discover Ayurvedic Khadir blood purifiers and homeopathic Graphites remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Dermatological & Constitutional Homeopath",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in non-steroidal management of severe infantile and adult eczema using constitutional homeopathy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Intense Skin Itching", description: "Severe itching that worsens at night, leading to scratching and skin damage.", iconName: "Flame" },
      { title: "weeping Skin Patches", description: "Red, swollen skin releasing a clear fluid, forming sticky crusts.", iconName: "AlertTriangle" }
    ],
    causes: [
      { title: "Immune Hyper-Reactivity", description: "Hyper-sensitive skin immune cells reacting to environmental dust, chemicals, or food allergens.", iconName: "ShieldCheck" }
    ],
    treatments: [
      { title: "Khadir & Neem Cleansing", description: "Ayurvedic Khadirarishta syrup and neem oil application to clear blood heat and heal skin barrier.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Barrier-Healing Homeopathy", description: "Homeopathic Graphites and Sulphur to stop weeping fluid, ease itching, and heal skin cracks.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Why is Graphites used in weeping eczema?", answer: "Graphites is the leading homeopathic remedy for skin that produces a sticky, honey-like, gelatinous discharge, helping to dry and rebuild the epidermis." }
    ],
    testimonials: [
      { id: "ec_t1", patientName: "Aaradhya Sen", location: "Kolkata", disease: "Infantile Eczema", rating: 5, duration: "2 Months", reviewText: "My 3-year-old was crying from skin itching. Dr. Roy's sweet pills cleared the eczema completely within 2 months.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["psoriasis-skin", "acne"]
  },

  "psoriasis-skin": {
    slug: "psoriasis-skin",
    name: "Psoriasis",
    category: "Hairfall & Skin",
    tagline: "Manage Red, Silvery Skin Plaques & Calm Scaling Naturally",
    overview: "Psoriasis is a chronic autoimmune skin disease where skin cells multiply up to 10 times faster than normal, causing cells to build up into bumpy red patches covered with silvery scales. It most commonly affects the elbows, knees, scalp, and lower back. Our treatment focuses on calming skin cell multiplication and immunomodulation.",
    ayurvedaPerspective: "Ayurveda describes Psoriasis as 'Ekakushtha', a Vata-Kapha skin disorder. Vitiated Vata dries up skin tissue, creating scaling, while Kapha causes thickening. We use powerful blood cleansers (Manjistha, Neem) and detoxifying Panchakarma to clear Ekakushtha.",
    homeopathyPerspective: "Homeopathy manages psoriasis constitutionally, treating the underlying autoimmune trigger. Remedies like Arsenicum Iodatum (for dry, scaly skin shedding flakes), Psorinum, and Mezereum soothe red plaques and reduce skin cell multiplication.",
    duration: "12 - 24 Weeks",
    risk: "Psoriatic Arthritis & Joint Pain",
    commonAge: "15 - 65 Years",
    recovery: "8 - 12 Weeks",
    heroImage: "/images/diseases/hair-skin.png",
    patientsTreated: "3,600+",
    yearsExperience: "18%",
    patientSatisfaction: "91%",
    metaTitle: "Natural Psoriasis & Scaly Skin Treatment | Ojas Sanjivani",
    metaDescription: "Reduce psoriasis red plaques and skin scaling naturally. Discover Ayurvedic immune-stabilizers and homeopathic Arsenic Iod remedies.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Immunomodulation Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes customized blood-purifying therapies and non-heating immunomodulating herbs to treat psoriasis.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Silvery Skin Scales", description: "Thick, red patches of skin covered with loose, silvery scales (plaques) that shed easily.", iconName: "AlertTriangle" },
      { title: "Dry Skin Cracking", description: "Severe skin dryness that can crack, bleed, and cause sharp pain.", iconName: "Activity" }
    ],
    causes: [
      { title: "Accelerated Cell Turnover", description: "Autoimmune cells trigger rapid epidermal multiplication, preventing mature shedding.", iconName: "GitMerge" }
    ],
    treatments: [
      { title: "Blood Purifiers & Detox", description: "Ayurvedic Manjisthadi Kwath and cooling neem pastes to purify blood and reduce skin scaling.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Autoimmune Homeopathy", description: "Homeopathic Arsenic Iod and Psorinum to stabilize the immune system and calm skin cell turnover.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is psoriasis contagious?", answer: "No, psoriasis is a non-contagious autoimmune disease. It cannot be passed from person to person." }
    ],
    testimonials: [
      { id: "ps_t2", patientName: "Vikram Sen", location: "Kolkata", disease: "Plaque Psoriasis", rating: 5, duration: "4 Months", reviewText: "I had thick scales on my elbows and knees. Dr. Bhaskar's remedies cleared the scaling and my skin is normal now.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["eczema", "arthritis"]
  },

  "dandruff": {
    slug: "dandruff",
    name: "Dandruff Relief",
    category: "Hairfall & Skin",
    tagline: "Eradicate Stubborn Scalp Flaking & Fungal Dandruff Naturally",
    overview: "Dandruff (Seborrheic Dermatitis of the scalp) is characterized by dry, white skin flakes shedding from the scalp, often accompanied by severe itching and hair fall. It is driven by oil overproduction (sebum) and an overgrowth of Malassezia yeast. Our treatment focuses on scalp fungal clearance and sebum regulation.",
    ayurvedaPerspective: "Ayurveda describes dandruff as 'Darunaka', a Vata-Kapha scalp disorder. Vata dries up the scalp, creating flakes, while Kapha leads to sebum buildup. We use anti-fungal hair oils containing Neem, Karanja, and Lemon to clear Darunaka.",
    homeopathyPerspective: "Homeopathy treats chronic dandruff by regulating scalp moisture and fighting yeast. Remedies like Kali Sulphuricum (for yellow, sticky flakes), Sulphur, and Mezereum stop itching and flaking safely.",
    duration: "2 - 6 Weeks",
    risk: "Scalp Folliculitis & Hair Loss",
    commonAge: "12 - 50 Years",
    recovery: "2 - 3 Weeks",
    heroImage: "/images/diseases/hair-skin.png",
    patientsTreated: "3,800+",
    yearsExperience: "14%",
    patientSatisfaction: "94%",
    metaTitle: "Natural Dandruff & Itchy Scalp Treatment | Ojas Sanjivani",
    metaDescription: "Clear stubborn white flakes and scalp yeast naturally. Discover Ayurvedic Karanja oils and homeopathic Kali Sulph dandruff remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Dermatological & Constitutional Homeopath",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes targeted homeopathic anti-fungal drops and herbal scalp washes to permanently resolve dandruff.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Scalp Flaking", description: "Dry, white or oily yellow flakes shedding onto hair, shoulders, and eyebrows.", iconName: "AlertTriangle" },
      { title: "Scalp Itching", description: "Persistent tickling or burning sensation on the scalp, worsened by sweat.", iconName: "Flame" }
    ],
    causes: [
      { title: "Malassezia Yeast Overgrowth", description: "Excessive yeast growth feeding on scalp sebum, releasing skin-irritating oleic acids.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Anti-Fungal Karanja Oil", description: "Ayurvedic Karanja and Neem oils massaged onto the scalp to kill yeast and hydrate dry skin.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Sebum-Regulating Homeopathy", description: "Homeopathic Kali Sulph and Mezereum to balance scalp oil glands and stop white flaking.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Can dandruff cause hair fall?", answer: "Yes, constant scratching and yeast inflammation damage the hair root environment, leading to increased hair shedding. Clearing dandruff halts this hair loss." }
    ],
    testimonials: [
      { id: "dn_t1", patientName: "Ayan Roy", location: "Kolkata", disease: "Chronic Dandruff", rating: 5, duration: "1 Month", reviewText: "I had severe dandruff and scalp itching. These remedies cleared the flakes and stopped my hair fall within 3 weeks.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["hair-loss", "eczema"]
  },

  "anti-aging": {
    slug: "anti-aging",
    name: "Anti-Aging Care",
    category: "Hairfall & Skin",
    tagline: "Nourish Skin Tissues, Reduce Wrinkles & Boost Collagen Naturally",
    overview: "Skin aging is marked by fine lines, wrinkles, skin sagging, dry patches, and age spots, driven by a natural decline in collagen, elastin, and skin hydration (hyaluronic acid). External stress, sun exposure, and poor digestion speed up this process. Our program uses natural antioxidants and tissue-rejuvenating herbs to maintain youthful skin.",
    ayurvedaPerspective: "Ayurveda describes aging as 'Vaya Sthapana' (maintaining youth). As we age, Vata dosha dominates, causing skin dryness and wrinkles. We use 'Rasayana' (rejuvenating) herbs like Amalaki, Haridra (Turmeric), and Kumkumadi oil to nourish skin and balance Vata.",
    homeopathyPerspective: "Homeopathy uses cell-nourishing and skin-toning remedies. Remedies like Sarsaparilla, Lycopodium, and Selenium support cellular hydration, reduce dark spots, and improve skin elasticity safely.",
    duration: "4 - 12 Weeks",
    risk: "Premature Wrinkling & Tissue Sagging",
    commonAge: "25 - 65 Years",
    recovery: "4 - 6 Weeks",
    heroImage: "/images/diseases/hair-skin.png",
    patientsTreated: "2,900+",
    yearsExperience: "14%",
    patientSatisfaction: "93%",
    metaTitle: "Natural Anti-Aging Skin Rejuvenation | Ojas Sanjivani",
    metaDescription: "Nourish aging skin and boost collagen naturally. Discover Ayurvedic Kumkumadi oils and homeopathic tissue-regenerating remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Senior Dermatological & Constitutional Homeopath",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes specific homeopathic tissue hydrators and antioxidant therapies to manage early skin aging.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Fine Lines & Wrinkles", description: "Creases and wrinkles forming around the eyes (crow's feet), mouth, and forehead.", iconName: "AlertTriangle" },
      { title: "Skin Sagging & Spots", description: "Loss of skin elasticity, jowl sagging, and dark age spots due to sun exposure.", iconName: "Activity" }
    ],
    causes: [
      { title: "Collagen & Elastin Loss", description: "Gradual reduction in skin structural proteins combined with high free-radical stress.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Kumkumadi oil Therapy", description: "Ayurvedic Saffron oil massage to improve facial blood flow, nourish deep skin layers, and fade spots.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Tissue-Hydrating Homeopathy", description: "Homeopathic Sarsaparilla and Selenium to improve skin cell water retention and reduce wrinkles.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Why is Kumkumadi oil called a golden oil?", answer: "Kumkumadi oil is infused with pure Saffron and Ayurvedic herbs. It is clinically proven to improve skin tone, increase collagen, and reduce fine lines naturally." }
    ],
    testimonials: [
      { id: "aa_t1", patientName: "Malini Sharma", location: "Delhi", disease: "Premature Wrinkles", rating: 5, duration: "2 Months", reviewText: "My face skin was dry, dull, and wrinkly. The Kumkumadi oil and drops have made my skin plump, smooth, and glowing.", videoThumbnail: "/images/product-arnica-oil.jpg" }
    ],
    relatedDiseases: ["acne", "menopause"]
  },

  // === 9. ENDOCRINE DISORDERS ===
  "endocrine-disorders": {
    slug: "endocrine-disorders",
    name: "Endocrine Disorders",
    category: "Endocrine Disorders",
    tagline: "Natural Hormone & Metabolic Balance with Ayurveda & Homeopathy",
    overview: "Endocrine disorders disrupt the delicate balance of hormones in the body, affecting metabolism, growth, stress response, and energy levels. From hypothyroidism and hyperthyroidism to diabetes and chronic adrenal burnout, hormonal imbalances require systemic, non-suppressive treatments. Our integrated clinical protocols focus on stimulating gland health, resolving receptor resistance, and regulating endocrine feedback loops naturally.",
    ayurvedaPerspective: "In Ayurveda, endocrine functions are tied to 'Agni' (metabolic fire) and 'Dhatvagni' (tissue metabolism). Hormonal imbalances represent errors in these fires, leading to accumulation of Ama (toxins) and blocking of channels (Srotas). Treatment utilizes adaptogenic and thyroid-stimulating herbs like Kanchanar Guggulu, Ashwagandha, and Shatavari to clear blocks and rebuild metabolic Agni.",
    homeopathyPerspective: "Homeopathy treats endocrine disorders constitutionally, recognizing that gland health is linked to the nervous and emotional systems. Remedies like Thyroidinum (to balance thyroid output), Calcarea Carb (for slow thyroid metabolism), Lycopodium (for blood glucose changes), and Sepia regulate hormone feedback loops and restore system stability gently.",
    duration: "Chronic / Hormonal Support",
    risk: "Severe Systemic Metabolic Failure",
    commonAge: "15 - 65 Years",
    recovery: "8 - 16 Weeks",
    heroImage: "svg:endocrine",
    patientsTreated: "13,800+",
    yearsExperience: "14+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Thyroid, Diabetes & Hormone Imbalance Treatment | Ojas",
    metaDescription: "Balance thyroid, diabetes, and adrenal hormones naturally. Our expert integrated Ayurveda & Homeopathy doctors restore endocrine health safely.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic Diabetologist & Metabolic Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy has 14 years of clinical experience in prescribing constitutional remedies to treat endocrine disorders and stabilize hormone pathways naturally.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Hypothyroidism", slug: "hypothyroidism", description: "Stimulate natural thyroid gland hormone release and boost slow metabolism.", image: "svg:endocrine" },
      { name: "Hyperthyroidism", slug: "hyperthyroidism", description: "Calm an overactive thyroid, reduce racing pulse, and manage weight loss.", image: "svg:endocrine" },
      { name: "Diabetes Management", slug: "diabetes", description: "Control blood sugar levels naturally, protecting against neuropathy and renal strain.", image: "/images/diseases/diabetes.png" },
      { name: "Adrenal Fatigue", slug: "adrenal-fatigue", description: "Nourish exhausted adrenal glands, clear brain fog, and restore morning energy.", image: "/images/diseases/stress-anxiety.png" },
      { name: "Hormonal Imbalance", slug: "hormonal-imbalance", description: "Balance estrogen, progesterone, cortisol, and thyroid interactions naturally.", image: "svg:endocrine" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Can thyroid medications be tapered off naturally?", answer: "Yes, by improving the thyroid gland's capacity to synthesize T3/T4 and clearing cellular thyroid receptor resistance, many patients can safely taper off synthetic thyroxine under clinical supervision." },
      { question: "How does Kanchanar Guggulu support the thyroid?", answer: "Kanchanar Guggulu is a classic Ayurvedic formulation to treat glandular swellings (Granthi). It stimulates the thyroid gland, clears lymphatic blocks, and reduces nodules." }
    ],
    testimonials: [
      { id: "ed_t1", patientName: "Swati Deshmukh", location: "Mumbai", disease: "Hypothyroidism (TSH 8.5)", rating: 5, duration: "3 Months", reviewText: "I had severe fatigue and constant weight gain. After 3 months of Dr. Roy's homeopathic drops and Kanchanar tablets, my TSH fell to 2.4.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["diabetes", "hormonal-imbalance"]
  },

  "hypothyroidism": {
    slug: "hypothyroidism",
    name: "Hypothyroidism",
    category: "Endocrine Disorders",
    tagline: "Stimulate Thyroid Gland Function & Boost Slow Metabolism Naturally",
    overview: "Hypothyroidism is a condition where the thyroid gland does not produce enough thyroid hormones (T3, T4). This slows down the body's metabolism, causing weight gain, severe fatigue, hair loss, constipation, and cold sensitivity. Our treatment focuses on stimulating thyroid tissue and improving cell metabolism.",
    ayurvedaPerspective: "Ayurveda attributes Hypothyroidism to 'Galaganda' or slow metabolic Agni (Dhatvagni). Treatment utilizes thyroid-stimulating and channel-clearing herbs like Kanchanar Guggulu, Guggul, and triphala to restore Agni.",
    homeopathyPerspective: "Homeopathy treats hypothyroidism by acting on the pituitary-thyroid axis. Remedies like Thyroidinum, Calcarea Carbonica (for slow thyroid patients prone to weight gain/sweating), and Sepia regulate thyroid function safely.",
    duration: "12 - 24 Weeks",
    risk: "Severe Myxedema & Heart Fatigue",
    commonAge: "20 - 60 Years",
    recovery: "8 - 12 Weeks",
    heroImage: "svg:endocrine",
    patientsTreated: "4,900+",
    yearsExperience: "14%",
    patientSatisfaction: "93%",
    metaTitle: "Natural Hypothyroidism & Slow Thyroid Treatment | Ojas",
    metaDescription: "Relieve slow thyroid symptoms naturally. Discover Ayurvedic Kanchanar Guggulu and homeopathic TSH-stabilizing remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic Diabetologist & Metabolic Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in endocrine restoration and TSH stabilization using constitutional homeopathy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Unexplained Weight Gain", description: "Weight gain despite eating a controlled diet, due to extremely slow metabolism.", iconName: "AlertTriangle" },
      { title: "Severe Fatigue & Hair Fall", description: "Feeling constantly exhausted, sleepiness, and dry hair fall.", iconName: "BatteryLow" }
    ],
    causes: [
      { title: "Thyroid Gland Sluggishness", description: "Pituitary gland failure or autoimmune antibodies impairing the production of T3/T4 hormones.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Kanchanar Guggulu Stimulants", description: "Ayurvedic Kanchanar and Guggul tablets to clear glandular blockages and boost thyroid output.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Hormone-Regulating Homeopathy", description: "Homeopathic Thyroidinum and Calcarea Carb to stimulate T3/T4 synthesis and normalize TSH.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How long does it take for TSH to normalize?", answer: "Significant changes in TSH levels are visible within 8 to 12 weeks of starting our integrated natural remedies." }
    ],
    testimonials: [
      { id: "ht_t2", patientName: "Nisha Sen", location: "Kolkata", disease: "Hypothyroidism", rating: 5, duration: "3 Months", reviewText: "My TSH went down from 9.2 to 3.1. I no longer feel tired, and my hair fall has stopped.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["hyperthyroidism", "hormonal-imbalance"]
  },

  "hyperthyroidism": {
    slug: "hyperthyroidism",
    name: "Hyperthyroidism",
    category: "Endocrine Disorders",
    tagline: "Calm Overactive Thyroid & Reduce Heart Racing Naturally",
    overview: "Hyperthyroidism occurs when the thyroid gland produces too much thyroid hormone. This accelerates the body's metabolism, causing rapid weight loss, racing heart rate (tachycardia), anxiety, sweating, and hand tremors. Our treatment focuses on calming thyroid tissue hyper-reactivity.",
    ayurvedaPerspective: "Ayurveda describes Hyperthyroidism as an excess of Tikshna Agni (hyperactive metabolic fire) driven by elevated Pitta dosha. Treatment uses cooling, thyroid-soothing herbs like Shankhapushpi, Yashtimadhu, and Shatavari to cool Pitta.",
    homeopathyPerspective: "Homeopathy acts on thyroid-adrenal pathways to calm over-secretion. Remedies like Iodum (for rapid weight loss despite high hunger), Lachesis, and Lycopus Virginicus regulate pulse rate and thyroid output.",
    duration: "12 - 24 Weeks",
    risk: "Thyroid Storm & Tachycardia",
    commonAge: "18 - 50 Years",
    recovery: "8 - 12 Weeks",
    heroImage: "svg:endocrine",
    patientsTreated: "2,600+",
    yearsExperience: "14%",
    patientSatisfaction: "92%",
    metaTitle: "Natural Hyperthyroidism & Overactive Thyroid Treatment | Ojas",
    metaDescription: "Calm overactive thyroid and rapid pulse naturally. Discover cooling Ayurvedic herbs and homeopathic Iodum remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic Diabetologist & Metabolic Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes specific thyroid calmers and pulse regulators to manage hyperthyroidism.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Rapid Weight Loss", description: "Losing weight quickly despite having an increased appetite.", iconName: "AlertTriangle" },
      { title: "Tremors & Racing Pulse", description: "Fine tremors in hands and palpitations even during rest.", iconName: "Activity" }
    ],
    causes: [
      { title: "Thyroid Hyper-secretion", description: "Autoimmune stimulation (Graves' disease) forcing excess T3/T4 hormone production.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Pitta-Cooling Herbs", description: "Ayurvedic Shatavari and Yashtimadhu to cool hyperactive metabolic fire and protect tissues.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Pulse-Regulating Homeopathy", description: "Homeopathic Lycopus and Iodum to lower heart rate, calm tremors, and regulate thyroid secretion.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is hyperthyroidism linked to anxiety?", answer: "Yes, excess thyroid hormones over-stimulate the sympathetic nervous system, mimicking anxiety symptoms like racing heart and trembling hands." }
    ],
    testimonials: [
      { id: "ht_t3", patientName: "Aman Sen", location: "Kolkata", disease: "Hyperthyroidism", rating: 5, duration: "3 Months", reviewText: "My hand tremors and rapid heartbeat stopped. My weight has finally stabilized.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["hypothyroidism", "anxiety-disorders"]
  },

  "adrenal-fatigue": {
    slug: "adrenal-fatigue",
    name: "Adrenal Fatigue & Burnout",
    category: "Endocrine Disorders",
    tagline: "Nourish Exhausted Adrenal Glands & Restore Energy Naturally",
    overview: "Adrenal Fatigue refers to a state of systemic exhaustion caused by chronic mental, emotional, or physical stress. When stress is constant, the adrenal glands are overworked, leading to cortisol depletion. This causes waking fatigue, brain fog, salt cravings, and low blood pressure. Our program rebuilds adrenal vitality.",
    ayurvedaPerspective: "Ayurveda explains adrenal burnout as a depletion of 'Ojas' (vital energy) and vitiation of Vata dosha due to excessive activity. We use rejuvenating 'Rasayana' herbs like Ashwagandha, Bala, and Shatavari to rebuild Ojas.",
    homeopathyPerspective: "Homeopathy targets the neuro-adrenal axis to restore vitality. Remedies like Phosphoric Acid (for complete mental collapse with apathy), Kali Phos, and Selenium relieve stress burnout safely.",
    duration: "6 - 12 Weeks",
    risk: "Chronic Fatigue Syndrome & Low Immunity",
    commonAge: "18 - 55 Years",
    recovery: "4 - 8 Weeks",
    heroImage: "/images/diseases/stress-anxiety.png",
    patientsTreated: "3,500+",
    yearsExperience: "14%",
    patientSatisfaction: "94%",
    metaTitle: "Natural Adrenal Fatigue & Burnout Treatment | Ojas",
    metaDescription: "Recover from chronic stress and adrenal burnout naturally. Discover Ayurvedic Ojas-building herbs and homeopathic Kali Phos.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic Diabetologist & Metabolic Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes targeted homeopathic nerve tonics and adaptogens to resolve chronic stress fatigue.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Morning Fatigue", description: "Inability to wake up or feel active in the morning without caffeine.", iconName: "BatteryLow" },
      { title: "Brain Fog & Cravings", description: "Difficulty focusing, memory slip, and craving salty or sweet foods.", iconName: "Brain" }
    ],
    causes: [
      { title: "Chronic Cortisol Depletion", description: "Long-term overworking of the adrenal glands, exhausting their cortisol producing capacity.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Ojas Rebuilding Herbs", description: "Ayurvedic Ashwagandha and Bala syrups to nourish adrenal tissues and improve sleep depth.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Burnout Recovery Homeopathy", description: "Homeopathic Kali Phos and Phosphoric Acid to restore nerve cell vitality and clear brain fog.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How does Ashwagandha support the adrenal glands?", answer: "Ashwagandha (Withania somnifera) is a clinically proven adaptogenic herb that lowers cortisol levels, reduces stress fatigue, and rebuilds nervous system vitality." }
    ],
    testimonials: [
      { id: "af_t1", patientName: "Rajesh Sen", location: "Kolkata", disease: "Chronic Adrenal Fatigue", rating: 5, duration: "2 Months", reviewText: "I was dependent on 4 cups of coffee daily. This treatment cleared my brain fog and gave me natural morning energy.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["chronic-stress", "hormonal-imbalance"]
  },

  "hormonal-imbalance": {
    slug: "hormonal-imbalance",
    name: "Hormonal Imbalance (General)",
    category: "Endocrine Disorders",
    tagline: "Balance Estrogen, Cortisol & Thyroid Interactions Naturally",
    overview: "General Hormonal Imbalance is a systemic endocrine disruption where hormone levels (estrogen, progesterone, cortisol, DHEA, thyroid) deviate from normal ratios. This leads to cyclic fatigue, sudden weight gain, skin issues, mood fluctuations, and low vitality. Our treatment targets endocrine harmony.",
    ayurvedaPerspective: "Ayurveda attributes hormonal balance to the free movement of 'Rasa' and 'Artava' dhatus. Imbalances occur when toxins (Ama) block the endocrine channels. Treatment uses hormone-regulating herbs like Shatavari, Ashoka, and Guduchi to clear blocks and balance doshas.",
    homeopathyPerspective: "Homeopathy regulates the endocrine loop constitutionally, targeting pituitary, ovarian, and thyroid feedback. Remedies like Sepia (for hormonal sluggishness and fatigue), Pulsatilla, and Lachesis restore balance safely.",
    duration: "8 - 16 Weeks",
    risk: "Infertility & Ovarian / Thyroid Disorders",
    commonAge: "15 - 50 Years",
    recovery: "6 - 8 Weeks",
    heroImage: "svg:endocrine",
    patientsTreated: "4,200+",
    yearsExperience: "14%",
    patientSatisfaction: "93%",
    metaTitle: "Natural Hormonal Imbalance Treatment | Ojas Sanjivani",
    metaDescription: "Balance estrogen, progesterone, and cortisol naturally. Discover Ayurvedic Shatavari and homeopathic Sepia hormone regulators.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic Diabetologist & Metabolic Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in female endocrinology and constitutional hormone balancing using homeopathy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Cyclic Fatigue & Weight Gain", description: "Constant fatigue, fluid retention, and weight fluctuations linked to cycles.", iconName: "AlertTriangle" },
      { title: "Skin & Mood Fluctuations", description: "Adult acne, sudden mood swings, and night sweats due to hormone drops.", iconName: "Activity" }
    ],
    causes: [
      { title: "Endocrine Disruption", description: "Imbalanced estrogen-progesterone or cortisol-DHEA ratios caused by stress, poor diet, or toxins.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Endocrine-Nourishing Herbs", description: "Ayurvedic Shatavari and Ashoka to regulate estrogen ratios and support uterine-ovarian tone.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Hormone-Stabilizing Homeopathy", description: "Homeopathic Sepia and Lachesis to regulate hormonal secretions and ease mood swings.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is Shatavari safe for hormone balancing?", answer: "Yes, Shatavari is a premier Ayurvedic adaptogen for women's reproductive health, helping to regulate estrogen levels and support ovarian health naturally." }
    ],
    testimonials: [
      { id: "hi_t2", patientName: "Nivedita Rao", location: "Kochi, Kerala", disease: "Estrogen Dominance", rating: 5, duration: "2 Months", reviewText: "I had extreme bloating and mood swings. This treatment normalized my cycles and cleared my mood issues.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["pcos", "menstruation-irregularities"]
  },

  // === 10. DIGESTIVE DISORDERS ===
  "digestive-disorders": {
    slug: "digestive-disorders",
    name: "Digestive Disorders",
    category: "Digestive Disorders",
    tagline: "Natural Gut Healing & Digestive Restoration with Ayurveda & Homeopathy",
    overview: "Digestive disorders disrupt the breakdown and absorption of nutrients, affecting the body's energy and immunity. From chronic acidity and IBS to constipation, peptic ulcers, fatty liver, and piles/fissures, gastrointestinal issues are driven by weak metabolic fire, toxins, and inflammation. Our integrated clinical protocols focus on stimulating digestive fire (Agni), clearing colon blockages, healing mucosal linings, and restoring healthy gut flora naturally.",
    ayurvedaPerspective: "In Ayurveda, all health begins with Agni (digestive fire). Weak Agni (Mandagni) leads to fermentation of food and production of 'Ama' (sticky toxins) in the gut, which blocks tissue channels. Ayurvedic treatment utilizes gut-healing, Agni-stimulating, and colon-cleansing herbs like Triphala, Bilva, Kutaja, Haritaki, and buttermilk formulations to clear Ama and restore balanced digestion.",
    homeopathyPerspective: "Homeopathy treats digestive disorders constitutionally, recognizing that gut health is linked to stress and lifestyle. Remedies like Nux Vomica (for acidity and constipation from sedentary lifestyles), Lycopodium (for severe lower abdominal gas and bloating), and Arsenicum Album heal inflamed GI tract linings and restore regular bowel movement safely.",
    duration: "Chronic / Gut Restoration",
    risk: "Malnutrition & Chronic Colon Inflammation",
    commonAge: "15 - 70 Years",
    recovery: "4 - 8 Weeks",
    heroImage: "/images/diseases/digestion.png",
    patientsTreated: "15,800+",
    yearsExperience: "18+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Acid Reflux, IBS, Constipation & Ulcer Treatment | Ojas",
    metaDescription: "Heal your gut, clear acidity, manage IBS, and resolve chronic constipation naturally. Discover customized integrated Ayurveda & Homeopathy gut therapies.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Gastroenterology & Gut Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar specializes in classical gastrointestinal detoxification (Agni Deepana) and non-surgical piles/fissure management.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Acidity & Gastritis", slug: "acidity-gastritis", description: "Cool stomach heat, relieve burning acid reflux, and heal inflamed stomach lining.", image: "/images/diseases/digestion.png" },
      { name: "IBS Care", slug: "ibs", description: "Calm an overactive nervous gut, bind loose stools, and resolve chronic abdominal cramps.", image: "/images/diseases/digestion.png" },
      { name: "Constipation Support", slug: "constipation", description: "Lubricate dry bowels, stimulate colon peristalsis, and ensure complete daily evacuation.", image: "/images/diseases/digestion.png" },
      { name: "Peptic Ulcer", slug: "peptic-ulcer", description: "Heal stomach and duodenal ulcers naturally without high doses of antacids.", image: "/images/diseases/digestion.png" },
      { name: "Fatty Liver", slug: "fatty-liver", description: "Reverse liver fat deposits and normalize elevated SGOT/SGPT enzymes.", image: "/images/diseases/liver-gall.png" },
      { name: "Piles & Fissures", slug: "piles-fissures", description: "Reduce painful bleeding piles and heal anal fissures without surgical interventions.", image: "/images/diseases/digestion.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "Why avoid chronic antacids for acid reflux?", answer: "Antacids temporarily neutralize acid but weaken your stomach's natural digestive capacity (Agni), causing food fermentation and worse reflux. Our treatments cool stomach Pitta while strengthening digestion." },
      { question: "How does buttermilk help in digestive disorders?", answer: "Ayurvedic buttermilk (Takra) infused with cumin and ginger is light, binds loose stools in IBS, clears gut toxins, and serves as an exceptional prebiotic." }
    ],
    testimonials: [
      { id: "dd_t1", patientName: "Rajesh Kumar", location: "Mumbai", disease: "Chronic Gastritis & IBS", rating: 5, duration: "2 Months", reviewText: "I was taking antacids daily and had erratic bowel movements. Dr. Bhaskar's remedies and custom diet completely restored my digestion. I feel light and healthy.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["piles", "constipation"]
  },

  "acidity-gastritis": {
    slug: "acidity-gastritis",
    name: "Acidity & Gastritis",
    category: "Digestive Disorders",
    tagline: "Cool Stomach Heat, Relieve Acid Reflux & Heal Gastric Lining",
    overview: "Acidity (Gastroesophageal Reflux Disease - GERD) and Gastritis involve the inflammation of the stomach lining, causing burning chest pain, acid reflux, bloating, and nausea. It is driven by excess acid secretion irritating stomach mucosal membranes. Our program cools stomach heat and repairs mucosal linings.",
    ayurvedaPerspective: "Ayurveda terms acidity as 'Amlapitta', an excess of Pitta dosha (heat and sourness) in the stomach. Treatment focuses on cooling Pitta using herbs like Shatavari, Yashtimadhu, Amalaki, and Avipattikar Churna.",
    homeopathyPerspective: "Homeopathy provides immediate, gentle relief from gastric burning and acid reflux. Remedies like Nux Vomica (for acidity from rich food/stress), Carbo Vegetabilis (for severe gas/bloating), and Robinia lower acidity safely.",
    duration: "4 - 8 Weeks",
    risk: "Barrett's Esophagus & Gastric Ulcers",
    commonAge: "18 - 60 Years",
    recovery: "2 - 3 Weeks",
    heroImage: "/images/diseases/digestion.png",
    patientsTreated: "5,400+",
    yearsExperience: "18+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Acidity & Gastritis Treatment | Ojas Sanjivani",
    metaDescription: "Relieve acid reflux and burning stomach lining naturally. Discover cooling Ayurvedic herbs and homeopathic Robinia remedies.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Gastroenterology & Gut Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes cooling Ayurvedic Pitta-balancing herbs and dietetics to resolve chronic gastritis.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Heartburn & Reflux", description: "Burning sensation in the chest rising to the throat, especially after meals.", iconName: "Flame" },
      { title: "Stomach Bloating & Nausea", description: "Feeling full and gaseous, accompanied by sour belching and morning nausea.", iconName: "AlertTriangle" }
    ],
    causes: [
      { title: "Aggravated Pitta Heat", description: "Excess stomach acid secretion triggered by spicy foods, stress, and caffeine.", iconName: "Flame" }
    ],
    treatments: [
      { title: "Cooling Pitta Herbs", description: "Ayurvedic Avipattikar Churna and Yashtimadhu to neutralize stomach acid and heal mucosal linings.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Acid-Neutralizing Homeopathy", description: "Homeopathic Robinia and Carbo Veg to stop sour reflux, relieve gas pressure, and calm stomach burning.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How does Yashtimadhu help in gastritis?", answer: "Yashtimadhu (Licorice) acts as a natural demulcent, coating the stomach lining with protective mucus to heal inflammation and prevent acid irritation." }
    ],
    testimonials: [
      { id: "ag_t1", patientName: "Aman Shah", location: "Mumbai", disease: "Chronic Gastritis", rating: 5, duration: "3 Weeks", reviewText: "My daily heartburn stopped in 10 days without any antacid capsules. Highly recommended.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["peptic-ulcer", "ibs"]
  },

  "ibs": {
    slug: "ibs",
    name: "IBS (Irritable Bowel Syndrome)",
    category: "Digestive Disorders",
    tagline: "Calm Overactive Nervous Gut & Resolve Cramps Naturally",
    overview: "Irritable Bowel Syndrome (IBS) is a common gastrointestinal disorder characterized by abdominal pain, cramping, bloating, gas, diarrhea, or constipation, or both. It is closely tied to gut nerve hyper-sensitivity and stress. Our treatment focuses on calming gut nerve reflexes, healing intestines, and normalizing motility.",
    ayurvedaPerspective: "Ayurveda describes IBS as 'Grahani Roga', an instability in Agni (digestive fire) and Apana Vata (pelvic wind). We use astringent, Agni-stimulating herbs (Bilva, Kutaja) and probiotic Takra (buttermilk) to bind stools.",
    homeopathyPerspective: "Homeopathy addresses the brain-gut connection in IBS. Remedies like Nux Vomica (for IBS-C with constant urging), Aloe Socotrina (for IBS-D with sudden morning diarrhea), and Argentum Nitricum relieve symptoms safely.",
    duration: "8 - 16 Weeks",
    risk: "Severe Chronic Malabsorption & Weight Loss",
    commonAge: "18 - 50 Years",
    recovery: "6 - 8 Weeks",
    heroImage: "/images/diseases/digestion.png",
    patientsTreated: "4,800+",
    yearsExperience: "18+",
    patientSatisfaction: "93%",
    metaTitle: "Natural IBS & Irritable Bowel Treatment | Ojas Sanjivani",
    metaDescription: "Relieve IBS cramps, diarrhea, and bloating naturally. Discover Ayurvedic Grahani herbs and homeopathic gut-brain regulators.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Gastroenterology & Gut Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes specific Ayurvedic Agni-tonics and buttermilk protocols to successfully manage IBS.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Erratic Bowel Movements", description: "Alternating diarrhea and constipation, with mucus in stools.", iconName: "AlertTriangle" },
      { title: "Abdominal Cramping", description: "Sharp, painful cramps in the lower abdomen that are relieved after passing stool.", iconName: "Activity" }
    ],
    causes: [
      { title: "Gut-Brain Nerve Instability", description: "Hyper-sensitive nerves in the colon wall reacting strongly to stress, anxiety, or specific foods.", iconName: "Brain" }
    ],
    treatments: [
      { title: "Grahani Healing Herbs", description: "Ayurvedic Bilva fruit pulp and Kutaja to reduce bowel inflammation, absorb excess water, and calm spasms.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Gut-Regulating Homeopathy", description: "Homeopathic Aloe Socotrina and Nux Vomica to normalize colon contractions and reduce morning urgent stools.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Why is spiced buttermilk recommended in IBS?", answer: "Ayurvedic buttermilk is light, cooling, and astringent. It feeds beneficial gut flora, absorbs fluid in diarrhea, and stimulates slow digestive Agni." }
    ],
    testimonials: [
      { id: "ib_t1", patientName: "Swati Sen", location: "Kolkata", disease: "IBS-D (Diarrhea)", rating: 5, duration: "2 Months", reviewText: "I was scared to travel. The Bilva syrup and drops stabilized my stomach within a month.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["acidity-gastritis", "constipation"]
  },

  "constipation": {
    slug: "constipation",
    name: "Constipation Support",
    category: "Digestive Disorders",
    tagline: "Lubricate Dry Bowels & Ensure Complete Evacuation Naturally",
    overview: "Constipation is a common digestive issue characterized by infrequent bowel movements, hard stools, and difficulty or straining during evacuation. It is caused by slow colon movement and excess water absorption by the colon, drying the stool. Our treatment focuses on bowel lubrication, colon muscle toning, and natural fiber.",
    ayurvedaPerspective: "Ayurveda describes Constipation as 'Vibandha', caused by dry Vata dosha in the colon. The dry Vata hardens the stool and halts Apana Vata flow. We use mild laxative, bowel-lubricating herbs like Haritaki, Triphala, and castor oil.",
    homeopathyPerspective: "Homeopathy restores natural peristaltic bowel movement. Remedies like Alumina (for dry rectum with no urging), Bryonia (for large, hard, burnt-looking dry stools), and Nux Vomica stimulate regular bowel patterns.",
    duration: "4 - 8 Weeks",
    risk: "Piles, Fissures & Anal bleeding",
    commonAge: "10 - 75 Years",
    recovery: "2 - 3 Weeks",
    heroImage: "/images/diseases/digestion.png",
    patientsTreated: "6,900+",
    yearsExperience: "18+",
    patientSatisfaction: "94%",
    metaTitle: "Natural Treatment for Chronic Constipation | Ojas Sanjivani",
    metaDescription: "Relieve chronic constipation and hard stools naturally. Discover Ayurvedic bowel-lubricators and homeopathic peristaltic stimulants.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Gastroenterology & Gut Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar focuses on lubricating dry colon tissues and normalizing Vata flow using classical herbs.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Hard Dry Stools", description: "Passing small, lumpy, dry stools less than 3 times a week, requiring high straining.", iconName: "AlertTriangle" },
      { title: "Incomplete Evacuation", description: "A persistent feeling that the bowels have not been fully emptied after a movement.", iconName: "Activity" }
    ],
    causes: [
      { title: "Colon Vata Dryness", description: "Lack of dietary fiber, low water intake, and sedentary habits drying out the colon lining.", iconName: "Utensils" }
    ],
    treatments: [
      { title: "Bowel-Lubricating Herbs", description: "Ayurvedic Triphala Churna and Gandharva Haritaki to soften stools, lubricate the rectum, and promote movement.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Peristaltic-Stimulating Homeopathy", description: "Homeopathic Bryonia and Alumina to restore normal colon muscle contractions and clear hard dry stools.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Are commercial laxatives safe for daily use?", answer: "No, chemical stimulant laxatives make the colon dependent and lazy. Our natural remedies tone the colon muscles to restore natural, independent bowel movements." }
    ],
    testimonials: [
      { id: "co_t1", patientName: "Rajiv Sethi", location: "Mumbai", disease: "Chronic Constipation", rating: 5, duration: "1 Month", reviewText: "I had constipation for 10 years. Ojas Triphala and drops cleared my stomach completely without any stomach cramps.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["piles-fissures", "ibs"]
  },

  "peptic-ulcer": {
    slug: "peptic-ulcer",
    name: "Peptic Ulcer",
    category: "Digestive Disorders",
    tagline: "Heal Gastric & Duodenal Linings Naturally",
    overview: "Peptic Ulcer Disease involves painful sores or ulcers forming in the lining of the stomach (gastric ulcer) or the first part of the small intestine (duodenal ulcer). It is driven by excess stomach acid eroding the mucosal protective layer, often exacerbated by H. pylori infection or painkiller overuse. Our treatment focuses on cooling acidity and healing mucosal membranes.",
    ayurvedaPerspective: "Ayurveda describes Peptic Ulcers as 'Parinama Shoola', an advanced Pitta disorder where excess heat burns the gastric membranes. We use soothing, cooling, and ulcer-healing herbs like Yashtimadhu, Shatavari, and Kamadudha Rasa.",
    homeopathyPerspective: "Homeopathy offers effective ulcer-healing and pain-relieving remedies. Remedies like Uranium Nitricum (for duodenal ulcers with boring pain), Kali Bichromicum (for small, deep ulcers), and Phosphorus relieve burning pain safely.",
    duration: "8 - 12 Weeks",
    risk: "Internal bleeding & Gastric Perforation",
    commonAge: "20 - 60 Years",
    recovery: "4 - 6 Weeks",
    heroImage: "/images/diseases/digestion.png",
    patientsTreated: "3,100+",
    yearsExperience: "18+",
    patientSatisfaction: "93%",
    metaTitle: "Natural Peptic & Duodenal Ulcer Treatment | Ojas Sanjivani",
    metaDescription: "Heal stomach and duodenal ulcers naturally. Discover cooling Ayurvedic demulcents and homeopathic ulcer-healing remedies.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Gastroenterology & Gut Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes targeted cooling and tissue-healing Ayurvedic herbs to restore damaged gastric linings.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Burning Stomach Pain", description: "Boring, burning pain in the upper abdomen, often worse on an empty stomach.", iconName: "Flame" },
      { title: "Nausea & Bloating", description: "Bloated abdomen, vomiting, and acid belching after eating.", iconName: "AlertTriangle" }
    ],
    causes: [
      { title: "Acid Erosion of Mucosa", description: "Destruction of the protective mucus barrier by excess hydrochloric acid, painkillers (NSAIDs), or H. pylori.", iconName: "Flame" }
    ],
    treatments: [
      { title: "Mucosal-Healing Herbs", description: "Ayurvedic Yashtimadhu and Kamadudha Rasa to coat gastric ulcers, neutralize acid, and speed tissue healing.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Ulcer-Resolving Homeopathy", description: "Homeopathic Uranium Nitricum and Kali Bich to reduce localized burning pain and promote mucosal repair.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Why do duodenal ulcer symptoms improve after eating?", answer: "Food buffers stomach acid temporarily, easing duodenal pain. However, pain returns 2-3 hours later as acid enters the duodenum. Our remedies target the root acid secretion." }
    ],
    testimonials: [
      { id: "pu_t1", patientName: "Aaryan Kapoor", location: "Noida", disease: "Duodenal Ulcer", rating: 5, duration: "2 Months", reviewText: "My boring upper stomach pain has stopped, and my repeat endoscopy shows healed linings.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["acidity-gastritis", "ibs"]
  },

  "piles-fissures": {
    slug: "piles-fissures",
    name: "Piles & Fissures",
    category: "Digestive Disorders",
    tagline: "Reduce Painful Bleeding Piles & Heal Fissures Naturally without Surgery",
    overview: "Piles (Hemorrhoids) are swollen rectal veins, while Fissures are painful cracks in the anal canal lining. Both are primarily caused by chronic constipation, hard stools, and excessive straining. They cause severe pain, burning, and bright red bleeding during bowel movements. Our treatment focuses on bowel lubrication, shrinking venous piles, and healing tissue cracks.",
    ayurvedaPerspective: "Ayurveda classifies Piles as 'Arsha' and Fissures as 'Parikartika', driven by dry Vata and high Pitta in the rectum. We use local oil pooling (Matra Basti), cooling sitz baths, and herbs like Arshoghni Vati, Haritaki, and Suran to shrink piles and heal fissures.",
    homeopathyPerspective: "Homeopathy offers excellent non-surgical remedies for rectal swelling and pain. Remedies like Aesculus Hip (for dry, aching, knife-like pain in rectum), Nitric Acid (for splinter-like pain after stool in fissures), and Hamamelis (to stop dark rectal bleeding) are highly effective.",
    duration: "4 - 8 Weeks",
    risk: "Chronic Bleeding, Anemia & Fistula Formation",
    commonAge: "18 - 65 Years",
    recovery: "3 - 6 Weeks",
    heroImage: "/images/diseases/digestion.png",
    patientsTreated: "7,500+",
    yearsExperience: "18+",
    patientSatisfaction: "95%",
    metaTitle: "Non-Surgical Piles & Anal Fissure Treatment | Ojas Sanjivani",
    metaDescription: "Heal painful piles and bleeding fissures naturally without surgery. Discover Ayurvedic Matra Basti and homeopathic Aesculus remedies.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Gastroenterology & Gut Ayurveda Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar has 18 years of clinical experience in successfully managing complex hemorrhoids and anal fissures without surgery.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Rectal Bleeding", description: "Bright red blood dripping or spotting during or after passing hard stool.", iconName: "AlertTriangle" },
      { title: "Severe Anal Pain", description: "Sharp, tearing, or burning pain during bowel movements, persisting for hours.", iconName: "Flame" }
    ],
    causes: [
      { title: "Chronic Straining & Hard Stool", description: "Constant pressure on the rectal veins and tearing of the anal canal skin during constipation.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Matra Basti & Sitz Baths", description: "Ayurvedic localized oil pooling and warm herbal water sitz baths to soften skin, reduce swelling, and stop pain.", iconName: "Sparkles", type: "Therapy" },
      { title: "Pile-Shrinking Homeopathy", description: "Homeopathic Aesculus and Nitric Acid to heal skin cracks, stop burning, and shrink hemorrhoidal veins.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Is surgery necessary for anal fissures?", answer: "No, most acute and chronic anal fissures heal completely with our bowel-softening herbs and tissue-repairing homeopathic drops, avoiding the risk of sphincter damage from surgery." }
    ],
    testimonials: [
      { id: "pf_t1", patientName: "Rajendra Prasad", location: "Hyderabad", disease: "Bleeding Piles & Fissure", rating: 5, duration: "1 Month", reviewText: "I had terrible pain and bleeding. Dr. Bhaskar's remedies healed my fissure and stopped the bleeding in 2 weeks.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["constipation", "ibs"]
  },

  // === 11. COMMON DISEASES ===
  "common-diseases": {
    slug: "common-diseases",
    name: "Common Diseases",
    category: "Common Diseases",
    tagline: "Natural Relief from Seasonal Flu, Allergies & Fevers",
    overview: "Common seasonal diseases affect millions as weather patterns change. Conditions like seasonal flu, respiratory allergies, persistent coughs, and sudden fevers represent immune battles against viral and environmental allergens. While conventional care relies on anti-pyretics and suppressive antihistamines, our integrated natural approach focuses on strengthening core immunity, clearing viral heat, and restoring lung capacity safely without morning drowsiness.",
    ayurvedaPerspective: "Ayurveda attributes common seasonal fevers (Jwara) and colds (Pratishyaya) to an accumulation of Ama (undigested toxins) dampening the Jatharagni (digestive fire) and vitiating Vata-Kapha. Treatment focuses on fasting (Langhana), warming digestive spices (Ginger, Pepper), and classical antiviral formulations like Ayush 64, Laxmivilas Ras, and Tulsi syrups to clear Ama and lower viral heat.",
    homeopathyPerspective: "Homeopathy offers fast-acting, gentle relief for acute seasonal ailments. Remedies are prescribed on the suddenness and type of symptoms. Arsenicum Album (for watery nose with sneezing), Gelsemium (for dull, drowsy flu with body aches), and Belladonna (for sudden high fevers and throbbing head) stimulate natural healing defenses rapidly.",
    duration: "Acute Care / Seasonal Support",
    risk: "Secondary Bronchitis or Chronic Sinus Block",
    commonAge: "1 - 80 Years",
    recovery: "3 - 7 Days",
    heroImage: "/images/diseases/respiratory.png",
    patientsTreated: "15,500+",
    yearsExperience: "18+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Seasonal Flu, Fever & Allergy Treatment | Ojas",
    metaDescription: "Relieve seasonal flu, running nose, allergic cough, and fevers naturally. Safe, fast-acting, non-drowsy Ayurveda & Homeopathy remedies.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Cardiorespiratory Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar utilizes classical warming immunomodulators and targeted homeopathics to resolve seasonal viral fevers.",
      phone: "+919766548692"
    },
    isCategory: true,
    subDiseases: [
      { name: "Seasonal Flu", slug: "seasonal-flu", description: "Relieve body aches, chills, fatigue, and low-grade viral fevers naturally.", image: "/images/diseases/respiratory.png" },
      { name: "Allergies Care", slug: "allergies", description: "Calm sneezing, runny nose, and itchy eyes triggered by dust, pollen, or pets.", image: "/images/diseases/stress-anxiety.png" },
      { name: "Migraine Relief", slug: "migraine", description: "Soothe one-sided throbbing headaches, light sensitivity, and nausea naturally.", image: "/images/diseases/stress-anxiety.png" },
      { name: "Cough & Cold", slug: "cough-cold", description: "Clear congested airways, soothe sore throat, and dry running nose safely.", image: "/images/diseases/respiratory.png" },
      { name: "Fever Support", slug: "fever", description: "Regulate body temperature naturally while boosting platelet and white blood cell levels.", image: "/images/diseases/respiratory.png" }
    ],
    symptoms: [],
    causes: [],
    treatments: [],
    faqs: [
      { question: "How does Ayush 64 help in seasonal viral fevers?", answer: "Ayush 64 is a scientifically validated Ayurvedic formulation. It contains potent anti-inflammatory, antiviral, and immunomodulatory herbs that clear viral heat, reduce body aches, and speed up recovery." },
      { question: "Are homeopathic cold medicines non-drowsy?", answer: "Yes, absolutely. Unlike conventional anti-allergic antihistamines, homeopathic remedies do not contain sedative elements. They act on immune responses, leaving you active and clear-headed." }
    ],
    testimonials: [
      { id: "cd_t2", patientName: "Meera Nair", location: "Kochi, Kerala", disease: "Seasonal Flu & Body Pain", rating: 5, duration: "5 Days", reviewText: "I had shivering, body pain, and fever. Dr. Bhaskar's Ayush 64 and homeopathic pills brought my temperature to normal in 2 days without paracetamol.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["allergic-cough", "sinusitis"]
  },

  "seasonal-flu": {
    slug: "seasonal-flu",
    name: "Seasonal Flu",
    category: "Common Diseases",
    tagline: "Relieve Body Aches, Chills & Viral Fatigue Naturally",
    overview: "Seasonal Flu (Influenza) is a contagious respiratory viral infection causing sudden fever, body aches, headache, sore throat, running nose, and extreme weakness. Our natural protocol focuses on reducing viral heat, relieving body pain, and rebuilding immune reserves.",
    ayurvedaPerspective: "Ayurveda classifies flu under 'Vata-Kaphaja Jwara'. Aggravated doshas damp the digestive Agni, creating Ama and raising body heat. We use Ayush 64, Laxmivilas Ras, and warming ginger tea to sweat out the fever (Svedana).",
    homeopathyPerspective: "Homeopathy offers fast relief for sudden flu onset. Remedies like Gelsemium (for heavy eyelids, drowsy aching flu, and thirstlessness), Eupatorium Perfoliatum (for deep bone-breaking aches), and Bryonia ease flu symptoms quickly.",
    duration: "1 - 2 Weeks",
    risk: "Progression to Bronchitis or Sinus Block",
    commonAge: "1 - 80 Years",
    recovery: "3 - 5 Days",
    heroImage: "/images/diseases/respiratory.png",
    patientsTreated: "4,900+",
    yearsExperience: "18+",
    patientSatisfaction: "95%",
    metaTitle: "Natural Seasonal Flu & Viral Fever Treatment | Ojas",
    metaDescription: "Relieve flu body aches, chills, and fatigue naturally. Discover Ayurvedic Ayush 64 and homeopathic Gelsemium remedies.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Cardiorespiratory Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar specializes in respiratory viral care and classical Ayurvedic immunomodulation.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Sudden High Fever", description: "Body temperature spike accompanied by chills, shivering, and sweating.", iconName: "AlertTriangle" },
      { title: "Severe Body Pain", description: "Dull, heavy muscle and bone aches across back, limbs, and joints.", iconName: "Flame" }
    ],
    causes: [
      { title: "Influenza Virus exposure", description: "Invasion of respiratory tracts by seasonal viral strains, overwhelming low immune defense.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Ayush 64 Antivirals", description: "Ayurvedic formulation containing Kiratatikta and Katuki to lower body temperature and clear viral heat.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Aching-Relieving Homeopathy", description: "Homeopathic Eupatorium and Gelsemium to relieve deep bone pains and clear drowsy flu fatigue.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Why is Eupatorium called a bone-set remedy?", answer: "Eupatorium Perfoliatum is a premier homeopathic medicine for flu where patients feel as if all their bones are broken or bruised, providing fast relief." }
    ],
    testimonials: [
      { id: "sf_t1", patientName: "Manish Shah", location: "Mumbai", disease: "Seasonal Influenza", rating: 5, duration: "4 Days", reviewText: "My bone aches and shivering cleared in 24 hours with these drops. Excellent non-chemical relief.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["cough-cold", "fever"]
  },

  "allergies": {
    slug: "allergies",
    name: "Allergies Care",
    category: "Common Diseases",
    tagline: "Calm Sneezing, Runny Nose & Itchy Eyes Safely",
    overview: "Allergies (Allergic Rhinitis or Hay Fever) represent immune hyper-reactivity to environmental allergens like dust, pollen, mold, or pet dander. Symptoms include continuous sneezing, running or blocked nose, itchy eyes, and throat tickle. Our natural program regulates immune reactivity.",
    ayurvedaPerspective: "Ayurveda attributes allergies to 'Pinasa' or 'Pratishyaya' driven by Kapha-Vata imbalances and Ama in respiratory channels. We use warm nasal cleansing (Neti), turmeric formulations (Haridra Khanda), and warming spices.",
    homeopathyPerspective: "Homeopathy offers highly effective, non-drowsy allergy relief. Remedies like Allium Cepa (for nose running like an onion), Sabadilla (for spasmodic sneezing fits), and Euphrasia desensitize the airways safely.",
    duration: "4 - 8 Weeks",
    risk: "Chronic Sinusitis & Asthma",
    commonAge: "5 - 65 Years",
    recovery: "2 - 3 Weeks",
    heroImage: "/images/diseases/respiratory.png",
    patientsTreated: "6,400+",
    yearsExperience: "14%",
    patientSatisfaction: "94%",
    metaTitle: "Natural Allergy & Allergic Rhinitis Treatment | Ojas",
    metaDescription: "Relieve sneezing, running nose, and itchy eyes naturally. Discover Ayurvedic Haridra Khanda and homeopathic Allium Cepa.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic ENT Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy specializes in constitutional allergy desensitization and nasal mucosal healing using homeopathy.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Continuous Sneezing", description: "Spasmodic sneezing fits, especially in the morning or when cleaning dust.", iconName: "AlertTriangle" },
      { title: "Running Nose & Itchy Eyes", description: "Watery discharge from the nose and burning, red, itchy eyes.", iconName: "Droplets" }
    ],
    causes: [
      { title: "Immune Hyper-sensitivity", description: "Mast cell activation releasing histamine upon contact with pollen, dust, or mold spores.", iconName: "ShieldCheck" }
    ],
    treatments: [
      { title: "Haridra Khanda & Turmeric", description: "Ayurvedic anti-allergic Haridra Khanda to stabilize mast cells and clear respiratory Kapha.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Non-Drowsy Homeopathy", description: "Homeopathic Allium Cepa and Sabadilla to stop watery running nose and calm continuous sneezing fits.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Why choose homeopathy over antihistamines?", answer: "Antihistamines cause morning drowsiness and dry mouth, and their effect is temporary. Homeopathy modulates the immune response safely without any sedation." }
    ],
    testimonials: [
      { id: "al_t1", patientName: "Nivedita Rao", location: "Kochi, Kerala", disease: "Dust Allergy", rating: 5, duration: "1 Month", reviewText: "I had morning sneezing fits daily. After 4 weeks of treatment, my sneezing has stopped completely.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["sinusitis", "allergic-cough"]
  },

  "cough-cold": {
    slug: "cough-cold",
    name: "Cough & Cold",
    category: "Common Diseases",
    tagline: "Clear Congested Airways & Soothe Sore Throat Gently",
    overview: "Cough and Cold are viral infections of the upper respiratory tract. They cause running nose, blocked nasal passages, throat tickling, dry or productive cough, and mild headache. Our treatment thins congested mucus, soothes the throat, and builds immunity.",
    ayurvedaPerspective: "Ayurveda explains cough and cold as 'Kasa' and 'Pratishyaya' caused by excess Kapha dosha blocking the chest. We use chest-warming herbs like Tulsi, Yashtimadhu, and Pippali, and warm gargles.",
    homeopathyPerspective: "Homeopathy provides rapid relief from cold symptoms. Remedies like Arsenic Album (for running nose and sneezing), Pulsatilla (for thick yellow nasal discharge), and Hepar Sulph clear congestion safely.",
    duration: "1 - 2 Weeks",
    risk: "Sinus Congestion & Bronchitis",
    commonAge: "1 - 80 Years",
    recovery: "3 - 5 Days",
    heroImage: "/images/diseases/respiratory.png",
    patientsTreated: "8,900+",
    yearsExperience: "14%",
    patientSatisfaction: "95%",
    metaTitle: "Natural Cough & Cold Treatment | Ojas Sanjivani",
    metaDescription: "Clear nasal congestion and soothe dry cough naturally. Discover Ayurvedic chest warmers and homeopathic cold remedies.",
    doctor: {
      name: "Dr. Ananya Roy",
      qualification: "BHMS (NIH Kolkata) • MD (Homeopathy)",
      experience: 14,
      specialization: "Homeopathic ENT Specialist",
      image: "/images/dr_ananya_roy.png",
      description: "Dr. Ananya Roy utilizes non-drowsy, phlegm-thinning homeopathic remedies to manage acute chest cold.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Runny/Stuffy Nose", description: "Watery discharge changing to yellow mucus, causing nasal block and head heaviness.", iconName: "AlertTriangle" },
      { title: "Sore Throat & Cough", description: "Scratchy throat pain, dry tickle, or loose cough raising white phlegm.", iconName: "Flame" }
    ],
    causes: [
      { title: "Kapha Pathogen Congestion", description: "Viral infection of nasal passages combined with a high-mucus, cold food diet.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Yashtimadhu & Tulsi", description: "Ayurvedic herbal drops and throat gargling to soothe inflammation and liquefy chest mucus.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Mucus-Draining Homeopathy", description: "Homeopathic Pulsatilla and Arsenic Album to clear blocked sinuses and ease breathing.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "Can cold progress to sinus infection?", answer: "Yes, if nasal passages remain blocked, mucus ferments in the sinus cavities, leading to sinusitis. Using our draining remedies prevents this." }
    ],
    testimonials: [
      { id: "cc_t1", patientName: "Ayan Roy", location: "Kolkata", disease: "Chest Cold & Cough", rating: 5, duration: "1 Week", reviewText: "My dry cough and throat pain cleared in 3 days without taking any chemical syrups.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["sinusitis", "allergies"]
  },

  "fever": {
    slug: "fever",
    name: "Fever Support",
    category: "Common Diseases",
    tagline: "Regulate Body Temperature & Boost Platelets Naturally",
    overview: "Fever (Pyrexia) is a temporary increase in body temperature, often due to an immune response to viral, bacterial, or seasonal infections. Severe fevers can cause chills, sweating, extreme weakness, and a drop in blood platelets. Our support program regulates body heat, clears toxins, and boosts vital blood counts safely.",
    ayurvedaPerspective: "Ayurveda views Fever as 'Jwara', caused by an accumulation of 'Ama' (toxins) blocking the skin pores and stopping sweat release. Treatment uses digestive bitters like Guduchi (Giloy), Papaya leaf juice (to boost platelets), and Ayush 64 to clear Ama.",
    homeopathyPerspective: "Homeopathy offers fast-acting, safe fever remedies. Remedies like Belladonna (for sudden high fever with hot face and throbbing head), Ferrum Phosphoricum (for early low-grade fever), and Gelsemium regulate body temperature safely.",
    duration: "1 - 2 Weeks",
    risk: "Platelet Drop & Severe Weakness",
    commonAge: "1 - 80 Years",
    recovery: "3 - 5 Days",
    heroImage: "/images/diseases/respiratory.png",
    patientsTreated: "5,800+",
    yearsExperience: "18%",
    patientSatisfaction: "95%",
    metaTitle: "Natural Fever Support & Platelet Booster | Ojas Sanjivani",
    metaDescription: "Regulate body temperature and boost blood platelets naturally. Discover Ayurvedic Giloy antivirals and homeopathic Belladonna.",
    doctor: {
      name: "Dr. Sanjeev Bhaskar",
      qualification: "BAMS (University of Delhi) • MD (Ayurveda)",
      experience: 18,
      specialization: "Senior Cardiorespiratory Specialist",
      image: "/images/dr_sanjeev_bhaskar.png",
      description: "Dr. Sanjeev Bhaskar specializes in managing seasonal viral fevers and boosting immune counts using classical herbs.",
      phone: "+919766548692"
    },
    symptoms: [
      { title: "Elevated Temperature", description: "Body temperature above 98.6°F, accompanied by sweating or shivering.", iconName: "AlertTriangle" },
      { title: "Extreme Weakness", description: "Feeling completely drained of energy, with muscle soreness and headache.", iconName: "BatteryLow" }
    ],
    causes: [
      { title: "Immune Response to Pathogens", description: "Body raising its temperature to kill invading viruses or bacteria, causing Jwara.", iconName: "Activity" }
    ],
    treatments: [
      { title: "Giloy & Papaya Leaf Boosters", description: "Ayurvedic Giloy and Papaya extracts to lower viral heat, detoxify the liver, and increase platelet counts.", iconName: "Leaf", type: "Ayurveda" },
      { title: "Fever-Calming Homeopathy", description: "Homeopathic Belladonna and Ferrum Phos to gently reduce body temperature and stop head throbbing.", iconName: "ShieldCheck", type: "Homeopathy" }
    ],
    faqs: [
      { question: "How does Papaya leaf help in viral fevers?", answer: "Papaya leaf contains key enzymes that stimulate bone marrow to increase blood platelet production, which is crucial during viral fevers like dengue." }
    ],
    testimonials: [
      { id: "fe_t1", patientName: "Aarav Sharma", location: "Delhi", disease: "Viral Fever", rating: 5, duration: "5 Days", reviewText: "My fever fell to normal and my energy returned quickly. The papaya drops saved me from hospital admission.", videoThumbnail: "/images/product-triphala.jpg" }
    ],
    relatedDiseases: ["seasonal-flu", "cough-cold"]
  }
};


