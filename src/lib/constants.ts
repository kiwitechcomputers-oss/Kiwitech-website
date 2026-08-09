// Business constants — single source of truth for all pages
export const BUSINESS = {
  name: 'Kiwi Technologies',
  tagline: "Hyderabad's Trusted IT Sales, Service & Corporate Solutions Partner",
  shortTagline: 'IT Sales, Service & Corporate Solutions',
  phone: '06303547474',
  phoneDisplay: '+91 63035 47474',
  whatsapp: '916303547474',
  email: 'kiwitechnologies47@gmail.com',
  address: {
    street: 'Near Apollo Pharmacy, Viharika Colony, Parvathapur',
    area: 'Medipally',
    city: 'Hyderabad',
    state: 'Telangana',
    pin: '500098',
    full: 'Near Apollo Pharmacy, Viharika Colony, Parvathapur, Medipally, Hyderabad, Telangana – 500098',
  },
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2963961660637!2d78.5898!3d17.4688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI4JzA3LjciTiA3OMKwMzUnMjMuMyJF!5e0!3m2!1sen!2sin!4v1691000000000!5m2!1sen!2sin',
  googleMapsLink: 'https://maps.app.goo.gl/Eg7L4ey7rvmibMYd8',
  googleReviewLink: 'https://maps.app.goo.gl/Eg7L4ey7rvmibMYd8',
  rating: '5.0',
  reviewCount: 129,
  yearsInBusiness: '3+',
  hours: {
    weekdays: '9:00 AM – 9:30 PM',
    weekend: '9:00 AM – 9:30 PM',
    note: 'Holiday hours may vary. Call ahead on public holidays.',
  },
  hoursTable: [
    { day: 'Monday', hours: '9:00 AM – 9:30 PM' },
    { day: 'Tuesday', hours: '9:00 AM – 9:30 PM' },
    { day: 'Wednesday', hours: '9:00 AM – 9:30 PM' },
    { day: 'Thursday', hours: '9:00 AM – 9:30 PM' },
    { day: 'Friday', hours: '9:00 AM – 9:30 PM' },
    { day: 'Saturday', hours: '9:00 AM – 9:30 PM' },
    { day: 'Sunday', hours: '9:00 AM – 9:30 PM' },
  ],
  social: {
    google: 'https://maps.app.goo.gl/Eg7L4ey7rvmibMYd8',
    instagram: 'https://instagram.com/kiwitechcomputers',
    facebook: 'https://facebook.com/kiwitechcomputers',
  },
  domain: 'https://kiwitechnologies.in',
  designedBy: 'webcolift.com',
  designedByUrl: 'https://www.webcolift.com',
}

export const WHATSAPP_URL = (message = '') =>
  `https://wa.me/${BUSINESS.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const DEFAULT_WA_MESSAGE = `Hi Kiwi Tech! I'd like to enquire about your products/services.`

export const SALES_CATEGORIES = [
  {
    id: 'laptops',
    name: 'Laptops',
    icon: 'laptop',
    tagline: 'Top brands, best prices',
    description:
      'Wide range of brand-new and certified refurbished laptops from HP, Dell, Lenovo, Asus, Acer & more. Ideal for students, professionals, and businesses.',
    brands: ['HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'MSI'],
    features: [
      'All major brands available',
      'New & refurbished options',
      'Business & gaming laptops',
      'Student budget laptops',
      'SSD upgrades available',
      'Warranty on all units',
    ],
  },
  {
    id: 'desktops',
    name: 'Desktops & Monitors',
    icon: 'monitor',
    tagline: 'Full workstation solutions',
    description:
      'From compact home desktops to high-performance workstations and LED monitors. Custom builds available for gaming, graphics, and office productivity.',
    brands: ['HP', 'Dell', 'Lenovo', 'LG', 'Samsung'],
    features: [
      'Custom built desktops',
      'Office workstations',
      'Gaming rigs',
      'LED / IPS monitors (19"–32")',
      'All-in-One systems',
      'UPS & power solutions',
    ],
  },
  {
    id: 'printers',
    name: 'Printers',
    icon: 'printer',
    tagline: 'Office & home printing',
    description:
      'Inkjet, LaserJet, and multifunction printers for home and office use. Sales of toner/ink cartridges and drum units. Compatible with all major brands.',
    brands: ['HP', 'Canon', 'Epson', 'Brother'],
    features: [
      'Inkjet & LaserJet options',
      'Multifunction (scan/copy/print)',
      'Bulk print solutions',
      'Genuine cartridges',
      'Compatible ink/toner',
      'Network printer setup',
    ],
  },
  {
    id: 'cctv',
    name: 'CCTV & Security',
    icon: 'cctv',
    tagline: 'Protect what matters',
    description:
      'Complete CCTV surveillance systems for homes, shops, offices, and warehouses. IP cameras, HD analog, DVR/NVR kits, and remote monitoring setup.',
    brands: ['CP Plus', 'Hikvision', 'Dahua', 'TVT'],
    features: [
      '2MP – 8MP cameras',
      'Indoor & outdoor cameras',
      'DVR / NVR systems',
      'Night vision cameras',
      'Remote mobile viewing',
      'Professional installation',
    ],
  },
  {
    id: 'accessories',
    name: 'Computer Accessories',
    icon: 'accessories',
    tagline: 'Everything your setup needs',
    description:
      'Keyboards, mice, headsets, webcams, pen drives, external hard drives, cables, hubs, and all IT accessories at competitive prices.',
    brands: ['Logitech', 'Zebronics', 'TVS', 'HP', 'Samsung'],
    features: [
      'Keyboards & mice',
      'Webcams & headsets',
      'USB hubs & cables',
      'Pen drives & hard drives',
      'Cooling pads',
      'Laptop bags & sleeves',
    ],
  },
]

export const SERVICE_CATEGORIES = [
  {
    id: 'laptop-repair',
    name: 'Laptop Repair & Service',
    icon: 'laptop',
    tagline: 'Fast diagnosis, genuine parts',
    turnaround: '24 – 48 hrs',
    description:
      'Expert repair for all laptop brands — screen replacement, keyboard, motherboard, charging port, fan, hinge, and software issues.',
    features: [
      'Free diagnosis & estimate',
      'Screen & keyboard replacement',
      'Motherboard-level repair',
      'Battery replacement',
      'Virus removal & OS reinstall',
      'Doorstep pickup available',
    ],
  },
  {
    id: 'desktop-repair',
    name: 'Desktop & Monitor Repair',
    icon: 'monitor',
    tagline: 'Get back to full power',
    turnaround: '24 – 48 hrs',
    description:
      'Hardware and software repair for all desktop computers and monitors. RAM/HDD upgrades, PSU replacement, display panel repairs.',
    features: [
      'RAM & SSD upgrades',
      'PSU & SMPS replacement',
      'Monitor panel repair',
      'No display troubleshooting',
      'Data recovery assistance',
      'OS & driver reinstall',
    ],
  },
  {
    id: 'printer-repair',
    name: 'Printer Repair & Maintenance',
    icon: 'printer',
    tagline: 'Minimal downtime guaranteed',
    turnaround: '24 hrs',
    description:
      'Repair and service for inkjet, LaserJet, and multifunction printers. Head cleaning, roller replacement, toner cartridge, and network setup.',
    features: [
      'Inkjet & LaserJet repair',
      'Print head cleaning',
      'Paper jam troubleshooting',
      'Toner & drum replacement',
      'Network printer setup',
      'AMC for office printers',
    ],
  },
  {
    id: 'cctv-service',
    name: 'CCTV Installation & Support',
    icon: 'cctv',
    tagline: 'Professional installation team',
    turnaround: 'Same day',
    description:
      'End-to-end CCTV system installation, configuration, and ongoing support. DVR/NVR setup, camera positioning, cable laying, and remote access setup.',
    features: [
      'Site survey & planning',
      'Camera installation & cabling',
      'DVR/NVR configuration',
      'Remote mobile access setup',
      'Existing system upgrades',
      'Annual maintenance contracts',
    ],
  },
  {
    id: 'accessories-support',
    name: 'Accessories & Setup Support',
    icon: 'accessories',
    tagline: 'Quick fixes, complete setups',
    turnaround: 'Same day',
    description:
      'Installation and configuration of peripherals, network setup, printer connectivity, WiFi troubleshooting, and complete workstation setup.',
    features: [
      'Peripheral installation',
      'WiFi & network setup',
      'Printer connectivity',
      'Complete PC setup',
      'Software installation',
      'On-site support available',
    ],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Kola Kalyanraj',
    initials: 'KK',
    date: '4 weeks ago',
    rating: 5,
    text: 'I had a great experience with this store. They offer a wide range of high-quality CCTV cameras and laptops at competitive prices. The staff is knowledgeable, friendly, and helped me choose the right products based on my requirements without any pressure. The CCTV installation was completed professionally and on time.',
    tag: 'CCTV & Laptop Sales',
  },
  {
    name: 'Sridhar Reddy Darga',
    initials: 'SR',
    date: '1 month ago',
    rating: 5,
    text: 'CPU installation completed successfully at Lalapet. The service was quick, professional, and reasonably priced. The technician handled everything carefully, and my PC is working perfectly. Highly recommended!',
    tag: 'Desktop Setup',
  },
  {
    name: 'Rakesh Bandi',
    initials: 'RB',
    date: '1 month ago',
    rating: 5,
    text: 'Excellent service from Kiwi Tech Computers Sales and Service. Fast laptop repair, genuine computer accessories, printer installation, CCTV setup, software installation, and professional customer support. Reasonable prices and timely service.',
    tag: 'Laptop & Accessories',
  },
  {
    name: 'Vivek Mechineni',
    initials: 'VM',
    date: '2 months ago',
    rating: 5,
    text: 'Excellent service and very professional work! They repaired my laptop keyboard perfectly, and now it works like new. The staff was polite, helpful, and completed the work quickly. Really impressed with the quality of service.',
    tag: 'Keyboard Repair',
  },
  {
    name: 'Vijay Lowte',
    initials: 'VL',
    date: '2 months ago',
    rating: 5,
    text: 'I recently got my laptop serviced here and I’m extremely satisfied with the service. The technician fixed my laptop within one hour, and I didn’t have to visit multiple times.',
    tag: 'Express Laptop Service',
  },
  {
    name: 'Vinod Kumar',
    initials: 'VK',
    date: '3 weeks ago',
    rating: 5,
    text: 'Best laptop service in Medipally available at Kiwi Tech Computers. Reasonable price, nice shop, and polite staff.',
    tag: 'Laptop Repair',
  },
  {
    name: 'Nagendra Kasibatla',
    initials: 'NK',
    date: '2 months ago',
    rating: 5,
    text: 'Best laptop service, the tech was skillful, polite and addressed the issue. Also provided timely updates on the repair status. Highly recommend visiting.',
    tag: 'Laptop Repair',
  },
  {
    name: 't.govardhan Reddy',
    initials: 'GR',
    date: '4 weeks ago',
    rating: 5,
    text: 'My printer Epson 3250 had a no power issue, I got a solution within 2 hours. Best response, reasonable price.',
    tag: 'Epson Printer Repair',
  },
  {
    author: 'Rajesh Kumar',
    rating: 5,
    relativeTime: '3 weeks ago',
    text: 'I am incredibly impressed with the outstanding CCTV service I received from Kiwi Technologies. From the very first call, their team was professional, responsive, and highly knowledgeable.',
  },
  {
    author: 'Srinivas R.',
    rating: 5,
    relativeTime: '2 months ago',
    text: 'Very good experience with Kiwi Technologies. Fast service, genuine products available, reasonable price, problems clearly explained and completed the repair on time.',
  },
  {
    author: 'Priya Sharma',
    rating: 5,
    relativeTime: '3 months ago',
    text: 'Exceptional service from Kiwi Technologies! My printer was fixed in no time. The technician was professional, fast, and very knowledgeable. It’s working perfectly now.',
    tag: 'Printer Repair',
  },
  {
    name: 'Uday Putta',
    initials: 'UP',
    date: '1 month ago',
    rating: 5,
    text: 'Best CCTV installation service for shops in Medipally. Very clean installation and great support.',
    tag: 'CCTV Installation',
  },
]

export const WHY_CHOOSE_US = [
  {
    icon: 'shield',
    title: 'Certified Technicians',
    description: 'Our team consists of experienced, certified professionals with 3+ years of hands-on expertise in IT repairs and installations.',
  },
  {
    icon: 'zap',
    title: 'Quick Turnaround',
    description: 'Most repairs completed within 24–48 hours. Same-day service available for CCTV and setup jobs.',
  },
  {
    icon: 'tag',
    title: 'Transparent Pricing',
    description: 'Free diagnosis and upfront estimates. No hidden charges. Competitive prices across all services.',
  },
  {
    icon: 'home',
    title: 'Doorstep Service',
    description: 'We come to you. Doorstep pickup & delivery for repairs, and on-site installation for CCTV and corporate setups.',
  },
  {
    icon: 'award',
    title: 'Warranty Support',
    description: 'All repairs come with a service warranty. Genuine spare parts used across all brands.',
  },
  {
    icon: 'users',
    title: '5.0★ Google Reviews',
    description: 'Proud to maintain a top-rated 5.0★ Google Reviews rating. Your satisfaction is our priority.',
  },
]

export const AMC_PLANS = [
  {
    tier: 'Basic',
    name: 'Basic AMC',
    description: 'Ideal for small setups with 1–5 computers',
    features: [
      'Quarterly preventive maintenance',
      'Remote software support',
      'Hardware issue diagnosis',
      'OS & software updates',
      'Email & call support',
    ],
  },
  {
    tier: 'Standard',
    name: 'Standard AMC',
    description: 'Perfect for offices with 5–20 computers',
    features: [
      'Monthly preventive maintenance',
      'Priority on-site support',
      'Hardware repairs (parts extra)',
      'Network & WiFi troubleshooting',
      'Antivirus & security updates',
      'Dedicated support number',
    ],
    featured: true,
  },
  {
    tier: 'Premium',
    name: 'Premium AMC',
    description: 'End-to-end coverage for 20+ computer setups',
    features: [
      'Fortnightly preventive visits',
      'Unlimited on-site support calls',
      'Parts included (pre-agreed list)',
      'CCTV system coverage',
      'Printer maintenance included',
      'SLA-backed response time',
      '24×7 emergency helpline',
    ],
  },
]
