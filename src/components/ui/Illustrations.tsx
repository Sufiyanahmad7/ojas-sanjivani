import * as React from "react";

export interface IllustrationProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  lightGreen?: string;
  mintColor?: string;
}

/**
 * Consistent Illustration Set for Ojas Sanjivani Healthcare Platform.
 * Designed with a premium flat, rounded, minimal SVG style in a white and green palette.
 */

// 1. Digital Health Assistant
export function DigitalHealthAssistant({
  size = 200,
  primaryColor = "#2E7D32",
  secondaryColor = "#43A047",
  lightGreen = "#E8F5E9",
  mintColor = "#F8FFF8",
  ...props
}: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Background organic shape */}
      <path d="M40 100 C40 50, 80 30, 130 40 C170 50, 180 100, 160 140 C140 180, 80 170, 50 150 C40 135, 40 115, 40 100 Z" fill={mintColor} />
      <circle cx="150" cy="60" r="16" fill={lightGreen} />
      <circle cx="60" cy="140" r="22" fill={lightGreen} opacity="0.6" />
      
      {/* Digital Brain / Core Screen */}
      <rect x="65" y="60" width="70" height="80" rx="16" fill="#FFFFFF" stroke={lightGreen} strokeWidth="3" />
      <rect x="75" y="70" width="50" height="45" rx="10" fill={lightGreen} />
      
      {/* Robot Eye / Scanning details */}
      <circle cx="100" cy="92" r="14" fill={primaryColor} />
      <circle cx="100" cy="92" r="6" fill="#FFFFFF" />
      <circle cx="103" cy="89" r="2" fill={secondaryColor} />
      
      {/* Stethoscope wrapping around */}
      <path d="M100 140 C100 165, 150 165, 150 140 C150 120, 120 120, 120 105" stroke={primaryColor} strokeWidth="4" strokeLinecap="round" />
      <circle cx="120" cy="105" r="4" fill={secondaryColor} />
      
      {/* Nodes and leaf details */}
      <path d="M120 40 C110 50, 110 55, 120 60" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
      <circle cx="120" cy="40" r="3" fill={primaryColor} />
      
      {/* Little green leaves representing nature in tech */}
      <path d="M60 70 C50 65, 45 55, 50 45 C55 55, 60 65, 60 70 Z" fill={secondaryColor} />
      <path d="M48 62 C40 62, 38 58, 42 50 C45 54, 48 58, 48 62 Z" fill={primaryColor} />
    </svg>
  );
}

// 2. Online Doctor Consultation
export function OnlineDoctorConsultation({
  size = 200,
  primaryColor = "#2E7D32",
  secondaryColor = "#43A047",
  lightGreen = "#E8F5E9",
  mintColor = "#F8FFF8",
  ...props
}: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M50 80 C30 110, 40 160, 90 170 C140 180, 170 140, 170 100 C170 60, 130 40, 90 50 C70 55, 60 65, 50 80 Z" fill={mintColor} />
      <circle cx="55" cy="65" r="14" fill={lightGreen} />
      <circle cx="160" cy="135" r="18" fill={lightGreen} opacity="0.7" />
      
      {/* Laptop / Screen */}
      <rect x="55" y="70" width="90" height="64" rx="10" fill="#FFFFFF" stroke={primaryColor} strokeWidth="3.5" />
      <rect x="62" y="76" width="76" height="42" rx="6" fill={lightGreen} />
      <path d="M45 134 H155 V138 C155 142, 145 145, 135 145 H65 C55 145, 45 142, 45 138 Z" fill={primaryColor} />
      <rect x="92" y="137" width="16" height="3" rx="1.5" fill="#FFFFFF" />
      
      {/* Doctor avatar on screen */}
      <circle cx="100" cy="94" r="10" fill={primaryColor} />
      <path d="M86 114 C86 106, 92 104, 100 104 C108 104, 114 106, 114 114 Z" fill={secondaryColor} />
      
      {/* Medical Cross Speech Bubble */}
      <path d="M125 55 C125 43, 136 35, 148 35 C160 35, 170 43, 170 55 C170 67, 160 75, 148 75 C142 75, 138 77, 132 81 C133 77, 125 67, 125 55 Z" fill={primaryColor} />
      <path d="M145 50 H151 V60 H145 Z M140 55 H156 V55 Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 3. Ayurveda
export function Ayurveda({
  size = 200,
  primaryColor = "#2E7D32",
  secondaryColor = "#43A047",
  lightGreen = "#E8F5E9",
  mintColor = "#F8FFF8",
  ...props
}: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M40 90 C40 50, 90 30, 130 40 C170 50, 175 110, 160 150 C145 180, 80 180, 55 150 C45 130, 40 110, 40 90 Z" fill={mintColor} />
      <circle cx="150" cy="130" r="22" fill={lightGreen} />
      
      {/* Mortar & Pestle */}
      <path d="M60 115 C60 145, 140 145, 140 115 H60 Z" fill="#FFFFFF" stroke={primaryColor} strokeWidth="4" />
      <path d="M72 115 C72 135, 128 135, 128 115 Z" fill={lightGreen} />
      <rect x="50" y="110" width="100" height="6" rx="3" fill={primaryColor} />
      
      {/* Pestle */}
      <path d="M85 80 L115 115" stroke={primaryColor} strokeWidth="10" strokeLinecap="round" />
      
      {/* Large Ayurvedic Leaves growing from Mortar */}
      <path d="M100 110 C105 85, 120 75, 135 70 C125 85, 110 95, 100 110 Z" fill={secondaryColor} />
      <path d="M80 110 C85 90, 80 75, 65 65 C75 80, 80 95, 80 110 Z" fill={primaryColor} />
      <path d="M100 110 C98 80, 90 65, 102 50 C108 65, 108 80, 100 110 Z" fill={secondaryColor} opacity="0.8" />
      
      {/* Floating droplets / essence */}
      <circle cx="130" cy="95" r="4" fill={primaryColor} />
      <circle cx="70" cy="90" r="3" fill={secondaryColor} />
    </svg>
  );
}

// 4. Homeopathy
export function Homeopathy({
  size = 200,
  primaryColor = "#2E7D32",
  secondaryColor = "#43A047",
  lightGreen = "#E8F5E9",
  mintColor = "#F8FFF8",
  ...props
}: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M60 70 C40 100, 30 150, 80 170 C130 190, 170 150, 160 100 C150 50, 110 40, 80 50 C70 55, 65 60, 60 70 Z" fill={mintColor} />
      <circle cx="150" cy="70" r="16" fill={lightGreen} />
      
      {/* Homeopathic Dropper Bottle */}
      <rect x="80" y="90" width="40" height="60" rx="8" fill="#FFFFFF" stroke={primaryColor} strokeWidth="3.5" />
      <rect x="87" y="105" width="26" height="35" rx="4" fill={lightGreen} />
      <rect x="90" y="80" width="20" height="10" fill={primaryColor} />
      
      {/* Liquid Level */}
      <path d="M82 125 C92 123, 108 127, 118 125 V146 H82 Z" fill={secondaryColor} opacity="0.3" />
      
      {/* Dropper */}
      <path d="M100 50 V80" stroke={primaryColor} strokeWidth="4.5" strokeLinecap="round" />
      <path d="M92 48 C92 40, 108 40, 108 48 Z" fill={secondaryColor} />
      
      {/* Falling Droplet */}
      <path d="M100 92 C100 92, 104 97, 104 100 C104 102.5, 96 102.5, 96 100 C96 97, 100 92, 100 92 Z" fill={secondaryColor} />
      
      {/* Homeopathic Globules (Pills) rolling around */}
      <circle cx="65" cy="145" r="5" fill="#FFFFFF" stroke={primaryColor} strokeWidth="1.5" />
      <circle cx="74" cy="155" r="4" fill="#FFFFFF" stroke={primaryColor} strokeWidth="1.5" />
      <circle cx="135" cy="135" r="5" fill="#FFFFFF" stroke={primaryColor} strokeWidth="1.5" />
      <circle cx="145" cy="142" r="3.5" fill="#FFFFFF" stroke={primaryColor} strokeWidth="1.5" />
    </svg>
  );
}

// 5. Medicine Delivery
export function MedicineDelivery({
  size = 200,
  primaryColor = "#2E7D32",
  secondaryColor = "#43A047",
  lightGreen = "#E8F5E9",
  mintColor = "#F8FFF8",
  ...props
}: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M50 100 C50 60, 90 40, 130 50 C170 60, 180 110, 160 145 C140 180, 80 180, 55 150 C50 135, 50 115, 50 100 Z" fill={mintColor} />
      <circle cx="60" cy="60" r="14" fill={lightGreen} />
      
      {/* Delivery Scooter / Vehicle Outline */}
      <g transform="translate(10, 10)">
        {/* Wheels */}
        <circle cx="65" cy="130" r="18" fill="#FFFFFF" stroke={primaryColor} strokeWidth="4" />
        <circle cx="65" cy="130" r="6" fill={secondaryColor} />
        <circle cx="125" cy="130" r="18" fill="#FFFFFF" stroke={primaryColor} strokeWidth="4" />
        <circle cx="125" cy="130" r="6" fill={secondaryColor} />
        
        {/* Body frame */}
        <path d="M65 130 H125 L115 95 H65 L55 110 Z" fill={lightGreen} />
        <path d="M65 130 L75 90 H105 L115 130" stroke={primaryColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Handle bar */}
        <path d="M75 90 L70 70 H60" stroke={primaryColor} strokeWidth="4" strokeLinecap="round" />
        
        {/* Medicine Box */}
        <rect x="100" y="65" width="36" height="35" rx="6" fill="#FFFFFF" stroke={primaryColor} strokeWidth="3.5" />
        {/* Green cross on box */}
        <path d="M118 72 V88 M110 80 H126" stroke={secondaryColor} strokeWidth="3" strokeLinecap="round" />
      </g>
      
      {/* Speed lines */}
      <path d="M25 100 H45 M20 110 H35 M30 120 H40" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 6. Health Reports
export function HealthReports({
  size = 200,
  primaryColor = "#2E7D32",
  secondaryColor = "#43A047",
  lightGreen = "#E8F5E9",
  mintColor = "#F8FFF8",
  ...props
}: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M40 85 C40 45, 90 35, 130 45 C170 55, 175 110, 160 145 C145 175, 90 175, 60 155 C45 140, 40 110, 40 85 Z" fill={mintColor} />
      <circle cx="150" cy="65" r="16" fill={lightGreen} />
      
      {/* Clipboard */}
      <rect x="65" y="55" width="70" height="95" rx="8" fill="#FFFFFF" stroke={primaryColor} strokeWidth="3.5" />
      
      {/* Clip */}
      <rect x="85" y="48" width="30" height="12" rx="3" fill={primaryColor} />
      <circle cx="100" cy="54" r="2.5" fill="#FFFFFF" />
      
      {/* Report rows */}
      <rect x="75" y="75" width="30" height="6" rx="3" fill={secondaryColor} />
      <circle cx="118" cy="78" r="4" fill={primaryColor} />
      
      <rect x="75" y="90" width="40" height="6" rx="3" fill={secondaryColor} opacity="0.6" />
      <circle cx="124" cy="93" r="4" fill={secondaryColor} />
      
      <rect x="75" y="105" width="25" height="6" rx="3" fill={secondaryColor} />
      <circle cx="115" cy="108" r="4" fill={primaryColor} />
      
      {/* Pulse line chart at bottom */}
      <path d="M75 132 L85 132 L90 122 L95 138 L100 128 L105 132 H125" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 7. Doctor Consultation
export function DoctorConsultation({
  size = 200,
  primaryColor = "#2E7D32",
  secondaryColor = "#43A047",
  lightGreen = "#E8F5E9",
  mintColor = "#F8FFF8",
  ...props
}: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M50 70 C30 100, 30 150, 80 170 C130 190, 170 160, 170 115 C170 70, 130 50, 95 50 C75 50, 60 55, 50 70 Z" fill={mintColor} />
      <circle cx="155" cy="75" r="20" fill={lightGreen} />
      
      {/* Doctor silhouette (on left) */}
      <circle cx="75" cy="85" r="14" fill="#FFFFFF" stroke={primaryColor} strokeWidth="3" />
      <circle cx="75" cy="85" r="6" fill={secondaryColor} />
      <path d="M52 135 C52 115, 62 110, 75 110 C88 110, 98 115, 98 135 Z" fill={primaryColor} />
      
      {/* Patient silhouette (on right) */}
      <circle cx="125" cy="98" r="12" fill="#FFFFFF" stroke={secondaryColor} strokeWidth="3" />
      <path d="M106 142 C106 125, 114 120, 125 120 C136 120, 144 125, 144 142 Z" fill={secondaryColor} />
      
      {/* Stethoscope bridge / dialog indicator */}
      <path d="M90 105 H110" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="105" r="3.5" fill={secondaryColor} />
      
      {/* Top medical cross symbol */}
      <path d="M95 40 V52 M89 46 H101" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// 8. Video Consultation
export function VideoConsultation({
  size = 200,
  primaryColor = "#2E7D32",
  secondaryColor = "#43A047",
  lightGreen = "#E8F5E9",
  mintColor = "#F8FFF8",
  ...props
}: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M40 90 C40 50, 80 30, 130 40 C170 50, 180 100, 165 140 C150 175, 95 175, 60 155 C45 140, 40 115, 40 90 Z" fill={mintColor} />
      <circle cx="65" cy="55" r="16" fill={lightGreen} />
      
      {/* Smartphone */}
      <rect x="70" y="50" width="60" height="110" rx="12" fill="#FFFFFF" stroke={primaryColor} strokeWidth="3.5" />
      <rect x="76" y="58" width="48" height="80" rx="6" fill={lightGreen} />
      <circle cx="100" cy="148" r="4.5" fill={primaryColor} />
      
      {/* Video Call UI details */}
      {/* Doctor Profile */}
      <circle cx="100" cy="85" r="14" fill={primaryColor} />
      <circle cx="100" cy="85" r="6" fill="#FFFFFF" />
      <path d="M88 112 C88 103, 93 102, 100 102 C107 102, 112 103, 112 112 Z" fill={secondaryColor} />
      
      {/* Video Icon at bottom of screen */}
      <rect x="92" y="118" width="16" height="10" rx="2" fill={primaryColor} />
      <path d="M108 120 L113 117 V129 L108 126 Z" fill={primaryColor} />
      
      {/* Camera indicator */}
      <circle cx="100" cy="54" r="1" fill={primaryColor} />
    </svg>
  );
}

// 9. Appointment Booking
export function AppointmentBooking({
  size = 200,
  primaryColor = "#2E7D32",
  secondaryColor = "#43A047",
  lightGreen = "#E8F5E9",
  mintColor = "#F8FFF8",
  ...props
}: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M60 70 C40 100, 30 150, 80 170 C130 190, 170 150, 160 100 C150 50, 110 35, 80 45 C70 50, 65 60, 60 70 Z" fill={mintColor} />
      <circle cx="150" cy="140" r="18" fill={lightGreen} />
      
      {/* Calendar grid */}
      <rect x="60" y="60" width="80" height="85" rx="10" fill="#FFFFFF" stroke={primaryColor} strokeWidth="3.5" />
      <path d="M60 85 H140" stroke={primaryColor} strokeWidth="3" />
      
      {/* Calendar loops */}
      <rect x="75" y="50" width="8" height="15" rx="4" fill={secondaryColor} />
      <rect x="117" y="50" width="8" height="15" rx="4" fill={secondaryColor} />
      
      {/* Date squares */}
      <circle cx="78" cy="102" r="4.5" fill={lightGreen} />
      <circle cx="100" cy="102" r="4.5" fill={lightGreen} />
      <circle cx="122" cy="102" r="4.5" fill={lightGreen} />
      
      <circle cx="78" cy="122" r="4.5" fill={lightGreen} />
      {/* Active booked date */}
      <circle cx="100" cy="122" r="7.5" fill={primaryColor} />
      <path d="M98 122 L100 124 L103 120" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="122" cy="122" r="4.5" fill={lightGreen} />
      
      {/* Floating clock check symbol */}
      <circle cx="140" cy="70" r="18" fill={secondaryColor} />
      <path d="M140 58 V70 H148" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 10. Wellness
export function Wellness({
  size = 200,
  primaryColor = "#2E7D32",
  secondaryColor = "#43A047",
  lightGreen = "#E8F5E9",
  mintColor = "#F8FFF8",
  ...props
}: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M50 100 C50 60, 90 35, 140 45 C180 55, 185 110, 160 145 C135 180, 80 180, 55 150 C50 135, 50 115, 50 100 Z" fill={mintColor} />
      <circle cx="50" cy="65" r="18" fill={lightGreen} />
      
      {/* Lotus base */}
      <path d="M100 155 C70 155, 60 130, 100 100 C140 130, 130 155, 100 155 Z" fill={lightGreen} />
      <path d="M100 155 C50 155, 40 140, 75 115 C90 135, 95 145, 100 155 Z" fill={secondaryColor} opacity="0.8" />
      <path d="M100 155 C150 155, 160 140, 125 115 C110 135, 105 145, 100 155 Z" fill={secondaryColor} opacity="0.8" />
      
      {/* Human Wellness silhouette in Yoga pose */}
      {/* Head */}
      <circle cx="100" cy="70" r="8.5" fill={primaryColor} />
      
      {/* Spine / Body */}
      <path d="M100 79 C93 79, 90 92, 100 108 C110 92, 107 79, 100 79 Z" fill={secondaryColor} />
      <path d="M100 108 V135" stroke={primaryColor} strokeWidth="4.5" strokeLinecap="round" />
      
      {/* Outstretched arms forming wellness circle shape */}
      <path d="M72 100 C72 80, 128 80, 128 100" stroke={primaryColor} strokeWidth="3.5" strokeLinecap="round" />
      
      {/* Grounding line */}
      <path d="M75 135 H125" stroke={primaryColor} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// 11. Herbal Treatment
export function HerbalTreatment({
  size = 200,
  primaryColor = "#2E7D32",
  secondaryColor = "#43A047",
  lightGreen = "#E8F5E9",
  mintColor = "#F8FFF8",
  ...props
}: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M40 90 C40 50, 90 30, 130 40 C170 50, 175 110, 160 150 C145 185, 80 180, 55 150 C45 130, 40 110, 40 90 Z" fill={mintColor} />
      <circle cx="50" cy="130" r="16" fill={lightGreen} />
      
      {/* Apothecary Herbal Bottle */}
      <rect x="75" y="85" width="50" height="70" rx="12" fill="#FFFFFF" stroke={primaryColor} strokeWidth="3.5" />
      <rect x="83" y="105" width="34" height="40" rx="6" fill={lightGreen} />
      
      {/* Leaf icon on bottle */}
      <path d="M100 112 C105 120, 105 132, 100 138 C95 132, 95 120, 100 112 Z" fill={secondaryColor} />
      
      {/* Cork */}
      <rect x="90" y="73" width="20" height="12" rx="2" fill={primaryColor} />
      
      {/* Herbal Stem / Leaves growing out of cork */}
      <path d="M100 73 C100 50, 115 42, 128 35 C115 48, 108 58, 100 73 Z" fill={secondaryColor} />
      <path d="M100 73 C95 55, 80 48, 70 42 C82 52, 92 60, 100 73 Z" fill={primaryColor} />
      
      {/* Magic dots/sparks */}
      <circle cx="132" cy="55" r="3" fill={primaryColor} />
      <circle cx="68" cy="62" r="3.5" fill={secondaryColor} />
    </svg>
  );
}
