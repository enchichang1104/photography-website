//所有想更改的內容都在這個文件中

// Small highlight block, second row of the hero area.
export const stats = [
  { value: '500+', label: 'Sessions shot' },
  { value: '4',    label: 'Years shooting' },
  { value: '4.9',  label: 'Average rating' }, //網頁中設置評價及評分（利用已有評價去計算）
  { value: '24h',  label: 'Reply time' },
]

export const howItWorks = [
  { icon: 'search',   title: 'Choose a session', text: 'Portrait, sports, or action shooting — pick what fits.' },
  { icon: 'calendar', title: 'Pick a date',       text: 'Tell me your preferred date and a backup date.' },
  { icon: 'card',     title: 'Confirm details',   text: "I'll reply within 48 hours to lock in the plan." },
  { icon: 'camera',   title: 'Shoot day',         text: 'We meet, shoot, and I handle the rest.' },
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

// The four-icon "why choose us" row.
export const features = [
  { icon: 'clock',  title: 'Fast turnaround',   text: 'Edited gallery within 7 days, always.' },
  { icon: 'sun',    title: 'Natural light',     text: 'Shot outdoors, in the light that suits you.' },
  { icon: 'heart',  title: 'Personal approach', text: 'Every session is planned around you.' },
  { icon: 'tag',    title: 'Honest pricing',    text: 'Clear rates, no surprises after the shoot.' },
]

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

// One photo, used as the hero background. Pick your strongest,
// widest shot — something with room at the top or center for text
// to sit over without covering a face.
export const heroBackground = {
  src: '/photos/03.jpg',
  alt: 'The Pacific coastline from Highway 11',
  focus: 'center 40%',
  focusMobile: 'center 30%',
}

// The one image on the home page. Make it your strongest.
export const heroPhotos = [
  { src: '/photos/01.jpg', alt: 'Bangkok' },
  { src: '/photos/02.jpg', alt: 'Bangkok' },
  { src: '/photos/03.jpg', alt: 'Bangkok' },
  { src: '/photos/04.jpg', alt: 'Bangkok' },
  { src: '/photos/05.jpg', alt: 'Bangkok' },
  { src: '/photos/06.jpg', alt: 'Football' },
  { src: '/photos/07.jpg', alt: 'Football'},
  { src: '/photos/08.jpg', alt: 'Football'},
  { src: '/photos/09.jpg', alt: 'Concert'},
  { src: '/photos/10.jpg', alt: 'Concert'},
]
