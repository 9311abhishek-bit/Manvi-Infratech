import {
  Home, ChefHat, DoorClosed, Tv, Sofa, BedDouble, LampCeiling, Hammer,
  Armchair, Building2, Layers, PanelsTopLeft, Ruler, Gem, Sparkles, ClipboardCheck, Palette,
} from 'lucide-react'
import logo from '../assets/logo.png'

/* ================================================================
   ALL CONTENT LIVES HERE.  Items marked  // PLACEHOLDER  need your
   real information (copy from your Google Maps listing).
   ================================================================ */

export const company = {
  name: 'Manvi Infratech',                       // as shown in the logo – change if the legal/display name differs
  tagline: 'Complete Interior Solution',
  segments: ['Office', 'Home', 'Commercial Interiors'], // from the logo
  logo,
  phone: '+91 9625739779',            // PLACEHOLDER e.g. '+91 98XXXXXXXX'
  whatsapp: '+91 9625739779',         // PLACEHOLDER digits with country code e.g. '9198XXXXXXXX'
  email: 'manvi.infratech1@gmail.com',            // PLACEHOLDER (optional)
  address: '89-A, Gupta Enclave, Uttam Nagar, New Delhi-59',          // PLACEHOLDER copy from Google Maps
  hours: '',            // PLACEHOLDER e.g. 'Mon–Sat, 10:00 AM – 7:00 PM'
  mapsLink: 'https://maps.app.goo.gl/9uTebJeWJFxskUXt9', // your listing
  mapsEmbedUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.332025562685!2d77.0452014!3d28.649775499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05bca4703c1d%3A0xa304a3edde3c44c4!2sManvi%20infratech!5e0!3m2!1sen!2sin!4v1791390778862!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',     // PLACEHOLDER: Google Maps > Share > Embed a map > copy the src="..." URL
  socials: [],          // e.g. [{ label: 'Instagram', href: 'https://instagram.com/yourpage' }]
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Office · Home · Commercial Interiors',
  title: 'Complete Interior Solutions for Beautiful Spaces',
  text: 'We design and transform homes and spaces through thoughtful interiors and custom woodwork — from the first idea to the finished room.',
  image: '', // PLACEHOLDER: e.g. '/images/hero.jpg' (put the file in /public/images)
}

export const about = {
  title: 'Interiors that are functional, elegant and made for you',
  paragraphs: [
    // PLACEHOLDER copy – replace with your Google Maps business description / own story
    'Manvi Infratech is an interior design and execution company offering complete interior solutions for homes, offices and commercial spaces.',
    'We focus on custom, wood-based interior work — sofas, TV panels, wardrobes, modular kitchens and more — planned around how you live and work.',
  ],
  image: '/images/about.png', // PLACEHOLDER
  points: ['Office Interiors', 'Home Interiors', 'Commercial Interiors'],
}

// Remove any service you do not offer.
export const services = [
  { icon: Home, title: 'Complete Home Interiors', text: 'Planning and execution of entire homes, room by room.' },
  { icon: ChefHat, title: 'Modular Kitchen', text: 'Practical, well-organised kitchens built to fit your space.' },
  { icon: DoorClosed, title: 'Wardrobes', text: 'Custom wardrobes with storage planned around your needs.' },
  { icon: Tv, title: 'TV Panels', text: 'Wall-mounted TV units and panelling for living areas and bedrooms.' },
  { icon: Sofa, title: 'Sofa & Furniture', text: 'Comfortable sofas and furniture to match your interior.' },
  { icon: BedDouble, title: 'Bedroom Interiors', text: 'Beds, headboards, storage and finishes for restful rooms.' },
  { icon: Armchair, title: 'Living Room Interiors', text: 'Welcoming living spaces that bring layout and style together.' },
  { icon: Hammer, title: 'Wooden Interior Work', text: 'Quality woodwork and carpentry for every part of the interior.' },
  { icon: Ruler, title: 'Custom Furniture', text: 'Made-to-measure pieces designed for your space.' },
  { icon: Building2, title: 'Office Interiors', text: 'Functional workspaces and commercial interiors.' },
  { icon: LampCeiling, title: 'False Ceiling', text: 'Ceiling designs with integrated lighting.' },
  { icon: PanelsTopLeft, title: 'Wall Panels & Decor', text: 'Decorative wall panels and finishing details.' },
]

export const galleryCategories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'TV Unit', 'Wardrobe', 'Woodwork', 'Furniture', 'Complete Interiors']

// Add real photos: set `image: '/images/yourfile.jpg'` (file in /public/images).
// Empty `image` shows a "replace me" placeholder. Add/remove rows freely.
export const gallery = [
  { title: 'Living Room', category: 'Living Room', image: '/images/livingroom.jpg' },
  { title: 'Master Bedroom', category: 'Bedroom', image: '/images/bedroom.jpg' },
  { title: 'Modular Kitchen', category: 'Kitchen', image: '/images/kitchen.jpg' },
  { title: 'TV Unit', category: 'TV Unit', image: '/images/tvunit.jpg' },
  { title: 'Wardrobe', category: 'Wardrobe', image: '/images/wardrobe.jpg' },
  { title: 'Wood Panelling', category: 'Woodwork', image: '/images/woodpanelling.jpg' },
  { title: 'Sofa Set', category: 'Furniture', image: '/images/sofa.jpg' },
  { title: 'Full Home Interior', category: 'Complete Interiors', image: '/images/fullhome.jpg' },
  { title: 'Bedroom Storage', category: 'Bedroom', image: '/images/bedroomstorage.jpg' },
]

export const why = [
  { icon: Layers, title: 'Complete Interior Solutions', text: 'One company for design, woodwork and execution.' },
  { icon: Palette, title: 'Customized Designs', text: 'Layouts and finishes planned around your space and taste.' },
  { icon: Hammer, title: 'Quality Workmanship', text: 'Careful craftsmanship in every joint and finish.' },
  { icon: Sparkles, title: 'Modern Designs', text: 'Clean, contemporary looks that suit Indian homes.' },
  { icon: Gem, title: 'Attention to Detail', text: 'Small details handled with care.' },
  { icon: ClipboardCheck, title: 'End-to-End Execution', text: 'From concept to handover, handled together.' },
]

// Paste REAL Google reviews only. Example shape:
// { name: 'Customer Name', rating: 5, text: 'Review text…', source: 'Google Review' }
export const testimonials = []
