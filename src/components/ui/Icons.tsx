import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  accentColor?: string;
};

/**
 * Premium Healthcare Icon Pack - Minimal Outline, Rounded, Modern.
 * Each icon supports dynamic styling and features a green brand accent.
 */

// 1. Ayurveda Icon - Organic leaf branch
export function AyurvedaIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2C12 2 12 10 5 12C12 12 14 18 14 22" stroke={accentColor} />
      <path d="M12 2C12 2 12 10 19 12C12 12 10 18 10 22" />
      <path d="M12 6c4-1.5 6-3 6-3s-1.5 2.5-3 6" />
      <path d="M12 6C8 4.5 6 3 6 3s-1.5 2.5-1 6" stroke={accentColor} />
    </svg>
  );
}

// 2. Homeopathy Icon - Water droplet with organic globules
export function HomeopathyIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" stroke={accentColor} />
      <circle cx="12" cy="15" r="2" fill="currentColor" />
      <circle cx="9" cy="13" r="1" fill={accentColor} />
      <circle cx="15" cy="14" r="1" fill={accentColor} />
      <circle cx="12" cy="18" r="1" />
    </svg>
  );
}

// 3. AI Doctor Icon - Brain + stethoscope/cross
export function AIDoctorIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-2.5 2.5M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 2.5 2.5" />
      <path d="M12 4.5a4.5 4.5 0 0 0-4.5 4.5c0 2 1.5 3.5 3 4.5M12 4.5a4.5 4.5 0 0 1 4.5 4.5c0 2-1.5 3.5-3 4.5" stroke={accentColor} />
      <path d="M12 11h-2v2h2v-2z" fill={accentColor} stroke="none" />
      <path d="M12 14v4M9 18h6" />
    </svg>
  );
}

// 4. Online Consultation Icon - Screen + doctor symbol
export function OnlineConsultationIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="3" width="20" height="13" rx="2" />
      <path d="M12 16v4M8 20h8" />
      <circle cx="12" cy="8" r="2.5" stroke={accentColor} />
      <path d="M7 13c0-2 2-2 5-2s5 0 5 2" />
    </svg>
  );
}

// 5. Medicine Delivery Icon - Express delivery truck + cross
export function MedicineDeliveryIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="6" width="13" height="10" rx="1" />
      <path d="M15 8h4.5l2.5 3.5V16h-7V8z" stroke={accentColor} />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="16.5" cy="18.5" r="2.5" />
      <path d="M7 11h3M8.5 9.5v3" stroke={accentColor} />
    </svg>
  );
}

// 6. Heart Icon - Heart shape + pulse line
export function HeartIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M6 9h3l1.5-2.5L12 12.5l1.5-3.5H18" stroke={accentColor} />
    </svg>
  );
}

// 7. Diabetes Icon - Blood drop + glucose monitor scale
export function DiabetesIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22c4.4 0 8-3.6 8-8 0-5.4-8-12-8-12S4 8.6 4 14c0 4.4 3.6 8 8 8z" stroke={accentColor} />
      <path d="M9 13h6M12 10v6" />
      <path d="M7 17.5c2 1 6 1 8 0" stroke={accentColor} />
    </svg>
  );
}

// 8. Thyroid Icon - Thyroid gland/butterfly outline
export function ThyroidIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 5c0 6-3 7-3 10a3 3 0 0 0 6 0c0-3-3-4-3-10z" stroke={accentColor} />
      <path d="M9 10C7.5 9 5 8 5 11c0 3 2 4 4 4" />
      <path d="M15 10c1.5-1 4-2 4 1 0 3-2 4-4 4" stroke={accentColor} />
      <circle cx="12" cy="18" r="1.5" />
    </svg>
  );
}

// 9. Liver Icon - Liver anatomical silhouette
export function LiverIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21.5 12c.5-2.5-1.5-5-5-5s-6 1.5-8.5.5-5-.5-5.5 1.5C2 11.5 2 15.5 4 17.5c2.5 2.5 7.5 1.5 10 1.5s6.5 1 7.5-2.5z" />
      <path d="M6.5 9.5c1 1.5 2 2.5 3.5 2.5s2.5-.5 3-2" stroke={accentColor} />
    </svg>
  );
}

// 10. Kidney Icon - Twin kidneys
export function KidneyIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 6c-2.5 0-4 1.8-4 5.5s1.5 5.5 4 5.5c1 0 1.5-.5 1.5-1.5V7.5c0-1-.5-1.5-1.5-1.5z" stroke={accentColor} />
      <path d="M16 6c2.5 0 4 1.8 4 5.5s-1.5 5.5-4 5.5c-1 0-1.5-.5-1.5-1.5V7.5c0-1 .5-1.5 1.5-1.5z" />
      <path d="M9.5 11.5h5" stroke={accentColor} />
    </svg>
  );
}

// 11. Hair Icon - Hair strand + scalp surface
export function HairIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 20c4-1 6-2.5 8-8.5S14 3 14 3" stroke={accentColor} />
      <path d="M12 12c1.5-3 3-5 5-6.5" />
      <path d="M2 20h20" />
      <path d="M12 20v-3.5" stroke={accentColor} />
      <circle cx="12" cy="14" r="1" />
    </svg>
  );
}

// 12. Skin Icon - Skin layers/dermal cells
export function SkinIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 8c3-1.5 6-1.5 9 0s6 1.5 9 0" stroke={accentColor} />
      <path d="M3 13c3-1.5 6-1.5 9 0s6 1.5 9 0" />
      <path d="M3 18c3-1.5 6-1.5 9 0s6 1.5 9 0" stroke={accentColor} />
      <path d="M5 4v16M19 4v16" />
    </svg>
  );
}

// 13. Women Icon - Venus symbol styled with a flower petal
export function WomenIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="9" r="6" stroke={accentColor} />
      <path d="M12 15v7M9 18h6" />
      <path d="M12 5c2 2 2 6 0 8" />
    </svg>
  );
}

// 14. Child Icon - Happy baby/child head outline
export function ChildIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="13" r="7" />
      <path d="M12 6c-2.5-4-5-1-5-1s2.5-3 5 1z" stroke={accentColor} />
      <path d="M8.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M15.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM9 16c1.5 1.5 4.5 1.5 6 0" stroke={accentColor} />
    </svg>
  );
}

// 15. Respiratory Icon - Lungs/Breathing outline
export function RespiratoryIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3v7m-3-4V4h6v2M12 10c0-1.5-1.5-2.5-4.5-2.5S3 9 3 13.5c0 3.5 2.5 5 4.5 5h1c2 0 3.5-1 3.5-3v-2.5" />
      <path d="M12 10c0-1.5 1.5-2.5 4.5-2.5s4.5 1.5 4.5 6c0 3.5-2.5 5-4.5 5h-1c-2 0-3.5-1-3.5-3v-2.5" stroke={accentColor} />
    </svg>
  );
}

// 16. Joint Pain Icon - Knee/Joint skeletal connection with active healing spark
export function JointPainIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3v7.5M12 13.5V21" />
      <rect x="9" y="10.5" width="6" height="3" rx="1.5" stroke={accentColor} />
      <circle cx="12" cy="12" r="6" stroke={accentColor} strokeDasharray="3 3" />
      <path d="M7 8l-2-2M17 8l2-2M7 16l-2 2M17 16l2 2" />
    </svg>
  );
}

// 17. Digestion Icon - Stomach outline with waves
export function DigestionIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3v3m-2-3h4" />
      <path d="M12 6c-2 0-4 1-5 2.5s.5 5.5 2 7c2 2 3.5 1 5.5 1.5s4.5-1 4.5-4c0-2.5-3-7-7-7z" stroke={accentColor} />
      <path d="M8 12c2.5 1 5.5-1 8 0" />
    </svg>
  );
}

// 18. Sexual Wellness Icon - Lotus flow / Yin Yang balance spark
export function SexualWellnessIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2c0 0 7 6 7 11s-3.5 9-7 9-7-4-7-9 7-11 7-11z" />
      <path d="M12 8c1.5 2 3 2.5 3 5s-1.5 4.5-3 4.5-3-2-3-4.5 1.5-3 3-5z" stroke={accentColor} />
    </svg>
  );
}

// 19. Appointment Icon - Calendar + Clock/Checkmark
export function AppointmentIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke={accentColor} />
      <path d="M9 16l2 2 4-4" stroke={accentColor} />
    </svg>
  );
}

// 20. Video Call Icon - Camera + cross on lens
export function VideoCallIcon({ size = 24, accentColor = "#2E7D32", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M23 7l-7 5 7 5V7z" stroke={accentColor} />
      <rect x="1" y="5" width="15" height="14" rx="2" />
      <circle cx="8" cy="12" r="2.5" />
      <path d="M8 9.5v5M5.5 12h5" stroke={accentColor} />
    </svg>
  );
}
