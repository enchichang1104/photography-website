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
// This can genuinely pre-fill your real Google Form, not just
// link to it blank. To wire that up:
//   1. Open your live Google Form.
//   2. Click the ⋮ menu (top right) → "Get pre-filled link".
//   3. Fill in a sample answer for "Type of session" and submit.
//   4. Copy the long URL it gives you. It looks like
//      ...viewform?usp=pp_url&entry.123456789=Portrait
//   5. The number after entry. for that question is what goes
//      below. Repeat for the date question.
// Leave either blank and that field is simply skipped — the
// button still works, it just opens the form unfilled.
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
  tagline: '紀錄瞬間的爆發與靈魂。專注於人像與運動攝影',
  email: 'chang20021104@gmail.com',
  instagram: 'https://www.instagram.com/photoenchigrapher?stkn=MXNpc3l3ZDV0c2M5cw%3D%3D&utm_source=qr',

  // ── Your Google Form ──────────────────────────────────────
  // 1. Open your form → Send → the link icon (🔗) → copy → formLink
  // 2. Open your form → Send → the < > icon → copy ONLY the src="..."
  //    value out of the iframe → formEmbed
  formLink: 'https://forms.gle/REPLACE_ME',
  formEmbed: 'https://forms.gle/tjtMUed4PJh5e9uB8',

  about: [
    "我是一名人像與運動攝影師，目前駐點於台灣花蓮。我的攝影風格結合了精準的動態捕捉與深刻的人物故事刻畫。無論是在籃球場上的揮汗瞬間、足球場上的極速奔馳，我致力於捕捉那些稍縱即逝的爆發性時刻。",
    "同時，我也喜歡透過人像來紀錄每個靈魂獨特的質感。目前軟體工程學系的研究生",
  ],

  pricing: [
    { name: 'Portrait', price: 'from NT$1,500', detail: ' 2 hours, one location, 25-30 edited images' },
    { name: 'Sports Photography',  price: 'from NT$1000', detail: '1 hours, one location, 50-70 edited images' },
  ],
}

// ── Your photographs ────────────────────────────────────────
// Put your image files in  public/photos/  then list them here.
// The path always starts with /photos/ — no "public" in the path.
//
// category  must match one of the categories below.
// alt       describes the picture. Screen readers read it out loud
//           and Google reads it too, so write a real sentence.

// export const categories = ['Portrait', 'Sports']




