//所有想更改的內容都在這個文件中

// The one image on the home page. Make it your strongest.
export const heroPhotos = [
  { src: '/photos/01.jpg', alt: 'Bangkok' },
  { src: '/photos/02.jpg', alt: 'Bangkok' },
  { src: '/photos/03.jpg', alt: 'Bangkok' },
  { src: '/photos/05.jpg', alt: 'Bangkok' },
  { src: '/photos/06.jpg', alt: 'Football' },
  { src: '/photos/07.jpg', alt: 'Football'},
  { src: '/photos/08.jpg', alt: 'Football'},
  { src: '/photos/09.jpg', alt: 'Concert'},
  { src: '/photos/10.jpg', alt: 'Concert'},
]

// Small highlight block, second row of the hero area.
export const stats = [
  { value: '500+', label: 'Sessions shot' },
  { value: '4',    label: 'Years shooting' },
  { value: '4.9',  label: 'Average rating' }, //網頁中設置評價及評分（利用已有評價去計算）
  { value: '24h',  label: 'Reply time' },
]

export const categories = ['Portrait', 'Sports', 'Landscape', 'Concert']

export const recentWork = [
  {
    category: 'Portrait',
    src: '/photos/portrait/DSCF6833.JPG',
    alt: 'A portrait taken in shade against a white wall',
    title: 'Faces, unscripted',
    blurb: 'Quiet light and honest expressions, one person at a time.',
  },
  {
    category: 'Sports',
    src: '/photos/07.jpg',
    alt: 'An athlete mid-motion on the field',
    title: 'Frozen in motion',
    blurb: 'The split-second burst of effort, caught before it passes.',
  },
  {
    category: 'Landscape',
    src: '/photos/03.jpg',
    alt: 'Rice terraces in the East Rift Valley',
    title: 'Where the light lands',
    blurb: 'Wide open spaces around Hualien, shot at the hours that matter.',
  },
  {
    category: 'Concert',
    src: '/photos/10.jpg',
    alt: 'A performer under stage lighting',
    title: 'Sound made visible',
    blurb: 'Stage light, crowd energy, and the moments between songs.',
  },
]

export const photos = [
  { src: '/photos/portrait/DSCF6833.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF6347.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF6426.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF6435.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF6458.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF6680.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF6730.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF6819.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF6838.JPG', category: 'Portrait'},
  { src: '/photos/portrait/2O0A8642.JPG', category: 'Portrait'},
  { src: '/photos/portrait/2O0A8647.JPG', category: 'Portrait'},
  { src: '/photos/portrait/2O0A8664.JPG', category: 'Portrait'},
  { src: '/photos/portrait/2O0A8851.JPG', category: 'Portrait'},
  { src: '/photos/portrait/2O0A8987.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF5762.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF5766.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF5774.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF5776.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF5796.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF7095.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF7131.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF7144.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF7161.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF7182.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF7245.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF7320.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF7415.JPG', category: 'Portrait'},
  { src: '/photos/portrait/DSCF7540.JPG', category: 'Portrait'},
  { src: '/photos/sports/2O0A5698.JPG', category: 'Sports'},
  { src: '/photos/sports/2O0A5838.JPG', category: 'Sports'},
  { src: '/photos/sports/9A552CD3-06EE-4642-A14A-912AE288A6D2.jpeg', category: 'Sports'},
  { src: '/photos/sports/2O0A6019.JPG', category: 'Sports'},
  { src: '/photos/sports/405188CB-EC35-49D1-8E77-50BBD0A395C4.jpeg', category: 'Sports'},
  { src: '/photos/landscape/EA94BAB4-0055-47AE-B48C-EF3DD99C85F5_1_105_c.jpeg', category: 'Landscape'},
  { src: '/photos/landscape/9B2A0B92-C0E6-4D56-88F5-060A107FC6A3_1_105_c.jpeg', category: 'Landscape'},
  { src: '/photos/landscape/9F29F4D7-0CCD-4696-A020-EE3EB82E9D4B_1_105_c.jpeg', category: 'Landscape'},
  { src: '/photos/landscape/2A47E4E5-10EB-4583-AA9D-E386F335C4B8_1_105_c.jpeg', category: 'Landscape'},
  { src: '/photos/landscape/5FEB698F-3CCA-46FB-B4D7-0D04ADABAB58_1_105_c.jpeg', category: 'Landscape'},
  { src: '/photos/landscape/6C6FFAEB-7521-4FFC-9AF6-89B6BFB3E1A0_1_105_c.jpeg', category: 'Landscape'},
  { src: '/photos/landscape/D5FAE554-B29A-4D74-8DAF-B854225C4611_1_105_c.jpeg', category: 'Landscape'},
  { src: '/photos/concert/B6CD49C6-A2ED-4FBF-A6E2-D1007C3933DF_4_5005_c.jpeg', category: 'Concert'},
  { src: '/photos/concert/79D3A18F-9EFA-468D-99CF-F1D2FE9FA0D7_1_105_c.jpeg', category: 'Concert'},
  { src: '/photos/concert/93DA88E7-C704-46C8-BEB6-FC528EF3991C_1_105_c.jpeg', category: 'Concert'},
  { src: '/photos/concert/C48005D7-B7FD-4101-81B6-16A5F2CD5D4C_1_105_c.jpeg', category: 'Concert'},
  { src: '/photos/concert/F534F0F7-B73A-4496-93C8-10793A994E33.jpeg', category: 'Concert'},
  { src: '/photos/concert/DD197946-FE4F-4F14-8218-DFA1EC98C27C_1_105_c.jpeg', category: 'Concert'},
  { src: '/photos/concert/1721FA72-9FB1-4FB2-9502-D9F38C7807A8_1_105_c.jpeg', category: 'Concert'},
  { src: '/photos/concert/85AEB383-44B5-457B-A570-FB6F1FC530B5_1_105_c.jpeg', category: 'Concert'},
  { src: '/photos/concert/A04C4537-7E02-4E3C-ABA0-25C9A02CB754_1_102_o.jpeg', category: 'Concert'},
  { src: '/photos/concert/657B328A-1757-4DBC-9029-024A7979B8BC_1_102_o.jpeg', category: 'Concert'},
  { src: '/photos/concert/C8C76B43-36A7-4FB9-BD05-803A53F04CB6.jpeg', category: 'Concert'},
  { src: '/photos/concert/F4AFF22F-D77D-4036-AD90-E08F036D8456_1_102_o.jpeg', category: 'Concert'},
]

export const howItWorks = [
  { icon: 'search',   title: 'Choose a session', text: 'Portrait, sports, or action shooting — pick what fits.' },
  { icon: 'calendar', title: 'Pick a date',       text: 'Tell me your preferred date and a backup date.' },
  { icon: 'card',     title: 'Confirm details',   text: "I'll reply within 48 hours to lock in the plan." },
  { icon: 'camera',   title: 'Shoot day',         text: 'We meet, shoot, and I handle the rest.' },
]

export const pricing = [
  { name: 'Portrait', price: 'from NT$1,500', detail: ' 2 hours, one location, 25-30 edited images' },
  { name: 'Sports Photography',  price: 'from NT$1000', detail: '1 hours, one location, 50-70 edited images' },
]

// The two cards shown in the Sessions section on the homepage.
// src is chosen by hand — pick whichever photo best represents
// each service, independent of the Gallery's category filters.
export const sessionTypes = [
  {
    name: 'Portrait',
    src: '/photos/cover-portrait.jpg',           // ← swap for your chosen cover photo
    alt: 'A portrait taken in shade against a white wall',
    price: pricing.find((p) => p.name === 'Portrait')?.price,
  },
  {
    name: 'Sports Photography',
    src: '/photos/cover-sports.jpg',           // ← swap for your chosen cover photo
    alt: 'An athlete mid-motion on the field',
    price: pricing.find((p) => p.name === 'Sports Photography')?.price,
  },
]

// ── The floating quick-check card in the hero ──────────────
export const quickBookingForm = {
  sessionTypeEntry: '', // e.g. 'entry.123456789'
  dateEntry: '',        // e.g. 'entry.987654321'
}

export const highlight = {
  image: '/photos/03.jpg',
  alt: 'A portrait taken in shade against a white wall',
  title: 'Every session, crafted with care',
  text: 'From first light to final edit, every shoot is planned around what actually flatters you — the place, the time of day, the mood.',
}


// Testimonials carousel. Replace with real client quotes as you get them.
export const testimonials = [
  {
    name: 'ENCHI C.',
    photo: '/photos/me.jpg', // a real client photo, or delete this line to use initials instead
    quote: "The session felt completely relaxed — I've never enjoyed being photographed before this.",
  },
]

// Big closing call-to-action banner.
export const closingCta = {
  image: '/photos/08.jpg',
  alt: 'The Pacific coastline from Highway 11',
  title: 'Your story deserves to be told',
}

export const site = {
  name: 'ENCHI CHANG',
  tagline: 'Capturing explosive power and soul. Focused on portrait and sports photography.',
  email: 'enchichang1104@gmail.com',
  instagram: 'https://www.instagram.com/photoenchigrapher?stkn=MXNpc3l3ZDV0c2M5cw%3D%3D&utm_source=qr',

  // ── Your Google Form ──────────────────────────────────────
  formLink: 'https://forms.gle/REPLACE_ME',
  formEmbed: 'https://forms.gle/tjtMUed4PJh5e9uB8',

  aboutTitle: 'EN-CHI CHANG',

  about: [
    "I am a portrait and sports photographer based in Melbourne, Australia. My style blends precise motion capture with deep, story-driven character portraiture. Whether it is the intensity on a basketball court or the high-speed thrill of a football match, I am dedicated to capturing those fleeting, explosive moments.",
    "At the same time, I love using portraiture to record the unique texture of every individual soul. I am currently a graduate student pursuing a degree in Software Engineering.",
  ],

  pricing: [
    { name: 'Portrait', price: 'from AUD$200', detail: ' 2 hours, one location, 30-40 edited images' },
    { name: 'Sports Photography',  price: 'from AUD$100', detail: '1 hours, one location, 50-70 edited images' },
  ],
}

// About 頁右側的兩張照片：第一張大、第二張小
export const aboutPhotos = [
  { src: '/photos/me.jpg', alt: 'ENCHI CHANG 的肖像照' },
  { src: '/photos/04.jpg', alt: '球場上的運動瞬間' },
]