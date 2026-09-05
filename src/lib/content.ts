export const PERKS = [
  {
    title: "Pay at your own pace",
    body: "Set aside what you can, whenever you can. Your vacation gets funded before you ever book it.",
  },
  {
    title: "Two years to use your credit",
    body: "Life happens. Your saved credit stays valid for two years, so there's no rush to travel.",
  },
  {
    title: "First to know",
    body: "Members hear about new destinations and packages before they're announced to the public.",
  },
  {
    title: "Save up to $100",
    body: "Active DK Travel Club members save up to $100 off the price of their package.",
  },
  {
    title: "Pause anytime",
    body: "Plans change. Pause your savings plan whenever you need to, no penalty.",
  },
  {
    title: "Pick your destination",
    body: "Your savings aren't locked to one trip. Choose where you go when you're ready.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Join DK Travel Club",
    body: "Sign up and set a savings plan that fits your budget — weekly, biweekly, or monthly.",
  },
  {
    step: "02",
    title: "Build your credit",
    body: "Every contribution adds to your travel credit. Watch your balance grow toward your next trip.",
  },
  {
    step: "03",
    title: "Choose your destination",
    body: "Browse Caribbean destinations and packages, and pick the trip that matches your credit and your dates.",
  },
  {
    step: "04",
    title: "Travel, paid in advance",
    body: "Book your package using your saved credit and go — no surprise balance waiting at checkout.",
  },
];

export type Destination = {
  slug: string;
  name: string;
  country: string;
  blurb: string;
  gradient: string;
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "haiti",
    name: "Haiti",
    country: "Cap-Haïtien & Labadee",
    blurb: "The heart of Konpa — beaches, culture, and music where it all began.",
    gradient: "from-gold via-gold-dark to-black",
  },
  {
    slug: "dominican-republic",
    name: "Dominican Republic",
    country: "Punta Cana",
    blurb: "All-inclusive resorts, white-sand beaches, and year-round sun.",
    gradient: "from-cream-dark via-gold to-gold-dark",
  },
  {
    slug: "jamaica",
    name: "Jamaica",
    country: "Montego Bay",
    blurb: "Island rhythm, waterfalls, and some of the Caribbean's best resorts.",
    gradient: "from-black via-gold-dark to-gold",
  },
  {
    slug: "bahamas",
    name: "Bahamas",
    country: "Nassau",
    blurb: "Turquoise water and island-hopping just a short flight from home.",
    gradient: "from-gold-light via-gold to-black",
  },
  {
    slug: "turks-and-caicos",
    name: "Turks & Caicos",
    country: "Providenciales",
    blurb: "Grace Bay's powder-soft sand and some of the clearest water anywhere.",
    gradient: "from-cream-dark via-gold-dark to-black",
  },
  {
    slug: "aruba",
    name: "Aruba",
    country: "Oranjestad",
    blurb: "One Happy Island — steady sun, calm water, and easy travel.",
    gradient: "from-gold via-black to-gold-dark",
  },
];

export const FAQS = [
  {
    q: "How does the DK Travel Club savings plan work?",
    a: "You choose a contribution amount and schedule (weekly, biweekly, or monthly). Every payment builds your travel credit balance, which you apply toward a Destination Konpa package whenever you're ready to book.",
  },
  {
    q: "What happens if I don't travel right away?",
    a: "No problem — your credit stays valid for two years from the date it's added, so you can save on your own timeline.",
  },
  {
    q: "Can I pause my plan?",
    a: "Yes. You can pause contributions at any time from your member dashboard and resume whenever you're ready.",
  },
  {
    q: "Can I change my destination after I start saving?",
    a: "Your credit isn't tied to a single trip. You can apply it to any available destination or package at the time you book.",
  },
  {
    q: "How do I become a DK Ambassador?",
    a: "Sign up through the Ambassador page. Once approved, you'll get a referral link and dashboard to track referrals and commissions.",
  },
  {
    q: "How do I reach customer support?",
    a: "Call 321-978-2525 or email info@destinationkonpa.com — our team typically responds within one business day.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Saving a little each week made booking our trip painless — no big lump sum, no stress.",
    name: "DK Travel Club Member",
  },
  {
    quote:
      "Being able to pause my plan when things got tight and pick it back up later was a game changer.",
    name: "DK Travel Club Member",
  },
  {
    quote:
      "I referred three friends as an Ambassador and the commission covered part of my own trip.",
    name: "DK Ambassador",
  },
];
