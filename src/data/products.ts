export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  image: string;
  price?: string;
  hasDetails: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "truck-scales",
    name: "Static Truck Scales",
    description: "Heavy-duty truck weighing solutions for accurate load measurement",
    icon: "🚛",
    products: [
      {
        id: "cardinal-825",
        name: "Cardinal 825 Static Truck Scale",
        category: "Static Truck Scales",
        brand: "Cardinal",
        description: "Heavy-duty static truck scale designed for accurate weighing of commercial vehicles",
        features: [
          "High precision load cells",
          "Weather-resistant construction", 
          "Digital indicator display",
          "Remote monitoring capabilities",
          "Easy calibration system"
        ],
        specifications: {
          "Capacity": "80 tonnes",
          "Platform Size": "18m x 3m",
          "Load Cells": "8 x Cardinal 825",
          "Accuracy": "±0.1%",
          "Material": "Steel reinforced concrete"
        },
        applications: [
          "Commercial weighing stations",
          "Manufacturing facilities",
          "Logistics centers",
          "Mining operations"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "cardinal-830",
        name: "Cardinal 830 Heavy Duty Scale",
        category: "Static Truck Scales",
        brand: "Cardinal",
        description: "Professional heavy-duty truck scale for industrial applications",
        features: [
          "Advanced digital technology",
          "Multi-point calibration",
          "Data logging capability",
          "Network connectivity",
          "Overload protection"
        ],
        specifications: {
          "Capacity": "100 tonnes",
          "Platform Size": "20m x 3.5m",
          "Load Cells": "10 x Cardinal 830",
          "Accuracy": "±0.05%",
          "Material": "Reinforced steel platform"
        },
        applications: [
          "Heavy industrial weighing",
          "Port facilities",
          "Large logistics hubs",
          "Government checkpoints"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "baykon-bt6040",
        name: "Baykon BT6040 Truck Scale",
        category: "Static Truck Scales",
        brand: "Baykon",
        description: "Turkish engineered truck scale with advanced weighing technology",
        features: [
          "Turkish quality engineering",
          "Modular design",
          "Easy installation",
          "Cost-effective solution",
          "Reliable performance"
        ],
        specifications: {
          "Capacity": "60 tonnes",
          "Platform Size": "16m x 3m",
          "Load Cells": "6 x Baykon BT",
          "Accuracy": "±0.2%",
          "Material": "Galvanized steel"
        },
        applications: [
          "Medium scale operations",
          "Agricultural facilities",
          "Construction sites",
          "Waste management"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      }
    ]
  },
  {
    id: "axle-scales",
    name: "Axle Scales",
    description: "Portable and fixed axle weighing systems for vehicle load verification",
    icon: "⚖️",
    products: [
      {
        id: "cardinal-axle-1000",
        name: "Cardinal Axle Scale 1000",
        category: "Axle Scales",
        brand: "Cardinal",
        description: "Portable axle scale for on-site vehicle weighing",
        features: [
          "Portable design",
          "Quick setup",
          "Battery powered",
          "Wireless connectivity",
          "Rugged construction"
        ],
        specifications: {
          "Capacity": "20 tonnes per axle",
          "Platform Size": "2m x 0.6m",
          "Load Cells": "4 x Cardinal AC",
          "Accuracy": "±0.5%",
          "Power": "12V Battery"
        },
        applications: [
          "Mobile weighing services",
          "Field operations",
          "Temporary checkpoints",
          "Agricultural weighing"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "mettler-powercell",
        name: "Mettler Toledo PowerCell Axle Scale",
        category: "Axle Scales",
        brand: "Mettler Toledo",
        description: "High-precision axle weighing system with advanced features",
        features: [
          "PowerCell technology",
          "Self-diagnosing system",
          "Predictive maintenance",
          "High accuracy",
          "Integrated software"
        ],
        specifications: {
          "Capacity": "30 tonnes per axle",
          "Platform Size": "2.5m x 0.8m",
          "Load Cells": "PowerCell technology",
          "Accuracy": "±0.1%",
          "Power": "AC/DC compatible"
        },
        applications: [
          "Precision weighing",
          "Quality control",
          "Legal trade applications",
          "Process optimization"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      }
    ]
  },
  {
    id: "floor-scales",
    name: "Floor Scales",
    description: "Industrial floor scales for warehouse and manufacturing applications",
    icon: "📦",
    products: [
      {
        id: "flintec-sb14",
        name: "Flintec SB14 Floor Scale",
        category: "Floor Scales",
        brand: "Flintec",
        description: "German engineered floor scale for industrial weighing",
        features: [
          "German precision engineering",
          "Stainless steel construction",
          "Easy integration",
          "Multiple size options",
          "High durability"
        ],
        specifications: {
          "Capacity": "5 tonnes",
          "Platform Size": "1.5m x 1.5m",
          "Load Cells": "4 x Flintec SB14",
          "Accuracy": "±0.1%",
          "Material": "Stainless steel"
        },
        applications: [
          "Food industry",
          "Pharmaceutical weighing",
          "Chemical processing",
          "Quality control"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "baykon-bf3030",
        name: "Baykon BF3030 Platform Scale",
        category: "Floor Scales",
        brand: "Baykon",
        description: "Versatile platform scale for general industrial use",
        features: [
          "Modular platform design",
          "Easy maintenance",
          "Cost-effective",
          "Portable options",
          "Multiple indicator choices"
        ],
        specifications: {
          "Capacity": "3 tonnes",
          "Platform Size": "1.2m x 1.2m",
          "Load Cells": "4 x Baykon BF",
          "Accuracy": "±0.2%",
          "Material": "Painted steel"
        },
        applications: [
          "General weighing",
          "Warehouse operations",
          "Manufacturing",
          "Shipping/receiving"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      }
    ]
  },
  {
    id: "laboratory-balances",
    name: "Laboratory Balances",
    description: "Precision analytical and laboratory balances for accurate measurements",
    icon: "🔬",
    products: [
      {
        id: "mettler-xe204",
        name: "Mettler Toledo XE204 Analytical Balance",
        category: "Laboratory Balances",
        brand: "Mettler Toledo",
        description: "High-precision analytical balance for laboratory applications",
        features: [
          "0.1mg readability",
          "Built-in calibration",
          "TouchScreen operation",
          "Multiple language support",
          "Data management software"
        ],
        specifications: {
          "Capacity": "220g",
          "Readability": "0.1mg",
          "Repeatability": "±0.1mg",
          "Linearity": "±0.2mg",
          "Calibration": "Internal FACT"
        },
        applications: [
          "Analytical chemistry",
          "Research laboratories",
          "Quality control",
          "Educational institutions"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "mettler-ms204s",
        name: "Mettler Toledo MS204S Semi-Micro Balance",
        category: "Laboratory Balances",
        brand: "Mettler Toledo",
        description: "Semi-micro balance for ultra-precise measurements",
        features: [
          "0.01mg readability",
          "Anti-static kit included",
          "Temperature monitoring",
          "Vibration filtering",
          "SmartSens technology"
        ],
        specifications: {
          "Capacity": "220g",
          "Readability": "0.01mg",
          "Repeatability": "±0.015mg",
          "Linearity": "±0.03mg",
          "Calibration": "Internal/External"
        },
        applications: [
          "Micro-analysis",
          "Pharmaceutical research",
          "High-precision measurements",
          "Advanced laboratories"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      }
    ]
  },
  {
    id: "electronic-scales",
    name: "Electronic Scales",
    description: "Digital weighing solutions for various commercial applications",
    icon: "⚡",
    products: [
      {
        id: "cardinal-ec-600",
        name: "Cardinal EC-600 Electronic Scale",
        category: "Electronic Scales",
        brand: "Cardinal",
        description: "Versatile electronic scale for commercial use",
        features: [
          "Large LED display",
          "Battery operation",
          "Multiple weighing units",
          "Checkweighing function",
          "RS232 interface"
        ],
        specifications: {
          "Capacity": "600kg",
          "Readability": "0.1kg",
          "Platform Size": "60cm x 80cm",
          "Power": "AC/DC",
          "Display": "LED"
        },
        applications: [
          "Retail weighing",
          "Shipping scales",
          "Warehouse use",
          "Production weighing"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "flintec-pc60",
        name: "Flintec PC60 Price Computing Scale",
        category: "Electronic Scales",
        brand: "Flintec",
        description: "Price computing scale for retail applications",
        features: [
          "Price calculation",
          "Memory storage",
          "Thermal printer ready",
          "Multiple currencies",
          "Bright displays"
        ],
        specifications: {
          "Capacity": "60kg",
          "Readability": "10g/20g",
          "Platform Size": "35cm x 45cm",
          "Memory": "200 PLUs",
          "Display": "Triple LED"
        },
        applications: [
          "Retail markets",
          "Grocery stores",
          "Delis and butchers",
          "Food service"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      }
    ]
  },
  {
    id: "crane-scales",
    name: "Crane Scales",
    description: "Heavy-duty hanging scales for lifting and weighing operations",
    icon: "🏗️",
    products: [
      {
        id: "cardinal-cs-10t",
        name: "Cardinal CS-10T Crane Scale",
        category: "Crane Scales",
        brand: "Cardinal",
        description: "Heavy-duty crane scale for lifting applications",
        features: [
          "Wireless remote control",
          "360° rotating hook",
          "Overload protection",
          "Hold function",
          "Peak hold feature"
        ],
        specifications: {
          "Capacity": "10 tonnes",
          "Readability": "5kg",
          "Operating Temperature": "-10°C to +60°C",
          "Safety Factor": "4:1",
          "Battery Life": "100 hours"
        },
        applications: [
          "Construction sites",
          "Steel mills",
          "Shipyards",
          "Heavy manufacturing"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "flintec-ch5000",
        name: "Flintec CH5000 Crane Hook Scale",
        category: "Crane Scales",
        brand: "Flintec",
        description: "Professional crane hook scale with advanced features",
        features: [
          "Aluminum construction",
          "LED display",
          "Remote control included",
          "Multiple hanging points",
          "Automatic shut-off"
        ],
        specifications: {
          "Capacity": "5 tonnes",
          "Readability": "2kg",
          "Display": "1-inch LED",
          "Operating Range": "100m",
          "Charging": "AC adapter"
        },
        applications: [
          "Material handling",
          "Warehouse operations",
          "Manufacturing",
          "Quality control"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      }
    ]
  }
];

export const getAllProducts = (): Product[] => {
  return productCategories.flatMap(category => category.products);
};

export const getProductById = (id: string): Product | undefined => {
  return getAllProducts().find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  const category = productCategories.find(cat => cat.id === categoryId);
  return category ? category.products : [];
};