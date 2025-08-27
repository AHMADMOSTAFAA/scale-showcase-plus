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
    id: "indicators",
    name: "Weight Indicators",
    description: "Advanced digital weight indicators for precise measurements",
    icon: "📊",
    products: [
      {
        id: "cardinal-805-spectrum",
        name: "Cardinal 805 Spectrum",
        category: "Weight Indicators",
        brand: "Cardinal",
        description: "Cardinal's 825 Spectrum indicator's full-color 640 x 480 pixel (5.25-inch H x 4-inch W/ 133 mm H x 102 mm W) back-lit LCD touchscreen display and stainless steel enclosure commanding 64 MB of memory combined with massive connectivity via 4 bi-directional RS232 serial ports, 110/100 Base-T Ethernet port, 2 USB A host ports, and 1 USB B device port, there is no end to this indicator's potential. Up to 8 operators may be programmed for use. Other features include a time/date function, adjustable filtering, Gross, Tare, and Net conversion, QWERTY keypad and navigation keys. NTEP legal-for-trade and OIML certified. Supports up to 14 350-ohm load cells.",
        features: [
          "64 MB User Memory",
          "640 x 480 Pixel Full-Color LCD",
          "Interactive Touchscreen Display",
          "Internet File Management",
          "IP66 Enclosure Rating",
          "Navigation Keys",
          "NTEP Legal for Trade",
          "OIML Certified",
          "Unlimited Truck Storage ID's"
        ],
        specifications: {
          "Power Requirements": "90 to 264 VAC (50/60 Hz)",
          "Enclosure Type": "Stainless Steel",
          "Weight": "16.2 lb / 7.3 kg (includes gimbal)",
          "Operating Temperature": "14 to 104 ˚F (-10 to +40 ˚C)",
          "Display Size": "5.25 in W x 4.0 in H / 133 mm W x 102 mm H",
          "Display Resolution": "640 x 480 pixel matrix color backlit LCD",
          "Load Cell Support": "Up to 14 per SIB / 48 – 350 ohm load cells total"
        },
        applications: [
          "Industrial weighing",
          "Truck scales",
          "Tank weighing",
          "Process control"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "cardinal-225",
        name: "Cardinal 225 Weight Indicator",
        category: "Weight Indicators",
        brand: "Cardinal",
        description: "The 225 Navigator weight indicator's transflective display technology allows the 240 x 64-pixel (5-inch/127 mm W x 1.33-inch/34 mm H) back-lit LCD with 1-inch high characters to be viewed under any lighting conditions from direct sunlight to total darkness. With an optional dual scale input board, up to 3 scales with total weights can be viewed simultaneously. Standard features include IP66 washdown stainless steel enclosure, 4 bi-directional RS232 serial ports, USB-B port, QWERTY keypad, 4 soft keys, 13 function keys, navigation keys, 16 Preset Weight Comparators (PWCs), 8 input control lines, 16 output control lines, piece count, batching, electronic tally roll, and 200 ID database for truck storage. NTEP legal-for-trade and OIML certified. Supports up to 14 350-ohm load cells.",
        features: [
          "200 ID's",
          "240 x 64 Pixel LCD",
          "4 Soft Keys",
          "Alphanumeric Keypad",
          "Electronic Tally Roll",
          "IP66 Enclosure Rating",
          "Navigation Keys",
          "NTEP Legal for Trade",
          "OIML Certified",
          "Powers up to 14 Load Cells"
        ],
        specifications: {
          "Power Requirements": "100 to 240 VAC (50/60 Hz) at 0.4A Max",
          "Enclosure Type": "Stainless steel washdown",
          "Display": "240 x 64 pixel LCD",
          "Load Cell Support": "Up to 14 350-ohm load cells",
          "Serial Ports": "4 bi-directional RS232"
        },
        applications: [
          "Industrial scales",
          "Truck weighing",
          "Batching systems",
          "Inventory control"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "cardinal-205",
        name: "Cardinal 205 Weight Indicator",
        category: "Weight Indicators",
        brand: "Cardinal",
        description: "The Cardinal model 205 is a reliable general-purpose weight indicator which may be connected to bench, floor, overhead track, tank/hopper, livestock or even truck scales. The stainless steel desk or wall-mountable enclosure ensures accurate, reliable operation in harsh environments and washdown applications. An easy-to-read 0.6-inch/15 mm high bright-red LED displays weight to six digits while push-button Gross, Tare, Net conversion, StableSENSE adjustable filtering, selectable key lockout, flexible print formats, selectable weight units, auto shutoff and sleep mode make the 205 easy to use. Four bi-directional RS232 serial ports, four input control lines, optional SnapStream wireless, USB-B standard, and USB-A optional features provide multiple connectivity options.",
        features: [
          "4 RS232 Serial Ports",
          "Gross/Tare/Net Conversion",
          "IP67 Enclosure Rating",
          "NTEP Legal for Trade",
          "OIML Certified",
          "Powers up to 8 Load Cells",
          "Stainless Steel Enclosure",
          "USB-B Standard – USB-A Optional"
        ],
        specifications: {
          "Power Requirements": "100 to 240 VAC (50/60 Hz) at 0.4A Max",
          "Enclosure Type": "Stainless steel wall or desk-mount",
          "Display": "0.6-inch/15 mm high bright-red LED",
          "Load Cell Support": "Up to 8 load cells",
          "Serial Ports": "4 bi-directional RS232"
        },
        applications: [
          "Bench scales",
          "Floor scales",
          "Tank weighing",
          "Livestock scales"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "baykon-bx66",
        name: "Baykon BX66 Weighing Terminal",
        category: "Weight Indicators",
        brand: "Baykon",
        description: "Baykon BX65 & BX66 Weighing Terminals are stainless steel, Windows CE Based Industrial Computers Designed for Transactional Weighing and Solutions. 7\" (BX65) and 10.1\" (BX66) color LCD touchscreen monitors provide intuitive and easy transactional operation. Standard models are IP30 protection. But, BX65 has IP67 protected sealed version. Available with standard application software; labelling & data collection, truck scale, milk collection scale, SQC – Statistical Quality Control.",
        features: [
          "Stainless steel 7\" & 10.1\" touchscreen weighing terminals",
          "IP67 sealed version for 7\"",
          "OIML 10000d, 3 x multi range and multi interval approved",
          "Configurable menu, ticket",
          "Multi language",
          "Windows CE based operation",
          "Color LCD touchscreen",
          "Standard application software included"
        ],
        specifications: {
          "Display": "7\" or 10.1\" color LCD touchscreen",
          "Protection": "IP30 standard, IP67 for 7\" version",
          "Operating System": "Windows CE",
          "Approval": "OIML 10000d certified",
          "Multi Range": "3 x multi range and multi interval"
        },
        applications: [
          "Transactional weighing",
          "Truck scales",
          "Milk collection scales",
          "Statistical quality control"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "baykon-bx30",
        name: "Baykon BX30 Fill",
        category: "Weight Indicators",
        brand: "Baykon",
        description: "Baykon BX30 Fill, Filling and Packing Controller is high tech, smart and economic instrument for usage at various filling and packing machines. Its configurable specific recipe build feature and smart filling algorithms give big advantages in usage. The most common filling & packing applications fit one of its 12 filling modes. Master-slave operation provides the set up and recipe transferring to all BX30 Fill slave controllers on the machine.",
        features: [
          "12 different filling modes",
          "Master-slave operation capability",
          "Recipe memory (250 records)",
          "ID memory (250 records)",
          "7 programmable keys",
          "Smart filling algorithms",
          "Configurable recipe build feature",
          "Programmable digital inputs/outputs"
        ],
        specifications: {
          "Filling Modes": "12 different modes",
          "Memory": "250 records for recipes and IDs",
          "Programming Keys": "7 assignable keys",
          "Operation": "Master-slave compatible"
        },
        applications: [
          "Filling machines",
          "Packing machines",
          "Batch filling",
          "Multi-scale bagging systems"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "baykon-bx22",
        name: "Baykon BX-22",
        category: "Weight Indicators",
        brand: "Baykon",
        description: "Baykon BX22 is a High Quality General Purpose Weighing Indicator in Stainless Steel Housing. Its optional alibi memory provides usage with non-approved pc software for approved scales. BX22L, the increased lightning & surge voltage protected variant of BX22, has a very high protection against lightning on its load cell and power supply connections. With its 2 pcs galvanically isolated RS232C ports, BX22L has important advantage for industrial weighing applications, in particular for weighbridges.",
        features: [
          "Stainless steel housing",
          "IP67 protection",
          "Optional alibi memory",
          "Lightning protection (BX22L variant)",
          "2 galvanically isolated RS232C ports",
          "Multi-color display",
          "Rechargeable Li-ion battery",
          "Dynamic filter for livestock weighing"
        ],
        specifications: {
          "Housing": "Stainless steel",
          "Protection": "IP67",
          "Ports": "2 x RS232C (galvanically isolated)",
          "Battery": "Rechargeable Li-ion",
          "Display": "Multi-color LCD"
        },
        applications: [
          "General weighing",
          "Weighbridges",
          "Industrial applications",
          "Livestock weighing"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      }
    ]
  },
  {
    id: "load-cells",
    name: "Load Cells",
    description: "High-precision load cells for various weighing applications",
    icon: "⚖️",
    products: [
      {
        id: "cardinal-ac100k",
        name: "Cardinal AC100K Load Cell",
        category: "Load Cells",
        brand: "Cardinal",
        description: "Cardinal Scale's AC series load cells and electronics provide everything you need for a vehicle scale, minus the weighbridge. These stainless steel compression load cells feature anti-rotation mounting with extra robust upper and lower cups and a self-centering column. The NTEP and OIML certified AC series analog load cells come in either 22,700 kg / 50,000 lb or 45,000 kg / 100,000 lb capacities. They feature a stainless steel, weatherproof junction box and 50 ft /15 m of cable per load cell.",
        features: [
          "22700 kg / 50000 lb and 45000 kg / 100000 lb Capacities",
          "50 ft / 15 m of Load Cell Cable",
          "Anti-Rotation Mounting",
          "Everything Needed for a Vehicle Scale Minus the Weighbridge",
          "Extra Robust Upper and Lower Cups",
          "Interchangeable with Cardinal SCA Load Cells",
          "IP69K Rated for High-Pressure and High-Temperature Washdown Applications",
          "OIML and NTEP Certified",
          "Stainless Steel Junction Box",
          "Stainless Steel Load Cells"
        ],
        specifications: {
          "Capacity (AC-50K)": "22,700 kg / 50,000 lb",
          "Capacity (AC-100K)": "45,000 kg / 100,000 lb",
          "Material": "Stainless steel",
          "Cable Length": "50 ft / 15 m",
          "Protection": "IP69K rated",
          "Mounting": "Anti-rotation with self-centering column"
        },
        applications: [
          "Vehicle scales",
          "Tank weighing",
          "Hopper scales",
          "Heavy-duty applications"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "cardinal-dc100k",
        name: "Cardinal DC100K SmartCell",
        category: "Load Cells",
        brand: "Cardinal",
        description: "Cardinal Scale's DC series SmartCell® stainless steel compression digital load cells daisy-chain together for ease of wiring and the cables connect automatically to the load cell. Internal load cell circuitry eliminates the need for a junction box. The OIML-certified DC series come in either 22,700 kg / 50,000 lb or 45,000 kg / 100,000 lb capacities and they include iSite remote diagnostic monitoring software with automatic text/e-mail alerts.",
        features: [
          "22700 kg / 50000 lb and 45000 kg / 100000 lb Capacities",
          "Anti-Rotation Mounting",
          "Cables Connect Automatically to Load Cells",
          "Daisy-Chain Cells Together for Ease of Wiring",
          "Extra Robust Upper and Lower Cups",
          "Includes iSite Remote Diagnostics Software with E-mail and Text Alerts",
          "Interchangeable with Cardinal SCA Load Cells for Complete Digital Conversions",
          "IP69K Rated for High-Pressure and High-Temperature Washdown Applications",
          "No Junction Box Required",
          "OIML Certified Digital Load Cells"
        ],
        specifications: {
          "Capacity (DC-50K)": "22,700 kg / 50,000 lb",
          "Capacity (DC-100K)": "45,000 kg / 100,000 lb",
          "Type": "Digital compression load cell",
          "Material": "Stainless steel",
          "Protection": "IP69K rated",
          "Connectivity": "Daisy-chain capable"
        },
        applications: [
          "Digital vehicle scales",
          "Tank weighing systems",
          "Hopper scales",
          "Process weighing"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "baykon-br200s",
        name: "Baykon BR200S Compression Load Cell",
        category: "Load Cells",
        brand: "Baykon",
        description: "Baykon BR200S is a low profile, high performance stainless steel Ring Torsion Type Load Cell with complete IP67 hermetic sealing. It has a wide capacity range from 5 t to 50 t perfectly fits for use in harsh industrial environments in food, chemical and allied process industries.",
        features: [
          "Capacities: 5, 10, 15, 20, 30, 50 t",
          "OIML R60 approved (Except 5t)",
          "Low profile design",
          "Stainless steel construction",
          "IP67 hermetically sealed",
          "Ring torsion type",
          "High performance",
          "Suitable for harsh environments"
        ],
        specifications: {
          "Capacity Range": "5t to 50t",
          "Type": "Ring Torsion Compression",
          "Material": "Stainless steel",
          "Protection": "IP67 hermetic sealing",
          "Approval": "OIML R60 (except 5t)",
          "Profile": "Low profile design"
        },
        applications: [
          "Truck scales",
          "Wagon scales",
          "Silo weighing systems",
          "Special weighing applications"
        ],
        image: "/api/placeholder/600/400",
        hasDetails: true
      },
      {
        id: "baykon-bt604",
        name: "Baykon BT604 Tension Load Cell",
        category: "Load Cells",
        brand: "Baykon",
        description: "Baykon BT604 is nickel plated alloy steel S Type Load Cell. It perfectly fits for use in industrial weighing applications such as crane scales, suspended hopper scales, convertion of mechanical scales and test machines.",
        features: [
          "Capacities: 25 kg~5 t",
          "Nickel Plated Alloy Steel Construction",
          "Tension and Compression Applications",
          "Protection Class: IP67",
          "S-Type design",
          "Versatile mounting options",
          "High accuracy",
          "Durable construction"
        ],
        specifications: {
          "Capacity Range": "25 kg to 5 t",
          "Type": "S-Type tension/compression",
          "Material": "Nickel plated alloy steel",
          "Protection": "IP67",
          "Applications": "Tension and compression",
          "Design": "S-Type configuration"
        },
        applications: [
          "Tank & bunker weighing systems",
          "Force test machines",
          "Crane scale applications",
          "Suspended weighing systems"
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