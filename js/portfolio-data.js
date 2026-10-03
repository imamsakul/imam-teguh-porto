/**
 * Imam Teguh Portfolio - Data Store
 * Contains curated project case studies across 4 core creative pillars:
 * 1. Graphic Design
 * 2. Social Media Post
 * 3. Video Editing (Talking Head & Motion Graphic)
 * 4. Document Layout
 */

const PORTFOLIO_DATA = [
  // ==========================================
  // 1. GRAPHIC DESIGN
  // ==========================================
  {
    id: "gd-lumina",
    title: "Lumina BioTech Brand Identity",
    subtitle: "Complete Visual Identity System & Guidelines",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    featured: true,
    year: "2025",
    client: "Lumina BioTech Ltd.",
    role: "Lead Brand & Graphic Designer",
    tags: ["Adobe Illustrator", "Photoshop", "Brand Identity", "Vector Art"],
    stats: [
      { label: "Brand Recognition", value: "+140%" },
      { label: "Asset Deliverables", value: "85+ Items" },
      { label: "Guidelines Scope", value: "64 Pages" }
    ],
    summary: "A modern, future-proof identity system created for a high-growth biotechnology firm. Included custom logomark, dynamic color system, and complete brand stationery.",
    details: "Lumina required a visual identity that balanced scientific authority with human warmth. The solution was built around an interconnected hexagonal molecular mark fused with a soft gradient palette of bio-cyan and deep indigo. The project delivered comprehensive brand guidelines, corporate stationery, exhibition roll-ups, and 3D merchandise mockups.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    previewType: "image",
    accentColor: "#2563eb",
    themeGradient: "#2563eb",
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#07090e"/>
        <circle cx="300" cy="180" r="140" fill="#2563eb" opacity="0.12"/>
        <!-- Brand Mark Hexagon -->
        <g transform="translate(300, 170)">
          <polygon points="0,-85 74,-42 74,42 0,85 -74,42 -74,-42" fill="none" stroke="#2563eb" stroke-width="6" stroke-linejoin="round"/>
          <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" fill="none" stroke="#3b82f6" stroke-width="3" opacity="0.8"/>
          <circle cx="0" cy="0" r="22" fill="#2563eb"/>
          <circle cx="0" cy="0" r="12" fill="#ffffff"/>
          <!-- Orbit nodes -->
          <circle cx="74" cy="-42" r="8" fill="#38bdf8"/>
          <circle cx="-74" cy="42" r="8" fill="#60a5fa"/>
          <circle cx="0" cy="85" r="8" fill="#2563eb"/>
        </g>
        <text x="300" y="305" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="4">LUMINA BIOTECH</text>
        <text x="300" y="335" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="#94a3b8" text-anchor="middle" letter-spacing="3">ADVANCED BIOSCIENCE & HUMAN WELLNESS</text>
      </svg>
    `
  },
  {
    id: "gd-neonpulse",
    title: "Neon Pulse Music Festival",
    subtitle: "Cyberpunk Event Poster Series & Billboards",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    featured: false,
    year: "2025",
    client: "Pulse Entertainment Asia",
    role: "Senior Graphic & Poster Designer",
    tags: ["Adobe Photoshop", "Illustrator", "Print Design", "Typography"],
    stats: [
      { label: "Ticket Sales", value: "25,000+" },
      { label: "Format Variants", value: "18 Print Sizes" },
      { label: "Turnaround Time", value: "7 Days" }
    ],
    summary: "Striking cyberpunk visual system for an international electronic music festival, encompassing A1 promotional posters, city LED billboards, and VIP pass badges.",
    details: "Conceptualized with high-contrast neon magenta and electric teal palette against gritty textured duotone visuals. Created customized distressed typography for festival headliners and developed press-ready CMYK assets alongside animated LED billboard specs.",
    tools: ["Photoshop", "Illustrator", "Lightroom"],
    previewType: "image",
    accentColor: "#0284c7",
    themeGradient: "#0284c7",
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#07090e"/>
        <!-- Cyber grid lines -->
        <g stroke="#0284c7" stroke-width="0.8" opacity="0.25">
          <line x1="0" y1="360" x2="600" y2="360"/>
          <line x1="0" y1="320" x2="600" y2="320"/>
          <line x1="0" y1="280" x2="600" y2="280"/>
          <line x1="100" y1="240" x2="500" y2="240"/>
          <line x1="50" y1="400" x2="220" y2="240"/>
          <line x1="180" y1="400" x2="260" y2="240"/>
          <line x1="300" y1="400" x2="300" y2="240"/>
          <line x1="420" y1="400" x2="340" y2="240"/>
          <line x1="550" y1="400" x2="380" y2="240"/>
        </g>
        <!-- Neon Sun / Portal -->
        <circle cx="300" cy="170" r="85" fill="none" stroke="#38bdf8" stroke-width="4"/>
        <circle cx="300" cy="170" r="70" fill="#0284c7" opacity="0.15"/>
        <text x="300" y="165" font-family="'Space Grotesk', sans-serif" font-size="44" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="6">NEON PULSE</text>
        <text x="300" y="198" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle" letter-spacing="8">OCTOBER 24-26 • ASIA TOUR</text>
        <rect x="200" y="220" width="200" height="28" rx="14" fill="#0284c7" opacity="0.25"/>
        <text x="300" y="239" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="3">FEATURING 30+ ARTISTS</text>
      </svg>
    `
  },
  {
    id: "gd-terraroast",
    title: "Terra Roast Specialty Coffee Packaging",
    subtitle: "Eco-Friendly Packaging & Minimalist Foil Labels",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    featured: false,
    year: "2024",
    client: "Terra Coffee Roastery",
    role: "Packaging & Brand Designer",
    tags: ["Adobe Illustrator", "Photoshop", "Packaging", "Prepress"],
    stats: [
      { label: "Sales Increase", value: "+38%" },
      { label: "SKU Variations", value: "6 Origins" },
      { label: "Eco Certification", value: "FSC Certified" }
    ],
    summary: "Tactile packaging design utilizing custom contour topographic illustrations, metallic copper foil accents, and sustainable matte kraft paper finishes.",
    details: "Designed for premium artisanal single-origin coffee beans. Balanced artisanal earthiness with sleek typography. Created complete vector dielines ready for rotogravure foil printing with exact spot UV specifications.",
    tools: ["Adobe Illustrator", "Adobe InDesign", "Photoshop"],
    previewType: "image",
    accentColor: "#d97706",
    themeGradient: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#1c1917"/>
        <!-- Coffee Bag Silhouette -->
        <g transform="translate(190, 40)">
          <path d="M20,0 L200,0 L215,320 L5,320 Z" fill="#292524" stroke="#44403c" stroke-width="2"/>
          <path d="M20,0 L200,0 L190,30 L30,30 Z" fill="#332c27" opacity="0.6"/>
          <!-- Label -->
          <rect x="35" y="60" width="150" height="200" rx="6" fill="#fef3c7"/>
          <text x="110" y="95" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="900" fill="#78350f" text-anchor="middle" letter-spacing="2">TERRA ROAST</text>
          <line x1="60" y1="105" x2="160" y2="105" stroke="#d97706" stroke-width="2"/>
          <text x="110" y="130" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">ETHIOPIA YIRGACHEFFE</text>
          <text x="110" y="150" font-family="'Inter', sans-serif" font-size="9" fill="#a16207" text-anchor="middle">WASHED PROCESS • 2,100 MASL</text>
          <!-- Topographic paths -->
          <path d="M50,170 Q110,160 170,175 Q110,185 50,170" fill="none" stroke="#d97706" stroke-width="1.5" opacity="0.6"/>
          <path d="M50,185 Q110,175 170,190 Q110,200 50,185" fill="none" stroke="#d97706" stroke-width="1.5" opacity="0.6"/>
          <rect x="75" y="215" width="70" height="22" rx="4" fill="#78350f"/>
          <text x="110" y="230" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">250 GRAMS</text>
        </g>
      </svg>
    `
  },

  // ==========================================
  // 2. SOCIAL MEDIA POST
  // ==========================================
  {
    id: "sm-finscale",
    title: "FinScale: High-Retention IG Carousel",
    subtitle: "10-Slide Educational Finance Carousel Series",
    category: "social-media",
    categoryLabel: "Social Media Post",
    featured: true,
    year: "2025",
    client: "FinScale Technologies",
    role: "Social Media Designer & Content Strategist",
    tags: ["Figma", "Photoshop", "Instagram Carousel", "Visual Storytelling"],
    stats: [
      { label: "Total Reach", value: "4.8M Views" },
      { label: "Saves & Shares", value: "32,400+" },
      { label: "Follower Growth", value: "+42K" }
    ],
    summary: "Viral 10-slide educational carousel designed for Instagram. Achieved an unprecedented 9.4% engagement rate through seamless slide continuations and bite-sized visual analogies.",
    details: "FinScale needed to explain complex financial compounding concepts to Gen-Z and Millennial investors. Crafted a 10-slide swipeable experience with continuous visual graphic connectors across slide edges, high-contrast bold typography, custom 3D emoji accents, and clear CTA hooks on slides 1, 5, and 10.",
    tools: ["Figma", "Photoshop", "Canva Pro"],
    previewType: "carousel",
    accentColor: "#10b981",
    themeGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    carouselSlides: [
      {
        slideNum: 1,
        title: "How to Build a $100K Portfolio from Zero",
        badge: "SWIPE FOR BLUEPRINT 👉",
        caption: "Slide 01: The Attention Hook. Clean 3D stack illustration with high-contrast headline."
      },
      {
        slideNum: 2,
        title: "Step 1: The Cash Flow Engine",
        badge: "RULE #1",
        caption: "Slide 02: Clear visual comparison chart comparing active income vs automated dollar-cost averaging."
      },
      {
        slideNum: 3,
        title: "Step 2: The 50/30/20 Rule Refined",
        badge: "BUDGETING SYSTEM",
        caption: "Slide 03: Modern segmented donut chart with punchy color coding and minimal cognitive load."
      },
      {
        slideNum: 4,
        title: "The Exponential Curve: Years 1-5",
        badge: "COMPOUND INTEREST",
        caption: "Slide 04: Visual comparison curve showing the tipping point where capital gains exceed deposits."
      },
      {
        slideNum: 5,
        title: "Save This Post & Share With A Friend",
        badge: "ACTIONABLE SUMMARY",
        caption: "Slide 05: High-converting bookmark callout that drove 32,000+ direct saves."
      }
    ],
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#031a14"/>
        <!-- Carousel Frame Mockup -->
        <rect x="140" y="30" width="320" height="340" rx="16" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
        <!-- Header bar -->
        <circle cx="170" cy="55" r="12" fill="#10b981"/>
        <text x="190" y="60" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff">@finscale.app</text>
        <rect x="400" y="48" width="42" height="18" rx="9" fill="#047857"/>
        <text x="421" y="61" font-family="'Inter', sans-serif" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle">1/10</text>
        
        <!-- Main Slide Content -->
        <text x="170" y="120" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#34d399">THE $100K</text>
        <text x="170" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" fill="#ffffff">PORTFOLIO</text>
        <text x="170" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" fill="#ffffff">BLUEPRINT ⚡</text>
        
        <rect x="170" y="205" width="260" height="3" fill="#10b981"/>
        <text x="170" y="235" font-family="'Inter', sans-serif" font-size="12" fill="#9ca3af">A step-by-step roadmap to building</text>
        <text x="170" y="255" font-family="'Inter', sans-serif" font-size="12" fill="#9ca3af">your first milestone without stress.</text>

        <!-- Swipe Indicator -->
        <rect x="170" y="300" width="260" height="36" rx="8" fill="#10b981" opacity="0.2"/>
        <text x="300" y="323" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#6ee7b7" text-anchor="middle">SWIPE TO UNLOCK ➔</text>
      </svg>
    `
  },
  {
    id: "sm-auraskincare",
    title: "Aura Skincare Launch Campaign",
    subtitle: "Harmonious 9-Grid Aesthetic & Story Templates",
    category: "social-media",
    categoryLabel: "Social Media Post",
    featured: false,
    year: "2025",
    client: "Aura Botanicals Co.",
    role: "Art Director & Social Media Designer",
    tags: ["Photoshop", "Canva Pro", "Grid Curation", "Story Design"],
    stats: [
      { label: "Engagement Rate", value: "18.4%" },
      { label: "Story Poll Clicks", value: "85,000+" },
      { label: "Direct Sales", value: "$120K in 48h" }
    ],
    summary: "A seamless 9-post Instagram feed puzzle grid creating a cohesive brand experience across product launches, video reels covers, and interactive story quizzes.",
    details: "Crafted organic warm tones (warm cream, soft sage green, terracotta) paired with luxury serif typography. Developed 30 reusable Canva & Photoshop story templates for the client's internal marketing team.",
    tools: ["Photoshop", "Canva Pro", "Lightroom"],
    previewType: "image",
    accentColor: "#f59e0b",
    themeGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#1c1917"/>
        <g transform="translate(150, 40)">
          <!-- 3x3 Grid -->
          <rect x="0" y="0" width="95" height="95" rx="6" fill="#44403c"/>
          <rect x="102" y="0" width="95" height="95" rx="6" fill="#78350f" opacity="0.7"/>
          <rect x="204" y="0" width="95" height="95" rx="6" fill="#44403c"/>
          
          <rect x="0" y="102" width="95" height="95" rx="6" fill="#78350f" opacity="0.7"/>
          <rect x="102" y="102" width="95" height="95" rx="6" fill="#b45309"/>
          <rect x="204" y="102" width="95" height="95" rx="6" fill="#78350f" opacity="0.7"/>
          
          <rect x="0" y="204" width="95" height="95" rx="6" fill="#44403c"/>
          <rect x="102" y="204" width="95" height="95" rx="6" fill="#78350f" opacity="0.7"/>
          <rect x="204" y="204" width="95" height="95" rx="6" fill="#44403c"/>
          
          <!-- Center Highlight -->
          <circle cx="150" cy="150" r="30" fill="#fef3c7" opacity="0.8"/>
          <text x="150" y="154" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="900" fill="#78350f" text-anchor="middle">AURA</text>
          <text x="150" y="325" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#d6d3d1" text-anchor="middle">9-GRID CURATION SUITE</text>
        </g>
      </svg>
    `
  },
  {
    id: "sm-cloudmetrics",
    title: "CloudMetrics B2B LinkedIn Infographics",
    subtitle: "Data-Dense Thought Leadership Graphics",
    category: "social-media",
    categoryLabel: "Social Media Post",
    featured: false,
    year: "2024",
    client: "CloudMetrics Global",
    role: "Information Designer",
    tags: ["Illustrator", "Figma", "LinkedIn Marketing", "Data Viz"],
    stats: [
      { label: "LinkedIn Reposts", value: "12,400+" },
      { label: "B2B Inbound Leads", value: "240+" },
      { label: "CTR Rate", value: "6.2%" }
    ],
    summary: "Visualizing complex B2B cloud infrastructure benchmarks into crisp, instantly readable 1:1 and 4:5 LinkedIn visual assets.",
    details: "Designed high-contrast dark and light optimized charts, icon matrices, and quote graphics that converted industry analytics into shareable viral thought leadership assets for C-level executives.",
    tools: ["Adobe Illustrator", "Figma"],
    previewType: "image",
    accentColor: "#3b82f6",
    themeGradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#0b1329"/>
        <rect x="120" y="30" width="360" height="340" rx="12" fill="#131e3d" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="150" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#60a5fa">SAAS METRICS BENCHMARK 2025</text>
        <line x1="150" y1="85" x2="450" y2="85" stroke="#1e3a8a" stroke-width="1"/>
        
        <!-- Bars -->
        <rect x="150" y="110" width="220" height="24" rx="4" fill="#3b82f6"/>
        <text x="380" y="127" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff">$24.2M ARR</text>
        
        <rect x="150" y="150" width="170" height="24" rx="4" fill="#60a5fa"/>
        <text x="330" y="167" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff">$18.5M ARR</text>
        
        <rect x="150" y="190" width="120" height="24" rx="4" fill="#93c5fd"/>
        <text x="280" y="207" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff">$12.1M ARR</text>
        
        <rect x="150" y="250" width="300" height="80" rx="8" fill="#1e293b"/>
        <text x="170" y="285" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#38bdf8">💡 Key Finding:</text>
        <text x="170" y="310" font-family="'Inter', sans-serif" font-size="11" fill="#94a3b8">Retention beats customer acquisition by 3.8x ROI.</text>
      </svg>
    `
  },

  // ==========================================
  // 3. VIDEO EDITING (TALKING HEAD & MOTION GRAPHIC)
  // ==========================================
  {
    id: "ve-talkinghead-founder",
    title: "Tech Founder: $0 to $10M Scale",
    subtitle: "High-Retention Talking Head Video Production",
    category: "video-editing",
    subCategory: "talking-head",
    categoryLabel: "Video Editing",
    subLabel: "Talking Head",
    featured: true,
    year: "2025",
    client: "Alex Vance (Venture Partner)",
    role: "Lead Video Editor & Sound Designer",
    tags: ["Premiere Pro", "After Effects", "Talking Head", "Color Grading", "Sound Design"],
    stats: [
      { label: "YouTube Views", value: "1.4M Views" },
      { label: "Avg View Duration", value: "68% (8m 40s)" },
      { label: "Subscribers Gained", value: "+38,000" }
    ],
    summary: "Masterfully paced executive talking head edit featuring dynamic multi-cam punch cuts, tailored kinetic subtitles, bespoke sound design, and cinematic teal-orange color grading.",
    details: "The raw footage consisted of 45 minutes of single-camera studio recording. We transformed it into an ultra-engaging 12-minute YouTube masterpiece. Cut out filler words, added subtle camera zooms to emphasize punchlines, created custom 2D lower thirds and infographic pop-ups, overlaid contextual B-roll footage, and mixed 6 layers of immersive audio.",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Adobe Audition"],
    previewType: "video",
    videoDuration: "00:45 Preview",
    videoTopic: "Talking Head Mastercut Demo",
    accentColor: "#f43f5e",
    themeGradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)",
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="stageLight" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stop-color="#312e81"/>
            <stop offset="100%" stop-color="#020617"/>
          </radialGradient>
        </defs>
        <rect width="600" height="400" fill="url(#stageLight)"/>
        
        <!-- Video Camera Viewfinder Frame -->
        <rect x="40" y="30" width="520" height="340" rx="12" fill="none" stroke="#f43f5e" stroke-width="2" opacity="0.6"/>
        <circle cx="65" cy="55" r="6" fill="#f43f5e"/>
        <text x="80" y="60" font-family="'Inter', sans-serif" font-size="12" font-weight="800" fill="#f43f5e" letter-spacing="2">REC [00:12:45:18]</text>
        <text x="530" y="60" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="end">4K 60FPS • LOG</text>
        
        <!-- Talking Head Silhouette with Studio Rim Light -->
        <g transform="translate(300, 200)">
          <!-- Rim Glow -->
          <circle cx="0" cy="-50" r="45" fill="#f43f5e" opacity="0.25"/>
          <path d="M-80,120 C-75,40 -40,10 0,10 C40,10 75,40 80,120 Z" fill="#1e1b4b"/>
          <circle cx="0" cy="-50" r="40" fill="#312e81"/>
          <!-- Studio light accent -->
          <path d="M-40,-50 A40,40 0 0,1 0,-90" fill="none" stroke="#38bdf8" stroke-width="4"/>
          <path d="M40,-50 A40,40 0 0,0 0,-90" fill="none" stroke="#f43f5e" stroke-width="4"/>
        </g>
        
        <!-- Dynamic Kinetic Captions Preview -->
        <rect x="160" y="295" width="280" height="40" rx="8" fill="#000000" opacity="0.85"/>
        <text x="300" y="322" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900" fill="#facc15" text-anchor="middle">
          "If you don't SCALE <tspan fill="#ffffff">systems,</tspan> you stall."
        </text>
        
        <!-- Big Play Button Overlay -->
        <circle cx="300" cy="180" r="38" fill="#f43f5e" opacity="0.9"/>
        <polygon points="292,165 316,180 292,195" fill="#ffffff"/>
      </svg>
    `
  },
  {
    id: "ve-motion-nexus",
    title: "Nexus AI: Product Launch Animation",
    subtitle: "High-Energy 2D Kinetic Motion Graphic Explainer",
    category: "video-editing",
    subCategory: "motion-graphic",
    categoryLabel: "Video Editing",
    subLabel: "Motion Graphic",
    featured: true,
    year: "2025",
    client: "Nexus Technologies Inc.",
    role: "Motion Designer & 2D Animator",
    tags: ["After Effects", "Cinema 4D Lite", "Motion Design", "Sound FX"],
    stats: [
      { label: "Product Hunt", value: "#1 Product of Day" },
      { label: "Social Video Views", value: "2.1M Plays" },
      { label: "Waitlist Signups", value: "45,000+" }
    ],
    summary: "60-second high-octane SaaS motion graphic explainer video combining fluid shape morphing, UI element interactions, kinetic typography, and precision audio synchronization.",
    details: "Built entirely in After Effects with Cinema 4D Lite integrations. Engineered seamless camera movements, custom easing curves for organic velocity, and synced over 40 distinct foley sound effects to provide maximum tactile punch for the startup's global product unveiling.",
    tools: ["Adobe After Effects", "Illustrator", "Audition"],
    previewType: "video",
    videoDuration: "01:00 Explainer",
    videoTopic: "Motion Graphic Explainer Showcase",
    accentColor: "#2563eb",
    themeGradient: "#2563eb",
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#07090e"/>
        <!-- Kinetic Floating UI Elements -->
        <g transform="translate(160, 60)">
          <!-- Main Card -->
          <rect x="0" y="20" width="280" height="170" rx="14" fill="#0c1017" stroke="#2563eb" stroke-width="2.5"/>
          <circle cx="25" cy="45" r="6" fill="#ef4444"/>
          <circle cx="45" cy="45" r="6" fill="#f59e0b"/>
          <circle cx="65" cy="45" r="6" fill="#10b981"/>
          
          <rect x="25" y="70" width="150" height="16" rx="4" fill="#2563eb"/>
          <rect x="25" y="96" width="230" height="8" rx="4" fill="#1e293b"/>
          <rect x="25" y="114" width="180" height="8" rx="4" fill="#1e293b"/>
          
          <!-- Isometric Mini Card 1 -->
          <rect x="180" y="-30" width="120" height="90" rx="10" fill="#131926" stroke="#3b82f6" stroke-width="2" transform="rotate(12)"/>
          <text x="210" y="10" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="800" fill="#ffffff" transform="rotate(12)">+94% SPEED</text>
        </g>
        
        <!-- Motion Speed Waves -->
        <path d="M50,290 C180,240 240,340 400,280 C480,250 520,310 560,280" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/>
        <path d="M70,320 C200,270 260,370 420,310 C500,280 540,340 580,310" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" opacity="0.6"/>

        <!-- Play Button -->
        <circle cx="300" cy="200" r="36" fill="#2563eb"/>
        <polygon points="292,185 316,200 292,215" fill="#ffffff"/>
        <text x="300" y="370" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="3">MOTION GRAPHIC REEL</text>
      </svg>
    `
  },
  {
    id: "ve-talkinghead-crypto",
    title: "The Future of Finance: Shorts & Reels",
    subtitle: "Fast-Paced Talking Head Vertical Content",
    category: "video-editing",
    subCategory: "talking-head",
    categoryLabel: "Video Editing",
    subLabel: "Talking Head",
    featured: false,
    year: "2024",
    client: "Future Finance Show",
    role: "Short-Form Video Editor",
    tags: ["Premiere Pro", "CapCut Pro", "Vertical Video", "Kinetic Subtitles"],
    stats: [
      { label: "Total Views", value: "8.5M Views" },
      { label: "Clips Produced", value: "45 Episodes" },
      { label: "Viral Hits (>500k)", value: "6 Videos" }
    ],
    summary: "Extracted golden nuggets from 1-hour podcast recordings into high-converting 60-second Reels & TikToks with animated emojis, sound effects, and zero dead air.",
    details: "Optimized specifically for 9:16 mobile consumption. Incorporated attention hooks in the first 2 seconds, synchronized word-by-word colorful subtitles, audio ducking, and seamless looping endings.",
    tools: ["Premiere Pro", "CapCut", "After Effects"],
    previewType: "video",
    videoDuration: "00:30 Reel",
    videoTopic: "Vertical Shorts Mastercut",
    accentColor: "#06b6d4",
    themeGradient: "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#082f49"/>
        <!-- 9:16 Phone Mockup -->
        <rect x="220" y="20" width="160" height="360" rx="20" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- Notch -->
        <rect x="265" y="26" width="70" height="12" rx="6" fill="#0284c7"/>
        <!-- Talking Head Visual in Phone -->
        <circle cx="300" cy="140" r="30" fill="#0284c7"/>
        <path d="M260,220 C260,180 340,180 340,220 Z" fill="#0369a1"/>
        <!-- Subtitles -->
        <rect x="235" y="240" width="130" height="24" rx="4" fill="#000000" opacity="0.8"/>
        <text x="300" y="256" font-family="'Inter', sans-serif" font-size="10" font-weight="900" fill="#38bdf8" text-anchor="middle">"NEVER SELL THE TOP"</text>
        <circle cx="300" cy="140" r="18" fill="#ffffff" opacity="0.9"/>
        <polygon points="296,132 308,140 296,148" fill="#0284c7"/>
      </svg>
    `
  },
  {
    id: "ve-motion-finflow",
    title: "FinFlow: 3D Logo Reveal & Broadcast Ident",
    subtitle: "Dynamic Kinetic Brand Motion Identity",
    category: "video-editing",
    subCategory: "motion-graphic",
    categoryLabel: "Video Editing",
    subLabel: "Motion Graphic",
    featured: false,
    year: "2025",
    client: "FinFlow Global Pay",
    role: "3D & Motion Graphic Designer",
    tags: ["After Effects", "Cinema 4D", "Logo Reveal", "Sound FX"],
    stats: [
      { label: "Global Reach", value: "Broadcast TV" },
      { label: "Frame Rate", value: "60 FPS 4K" },
      { label: "Render Passes", value: "Multi-layer EXR" }
    ],
    summary: "A high-precision, 10-second premium logo animation with fluid metallic reflections, particle disintegration, and customized audio brand sonic ident.",
    details: "Used across international TV commercials, website hero loaders, and keynote presentation intros. Engineered vector displacement maps and glass refraction shaders.",
    tools: ["After Effects", "Cinema 4D", "Logic Pro SFX"],
    previewType: "video",
    videoDuration: "00:15 Ident",
    videoTopic: "Brand Sonic & Motion Ident",
    accentColor: "#a855f7",
    themeGradient: "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)",
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#0f0728"/>
        <circle cx="300" cy="180" r="110" fill="#7e22ce" opacity="0.2"/>
        <g transform="translate(300, 180)">
          <!-- Glowing Vortex Lines -->
          <circle cx="0" cy="0" r="70" fill="none" stroke="#a855f7" stroke-width="3" stroke-dasharray="15 8"/>
          <circle cx="0" cy="0" r="50" fill="none" stroke="#c084fc" stroke-width="4" stroke-dasharray="25 10"/>
          <circle cx="0" cy="0" r="30" fill="none" stroke="#ffffff" stroke-width="2"/>
          <circle cx="0" cy="0" r="12" fill="#e9d5ff"/>
        </g>
        <text x="300" y="320" font-family="'Space Grotesk', sans-serif" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="6">FINFLOW</text>
        <text x="300" y="345" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#a855f7" text-anchor="middle" letter-spacing="4">GLOBAL PAY IDENT</text>
      </svg>
    `
  },

  // ==========================================
  // 4. DOCUMENT LAYOUT
  // ==========================================
  {
    id: "dl-apex-annual",
    title: "Apex Capital Annual ESG & Impact Report",
    subtitle: "56-Page Corporate Annual Report & Financial Tables",
    category: "document-layout",
    categoryLabel: "Document Layout",
    featured: true,
    year: "2025",
    client: "Apex Capital Partners",
    role: "Editorial Art Director & InDesign Specialist",
    tags: ["Adobe InDesign", "Acrobat Pro", "Annual Report", "Editorial Layout", "Typography"],
    stats: [
      { label: "Document Size", value: "56 Pages" },
      { label: "Chart Visualizations", value: "34 Tables" },
      { label: "Compliance", value: "Global GRI Standard" }
    ],
    summary: "Prestigious corporate publication blending strict financial data tables with clean modern Swiss grid typography, infographics, and interactive PDF bookmarking.",
    details: "Engineered an immaculate 12-column baseline grid in Adobe InDesign. Established hierarchical paragraph, character, and table styles for seamless multi-currency financial balance sheets. Delivered dual outputs: print-ready PDF with CMYK color management & bleed marks, alongside an optimized interactive screen PDF with clickable navigation tabs.",
    tools: ["Adobe InDesign", "Adobe Acrobat Pro", "Illustrator"],
    previewType: "document",
    docPages: [
      { pageNum: 1, title: "Cover & Table of Contents", note: "Minimalist corporate cover with spot varnish guidelines and executive summary." },
      { pageNum: 14, title: "Financial Highlights 2024-2025", note: "Clean 3-column table breakdown with custom zebra-striping and currency icons." },
      { pageNum: 28, title: "ESG & Carbon Offset Matrix", note: "Full-bleed infographic spread detailing sustainable investment allocation." },
      { pageNum: 42, title: "Leadership & Governance", note: "Executive portrait layout with dual-language bios and corporate credentials." }
    ],
    accentColor: "#0284c7",
    themeGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#0f172a"/>
        <!-- 2-Page Editorial Spread -->
        <g transform="translate(60, 40)">
          <!-- Left Page -->
          <rect x="0" y="0" width="230" height="320" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
          <!-- Grid mockup -->
          <text x="25" y="45" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="900" fill="#0f172a">03. FINANCIAL SUMMARY</text>
          <line x1="25" y1="55" x2="205" y2="55" stroke="#0284c7" stroke-width="2"/>
          
          <rect x="25" y="75" width="180" height="50" rx="4" fill="#f0f9ff"/>
          <text x="35" y="95" font-family="'Inter', sans-serif" font-size="10" font-weight="700" fill="#0369a1">TOTAL ASSETS UNDER MANAGEMENT</text>
          <text x="35" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#0f172a">$4.28 BILLION USD</text>
          
          <!-- Column paragraphs -->
          <rect x="25" y="140" width="85" height="4" fill="#94a3b8"/>
          <rect x="25" y="150" width="85" height="4" fill="#cbd5e1"/>
          <rect x="25" y="160" width="70" height="4" fill="#cbd5e1"/>
          <rect x="25" y="170" width="85" height="4" fill="#cbd5e1"/>
          <rect x="25" y="180" width="60" height="4" fill="#cbd5e1"/>

          <rect x="120" y="140" width="85" height="4" fill="#94a3b8"/>
          <rect x="120" y="150" width="85" height="4" fill="#cbd5e1"/>
          <rect x="120" y="160" width="85" height="4" fill="#cbd5e1"/>
          <rect x="120" y="170" width="75" height="4" fill="#cbd5e1"/>

          <!-- Mini chart -->
          <rect x="25" y="210" width="180" height="85" rx="4" fill="#f8fafc" stroke="#e2e8f0"/>
          <path d="M40,270 L80,250 L120,260 L160,230 L190,220" fill="none" stroke="#0284c7" stroke-width="2.5"/>
          <circle cx="190" cy="220" r="4" fill="#0284c7"/>
          
          <!-- Right Page -->
          <rect x="250" y="0" width="230" height="320" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
          <!-- Image Placeholder -->
          <rect x="270" y="25" width="190" height="130" rx="4" fill="#0f172a"/>
          <text x="365" y="95" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">EDITORIAL PHOTO SPREAD</text>
          
          <rect x="270" y="175" width="190" height="6" fill="#0f172a"/>
          <rect x="270" y="190" width="190" height="4" fill="#64748b"/>
          <rect x="270" y="200" width="170" height="4" fill="#94a3b8"/>
          <rect x="270" y="210" width="190" height="4" fill="#cbd5e1"/>
          <rect x="270" y="220" width="140" height="4" fill="#cbd5e1"/>

          <rect x="270" y="250" width="190" height="45" rx="4" fill="#e0f2fe"/>
          <text x="285" y="278" font-family="'Inter', sans-serif" font-size="10" font-weight="700" fill="#0369a1">"Commitment to transparent governance."</text>
        </g>
      </svg>
    `
  },
  {
    id: "dl-creator-playbook",
    title: "The Creator Playbook: 0 to 100K",
    subtitle: "120-Page Comprehensive Digital E-Book & Lookbook",
    category: "document-layout",
    categoryLabel: "Document Layout",
    featured: false,
    year: "2024",
    client: "DesignScale Academy",
    role: "Editorial Designer",
    tags: ["InDesign", "Figma", "E-Book", "Editorial Typography"],
    stats: [
      { label: "E-Book Downloads", value: "35,000+" },
      { label: "Reader Rating", value: "4.9 / 5.0" },
      { label: "Pages Formatted", value: "120 Pages" }
    ],
    summary: "Clean editorial layout with modular typography, standout pull quotes, customized chapter divider spreads, and clickable interactive table of contents for e-readers.",
    details: "Designed to deliver frictionless reading on iPad, Kindle, and Desktop displays. Includes color-coded chapter badges, highlighted actionable callout boxes, and full-bleed visual summaries.",
    tools: ["Adobe InDesign", "Illustrator", "Photoshop"],
    previewType: "document",
    docPages: [
      { pageNum: 1, title: "Cover Page & Typography Hierarchy", note: "Bold, modern dark-themed cover with neon orange focal accent." },
      { pageNum: 25, title: "Chapter 3: Content Architecture", note: "Structured modular layout with step-by-step framework diagrams." }
    ],
    accentColor: "#ea580c",
    themeGradient: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#18181b"/>
        <!-- E-book Tablet Mockup -->
        <g transform="translate(160, 30)">
          <rect x="0" y="0" width="280" height="340" rx="16" fill="#27272a" stroke="#52525b" stroke-width="2"/>
          <rect x="15" y="15" width="250" height="310" rx="8" fill="#fafafa"/>
          
          <text x="35" y="55" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="900" fill="#ea580c">CHAPTER 04</text>
          <text x="35" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#18181b">THE HOOK FORMULA</text>
          <line x1="35" y1="92" x2="245" y2="92" stroke="#ea580c" stroke-width="2"/>
          
          <rect x="35" y="115" width="210" height="50" rx="6" fill="#fff7ed" stroke="#fed7aa"/>
          <text x="45" y="138" font-family="'Inter', sans-serif" font-size="10" font-weight="700" fill="#c2410c">💡 CORE PRINCIPLE</text>
          <text x="45" y="154" font-family="'Inter', sans-serif" font-size="9" fill="#7c2d12">Capture intent within the first 3 seconds.</text>
          
          <!-- Text lines -->
          <rect x="35" y="185" width="210" height="5" fill="#a1a1aa"/>
          <rect x="35" y="197" width="190" height="5" fill="#d4d4d8"/>
          <rect x="35" y="209" width="205" height="5" fill="#d4d4d8"/>
          <rect x="35" y="221" width="160" height="5" fill="#d4d4d8"/>
          <rect x="35" y="233" width="200" height="5" fill="#d4d4d8"/>
          
          <text x="140" y="305" font-family="'Inter', sans-serif" font-size="10" font-weight="600" fill="#71717a" text-anchor="middle">PAGE 42 OF 120</text>
        </g>
      </svg>
    `
  },
  {
    id: "dl-horizon-pitch",
    title: "Series-A Investor Pitch Deck: Horizon",
    subtitle: "22-Slide High-Stakes Venture Presentation Deck",
    category: "document-layout",
    categoryLabel: "Document Layout",
    featured: false,
    year: "2025",
    client: "Horizon Robotics",
    role: "Presentation & Information Designer",
    tags: ["Figma", "InDesign", "Pitch Deck", "Data Visualization"],
    stats: [
      { label: "Funding Secured", value: "$14.5M Series-A" },
      { label: "Slide Deck Count", value: "22 Custom Slides" },
      { label: "Lead Investor", value: "Top Tier VC" }
    ],
    summary: "Visual storytelling deck translating deep autonomous robotics tech and TAM forecasts into an irresistible investor narrative.",
    details: "Created bespoke 16:9 slides with clear visual hierarchy, product architecture flowcharts, unit economics models, and founder credentials.",
    tools: ["Figma", "Adobe InDesign", "Illustrator"],
    previewType: "document",
    docPages: [
      { pageNum: 1, title: "The Problem & Market Opportunity", note: "High-contrast visual deck with key metrics and customer pain points." }
    ],
    accentColor: "#6366f1",
    themeGradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
    svgIllustration: `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#090d16"/>
        <!-- 16:9 Slide Presentation Frame -->
        <g transform="translate(60, 45)">
          <rect x="0" y="0" width="480" height="290" rx="10" fill="#0f172a" stroke="#334155" stroke-width="2"/>
          <text x="35" y="50" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="800" fill="#818cf8" letter-spacing="2">05 / MARKET TRACTION</text>
          <text x="35" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#f8fafc">Growing 24% MoM in Enterprise Deployments</text>
          
          <!-- 3 metric cards -->
          <rect x="35" y="115" width="125" height="110" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1"/>
          <text x="50" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#38bdf8">$3.4M</text>
          <text x="50" y="175" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#94a3b8">Contracted ARR</text>
          <text x="50" y="195" font-family="'Inter', sans-serif" font-size="10" font-weight="700" fill="#4ade80">+145% YoY</text>

          <rect x="175" y="115" width="125" height="110" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1"/>
          <text x="190" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#a855f7">140+</text>
          <text x="190" y="175" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#94a3b8">Enterprise Clients</text>
          <text x="190" y="195" font-family="'Inter', sans-serif" font-size="10" font-weight="700" fill="#4ade80">Zero Churn</text>

          <rect x="315" y="115" width="130" height="110" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1"/>
          <text x="330" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#34d399">99.4%</text>
          <text x="330" y="175" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#94a3b8">Operational Uptime</text>
          <text x="330" y="195" font-family="'Inter', sans-serif" font-size="10" font-weight="700" fill="#38bdf8">Industry Best</text>
        </g>
      </svg>
    `
  }
];

// Profile details
const PROFILE_DATA = {
  name: "Imam Teguh",
  title: "Multi-Disciplinary Visual Designer & Video Editor",
  headline: "Crafting High-Converting Visuals, Dynamic Motion & Polished Layouts",
  bio: "Creative professional with 5+ years of experience transforming complex ideas into captivating digital stories. Specializing in high-impact Graphic Design, scroll-stopping Social Media Posts, dynamic Video Editing (Talking Head & Motion Graphics), and precision publication Document Layouts.",
  stats: [
    { number: "150+", label: "Projects Completed" },
    { number: "5+ Years", label: "Creative Experience" },
    { number: "25M+", label: "Cumulative Views" },
    { number: "99%", label: "Client Satisfaction" }
  ],
  skills: [
    {
      category: "Video Editing & Motion",
      items: [
        { name: "Adobe Premiere Pro", level: 98, desc: "Talking head, pacing, multi-cam, sound design" },
        { name: "Adobe After Effects", level: 95, desc: "2D motion graphics, kinetic typography, VFX" },
        { name: "DaVinci Resolve", level: 88, desc: "Color grading, tone mapping, audio sync" },
        { name: "CapCut Pro", level: 96, desc: "Fast-paced TikTok & Reels vertical content" },
        { name: "Sound Design & SFX", level: 90, desc: "Foley, audio ducking, equalization" }
      ]
    },
    {
      category: "Graphic Design & Social Media",
      items: [
        { name: "Adobe Illustrator", level: 96, desc: "Vector systems, logos, icon sets, illustrations" },
        { name: "Adobe Photoshop", level: 98, desc: "Photo retouching, composites, key visuals" },
        { name: "Figma", level: 92, desc: "Social carousels, UI elements, presentation decks" },
        { name: "Canva Pro", level: 98, desc: "Rapid brand templates, social feed packs" }
      ]
    },
    {
      category: "Document & Editorial Layout",
      items: [
        { name: "Adobe InDesign", level: 95, desc: "Master pages, paragraph styles, annual reports, e-books" },
        { name: "Adobe Acrobat Pro", level: 92, desc: "Prepress verification, interactive form fields, bookmarks" },
        { name: "Presentation Decks", level: 94, desc: "Investor pitch decks, Keynote, Google Slides" }
      ]
    }
  ],
  testimonials: [
    {
      quote: "Imam turned our raw 45-minute founder recordings into viral YouTube masterclasses. The pacing, kinetic text, and B-roll inserts are absolute tier-one quality. Our channel grew by 40K subscribers in 3 months.",
      client: "Alex Vance",
      role: "Venture Partner & Tech Founder",
      avatar: "AV",
      project: "Talking Head YouTube Series"
    },
    {
      quote: "The brand identity and annual ESG report Imam designed for us blew our stakeholders away. It's rare to find a creative who masters both technical document layout and modern brand aesthetics.",
      client: "Elena Rostova",
      role: "Head of Marketing, Apex Capital",
      avatar: "ER",
      project: "Corporate ESG Annual Report"
    },
    {
      quote: "Our Instagram carousels and launch motion graphics designed by Imam consistently pull over 10% engagement rate. He understands visual hooks and algorithm retention like no other.",
      client: "Marcus Chen",
      role: "Growth Lead, FinScale",
      avatar: "MC",
      project: "Social Media Campaign & Explainer"
    }
  ],
  services: [
    {
      icon: "palette",
      title: "Graphic Design",
      desc: "Brand identity systems, logo design, marketing collateral, posters, merchandise, and vector illustrations."
    },
    {
      icon: "smartphone",
      title: "Social Media Post",
      desc: "High-retention Instagram carousels, 9-grid feed aesthetics, story campaigns, and B2B LinkedIn infographics."
    },
    {
      icon: "film",
      title: "Video Editing (Talking Head)",
      desc: "High-retention podcast and founder editing, dynamic multi-cam cuts, kinetic subtitles, sound effects, and color grading."
    },
    {
      icon: "sparkles",
      title: "Motion Graphics",
      desc: "2D kinetic animations, SaaS product explainers, animated logo reveals, UI mockups, and promo teasers."
    },
    {
      icon: "book-open",
      title: "Document Layout",
      desc: "Annual corporate reports, e-books, whitepapers, investor pitch decks, product catalogs, and print prepress."
    }
  ]
};
