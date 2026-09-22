// A tiny hand-rolled icon set — keeps the project free of an extra
// dependency for four simple glyphs.
const paths = {
  clock: 'M12 7v5l3 3 M12 2a10 10 0 1 0 .001 0Z',
  sun:   'M12 5V3M12 21v-2M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4 M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
  heart: 'M12 20s-7-4.6-9.3-9C.8 7.8 2.7 4 6.3 4 8.6 4 10.6 5.4 12 7c1.4-1.6 3.4-3 5.7-3 3.6 0 5.5 3.8 3.6 7-2.3 4.4-9.3 9-9.3 9Z',
  tag:   'M20 12.5 12.5 20a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 2 11.6V4h7.6a2 2 0 0 1 1.4.6l9 9a2 2 0 0 1 0 2.9Z M7 8h.01',
  search:   'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z M21 21l-4.3-4.3',
  calendar: 'M7 3v4M17 3v4M3.5 9h17M4 6h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z',
  card:     'M3 8h18M3 6h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z M6 16h4',
  camera:   'M4 8h3l2-2h6l2 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
}

export default function Icon({ name, size = 26 }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name] || ''} />
    </svg>
  )
}

