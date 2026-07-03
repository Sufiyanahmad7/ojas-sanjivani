"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  BookOpen, 
  Heart, 
  Activity, 
  TrendingUp, 
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  ArrowLeft
} from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

// Disease / Blog database focusing on priority conditions
const ARTICLES = [
  {
    id: "erectile-dysfunction",
    title: "Reclaiming Vitality: A Natural Guide to Overcoming Erectile Dysfunction",
    subtitle: "How integrated Ayurveda and Homeopathy heal vascular and neurological root causes.",
    category: "Male Sexual Health",
    readTime: "7 min read",
    date: "July 01, 2026",
    trending: true,
    summary: "Erectile dysfunction (ED) is often an early indicator of deeper cardiovascular, endocrine, or psychological stress. Discover how natural systems restore long-term capacity without synthetic dependence.",
    image: "/images/ayurveda-card-bg.png",
    content: {
      introduction: "In Ayurveda, Erectile Dysfunction is described under 'Klaibya' (loss of sexual vigor). Unlike modern chemical stimulants that force temporary vasodilation and carry cardiovascular risks, Ayurveda and Homeopathy work in synergy to restore natural blood circulation, calm the nervous system, and strengthen reproductive tissues (Shukra Dhatu) for permanent recovery.",
      causes: [
        "Vascular Insufficiency: Reduced blood flow due to plaque, high blood pressure, or cholesterol.",
        "Neurological and Stress Factors: High cortisol from anxiety, work-related stress, or depression.",
        "Endocrine Imbalance: Depleted testosterone levels or insulin resistance (Diabetes).",
        "Lifestyle Factors: Chronic lack of sleep, lack of exercise, smoking, or excessive alcohol intake."
      ],
      symptoms: [
        "Difficulty achieving an erection suitable for intercourse.",
        "Inability to maintain an erection throughout sexual activity.",
        "Significant reduction in spontaneous morning erections.",
        "Accompanied drop in sexual desire (libido) and performance anxiety."
      ],
      ayurvedaApproach: {
        title: "Ayurvedic Path (Vajikarana Chikitsa & Rejuvenation)",
        description: "Ayurveda utilizes Vajikarana (aphrodisiac therapy) to nourish all seven bodily tissues, culminating in Shukra Dhatu. It focuses on pacifying Apana Vayu (the sub-dosha of Vata controlling pelvic organs) and enhancing Ojas (vital life force).",
        herbs: [
          { name: "Ashwagandha (Withania somnifera)", desc: "A key adaptogen that lowers anxiety, increases nitric oxide production, and supports healthy testosterone synthesis." },
          { name: "Safed Musli (Chlorophytum borivilianum)", desc: "Acts as a potent natural spermatogenic and vitality booster, improving tissue vascularity." },
          { name: "Kapikachhu (Mucuna pruriens)", desc: "Contains natural L-Dopa, which raises dopamine levels to enhance mood, libido, and neural coordination." }
        ]
      },
      homeopathyApproach: {
        title: "Homeopathic Constitutional Therapy",
        description: "Homeopathy addresses the psychogenic and circulatory dynamics behind performance issues, selecting remedies tailored to the patient's individual stress response and physical constitution.",
        remedies: [
          { name: "Lycopodium Clavatum", desc: "For individuals suffering from performance anxiety, premature aging, digestive issues, and low self-confidence." },
          { name: "Selenium Metallicum", desc: "Indicated for marked physical debility, chronic fatigue, and weakness following illness." },
          { name: "Agnus Castus", desc: "Suited for complete lack of libido, coldness of organs, and extreme mental and physical exhaustion." }
        ]
      },
      lifestyleTips: [
        "Pelvic Exercises: Practice Ashwini Mudra (pelvic floor contraction) or Kegel exercises daily to improve regional blood flow.",
        "Yoga Asanas: Practice Bhujangasana (Cobra pose) and Dhanurasana (Bow pose) to stimulate core vitality and blood supply.",
        "Vata-Pacifying Diet: Consume warm, nourishing foods cooked with healthy fats like cow's ghee, sesame oil, almonds, and dates.",
        "Vascular Care: Avoid smoking and limit alcohol, both of which severely damage the micro-capillaries of the reproductive system."
      ]
    }
  },
  {
    id: "premature-ejaculation",
    title: "Slowing Down: Managing Premature Ejaculation Naturally",
    subtitle: "Balancing the nervous system and Vata Dosha to improve control and sexual confidence.",
    category: "Male Sexual Health",
    readTime: "6 min read",
    date: "June 28, 2026",
    trending: true,
    summary: "Premature Ejaculation (PE) is largely linked to hypersensitivity and nervous system overexcitation. Learn how constitutional therapies restore neural calm and mental endurance.",
    image: "/images/homeopathy-card-bg.png",
    content: {
      introduction: "Known in Ayurveda as 'Shukragata Vata' or 'Shighrapatana', Premature Ejaculation is primarily classified as a Vata disorder. The mobile, quick nature of Vata dosha hyper-activates the nervous system, leading to rapid stimulation. Natural treatment aims to ground the Vata dosha and build neural resilience using calming Ayurvedic herbs and targeted Homeopathic remedies.",
      causes: [
        "Vata Dosha Hyperactivity: Excitable nervous response due to excessive stress, travel, or irregular habits.",
        "Psychological Conditioning: Past anxiety, guilt, or fear of performance.",
        "Hypersensitive Pelvic Nerves: Inflammation of the prostate (Prostatitis) or pelvic floor tension.",
        "Serotonin Imbalance: Altered chemical transmitter levels in the central nervous system."
      ],
      symptoms: [
        "Ejaculation occurring regularly within 1–2 minutes of penetration.",
        "Inability to delay ejaculation during intercourse, leading to frustration.",
        "Growing performance anxiety and secondary avoidance of intimacy."
      ],
      ayurvedaApproach: {
        title: "Ayurvedic Calming and Grounding Therapy",
        description: "Ayurveda focuses on nervous system pacification (Vata-Shamana) and muscle strengthening. Rejuvenative (Rasayana) herbs are used to stabilize the flow of Apana Vayu.",
        herbs: [
          { name: "Jatiphala (Nutmeg)", desc: "A natural sedative and nervine tonic that slows down sensory transmission and extends latency." },
          { name: "Shatavari (Asparagus racemosus)", desc: "Nourishing and cooling herb that reduces systemic heat (Pitta) and strengthens structural tissues." },
          { name: "Brahmi (Bacopa monnieri)", desc: "Calms the mental channels (Manovaha Srotas), reducing performance anxiety and emotional over-excitement." }
        ]
      },
      homeopathyApproach: {
        title: "Homeopathic Neural Regulation",
        description: "Homeopathic treatment focuses on reducing neural excitability and anxiety, helping the body self-regulate ejaculation reflexes naturally.",
        remedies: [
          { name: "Phosphoric Acid", desc: "Indicated for sexual weakness accompanied by mental apathy, grief, lack of concentration, and physical fatigue." },
          { name: "Conium Maculatum", desc: "Indicated when there is local irritation, history of suppressed desire, or structural weakness of pelvic glands." },
          { name: "Graphites", desc: "Suited for individuals prone to skin conditions and obesity, who experience sluggish reflexes and lack of pelvic nerve tone." }
        ]
      },
      lifestyleTips: [
        "Pranayama: Practice Nadi Shodhana (Alternate Nostril Breathing) for 15 minutes daily to balance the sympathetic and parasympathetic nervous systems.",
        "Abhyanga (Self-Massage): Massage the lower back and pelvic region with warm sesame oil before bathing to soothe Vata dosha.",
        "Avoid Stimulants: Cut down on caffeine, hot spices, and refined sugar, which over-stimulate neural pathways.",
        "Squeeze & Start-Stop Techniques: Use these behavioral methods during intimacy to train pelvic muscle feedback loops."
      ]
    }
  },
  {
    id: "low-libido-testosterone",
    title: "Low Libido & Depleted Testosterone: Restoring Ayurvedic Ojas",
    subtitle: "Overcoming chronic exhaustion, loss of drive, and hormonal imbalance through natural rejuvenators.",
    category: "Male Sexual Health",
    readTime: "6 min read",
    date: "June 25, 2026",
    trending: false,
    summary: "A drop in desire and testosterone levels is the body's signal of systemic depletion. Discover how to rebuild your core vital energy (Ojas) and reset hormonal health.",
    image: "/images/ayurveda-card.png",
    content: {
      introduction: "Low libido and low testosterone are direct signs of 'Dhatu Kshaya' (tissue depletion) and low 'Ojas' (the end product of digestion and cellular health). In natural medicine, instead of providing synthetic hormone replacement therapies (which shut down natural testicular function), we stimulate the endocrine glands to secrete hormones naturally while nourishing the core tissues.",
      causes: [
        "Adrenal Burnout: Chronic high stress (cortisol) directly inhibits testosterone production.",
        "Poor Metabolic Health: High body fat, insulin resistance, or fatty liver impairs hormone conversion.",
        "Poor Nutrition and Sleep: Deprivation of sleep (especially between 10 PM and 2 AM) disrupts hormone secretion.",
        "Accumulated Toxins (Ama): Blocked physical channels hinder cell-to-cell signaling."
      ],
      symptoms: [
        "Persistent lack of interest in physical intimacy.",
        "Chronic fatigue, muscle loss, and unexplained weight gain around the abdomen.",
        "Frequent brain fog, mood irritability, or mild depressive episodes.",
        "Poor recovery from physical exercise and loss of general enthusiasm."
      ],
      ayurvedaApproach: {
        title: "Ayurvedic Rebuilding (Rasayana & Vajikarana)",
        description: "Ayurveda aims to clear toxins ('Ama') and activate the tissue digestive fire (Dhatu-Agni) to ensure that nutrients are fully converted into reproductive tissue and Ojas.",
        herbs: [
          { name: "Gokshura (Tribulus terrestris)", desc: "Renowned for supporting urinary tract health and naturally stimulating LH (Luteinizing Hormone) to support testosterone production." },
          { name: "Shilajit (Asphaltum punjabianum)", desc: "A mineral-rich biomass that enhances mitochondrial energy, improves iron assimilation, and elevates free testosterone levels." },
          { name: "Kaunch Beej", desc: "Builds stamina, promotes muscle tone, and balances hormonal and neurotransmitter secretions." }
        ]
      },
      homeopathyApproach: {
        title: "Homeopathic Endocrine Stimulants",
        description: "Homeopathy works on the pituitary-testicular axis to encourage self-regulation, selecting remedies based on structural and psychological symptoms of depletion.",
        remedies: [
          { name: "Testosteronum", desc: "Used in low potencies to stimulate the endocrine glands and restore natural hormonal equilibrium." },
          { name: "Nuphar Luteum", desc: "Indicated for complete absence of desire, voluptuous thoughts without physical capability, and general weakness." },
          { name: "Baryta Carbonica", desc: "Suited for early senility, memory loss, weight gain, and general metabolic sluggishness." }
        ]
      },
      lifestyleTips: [
        "Quality Sleep: Sleep by 10:00 PM to maximize natural growth hormone and testosterone production during the night.",
        "Strength Training: Engage in resistance exercises or weight lifting 3-4 times a week, focusing on large muscle groups (squats, deadlifts).",
        "Healthy Fats: Include organic cow's ghee, cold-pressed coconut oil, pumpkin seeds, and walnuts in your daily diet.",
        "Detoxification: Practice seasonal panchakarma or regular drinking of warm ginger water to eliminate accumulated toxins ('Ama')."
      ]
    }
  },
  {
    id: "diabetes-management",
    title: "Reversing Insulin Resistance: The Ayurvedic Approach to Diabetes",
    subtitle: "Going beyond blood sugar control to restore pancreatic health and metabolic fire (Agni).",
    category: "Chronic Conditions",
    readTime: "8 min read",
    date: "June 20, 2026",
    trending: true,
    summary: "Diabetes (Madhumeha) is not just a disease of blood sugar, but a deep metabolic imbalance of the fat and muscle tissues. Learn how natural therapies restore tissue sensitivity.",
    image: "/images/homeopathy-card.png",
    content: {
      introduction: "Ayurveda terms Diabetes Mellitus as 'Madhumeha' (sweet urine), classifying it under Prameha (urinary disorders caused by Kapha imbalances). In Homeopathy and Ayurveda, the focus is not merely on checking daily blood glucose levels, but on curing insulin resistance at the cellular level by optimizing the metabolic fire (Dhatvagni) and improving liver function.",
      causes: [
        "Kapha-Aggravating Diet: High intake of refined flour, white sugar, yogurt, and heavy dairy.",
        "Sedentary Lifestyle: Lack of physical movement leading to blockages in muscle energy pathways.",
        "Genetic Predisposition: Inherited weakness in pancreatic tissue (Sahaja Prameha).",
        "Chronic Stress: Elevated epinephrine and cortisol levels that raise blood glucose."
      ],
      symptoms: [
        "Excessive urination (Polyuria), especially at night.",
        "Constant unquenchable thirst (Polydipsia) and dryness of mouth.",
        "Unexplained weight loss or constant hunger despite eating well.",
        "Numbness or tingling sensation in hands and feet (diabetic neuropathy)."
      ],
      ayurvedaApproach: {
        title: "Ayurvedic Metabolic Corrections",
        description: "Ayurveda uses bitter, astringent, and metabolic stimulants to dry up excess moisture (Kleda) and Kapha, restoring tissue sensitivity to insulin.",
        herbs: [
          { name: "Gudmar (Gymnema sylvestre)", desc: "Known as 'sugar destroyer' for its ability to block sweet taste receptors and support healthy insulin secretion." },
          { name: "Amalaki & Haridra (Nisha-Amalaki)", desc: "A powerful combination of Turmeric and Amla that prevents diabetic complications, reduces inflammation, and protects the kidneys." },
          { name: "Vijaysar (Pterocarpus marsupium)", desc: "The wood is traditionally used to make drinking vessels; it regenerates beta cells of the pancreas." }
        ]
      },
      homeopathyApproach: {
        title: "Homeopathic Pancreatic & Vascular Support",
        description: "Homeopathy addresses the vascular damage and neuropathic complications of diabetes while supporting metabolic balance.",
        remedies: [
          { name: "Syzygium Jambolanum", desc: "One of the most effective remedies for rapidly reducing sugar in the urine and blood; relieves extreme thirst and frequent urination." },
          { name: "Gymnema Sylvestre", desc: "Used in mother tincture form to improve sugar tolerance and support pancreatic efficiency." },
          { name: "Phosphoricum Acidum", desc: "Excellent for patients with diabetes triggered by emotional grief or mental strain, showing marked nervous weakness." }
        ]
      },
      lifestyleTips: [
        "Active Movement: Walk at least 5,000 to 10,000 steps daily. Post-meal short walks (Shatapadi) are highly effective.",
        "Low-Glycemic Diet: Shift from polished rice and wheat to millets (Ragi, Jowar, Bajra), barley, mung dal, and bitter vegetables.",
        "Sunlight & Yoga: Practice Surya Namaskar (Sun Salutations) and Mandukasana (Frog pose) to massage and stimulate the pancreas.",
        "Regular Detox: Fast on light warm vegetable broths once a week to clear channel blockage (Srotorodha)."
      ]
    }
  },
  {
    id: "chronic-acidity-ibs",
    title: "Healing Acid Reflux and IBS from the Root",
    subtitle: "Cooling Pitta Dosha and balancing the gut-brain axis to solve chronic digestive distress.",
    category: "Digestive Health",
    readTime: "5 min read",
    date: "June 15, 2026",
    trending: false,
    summary: "Long-term antacids weaken stomach acid, creating chronic indigestion and IBS. Discover how natural systems restore digestive fire (Agni) without dependency.",
    image: "/images/ayurveda-card-bg.png",
    content: {
      introduction: "Antacid pills temporarily suppress stomach acid, but they fail to address why acid is moving upwards. In Ayurveda, this is 'Amla Pitta' (sour/liquid Pitta imbalance), and in Irritable Bowel Syndrome (IBS), it represents a disturbed gut-brain axis ('Grahani'). Natural healing focuses on cooling the stomach lining, strengthening the lower esophageal sphincter, and regulating intestinal motility.",
      causes: [
        "Pitta-Aggravating Foods: Excessive tea, coffee, spicy, fried, stale, or fermented food items.",
        "Suppressed Stress: Anxiety and anger trigger gut spasms, leading to acid reflux or erratic bowel movements.",
        "Irregular Meal Timing: Eating late at night or skipping meals upsets natural enzyme release.",
        "Dysbiosis: Overgrowth of harmful bacteria in the small intestine due to frequent antibiotic usage."
      ],
      symptoms: [
        "Burning sensation in the chest (heartburn) and throat, sour belching.",
        "Alternating constipation and diarrhea, abdominal bloating, and cramps.",
        "Feeling of incomplete evacuation and sticky stools (indicating Ama).",
        "Nausea, headache, and fatigue after meals."
      ],
      ayurvedaApproach: {
        title: "Ayurvedic Pitta-Pacifying & Agni-Balancing Path",
        description: "Ayurveda clears excess acidity by administering cooling herbs and mild purgatives, followed by gut-binding remedies that repair the intestinal lining.",
        herbs: [
          { name: "Yashtimadhu (Licorice)", desc: "Coats and heals the stomach lining, acting as a natural buffer against acid burn." },
          { name: "Amala (Emblica officinalis)", desc: "The ultimate cooling Rasayana that pacifies Pitta without reducing the natural digestive fire (Agni)." },
          { name: "Kutaj (Holarrhena antidysenterica)", desc: "Excellent for restoring bowel regularity, reducing spasms, and curing chronic diarrhea in IBS." }
        ]
      },
      homeopathyApproach: {
        title: "Homeopathic Gastro-Intestinal Harmony",
        description: "Homeopathy uses micro-doses to calm the hyperactive enteric nervous system, relieving gut spasms and restoring normal mucosal secretion.",
        remedies: [
          { name: "Nux Vomica", desc: "The top remedy for acidity, bloating, and IBS caused by sedentary lifestyle, spicy foods, alcohol, and high stress." },
          { name: "Carbo Vegetabilis", desc: "For extreme bloating, gas in the upper abdomen, sour belching, and slow digestion where everything turns to gas." },
          { name: "Robinia Pseudacacia", desc: "Excellent for intense, sour acid reflux that causes burning in the throat and teeth-edge sensitivity." }
        ]
      },
      lifestyleTips: [
        "Never Skip Breakfast: Keep meals regular. Do not drink excessive water immediately before or after meals.",
        "Soothing Drinks: Drink warm fennel tea, mint water, or fresh buttermilk churned with a pinch of cumin and coriander.",
        "Avoid Late Dinners: Eat dinner at least 2.5 to 3 hours before going to sleep. Elevate the head of your bed slightly if reflux is severe.",
        "Calm Eating: Eat in a quiet, relaxed environment. Chew your food thoroughly (32 times) to ease the load on your stomach."
      ]
    }
  },
  {
    id: "hair-loss-alopecia",
    title: "Understanding Hair Loss: A Root-Cause Analysis",
    subtitle: "How detoxifying blood (Rakta Dhatu) and balancing hormones stops thinning and stimulates regrowth.",
    category: "Skin & Hair",
    readTime: "5 min read",
    date: "June 10, 2026",
    trending: false,
    summary: "Hair health is a direct reflection of internal nutrition and blood quality. Learn how natural therapies arrest hair fall and reactivate dormant follicles.",
    image: "/images/homeopathy-card.png",
    content: {
      introduction: "Hair fall (Khalitya in Ayurveda) is not merely a cosmetic issue. According to holistic systems, hair is a by-product of bone tissue (Asthi Dhatu) and is fed directly by blood channels (Rakta Dhatu). When toxins build up in the blood or Pitta dosha overheats the scalp, follicles shrink. Ayurveda and Homeopathy detoxify the blood and restore follicular nutrition from within.",
      causes: [
        "Excessive Scalp Heat (Pitta): Overheating of follicles leads to early shedding.",
        "Hormonal Sensitivity (DHT): Dihydrotestosterone causes follicular miniaturization in pattern baldness.",
        "Nutritional Deficiencies: Lack of iron, zinc, proteins, or poor absorption in the gut.",
        "Stress and Anxiety: Causes follicles to prematurely enter the shedding (Telogen) phase."
      ],
      symptoms: [
        "Gradual thinning of hair on top of the head or widening of the parting.",
        "Losing more than 100 strands of hair daily, especially during combing or washing.",
        "Patchy bald spots (Alopecia Areata) on the scalp or beard.",
        "Dry, itchy scalp accompanied by excessive dandruff."
      ],
      ayurvedaApproach: {
        title: "Ayurvedic Blood Purifiers and Hair Tonics",
        description: "Ayurveda treats hair loss by cooling Pitta dosha, purifying Rakta Dhatu, and nourishing the scalp with herb-infused oils (Shiro-Abhyanga).",
        herbs: [
          { name: "Bhringraj (Eclipta alba)", desc: "Known as the 'King of Hair', it stimulates hair growth, prevents premature graying, and calms the mind." },
          { name: "Amalaki (Indian Gooseberry)", desc: "Rich in Vitamin C and antioxidants, it strengthens roots, fights dandruff, and nourishes follicles." },
          { name: "Manjistha (Rubia cordifolia)", desc: "A supreme blood-purifying herb that eliminates systemic toxins (Ama) affecting hair roots." }
        ]
      },
      homeopathyApproach: {
        title: "Homeopathic Follicular Stimulation",
        description: "Homeopathy stimulates the body's self-healing to stop hair thinning and encourages hair regrowth by targeting hormonal and stress triggers.",
        remedies: [
          { name: "Acidum Phosphoricum", desc: "For hair loss resulting from grief, shock, acute illness (like high fever), or chronic mental fatigue." },
          { name: "Wiesbaden", desc: "A mineral-spring remedy known to make hair grow faster, thicker, and darker." },
          { name: "Fluoricum Acidum", desc: "Specifically used for patchy hair loss (Alopecia Areata) and brittle hair that breaks easily." }
        ]
      },
      lifestyleTips: [
        "Scalp Massage: Gently massage your scalp 2-3 times a week with warm organic coconut oil infused with Bhringraj, Rosemary, or Amla.",
        "Cool Showers: Never wash your hair with hot water; it damages the root structure. Use lukewarm or cool water.",
        "Nourishing Diet: Include iron-rich foods like black sesame seeds, spinach, beetroot, pomegranate, and soaked almonds.",
        "Stress Relief: Practice Shirshasana (Headstand) or Adho Mukha Svanasana (Downward-facing Dog) to increase blood flow to the head."
      ]
    }
  }
];

const CATEGORIES = ["All", "Male Sexual Health", "Chronic Conditions", "Digestive Health", "Skin & Hair"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<typeof ARTICLES[0] | null>(null);

  // Filtered articles based on search & category
  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory = activeCategory === "All" || art.category === activeCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAFDFB] font-sans antialiased text-[#1E293B] relative">
      <Header />

      {/* Main Container with top padding for sticky header */}
      <main className="relative pt-[130px] pb-20">
        
        {/* Decorative Background Leaf Orbs */}
        <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-[#028174]/3 filter blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-[#43A047]/3 filter blur-3xl pointer-events-none -z-10" />

        {/* Hero Section */}
        <div className="custom-container py-8 sm:py-12 text-center max-w-4xl mx-auto">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/8 text-[#028174] border-[#028174]/15 mb-4 uppercase tracking-wider text-[10px] font-extrabold mx-auto">
            Ojas Sanjivani Health Library
          </Badge>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1E293B] leading-tight tracking-tight">
            Trending Disease Guides & <span className="text-[#028174]">Natural Healing</span>
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mt-4">
            Comprehensive medical articles written by our certified Ayurvedic & Homeopathic doctors. Empowering you to heal root causes, not just symptoms.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-xl mx-auto relative px-4 sm:px-0">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by disease (e.g. Erectile Dysfunction, Acidity...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-13 pl-12 pr-4 bg-white border border-[#E2E8F0] rounded-full text-sm sm:text-base shadow-sm focus:outline-none focus:border-[#028174] focus:ring-4 focus:ring-[#028174]/5 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-[#028174] hover:bg-slate-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="custom-container mb-12">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-3 scrollbar-none scroll-smooth">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-2.5 px-5 rounded-full text-xs sm:text-sm font-bold border whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#028174] text-white border-[#028174] shadow-md shadow-[#028174]/15"
                    : "bg-white text-[#4B5563] border-[#E2E8F0] hover:text-[#028174] hover:border-[#028174]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List / Grid */}
        <div className="custom-container">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
              {filteredArticles.map((art, idx) => (
                <motion.article
                  key={art.id}
                  className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#028174]/20 transition-all duration-300 flex flex-col h-full group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Article Visual / Thumbnail Wrapper */}
                  <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden shrink-0">
                    {/* Dark Green Gradient Overlay on Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-70" />
                    
                    {/* Fallback pattern / background leaf */}
                    <div 
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage: `url('${art.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    />

                    {/* Dynamic Badges */}
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      <span className="bg-[#028174] text-white text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
                        {art.category}
                      </span>
                      {art.trending && (
                        <span className="bg-[#E2F0D9] text-[#43A047] text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md flex items-center gap-1">
                          <TrendingUp className="w-2.5 h-2.5" />
                          Trending
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      {/* Meta information */}
                      <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {art.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {art.readTime}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg font-extrabold text-[#1E293B] group-hover:text-[#028174] transition-colors leading-snug">
                        {art.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
                        {art.summary}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-[#F1F5F9]">
                      <button
                        onClick={() => setSelectedArticle(art)}
                        className="text-xs sm:text-sm font-extrabold text-[#028174] group-hover:text-[#01695F] flex items-center gap-1.5 cursor-pointer"
                      >
                        Read Full Guide
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200 max-w-xl mx-auto">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#1E293B]">No guides found</h3>
              <p className="text-xs text-text-secondary mt-1 max-w-xs mx-auto">
                We couldn't find any articles matching your search query. Try looking for "Vitality", "acidity", or "libido".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-xs font-bold text-[#028174] hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Detail Modal / Slider Panel for Article Details */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex justify-end"
            >
              {/* Tap backdrop to close */}
              <div 
                className="absolute inset-0 cursor-pointer"
                onClick={() => setSelectedArticle(null)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 220 }}
                className="relative w-full max-w-3xl bg-[#FAFDFB] h-full shadow-2xl overflow-y-auto flex flex-col z-10"
              >
                {/* Header Actions */}
                <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between z-20">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-500 hover:text-[#028174] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Library
                  </button>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-slate-100 transition-all cursor-pointer"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Article Detailed Contents */}
                <div className="flex-1 pb-20">
                  
                  {/* Hero Block with Background Image */}
                  <div 
                    className="h-60 sm:h-72 relative flex items-end p-6 sm:p-8 text-white overflow-hidden"
                    style={{
                      backgroundImage: `url('${selectedArticle.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#028174] via-[#028174]/70 to-[#01695F]/40 z-0" />
                    
                    <div className="relative z-10 space-y-3">
                      <span className="bg-white/25 border border-white/20 text-white text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
                        {selectedArticle.category}
                      </span>
                      <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight">
                        {selectedArticle.title}
                      </h2>
                      <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-2xl font-medium">
                        {selectedArticle.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Wrapper */}
                  <div className="p-6 sm:p-8 space-y-8">
                    
                    {/* Metadata summary & Intro */}
                    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5 space-y-4 shadow-sm">
                      <div className="flex items-center gap-4 text-xs font-bold text-slate-400 border-b border-[#F1F5F9] pb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          Published: {selectedArticle.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          Estimated: {selectedArticle.readTime}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
                        {selectedArticle.content.introduction}
                      </p>
                    </div>

                    {/* Causes Column */}
                    <div className="space-y-3">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-[#1E293B] flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-[#028174]" />
                        Key Root Causes
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedArticle.content.causes.map((c, i) => (
                          <li key={i} className="bg-[#FFFDFB] border border-orange-100 p-3.5 rounded-xl text-xs sm:text-[13px] font-bold text-text-main flex items-start gap-2 shadow-sm/5">
                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Symptoms Column */}
                    <div className="space-y-3">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-[#1E293B] flex items-center gap-2">
                        <Activity className="w-5 h-5 text-[#028174]" />
                        Common Symptoms
                      </h4>
                      <div className="bg-[#FAF8FF] border border-[#F3E8FF] p-5 rounded-2xl space-y-3">
                        {selectedArticle.content.symptoms.map((s, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#E0D4FF]/40 text-[#6B21A8] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {i+1}
                            </span>
                            <span className="text-xs sm:text-[13px] font-semibold text-[#4B5563] leading-relaxed">
                              {s}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Two Paths to Recovery Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
                      
                      {/* Ayurveda Card */}
                      <div className="bg-white border border-[#E2E8F0] hover:border-[#028174]/30 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#028174]/10 flex items-center justify-center text-[#028174]">
                            <Heart className="w-4.5 h-4.5 fill-[#028174]" />
                          </div>
                          <h4 className="font-heading text-sm sm:text-base font-extrabold text-[#1E293B]">
                            {selectedArticle.content.ayurvedaApproach.title}
                          </h4>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {selectedArticle.content.ayurvedaApproach.description}
                        </p>
                        
                        <div className="space-y-3 pt-2">
                          {selectedArticle.content.ayurvedaApproach.herbs.map((h, i) => (
                            <div key={i} className="border-l-2 border-[#43A047] pl-3 py-1 space-y-0.5">
                              <span className="text-[11px] sm:text-xs font-extrabold text-[#028174] block">
                                {h.name}
                              </span>
                              <span className="text-[10px] text-text-secondary leading-relaxed block font-medium">
                                {h.desc}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Homeopathy Card */}
                      <div className="bg-white border border-[#E2E8F0] hover:border-[#028174]/30 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#028174]/10 flex items-center justify-center text-[#028174]">
                            <BookOpen className="w-4.5 h-4.5" />
                          </div>
                          <h4 className="font-heading text-sm sm:text-base font-extrabold text-[#1E293B]">
                            {selectedArticle.content.homeopathyApproach.title}
                          </h4>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {selectedArticle.content.homeopathyApproach.description}
                        </p>
                        
                        <div className="space-y-3 pt-2">
                          {selectedArticle.content.homeopathyApproach.remedies.map((r, i) => (
                            <div key={i} className="border-l-2 border-[#028174] pl-3 py-1 space-y-0.5">
                              <span className="text-[11px] sm:text-xs font-extrabold text-[#028174] block">
                                {r.name}
                              </span>
                              <span className="text-[10px] text-text-secondary leading-relaxed block font-medium">
                                {r.desc}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Diet & Lifestyle Tips */}
                    <div className="space-y-3">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-[#1E293B]">
                        Diet & Lifestyle Recommendations
                      </h4>
                      <div className="bg-white border border-[#E2E8F0] p-5 rounded-2xl space-y-3 shadow-sm">
                        {selectedArticle.content.lifestyleTips.map((tip, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#43A047]/10 text-[#43A047] flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-[10px] font-black">✓</span>
                            </div>
                            <span className="text-xs sm:text-[13px] font-semibold text-text-secondary leading-relaxed">
                              {tip}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sticky-like bottom CTA box */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#028174] to-[#01695F] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg shadow-[#028174]/15 mt-8 border border-white/5">
                      <div className="text-center sm:text-left space-y-1">
                        <h4 className="text-sm sm:text-base font-extrabold tracking-tight">
                          Consult with Experts for {selectedArticle.category === "Male Sexual Health" ? "Male Vitality" : "this Condition"}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-white/80 max-w-md font-medium leading-relaxed">
                          Get a tailored treatment plan based on your unique body constitution and health parameters. Confidential, safe, and natural.
                        </p>
                      </div>
                      <Button
                        variant="primary"
                        className="bg-white text-[#028174] hover:bg-slate-50 font-extrabold text-xs h-10 px-5 rounded-full shadow-sm hover:shadow-md transition-all shrink-0 flex items-center gap-1.5"
                        onClick={() => setSelectedArticle(null)}
                        href="/#appointment"
                      >
                        Book Appointment
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </div>
  );
}
