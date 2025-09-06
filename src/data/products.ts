import truckImg from "@/assets/truck.jpeg";
import industrialImg from "@/assets/industrial.png";
import precisionImg from "@/assets/precision.jpg";
import swim from "@/assets/swim.webp";
import Armor from "@/assets/Armor.webp";
import Mettler from "@/assets/toledo.png";
import mettlerweighbridge from "@/assets/mettler.webp";
import cardinal805 from "@/assets/cardinal 805.webp";
import cardinal225 from "@/assets/cardinal225.webp";
import cardinal205 from "@/assets/cardinal205.webp";
import ac100k from "@/assets/ac100k.webp";
import dc100k from "@/assets/dc100k.webp";
import bx66 from "@/assets/bx66.webp";
import bx30 from "@/assets/bx30.webp";
import bx22 from "@/assets/bx22.webp";
import br200 from "@/assets/br200s.webp";
import bt604 from "@/assets/bt604.webp";
import ft112 from "@/assets/ft-112.webp";
import ft111 from "@/assets/ft-111.webp";
import ft113 from "@/assets/ft-113.webp";
import RC3 from "@/assets/rc3.webp";
import ub6 from "@/assets/ub6.webp";
import slb from "@/assets/slb.webp";
import SB14 from "@/assets/sb14.webp";
import utc740 from "@/assets/uticell1.webp";
import uticell460 from "@/assets/uticell460.webp";
import as220 from "@/assets/as220.webp";
import as82 from "@/assets/as82.webp";
import ps1000 from "@/assets/radwag.webp";
import ps3000 from "@/assets/radwagps3000.webp";

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  applications: string[];
  image: string;
  price?: string;
  hasDetails: boolean;
  externalUrl?: string;
  attachmentUrl?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  img: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "truck-scales",
    name: "Truck Scale Products",
    description:
      "Heavy-duty truck scales and weighbridges for commercial vehicle weighing",
    img: truckImg,
    products: [
      {
        id: "cardinal-swim",
        name: "SWIM Slow-Speed In-Motion Vehicle Scale",
        category: "Truck Scales",
        brand: "Cardinal",
        description:
          "Cardinal Scale's SWIM slow-speed in-motion vehicle scale offers the ideal combination of accuracy, space, speed, and economical price point for weighing fully-loaded semi tractor trailers.",
        features: [
          "Ideal combination of accuracy and speed",
          "Cost-effective means of measuring truck axle and gross weights",
          "Occupies only a small fraction of the space needed for a full-length static truck scale",
          "Perfect for ports, freight terminals, and commercial facilities",
          "Uses four Cardinal SCA Series Stainless Steel Compression Load Cells",
          "Single weighbridge contained in a solid lower frame",
        ],
        specifications: {
          Type: "Slow-Speed In-Motion",
          "Load Cells": "4 x Cardinal SCA Series Stainless Steel Compression",
          Platform: "Single weighbridge in solid lower frame",
          Application: "Semi tractor trailers, commercial vehicles",
        },
        applications: [
          "Ports and freight terminals",
          "Commercial vehicle weighing",
          "Traffic flow management",
          "Axle and gross weight measurement",
        ],
        image: swim,
        hasDetails: true,
        externalUrl:
          "https://cardinalscale.com/product/product-overview/Truck-Scales/SWIM-Slow-Speed-In-Motion-Scales",
        attachmentUrl: "/attachments/AramexCoverLetter.pdf",
      },
      {
        id: "cardinal-armor",
        name: "ARMOR® Series Truck Scales",
        category: "Truck Scales",
        brand: "Cardinal",
        description:
          "ARMOR® series truck scales with steel deck construction and Digital SmartCells for superior durability and accuracy.",
        features: [
          "Steel deck construction for maximum durability",
          "Digital SmartCell technology",
          "Superior accuracy and reliability",
          "Weatherproof design",
          "Advanced load cell technology",
          "Easy installation and maintenance",
        ],
        specifications: {
          Type: "Static Truck Scale",
          "Deck Material": "Steel",
          Technology: "Digital SmartCells",
          Design: "Weatherproof construction",
        },
        applications: [
          "Commercial weighing facilities",
          "Industrial applications",
          "Heavy-duty vehicle weighing",
          "Trade and commerce",
        ],
        image: Armor,
        hasDetails: true,
        externalUrl:
          "https://cardinalscale.com/product/product-overview/Truck-Scales/ARMOR-Steel-Deck-Truck-Scales-with-Digital-SmartCells",
        attachmentUrl: "",
      },
      {
        id: "mettler-vts-202-203",
        name: "VTS 202/203",
        category: "Weighbridges",
        brand: "Mettler Toledo",
        description:
          "Mettler Toledo VTS 202/203 weighbridge systems for reliable and accurate truck weighing applications.",
        features: [
          "Rugged and reliable construction",
          "Critical for weighing bulk goods",
          "Industrial scale capability",
          "High accuracy measurement",
          "Durable design for heavy use",
          "Professional weighbridge solution",
        ],
        specifications: {
          Type: "Weighbridge System",
          Model: "VTS 202/203",
          Application: "Truck and vehicle weighing",
          Capacity: "Heavy-duty commercial use",
        },
        applications: [
          "Bulk goods weighing",
          "Commercial truck weighing",
          "Industrial facilities",
          "Trade and logistics",
        ],
        image: mettlerweighbridge,
        hasDetails: true,
        externalUrl:
          "https://www.mt.com/int/en/home/products/Transport_and_Logistics_Solutions/weighbridge-and-rail-scale-systems/road-bridge/VTS200.html",
      attachmentUrl: "",
        },
    ],
  },
  {
    id: "industrial-scales",
    name: "Industrial Scales Products",
    description:
      "Industrial weighing equipment including indicators and load cells",
    img: industrialImg,
    products: [
      // Cardinal Indicators
      {
        id: "cardinal-805-spectrum",
        name: "805 Spectrum",
        category: "Indicators",
        brand: "Cardinal",
        description:
          "Advanced digital weighing indicator with comprehensive features for industrial applications.",
        features: [
          "Digital display technology",
          "Advanced weighing algorithms",
          "Industrial-grade construction",
          "Multiple communication options",
          "User-friendly interface",
          "Reliable performance",
        ],
        specifications: {
          Type: "Digital Indicator",
          Display: "Advanced spectrum display",
          Applications: "Industrial weighing",
        },
        applications: [
          "Industrial weighing systems",
          "Process control",
          "Manufacturing applications",
        ],
        image: cardinal805,
        hasDetails: false,
      },
      {
        id: "cardinal-225-navigator",
        name: "225",
        category: "Indicators",
        brand: "Cardinal",
        description:
          "Cardinal 225 Navigator weighing indicator for reliable weight measurement and control.",
        features: [
          "Navigator technology",
          "Precise weight measurement",
          "Diagnostic capabilities",
          "User-friendly operation",
          "Durable construction",
          "Industrial applications",
        ],
        specifications: {
          Type: "Weighing Indicator",
          Model: "225 Navigator",
          Features: "Diagnostic tools",
        },
        applications: [
          "Scale diagnostic applications",
          "Weight measurement",
          "Industrial control systems",
        ],
        image: cardinal225,
        hasDetails: true,
        externalUrl:
          "https://cardinalscale.com/product/product-overview/Scale-Diagnostic-Tools/225-Navigator",
           attachmentUrl: "",
        },
      {
        id: "cardinal-205",
        name: "205",
        category: "Indicators",
        brand: "Cardinal",
        description:
          "Cardinal 205 weighing indicator for standard industrial weighing applications.",
        features: [
          "Standard weighing functionality",
          "Reliable performance",
          "Easy operation",
          "Industrial design",
          "Cost-effective solution",
          "Proven technology",
        ],
        specifications: {
          Type: "Weighing Indicator",
          Model: "205",
          Application: "Standard weighing",
        },
        applications: [
          "General weighing applications",
          "Industrial processes",
          "Basic weight measurement",
        ],
        image: cardinal205,
        hasDetails: false,
        attachmentUrl: "",
      },
      // Cardinal Load Cells
      {
        id: "cardinal-ac100k",
        name: "AC100K",
        category: "Load Cells",
        brand: "Cardinal",
        description:
          "Cardinal AC100K load cell for accurate weight measurement in industrial applications.",
        features: [
          "High accuracy measurement",
          "Industrial-grade construction",
          "Reliable performance",
          "Durable design",
          "Easy installation",
          "Long service life",
        ],
        specifications: {
          Type: "Load Cell",
          Model: "AC100K",
          Application: "Industrial weighing",
        },
        applications: [
          "Industrial scales",
          "Process weighing",
          "Manufacturing applications",
        ],
        image: ac100k,
        hasDetails: false,
        attachmentUrl: "",
      },
      {
        id: "cardinal-dc100k",
        name: "DC100K",
        category: "Load Cells",
        brand: "Cardinal",
        description:
          "Cardinal DC100K load cell for precision weighing in demanding industrial environments.",
        features: [
          "Precision measurement technology",
          "Demanding environment capability",
          "High reliability",
          "Industrial construction",
          "Accurate weight sensing",
          "Professional grade",
        ],
        specifications: {
          Type: "Load Cell",
          Model: "DC100K",
          Environment: "Demanding industrial",
        },
        applications: [
          "Precision weighing systems",
          "Industrial automation",
          "Heavy-duty applications",
        ],
        image: dc100k,
        hasDetails: false,
         attachmentUrl: "",
      },
      // Baykon Indicators
      {
        id: "baykon-bx66",
        name: "BX66 WEIGHING TERMINAL",
        category: "Indicators",
        brand: "Baykon",
        description:
          "Advanced weighing terminal with comprehensive features for industrial weighing applications.",
        features: [
          "Advanced terminal technology",
          "Comprehensive weighing features",
          "Industrial application ready",
          "User-friendly interface",
          "Reliable operation",
          "Professional design",
        ],
        specifications: {
          Type: "Weighing Terminal",
          Model: "BX66",
          Features: "Advanced terminal functions",
        },
        applications: [
          "Industrial weighing systems",
          "Process control",
          "Automation applications",
        ],
        image: bx66,
        hasDetails: true,
        externalUrl:
          "https://www.baykon.com/en/product/bx66-weighing-terminal/",
           attachmentUrl: "",
      },
      {
        id: "baykon-bx30-fill",
        name: "BX30 Fill",
        category: "Indicators",
        brand: "Baykon",
        description:
          "Baykon BX30 Fill indicator designed for filling and batching applications.",
        features: [
          "Filling application optimized",
          "Batching functionality",
          "Precise control",
          "Industrial design",
          "Easy operation",
          "Reliable performance",
        ],
        specifications: {
          Type: "Fill Indicator",
          Model: "BX30 Fill",
          Application: "Filling and batching",
        },
        applications: [
          "Filling systems",
          "Batching applications",
          "Process control",
        ],
        image: bx30,
        hasDetails: false,
         attachmentUrl: "",
      },
      {
        id: "baykon-bx22s",
        name: "BX-22",
        category: "Indicators",
        brand: "Baykon",
        description:
          "Baykon BX-22 weighing indicator for standard industrial weighing requirements.",
        features: [
          "Standard weighing functions",
          "Industrial reliability",
          "Cost-effective solution",
          "User-friendly operation",
          "Proven technology",
          "Durable construction",
        ],
        specifications: {
          Type: "Weighing Indicator",
          Model: "BX-22",
          Application: "Standard industrial weighing",
        },
        applications: [
          "General weighing",
          "Industrial processes",
          "Basic weight measurement",
        ],
        image: bx22,
        hasDetails: false,
         attachmentUrl: "",
      },
      // Baykon Load Cells
      {
        id: "baykon-br200s",
        name: "BR200S COMPRESSION LOAD CELL",
        category: "Load Cells",
        brand: "Baykon",
        description:
          "Baykon BR200S compression load cell for accurate weight measurement in compression applications.",
        features: [
          "Compression load sensing",
          "High accuracy measurement",
          "Robust construction",
          "Industrial grade quality",
          "Reliable performance",
          "Easy installation",
        ],
        specifications: {
          Type: "Compression Load Cell",
          Model: "BR200S",
          Application: "Compression weighing",
        },
        applications: [
          "Tank weighing",
          "Hopper scales",
          "Compression applications",
        ],
        image: br200,
        hasDetails: false,
         attachmentUrl: "",
      },
      {
        id: "baykon-bt604",
        name: "BT604 TENSION LOAD CELL",
        category: "Load Cells",
        brand: "Baykon",
        description:
          "Baykon BT604 tension load cell for precise weight measurement in tension applications.",
        features: [
          "Tension load sensing",
          "Precise measurement",
          "High quality construction",
          "Industrial reliability",
          "Accurate performance",
          "Professional grade",
        ],
        specifications: {
          Type: "Tension Load Cell",
          Model: "BT604",
          Application: "Tension weighing",
        },
        applications: [
          "Hanging scales",
          "Crane scales",
          "Tension applications",
        ],
        image: bt604,
        hasDetails: false,
         attachmentUrl: "",
      },
      // Flintec Indicators
      {
        id: "flintec-ft112",
        name: "FT-112",
        category: "Indicators",
        brand: "Flintec",
        description:
          "Flintec FT-112 weighing indicator for professional industrial weighing applications.",
        features: [
          "Professional weighing indicator",
          "Industrial application ready",
          "Advanced functionality",
          "Reliable operation",
          "User-friendly design",
          "High performance",
        ],
        specifications: {
          Type: "Weighing Indicator",
          Model: "FT-112",
          Grade: "Professional industrial",
        },
        applications: [
          "Industrial weighing",
          "Process applications",
          "Professional systems",
        ],
        image: ft112,
        hasDetails: false,
         attachmentUrl: "",
      },
      {
        id: "flintec-ft111-panel",
        name: "FT-111 Panel",
        category: "Indicators",
        brand: "Flintec",
        description:
          "Flintec FT-111 Panel indicator designed for panel mounting applications.",
        features: [
          "Panel mounting design",
          "Compact form factor",
          "Industrial functionality",
          "Easy integration",
          "Reliable performance",
          "Professional appearance",
        ],
        specifications: {
          Type: "Panel Indicator",
          Model: "FT-111 Panel",
          Mounting: "Panel mount",
        },
        applications: [
          "Panel integrated systems",
          "Control panels",
          "Embedded applications",
        ],
        image: ft111,
        hasDetails: false,
         attachmentUrl: "",
      },
      {
        id: "flintec-ft113-fill",
        name: "FT-113 Fill",
        category: "Indicators",
        brand: "Flintec",
        description:
          "Flintec FT-113 Fill indicator specialized for filling and batching operations.",
        features: [
          "Filling operation specialized",
          "Batching functionality",
          "Precise control algorithms",
          "Industrial construction",
          "Efficient operation",
          "Professional features",
        ],
        specifications: {
          Type: "Fill Indicator",
          Model: "FT-113 Fill",
          Specialization: "Filling and batching",
        },
        applications: [
          "Filling systems",
          "Batching operations",
          "Process control",
        ],
        image: ft113,
        hasDetails: false,
         attachmentUrl: "",
      },
      // Flintec Load Cells
      {
        id: "flintec-rc3",
        name: "RC3",
        category: "Load Cells",
        brand: "Flintec",
        description:
          "Flintec RC3 compression load cell for reliable weight measurement applications.",
        features: [
          "Compression load cell technology",
          "Reliable weight measurement",
          "High quality construction",
          "Industrial grade performance",
          "Accurate sensing",
          "Durable design",
        ],
        specifications: {
          Type: "Compression Load Cell",
          Model: "RC3",
          Technology: "Advanced compression sensing",
        },
        applications: [
          "Tank weighing systems",
          "Industrial scales",
          "Process weighing",
        ],
        image: RC3,
        hasDetails: true,
        externalUrl:
          "https://www.flintec.com/weight-sensors/load-cells/compression/rc3d-ng",
           attachmentUrl: "",
      },
      {
        id: "flintec-ub6",
        name: "UB6",
        category: "Load Cells",
        brand: "Flintec",
        description:
          "Flintec UB6 load cell for various industrial weighing applications.",
        features: [
          "Versatile load cell design",
          "Industrial weighing capability",
          "High accuracy measurement",
          "Robust construction",
          "Reliable performance",
          "Professional grade",
        ],
        specifications: {
          Type: "Load Cell",
          Model: "UB6",
          Application: "Various industrial weighing",
        },
        applications: [
          "Industrial weighing systems",
          "Multi-purpose applications",
          "General weighing",
        ],
        image: ub6,
        hasDetails: false,
         attachmentUrl: "",
      },
      {
        id: "flintec-slb",
        name: "SLB",
        category: "Load Cells",
        brand: "Flintec",
        description:
          "Flintec SLB load cell for specialized industrial weighing requirements.",
        features: [
          "Specialized load cell design",
          "Industrial requirements focused",
          "High performance sensing",
          "Quality construction",
          "Accurate measurement",
          "Professional application",
        ],
        specifications: {
          Type: "Load Cell",
          Model: "SLB",
          Focus: "Specialized industrial requirements",
        },
        applications: [
          "Specialized weighing systems",
          "Industrial applications",
          "Professional weighing",
        ],
        image: slb,
        hasDetails: false,
         attachmentUrl: "",
      },
      {
        id: "flintec-sb14",
        name: "SB14",
        category: "Load Cells",
        brand: "Flintec",
        description:
          "Flintec SB14 load cell for standard industrial weighing applications.",
        features: [
          "Standard load cell design",
          "Industrial application ready",
          "Reliable sensing technology",
          "Cost-effective solution",
          "Proven performance",
          "Quality construction",
        ],
        specifications: {
          Type: "Load Cell",
          Model: "SB14",
          Category: "Standard industrial",
        },
        applications: [
          "Standard weighing systems",
          "Industrial processes",
          "General applications",
        ],
        image: SB14,
        hasDetails: false,
         attachmentUrl: "",
      },
      // Utilcell Load Cells
      {
        id: "utilcell-740",
        name: "740",
        category: "Load Cells",
        brand: "UTICELL",
        description:
          "Utilcell 740 load cell for precision weighing in industrial environments.",
        features: [
          "Precision weighing capability",
          "Industrial environment ready",
          "High quality construction",
          "Accurate measurement",
          "Reliable performance",
          "Professional grade",
        ],
        specifications: {
          Type: "Load Cell",
          Model: "740",
          Environment: "Industrial precision weighing",
        },
        applications: [
          "Precision weighing systems",
          "Industrial applications",
          "High accuracy requirements",
        ],
        image: utc740,
        hasDetails: true,
        externalUrl: "https://www.utilcell.es/en/load-cell/model-740cp/",
         attachmentUrl: "",
      },
      {
        id: "utilcell-460",
        name: "460",
        category: "Load Cells",
        brand: "UTICELL",
        description:
          "Utilcell 460 load cell for reliable industrial weighing applications.",
        features: [
          "Reliable industrial weighing",
          "Quality load cell technology",
          "Durable construction",
          "Accurate sensing",
          "Industrial grade performance",
          "Professional reliability",
        ],
        specifications: {
          Type: "Load Cell",
          Model: "460",
          Application: "Reliable industrial weighing",
        },
        applications: [
          "Industrial weighing systems",
          "Reliable weight measurement",
          "Commercial applications",
        ],
        image: uticell460,
        hasDetails: false,
         attachmentUrl: "",
      },
    ],
  },
  {
    id: "precision-products",
    name: "Precision Products",
    description: "High-precision analytical balances and laboratory equipment",
    img: precisionImg,
    products: [
      {
        id: "radwag-as220-r1-plus",
        name: "AS 220.R1 PLUS",
        category: "Analytical Balances",
        brand: "Radwag",
        description:
          "AS 220.R1 PLUS Analytical Balance is a standard analytical weighing device of the SYNERGY LAB line with exceptional precision and modern features.",
        features: [
          "4-digit precision (0.0001g)",
          "220g capacity",
          "SYNERGY LAB line technology",
          "Spacious weighing chamber",
          "Open-door clearance for easy operation",
          "Modern constructional solutions",
          "Exceptional reliability and precision",
          "Ergonomic mechanical design",
        ],
        specifications: {
          Capacity: "220g",
          Readability: "0.0001g",
          Type: "Analytical Balance",
          Series: "AS R1 PLUS",
          Line: "SYNERGY LAB",
        },
        applications: [
          "Laboratory analysis",
          "Analytical weighing",
          "Precision measurement",
          "Research applications",
          "Quality control",
          "Scientific analysis",
        ],
        image: as220,
        hasDetails: true,
        externalUrl:
          "https://radwag.com/en/as-220-r1-plus-analytical-balance,w1,LZY,101-101-125-101",
           attachmentUrl: "",
      },
      {
        id: "radwag-as82-220-x2-plus",
        name: "AS 82/220.X2 PLUS",
        category: "Analytical Balances",
        brand: "Radwag",
        description:
          "Radwag AS 82/220.X2 PLUS analytical balance with advanced features for precision laboratory work.",
        features: [
          "X2 PLUS technology",
          "High precision measurement",
          "Advanced analytical features",
          "Laboratory grade construction",
          "Professional design",
          "Reliable performance",
        ],
        specifications: {
          Type: "Analytical Balance",
          Model: "AS 82/220.X2 PLUS",
          Technology: "X2 PLUS",
          Application: "Laboratory precision",
        },
        applications: [
          "Advanced laboratory analysis",
          "Precision weighing",
          "Research applications",
          "Quality control",
        ],
        image: as82,
        hasDetails: false,
         attachmentUrl: "",
      },
      {
        id: "radwag-ps1000-ri",
        name: "PS 1000 RI",
        category: "Precision Scales",
        brand: "Radwag",
        description:
          "Radwag PS 1000 RI precision scale for accurate weighing in laboratory and industrial applications.",
        features: [
          "1000g capacity",
          "RI technology",
          "Precision weighing capability",
          "Laboratory and industrial use",
          "Accurate measurement",
          "Professional construction",
        ],
        specifications: {
          Capacity: "1000g",
          Type: "Precision Scale",
          Model: "PS 1000 RI",
          Technology: "RI",
        },
        applications: [
          "Laboratory weighing",
          "Industrial precision applications",
          "Quality control",
          "Research work",
        ],
        image: ps1000,
        hasDetails: false,
         attachmentUrl: "",
      },
      {
        id: "radwag-ps3000-x2",
        name: "PS 3000 X2",
        category: "Precision Scales",
        brand: "Radwag",
        description:
          "Radwag PS 3000 X2 precision scale with high capacity for demanding weighing applications.",
        features: [
          "3000g high capacity",
          "X2 technology",
          "Demanding application ready",
          "High precision measurement",
          "Professional grade",
          "Reliable performance",
        ],
        specifications: {
          Capacity: "3000g",
          Type: "Precision Scale",
          Model: "PS 3000 X2",
          Technology: "X2",
        },
        applications: [
          "High capacity precision weighing",
          "Laboratory applications",
          "Industrial quality control",
          "Research and development",
        ],
        image: ps3000,
        hasDetails: false,
         attachmentUrl: "",
      },
    ],
  },
];

// Utility functions
export const getAllProducts = (): Product[] => {
  return productCategories.flatMap((category) => category.products);
};

export const getProductById = (id: string): Product | undefined => {
  return getAllProducts().find((product) => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  const category = productCategories.find((cat) => cat.id === categoryId);
  return category ? category.products : [];
};
