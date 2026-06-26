import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  ArrowRight, 
  Activity, 
  Brain, 
  Utensils, 
  Dna, 
  Flame, 
  Scale, 
  Heart, 
  ShieldCheck, 
  ChevronRight, 
  Check 
} from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingWidgets } from "@/sections/FloatingWidgets";
import { ScrollToTopOnLoad } from "@/components/common/ScrollToTopOnLoad";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

// Data & Components
import { DISEASES_DATA } from "@/data/diseases";
import { DiseaseHero } from "@/components/diseases/DiseaseHero";
import { DiseaseOverview } from "@/components/diseases/DiseaseOverview";
import { DiseaseIllustration } from "@/components/diseases/DiseaseIllustration";
import { SymptomsGrid } from "@/components/diseases/SymptomsGrid";
import { CausesTimeline } from "@/components/diseases/CausesTimeline";
import { TreatmentApproach } from "@/components/diseases/TreatmentApproach";
import { BenefitsComparison } from "@/components/diseases/BenefitsComparison";
import { WhyChooseSection } from "@/components/diseases/WhyChooseSection";
import { DoctorCTA } from "@/components/diseases/DoctorCTA";
import { TestimonialsCarousel } from "@/components/diseases/TestimonialsCarousel";
import { FAQAccordion } from "@/components/diseases/FAQAccordion";
import { RelatedDiseases } from "@/components/diseases/RelatedDiseases";
import { AppointmentForm } from "@/components/diseases/AppointmentForm";
import { StickyMobileCTA } from "@/components/diseases/StickyMobileCTA";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Next.js 15+ generateStaticParams
export async function generateStaticParams() {
  return Object.keys(DISEASES_DATA).map((slug) => ({
    slug,
  }));
}

// Next.js 15+ Dynamic Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const disease = DISEASES_DATA[slug];

  if (!disease) {
    return {
      title: "Not Found",
      description: "Disease information page not found",
    };
  }

  const canonicalUrl = `https://ojassanjivani.com/diseases/${disease.slug}`;
  const shareImage = disease.heroImage.startsWith("svg:") 
    ? "/images/diseases/respiratory.png" 
    : disease.heroImage;

  return {
    title: disease.metaTitle,
    description: disease.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: disease.metaTitle,
      description: disease.metaDescription,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: shareImage,
          width: 800,
          height: 600,
          alt: disease.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: disease.metaTitle,
      description: disease.metaDescription,
      images: [shareImage],
    },
  };
}

export default async function DiseasePage({ params }: PageProps) {
  const { slug } = await params;
  const disease = DISEASES_DATA[slug];

  if (!disease) {
    notFound();
  }

  // Structured Data Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ojassanjivani.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Diseases",
        "item": "https://ojassanjivani.com/#diseases"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": disease.name,
        "item": `https://ojassanjivani.com/diseases/${disease.slug}`
      }
    ]
  };

  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": disease.name,
    "description": disease.overview,
    "possibleTreatment": disease.treatments.map((t) => ({
      "@type": "MedicalTherapy",
      "name": t.title,
      "description": t.description
    })),
    "signOrSymptom": disease.symptoms.map((s) => ({
      "@type": "MedicalSignOrSymptom",
      "name": s.title,
      "description": s.description
    }))
  };

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": disease.metaTitle,
    "description": disease.metaDescription,
    "url": `https://ojassanjivani.com/diseases/${disease.slug}`,
    "aspect": ["causes", "symptoms", "treatments", "prognosis"]
  };

  const isCategory = disease.isCategory;

  return (
    <div className="min-h-screen bg-bg-white font-sans antialiased text-text-main relative">
      <ScrollToTopOnLoad />

      {/* Structured SEO Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />

      {/* Sticky Header */}
      <Header />

      {/* Main Content Layout */}
      <main className="relative" style={{ paddingTop: "130px" }}>
        
        {/* 1. Hero Section */}
        <DiseaseHero disease={disease} />

        {isCategory ? (
          /* CATEGORY LANDING PAGE LAYOUT */
          <>
            {/* About Heart Diseases Section */}
            <section className="py-16 sm:py-20 bg-white border-b border-border-main/20 text-left">
              <div className="custom-container space-y-12 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Left block: General details */}
                  <div className="lg:col-span-6 space-y-6">
                    <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
                      Medical Overview
                    </Badge>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-text-main">
                      Understanding Heart Diseases
                    </h2>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      Heart diseases are among the leading causes of illness and mortality worldwide. They represent a cluster of circulatory conditions triggered by modern stressors, nutritional imbalances, and vascular vulnerabilities.
                    </p>
                    
                    {/* Clinical Approaches */}
                    <div className="space-y-4 pt-2">
                      <div className="p-4 rounded-2xl bg-[#F5FBF8] border border-[#028174]/10">
                        <h4 className="text-xs sm:text-sm font-extrabold text-[#028174] flex items-center gap-2">
                          <Heart className="w-4 h-4" /> Ayurvedic Philosophy
                        </h4>
                        <p className="text-[11px] sm:text-xs text-text-secondary mt-1.5 leading-relaxed">
                          Ayurveda focuses on clearing vascular blockages (Srotas) by balancing the three vital bodily doshas (Vata, Pitta, and Kapha) and eliminating heart-harming toxins (Ama).
                        </p>
                      </div>
                      
                      <div className="p-4 rounded-2xl bg-slate-50 border border-border-main/50">
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-slate-700" /> Homeopathic Approach
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 mt-1.5 leading-relaxed">
                          Homeopathy provides individualized, constitutional treatment targeting vascular susceptibility, reinforcing cardiac muscles, and managing cardiovascular pressure.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right block: Critical triggers list */}
                  <div className="lg:col-span-6 space-y-6">
                    <h3 className="font-heading text-lg sm:text-xl font-extrabold text-text-main">
                      Critical Risk Factors & Triggers
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { title: "Sedentary Lifestyle", desc: "Lack of cardiac conditioning weakens heart tissues and circulation.", icon: Activity },
                        { title: "Chronic Stress", desc: "Cortisol surges trigger vascular spasms and persistent pressure.", icon: Brain },
                        { title: "Atherogenic Diet", desc: "Excessive saturated trans-fats harden the delicate arterial linings.", icon: Utensils },
                        { title: "Genetics & Lineage", desc: "Familial predisposition for arterial lipid plaque deposition.", icon: Dna },
                        { title: "Smoking & Nicotine", desc: "Nicotine poisons capillary walls and constricts coronary flow.", icon: Flame },
                        { title: "Obesity & Metabolic Weight", desc: "Forces the cardiac chambers to pump with extra systemic strain.", icon: Scale }
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div key={idx} className="p-4 rounded-xl border border-border-main/40 hover:border-[#028174]/20 transition-all flex gap-3 text-left">
                            <div className="w-8 h-8 rounded-lg bg-[#F5FBF8] text-[#028174] flex items-center justify-center shrink-0">
                              <Icon className="w-4.5 h-4.5" />
                            </div>
                            <div>
                              <h4 className="text-[11px] sm:text-xs font-bold text-text-main">{item.title}</h4>
                              <p className="text-[9px] sm:text-[10px] text-text-secondary mt-0.5 leading-tight">{item.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Disease Cards Grid */}
            <section className="py-16 sm:py-20 bg-[#F5FBF8] text-left">
              <div className="custom-container space-y-12 max-w-5xl mx-auto">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
                    Conditions We Treat
                  </Badge>
                  <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
                    Cardiovascular Conditions We Treat
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Explore our natural therapeutic programs designed to manage arterial pressure, lipids, and cardiac tone.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {disease.subDiseases?.map((sub) => (
                    <Card 
                      key={sub.slug} 
                      hoverEffect="lift" 
                      className="flex flex-col h-full bg-white border border-border-main/50 overflow-hidden hover:border-[#028174]/30 group"
                    >
                      <div className="relative w-full aspect-[4/3] bg-[#F5FBF8] flex items-center justify-center border-b border-border-main/10 overflow-hidden">
                        {sub.image ? (
                          <DiseaseIllustration 
                            imagePath={sub.image} 
                            alt={sub.name} 
                            fill 
                            className="group-hover:scale-105 transition-transform duration-500" 
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-[#028174]/10 flex items-center justify-center text-[#028174]">
                            <Heart className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                      
                      <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h3 className="font-heading text-xs sm:text-sm font-extrabold text-text-main group-hover:text-[#028174] transition-colors leading-tight">
                            {sub.name}
                          </h3>
                          <p className="text-[10px] sm:text-xs text-text-secondary leading-relaxed line-clamp-3">
                            {sub.description}
                          </p>
                        </div>

                        <div className="pt-2">
                          <Link 
                            href={`/diseases/${sub.slug}`} 
                            className="text-xs font-bold text-[#028174] hover:text-[#01695F] inline-flex items-center gap-1 group/btn"
                          >
                            Read More 
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          /* SINGLE DISEASE DETAIL LAYOUT */
          <>
            {/* 2. Disease Overview */}
            <DiseaseOverview disease={disease} />

            {/* 3. Symptoms Section */}
            <SymptomsGrid symptoms={disease.symptoms} />

            {/* 4. Causes Section */}
            <CausesTimeline causes={disease.causes} />

            {/* 5. Our Treatment Approach */}
            <TreatmentApproach treatments={disease.treatments} />
          </>
        )}

        {/* 6. Benefits of Natural Treatment */}
        <BenefitsComparison />

        {/* 7. Why Choose Ojas Sanjivani */}
        <WhyChooseSection />

        {/* 8. Specialist Doctor CTA */}
        <DoctorCTA doctor={disease.doctor} />

        {/* 9. Patient Testimonials */}
        <TestimonialsCarousel testimonials={disease.testimonials} />

        {/* 10. FAQs */}
        <FAQAccordion faqs={disease.faqs} diseaseName={disease.name} />

        {/* 11. Related Diseases (only for individual disease pages) */}
        {!isCategory && <RelatedDiseases relatedSlugs={disease.relatedDiseases} />}

        {/* 12. Appointment Form */}
        <AppointmentForm diseaseName={disease.name} />

      </main>

      {/* 13. Sticky Mobile CTA */}
      <StickyMobileCTA phone={disease.doctor.phone} />

      {/* Footer */}
      <Footer />

      {/* Floating Widgets */}
      <FloatingWidgets />
    </div>
  );
}
