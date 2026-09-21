// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE FIRST. Almost everything you want to change
//  about the site lives here, so you don't have to hunt through
//  the components.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Your Name',
  tagline: 'Portrait and landscape photography in Hualien, Taiwan',
  email: 'hello@yourdomain.com',
  instagram: 'https://instagram.com/yourhandle',

  // ── Your Google Form ──────────────────────────────────────
  // 1. Open your form → Send → the link icon (🔗) → copy → formLink
  // 2. Open your form → Send → the < > icon → copy ONLY the src="..."
  //    value out of the iframe → formEmbed
  formLink: 'https://forms.gle/REPLACE_ME',
  formEmbed: 'https://docs.google.com/forms/d/e/REPLACE_ME/viewform?embedded=true',

  about: [
    "I'm a photographer based in Hualien. I started shooting because I wanted to remember what the light did on the coast road in the late afternoon, and I never really stopped.",
    "I work slowly and quietly. Most of my sessions are two or three hours, outdoors, and the best frames usually arrive once people forget I'm there. If that sounds like what you want, get in touch.",
  ],

  pricing: [
    { name: 'Portrait session', price: 'from NT$6,000', detail: '2 hours, one location, 25 edited images' },
    { name: 'Couple or family',  price: 'from NT$8,000', detail: '2 hours, one location, 40 edited images' },
    { name: 'Wedding',           price: 'from NT$35,000', detail: 'Full day coverage, 400+ edited images' },
    { name: 'Commercial',        price: 'On request', detail: 'Product, venue and editorial work' },
  ],
}

// ── Your photographs ────────────────────────────────────────
// Put your image files in  public/photos/  then list them here.
// The path always starts with /photos/ — no "public" in the path.
//
// category  must match one of the categories below.
// alt       describes the picture. Screen readers read it out loud
//           and Google reads it too, so write a real sentence.

export const categories = ['Portrait', 'Landscape', 'Event']

export const photos = [
  { src: '/photos/01.jpg', category: 'Portrait',  alt: 'A woman laughing on a beach at sunset' },
  { src: '/photos/02.jpg', category: 'Landscape', alt: 'Morning mist over Taroko Gorge' },
  { src: '/photos/03.jpg', category: 'Portrait',  alt: 'A man in a doorway, side lit' },
  { src: '/photos/04.jpg', category: 'Event',     alt: 'Guests dancing at a wedding reception' },
  { src: '/photos/05.jpg', category: 'Landscape', alt: 'Rice terraces in the East Rift Valley' },
  { src: '/photos/06.jpg', category: 'Portrait',  alt: 'A child running through tall grass' },
  { src: '/photos/07.jpg', category: 'Event',     alt: 'A bride adjusting her dress before the ceremony' },
  { src: '/photos/08.jpg', category: 'Landscape', alt: 'The Pacific coastline from Highway 11' },
  { src: '/photos/09.jpg', category: 'Portrait',  alt: 'A portrait taken in shade against a white wall' },
]

// The one image on the home page. Make it your strongest.
export const heroPhoto = { src: '/photos/01.jpg', alt: 'A woman laughing on a beach at sunset' }
