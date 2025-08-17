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
  category: 'fiber-laser' | 'co2-laser' | 'cnc-bending' | 'tube-cutting' | 'laser-welding';
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
    id: "fiber-laser-double-pallet",
    name: "Fiber Laser Cutting Machine - Double Pallet",
    shortDescription: "High-speed fiber laser cutting machine with double pallet system for maximum productivity.",
    longDescription: "Our advanced fiber laser cutting machine features a double pallet system that maximizes production efficiency. Built with cutting-edge fiber laser technology, this machine delivers exceptional cutting quality, high speed, and minimal maintenance requirements. Perfect for industrial manufacturing, automotive parts, and metal fabrication industries.",
    category: "fiber-laser",
    images: [
      {
        id: "fiber-main",
        src: "/products/Fiber/Fiber laser cutting machine double pallet.jpeg",
        alt: "Fiber Laser Cutting Machine with Double Pallet System",
        isPrimary: true
      }
    ],
    specifications: [
      { name: "Laser Power", value: "2000W - 6000W" },
      { name: "Cutting Thickness", value: "Up to 20mm (steel)" },
      { name: "Working Area", value: "1500 x 3000mm" },
      { name: "Cutting Speed", value: "Up to 25m/min (1mm steel)" },
      { name: "Positioning Accuracy", value: "±0.05mm" },
      { name: "Laser Source", value: "IPG Fiber Laser" },
      { name: "Pallet System", value: "Double Pallet" }
    ],
    features: [
      "Double pallet system for continuous operation",
      "High-speed fiber laser technology",
      "Advanced cutting head with automatic focus",
      "Industrial-grade linear guides",
      "Real-time monitoring system",
      "Safety interlocks and emergency stops"
    ],
    applications: [
      "Automotive parts manufacturing",
      "Metal furniture production",
      "Industrial machinery parts",
      "Construction equipment",
      "General metal fabrication"
    ],
    priceRange: "₹25,00,000 - ₹45,00,000",
    leadTime: "8-12 weeks",
    certifications: ["CE", "ISO 9001", "Laser Safety Class 1"],
    isFeatured: true,
    isNew: false
  },
  {
    id: "co2-laser-cutting",
    name: "CO2 Laser Cutting Machine",
    shortDescription: "Versatile CO2 laser system for cutting non-metals with exceptional edge quality.",
    longDescription: "Our CO2 laser cutting machine is designed for precision cutting of non-metallic materials. This versatile system handles acrylic, wood, fabric, leather, and many other materials with clean, precise edges. Ideal for signage, packaging, textile, and craft industries requiring high-quality cutting solutions.",
    category: "co2-laser",
    images: [
      {
        id: "co2-main",
        src: "/products/CO/CO2 laser machine.jpeg",
        alt: "CO2 Laser Cutting Machine - Professional Setup",
        isPrimary: true
      }
    ],
    specifications: [
      { name: "Laser Power", value: "100W - 150W" },
      { name: "Cutting Thickness", value: "Up to 15mm (acrylic)" },
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
    priceRange: "₹3,50,000 - ₹8,00,000",
    leadTime: "4-6 weeks",
    certifications: ["CE", "FDA Class 1"],
    isFeatured: false,
    isNew: true
  },
  {
    id: "cnc-bending-machine",
    name: "CNC Bending Machine",
    shortDescription: "Precision CNC-controlled bending machine for accurate metal forming operations.",
    longDescription: "Our CNC bending machine delivers exceptional precision and repeatability for metal forming operations. Equipped with advanced CNC controls, this machine ensures accurate bending angles and consistent results. Perfect for manufacturing industries requiring high-quality metal forming solutions.",
    category: "cnc-bending",
    images: [
      {
        id: "cnc-main",
        src: "/products/CNC/CNC bending machine.jpeg",
        alt: "CNC Bending Machine - Professional Metal Forming Equipment",
        isPrimary: true
      }
    ],
    specifications: [
      { name: "Bending Capacity", value: "Up to 6mm x 3000mm" },
      { name: "Bending Length", value: "3000mm" },
      { name: "Bending Accuracy", value: "±0.5°" },
      { name: "Control System", value: "Advanced CNC" },
      { name: "Back Gauge", value: "CNC Controlled" },
      { name: "Machine Weight", value: "Approx. 8000kg" }
    ],
    features: [
      "Advanced CNC control system",
      "High precision back gauge",
      "Automatic tool positioning",
      "Digital angle display",
      "Safety protection systems",
      "Easy operation interface"
    ],
    applications: [
      "Sheet metal fabrication",
      "Automotive parts manufacturing",
      "Construction equipment",
      "Industrial machinery",
      "Metal furniture production"
    ],
    priceRange: "₹15,00,000 - ₹25,00,000",
    leadTime: "6-8 weeks",
    certifications: ["CE", "ISO 9001"],
    isFeatured: true,
    isNew: false
  },
  {
    id: "tube-cutting-machine",
    name: "Tube Cutting Machine",
    shortDescription: "Specialized machine for precise cutting of various tube materials and profiles.",
    longDescription: "Our tube cutting machine is designed for high-precision cutting of various tube materials including steel, aluminum, and other metals. This specialized equipment ensures clean cuts and maintains tube integrity for professional fabrication applications.",
    category: "tube-cutting",
    images: [
      {
        id: "tube-main",
        src: "/products/Tube/tube cutting.jpeg",
        alt: "Tube Cutting Machine - Professional Tube Processing Equipment",
        isPrimary: true
      }
    ],
    specifications: [
      { name: "Tube Diameter", value: "10mm - 150mm" },
      { name: "Tube Length", value: "6000mm" },
      { name: "Cutting Accuracy", value: "±0.1mm" },
      { name: "Cutting Speed", value: "Variable speed control" },
      { name: "Material Types", value: "Steel, Aluminum, Stainless Steel" },
      { name: "Control System", value: "Semi-automatic" }
    ],
    features: [
      "Precise tube cutting capability",
      "Variable speed control",
      "Multiple material compatibility",
      "Easy material loading",
      "Safety protection systems",
      "Low maintenance design"
    ],
    applications: [
      "Pipe manufacturing",
      "Automotive exhaust systems",
      "Construction scaffolding",
      "Industrial equipment",
      "Metal furniture frames"
    ],
    priceRange: "₹8,00,000 - ₹15,00,000",
    leadTime: "4-6 weeks",
    certifications: ["CE", "ISO 9001"],
    isFeatured: false,
    isNew: true
  },
  {
    id: "laser-welding-machine",
    name: "Laser Welding Machine",
    shortDescription: "Advanced laser welding system for precision joining of various materials.",
    longDescription: "Our laser welding machine utilizes cutting-edge laser technology to provide precise, clean welds on various materials. This advanced system offers superior weld quality, minimal heat distortion, and high processing speeds. Ideal for applications requiring precision welding and minimal post-processing.",
    category: "laser-welding",
    images: [
      {
        id: "welding-main",
        src: "/products/Laser-Belding/Laser Belding machine 1.jpeg",
        alt: "Laser Welding Machine - Advanced Welding System",
        isPrimary: true
      },
      {
        id: "welding-detail",
        src: "/products/Laser-Belding/Laser Belding machine 2.jpeg",
        alt: "Laser Welding Machine - Detailed View of Welding Head"
      }
    ],
    specifications: [
      { name: "Laser Power", value: "1000W - 3000W" },
      { name: "Welding Depth", value: "Up to 8mm" },
      { name: "Welding Speed", value: "Up to 10m/min" },
      { name: "Positioning Accuracy", value: "±0.02mm" },
      { name: "Laser Type", value: "Fiber Laser" },
      { name: "Cooling System", value: "Industrial Chiller" }
    ],
    features: [
      "High precision laser welding",
      "Minimal heat distortion",
      "Advanced control system",
      "Real-time monitoring",
      "Safety protection systems",
      "Easy operation interface"
    ],
    applications: [
      "Automotive manufacturing",
      "Aerospace components",
      "Medical device production",
      "Electronics manufacturing",
      "Precision engineering"
    ],
    priceRange: "₹35,00,000 - ₹60,00,000",
    leadTime: "10-14 weeks",
    certifications: ["CE", "ISO 9001", "Laser Safety Class 1"],
    isFeatured: true,
    isNew: false
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
