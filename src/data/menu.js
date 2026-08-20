// Core beverage & treat menu — shown as clickable cards with full detail modals
export const menuItems = [
  {
    id: "smoothies",
    category: "Beverages",
    name: "Smoothies",
    tagline: "Chilled & creamy",
    shortDesc:
      "Thick, fruit-packed blends finished with a splash of freshness — mango, strawberry, mixed berry and more.",
    longDesc:
      "Our smoothies are blended fresh to order from ripe, hand-picked fruit — no syrups, no shortcuts. Each cup is thick enough to eat with a spoon and light enough to feel good about. Perfect as a meal-on-the-go or a refreshing treat between classes or meetings.",
    highlights: [
      "Made fresh per order, never pre-batched",
      "No added preservatives",
      "Great as a light meal replacement",
      "Custom fruit combinations on request",
    ],
    flavours: ["Mango", "Strawberry", "Mixed Berry", "Banana & Groundnut", "Pineapple & Ginger"],
    bestFor: "Breakfast, gym recovery, hot afternoons",
    icon: "smoothie",
    tag: "chilled & creamy",
  },
  {
    id: "fresh-juices",
    category: "Beverages",
    name: "Fresh Juices",
    tagline: "Cold-pressed",
    shortDesc:
      "Cold, no-nonsense fruit in a glass — orange, watermelon, pineapple, and seasonal picks.",
    longDesc:
      "Straight fruit, straight to the glass. Our fresh juices are extracted daily in small batches, so what you're drinking was fruit that morning — not concentrate. A clean, hydrating option for anyone watching their sugar intake or just craving something real.",
    highlights: [
      "Extracted fresh every morning",
      "No added sugar or water dilution",
      "Seasonal fruit rotation",
      "Available in bottles for events",
    ],
    flavours: ["Orange", "Watermelon", "Pineapple", "Cucumber & Lime", "Carrot & Ginger"],
    bestFor: "Hydration, detox mornings, office deliveries",
    icon: "juice",
    tag: "cold-pressed",
  },
  {
    id: "mocktails",
    category: "Beverages",
    name: "Mocktails",
    tagline: "Party favourite",
    shortDesc:
      "Playful, alcohol-free mixes dressed up for birthdays, showers and every celebration in between.",
    longDesc:
      "All the drama of a cocktail menu, none of the alcohol. Our mocktails are layered, garnished and built to be photographed before they're sipped — a favourite for birthdays, baby showers, graduations and corporate mixers where everyone should feel included.",
    highlights: [
      "Instagram-worthy layered presentation",
      "Fully alcohol-free — safe for all ages",
      "Custom garnish and glassware for events",
      "Bulk pricing for parties",
    ],
    flavours: ["Sunset Splash", "Berry Fizz", "Tropical Punch", "Virgin Mojito", "Passion Cooler"],
    bestFor: "Birthdays, baby showers, corporate mixers",
    icon: "mocktail",
    tag: "party favourite",
  },
  {
    id: "milkshakes",
    category: "Beverages",
    name: "Milkshakes",
    tagline: "Crowd pleaser",
    shortDesc:
      "Creamy, generously topped, and always the first thing to disappear at any event.",
    longDesc:
      "Rich, cold and finished with a generous crown of toppings — our milkshakes are the kind that get people back in line for seconds. A guaranteed favourite for children's parties as much as adult get-togethers.",
    highlights: [
      "Thick, ice-cream based blend",
      "Topped with syrup, sprinkles or fruit",
      "Kid-favourite at every event",
      "Custom flavour requests welcome",
    ],
    flavours: ["Vanilla", "Chocolate", "Strawberry", "Oreo Crunch", "Caramel Toffee"],
    bestFor: "Kids' parties, dessert tables, treat days",
    icon: "milkshake",
    tag: "crowd pleaser",
  },
  {
    id: "fruit-parfait",
    category: "Treats",
    name: "Fruit Parfait",
    tagline: "Pretty & healthy",
    shortDesc:
      "Layered fruit, granola and cream — as pretty to look at as it is wholesome to eat.",
    longDesc:
      "Fresh fruit, crunchy granola and light cream, layered in a clear cup so every bite shows off its colours before you even taste it. A popular grab-and-go option for people who want something that feels indulgent but isn't.",
    highlights: [
      "Layered fresh in clear cups",
      "Balanced — fruit, crunch, cream",
      "Great grab-and-go breakfast",
      "Customisable fruit layers",
    ],
    flavours: ["Classic Berry", "Tropical Mix", "Banana & Honey", "Mango Delight"],
    bestFor: "Breakfast tables, brunch spreads, light dessert",
    icon: "parfait",
    tag: "pretty & healthy",
  },
  {
    id: "fruit-salad",
    category: "Treats",
    name: "Fruit Salad",
    tagline: "Fresh cut daily",
    shortDesc:
      "A fresh medley of seasonal fruit, cut and tossed daily — light, simple, satisfying.",
    longDesc:
      "No fillers, no syrup-soaked shortcuts — just a generous, colourful mix of seasonal fruit, cut fresh every day. A simple, satisfying way to get your fruit intake in, and a favourite side on any finger-food spread.",
    highlights: [
      "Cut fresh daily, never held over",
      "Seasonal fruit selection",
      "Light option alongside finger foods",
      "Great for large event trays",
    ],
    flavours: ["Classic Mix", "Tropical Mix", "Melon Medley"],
    bestFor: "Event trays, light lunches, side dish",
    icon: "salad",
    tag: "fresh cut daily",
  },
];

// Extended catering / event menu — additional finger foods mentioned across the brand's proposal
export const eventMenuItems = [
  {
    id: "grilled-chicken",
    name: "Grilled & Crispy Chicken",
    shortDesc: "Chargrilled or crispy-fried chicken served with seasoned chips and a dip.",
    longDesc:
      "Marinated, chargrilled or crispy-fried to order, and plated with golden chips and a house dip. A reliable centrepiece for any finger-food spread — corporate lunch or backyard party alike.",
    bestFor: "Corporate lunches, parties, campus outlets",
  },
  {
    id: "sandwiches",
    name: "Loaded Sandwiches",
    shortDesc: "Stacked, fresh-filled sandwiches — a satisfying, tidy finger-food option.",
    longDesc:
      "Generously stacked with fresh vegetables and a savoury filling, cut clean for easy serving. A go-to for meetings, small gatherings, and anyone who wants something filling without the mess.",
    bestFor: "Meetings, lunch boxes, small gatherings",
  },
  {
    id: "waffles-icecream",
    name: "Waffles & Ice Cream",
    shortDesc: "Warm, golden waffles topped with ice cream, syrup and fruit.",
    longDesc:
      "Crisp on the outside, soft in the middle, and finished with a scoop of ice cream, syrup and fresh fruit. A dessert-table favourite that works just as well for a weekend treat.",
    bestFor: "Dessert tables, weekend treats, kids' parties",
  },
  {
    id: "breadwarma",
    name: "Breadwarma",
    shortDesc: "A local favourite — soft bread wrapped around a spiced, savoury filling.",
    longDesc:
      "Our take on the popular street-favourite wrap — soft bread rolled around a spiced, savoury filling, toasted and sliced for easy sharing at any event.",
    bestFor: "Quick bites, campus events, casual gatherings",
  },
  {
    id: "pancakes",
    name: "Pan Cakes",
    shortDesc: "Fluffy pancakes, made fresh and served with your choice of topping.",
    longDesc:
      "Soft, fluffy pancakes made fresh to order, served with syrup, fruit or a topping of your choice. A brunch and breakfast-table staple.",
    bestFor: "Breakfast trays, brunch spreads",
  },
];

export const coreValues = [
  {
    title: "Quality Customer Service",
    desc: "Friendly, responsive, and always ready to make your order right.",
    icon: "service",
  },
  {
    title: "Excellence",
    desc: "Consistent quality in every blend, plate and grilled bite.",
    icon: "excellence",
  },
  {
    title: "Innovation",
    desc: "New flavours and formats, tested until they earn a spot on the menu.",
    icon: "innovation",
  },
  {
    title: "Integrity",
    desc: "What's promised on the menu is exactly what lands on your table.",
    icon: "integrity",
  },
];

export const healthBenefits = [
  "Daily fruit & veg, in one glass",
  "Boosts energy & vitality",
  "Packed with vitamins",
  "Aids digestion & detox",
  "Fits a healthy lifestyle",
  "Supports immunity",
];

export const locations = [
  {
    title: "Ibadan, Oyo State",
    desc: "Ajongolo community, Akobo-Ojurin — our home base, open daily.",
    isBase: true,
  },
  {
    title: "Osun State",
    desc: "Delivery and event catering available across Osun.",
    isBase: false,
  },
  {
    title: "Ogun State",
    desc: "Delivery and event catering available across Ogun.",
    isBase: false,
  },
];

export const faqs = [
  {
    q: "How do I place an order?",
    a: "Tap any \"Order on WhatsApp\" button on this site, or use the Quick Order tool on the Contact page — it builds your message for you and opens WhatsApp with everything pre-filled, ready to send.",
  },
  {
    q: "Do you cater for events and corporate bookings?",
    a: "Yes. Beyond our core drinks menu, we cater grilled chicken, sandwiches, waffles, pancakes and breadwarma for parties, corporate functions and campus outlets. Message us with your date, headcount and location for a quote.",
  },
  {
    q: "Which areas do you deliver to?",
    a: "We're based in Ibadan, Oyo State, and deliver and cater for events across Oyo, Osun and Ogun States.",
  },
  {
    q: "What time do you start taking orders?",
    a: "Sales and deliveries run from 9am daily. For events, we work around your schedule — just let us know your timing in advance.",
  },
  {
    q: "Can I customise flavours for a large order?",
    a: "Absolutely — most of our drinks and treats can be adjusted in flavour and sweetness for bulk or event orders. Mention your preference when you message us.",
  },
];

export const WHATSAPP_NUMBER = "2348067191065";

export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
