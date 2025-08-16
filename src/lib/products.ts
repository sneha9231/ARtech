export interface ProductImage {
  id: string;
  src: string;
  alt: string;
  isPrimary?: boolean;
}

export interface ProductSpecification {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: 'fiber-laser' | 'co2-laser' | 'metal-cutting' | 'engraving' | 'custom';
  images: ProductImage[];
  specifications: ProductSpecification[];
  features: string[];
  applications: string[];
  priceRange?: string;
  leadTime?: string;
  certifications: string[];
  isFeatured?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "fiber-laser-3000w",
    name: "Fiber Laser Cutting Machine 3000W",
    shortDescription: "High-speed fiber laser technology for precision cutting of metals up to 25mm thickness.",
    longDescription: "Our flagship 3000W fiber laser cutting machine delivers exceptional performance for industrial applications. Built with advanced fiber laser technology, this machine provides superior cutting quality, high speed, and low maintenance requirements. Perfect for automotive, aerospace, and general manufacturing industries.",
    category: "fiber-laser",
    images: [
      {
        id: "fl-main",
        src: "/products/Laser-Belding/Laser Belding machine 1.jpeg",
        alt: "Fiber Laser Cutting Machine 3000W - Main View",
        isPrimary: true
      },
      {
        id: "fl-control",
        src: "/products/Laser-Belding/Laser Belding machine 2.jpeg",
        alt: "Advanced Control Panel with Touch Screen Interface"
      },
      {
        id: "fl-cutting",
        src: "/products/fiber-laser-3000w/cutting-process.jpg",
        alt: "Laser cutting process in action showing precision cuts"
      },
      {
        id: "fl-detail",
        src: "/products/fiber-laser-3000w/machine-detail.jpg",
        alt: "Detailed view of laser head and cutting mechanism"
      }
    ],
    specifications: [
      { name: "Laser Power", value: "3000W" },
      { name: "Cutting Thickness", value: "Up to 25mm (steel)" },
      { name: "Working Area", value: "1500 x 3000mm" },
      { name: "Cutting Speed", value: "Up to 30m/min (1mm steel)" },
      { name: "Positioning Accuracy", value: "±0.05mm" },
      { name: "Laser Source", value: "IPG Fiber Laser" },
      { name: "Cooling System", value: "Industrial Chiller" }
    ],
    features: [
      "High-speed fiber laser technology",
      "Advanced cutting head with automatic focus",
      "Industrial-grade linear guides",
      "Real-time monitoring system",
      "Automatic lubrication system",
      "Safety interlocks and emergency stops"
    ],
    applications: [
      "Automotive parts manufacturing",
      "Aerospace components",
      "Metal furniture production",
      "Industrial machinery parts",
      "Construction equipment"
    ],
    priceRange: "$150,000 - $200,000",
    leadTime: "8-12 weeks",
    certifications: ["CE", "ISO 9001", "Laser Safety Class 1"],
    isFeatured: true,
    isNew: false
  },
  {
    id: "co2-laser-150w",
    name: "CO2 Laser Cutting System 150W",
    shortDescription: "Versatile CO2 laser system for cutting non-metals with exceptional edge quality.",
    longDescription: "The 150W CO2 laser cutting system is designed for precision cutting of non-metallic materials. This versatile machine handles acrylic, wood, fabric, leather, and many other materials with clean, precise edges. Ideal for signage, packaging, textile, and craft industries.",
    category: "co2-laser",
    images: [
      {
        id: "co2-main",
        src: "/products/co2-laser-150w/main.jpg",
        alt: "CO2 Laser Cutting System 150W - Complete Setup",
        isPrimary: true
      },
      {
        id: "co2-work",
        src: "/products/co2-laser-150w/working-area.jpg",
        alt: "Large working area showing material placement"
      },
      {
        id: "co2-cut",
        src: "/products/co2-laser-150w/cut-quality.jpg",
        alt: "Close-up of clean cut edges on acrylic material"
      },
      {
        id: "co2-control",
        src: "/products/co2-laser-150w/software-interface.jpg",
        alt: "User-friendly software interface for design and control"
      }
    ],
    specifications: [
      { name: "Laser Power", value: "150W" },
      { name: "Cutting Thickness", value: "Up to 20mm (acrylic)" },
      { name: "Working Area", value: "1200 x 800mm" },
      { name: "Cutting Speed", value: "Up to 500mm/s" },
      { name: "Engraving Speed", value: "Up to 1000mm/s" },
      { name: "Laser Tube", value: "Sealed CO2 Glass Tube" },
      { name: "Cooling", value: "Air-cooled" }
    ],
    features: [
      "Multi-material cutting capability",
      "Clean, precise edges",
      "User-friendly software interface",
      "Automatic height adjustment",
      "Emergency stop system",
      "Compact footprint design"
    ],
    applications: [
      "Signage and displays",
      "Packaging and labels",
      "Textile and leather cutting",
      "Wood and acrylic fabrication",
      "Educational and hobby use"
    ],
    priceRange: "$8,000 - $15,000",
    leadTime: "4-6 weeks",
    certifications: ["CE", "FDA Class 1"],
    isFeatured: false,
    isNew: true
  },
  {
    id: "metal-cutting-6000w",
    name: "Heavy-Duty Metal Cutting Machine 6000W",
    shortDescription: "Industrial-grade laser cutting solution for thick metal sheets and continuous operation.",
    longDescription: "Built for the most demanding industrial environments, our 6000W metal cutting machine handles thick metal sheets with exceptional precision. Designed for 24/7 operation, this machine features advanced automation, robust construction, and comprehensive safety systems.",
    category: "metal-cutting",
    images: [
      {
        id: "mc-main",
        src: "/products/metal-cutting-6000w/main.jpg",
        alt: "Heavy-Duty Metal Cutting Machine 6000W - Industrial Setup",
        isPrimary: true
      },
      {
        id: "mc-auto",
        src: "/products/metal-cutting-6000w/automation.jpg",
        alt: "Automated material handling and loading system"
      },
      {
        id: "mc-thick",
        src: "/products/metal-cutting-6000w/thick-cutting.jpg",
        alt: "Cutting thick metal sheets showing power and precision"
      },
      {
        id: "mc-safety",
        src: "/products/metal-cutting-6000w/safety-features.jpg",
        alt: "Advanced safety systems and monitoring equipment"
      }
    ],
    specifications: [
      { name: "Laser Power", value: "6000W" },
      { name: "Cutting Thickness", value: "Up to 50mm (steel)" },
      { name: "Working Area", value: "2000 x 6000mm" },
      { name: "Cutting Speed", value: "Up to 25m/min (1mm steel)" },
      { name: "Positioning Accuracy", value: "±0.03mm" },
      { name: "Laser Source", value: "High-Power Fiber Laser" },
      { name: "Cooling System", value: "Industrial Chiller + Air Cooling" }
    ],
    features: [
      "Heavy-duty construction",
      "24/7 operation capability",
      "Advanced automation systems",
      "Real-time quality monitoring",
      "Comprehensive safety features",
      "Remote monitoring and diagnostics"
    ],
    applications: [
      "Shipbuilding and marine",
      "Heavy machinery manufacturing",
      "Construction equipment",
      "Oil and gas industry",
      "Large-scale metal fabrication"
    ],
    priceRange: "$400,000 - $600,000",
    leadTime: "12-16 weeks",
    certifications: ["CE", "ISO 9001", "Laser Safety Class 1", "ATEX"],
    isFeatured: true,
    isNew: false
  },
  {
    id: "precision-engraver-50w",
    name: "Precision Laser Engraver 50W",
    shortDescription: "High-precision laser engraving system for detailed marking and etching applications.",
    longDescription: "Our 50W precision laser engraver delivers micron-level accuracy for the most demanding engraving applications. Whether you need to mark serial numbers, create intricate designs, or etch detailed patterns, this machine provides exceptional quality and repeatability.",
    category: "engraving",
    images: [
      {
        id: "eng-main",
        src: "/products/precision-engraver-50w/main.jpg",
        alt: "Precision Laser Engraver 50W - Professional Setup",
        isPrimary: true
      },
      {
        id: "eng-detail",
        src: "/products/precision-engraver-50w/engraving-detail.jpg",
        alt: "Close-up of detailed engraving showing fine lines and precision"
      },
      { id: "eng-work",
        src: "/products/precision-engraver-50w/working-process.jpg",
        alt: "Engraving process in action with real-time monitoring"
      },
      {
        id: "eng-software",
        src: "/products/precision-engraver-50w/software-interface.jpg",
        alt: "Advanced software interface for design and engraving control"
      }
    ],
    specifications: [
      { name: "Laser Power", value: "50W" },
      { name: "Engraving Area", value: "300 x 300mm" },
      { name: "Engraving Depth", value: "Up to 2mm" },
      { name: "Engraving Speed", value: "Up to 2000mm/s" },
      { name: "Positioning Accuracy", value: "±0.01mm" },
      { name: "Laser Type", value: "Fiber Laser" },
      { name: "Cooling", value: "Air-cooled" }
    ],
    features: [
      "Micron-level precision",
      "Multi-material compatibility",
      "Advanced software control",
      "Real-time depth monitoring",
      "Automatic focus adjustment",
      "High-speed engraving capability"
    ],
    applications: [
      "Jewelry and watch engraving",
      "Medical device marking",
      "Electronics component marking",
      "Aerospace part identification",
      "Fine art and crafts"
    ],
    priceRange: "$25,000 - $40,000",
    leadTime: "6-8 weeks",
    certifications: ["CE", "ISO 9001", "Laser Safety Class 1"],
    isFeatured: false,
    isNew: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};
