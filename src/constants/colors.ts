export const COLORS = {
  primary: {
    main: '#00F0FF',
    hover: 'rgba(0, 240, 255, 0.9)',
    glow: 'rgba(0, 240, 255, 0.3)',
  },
  secondary: {
    main: '#7C3AED',
    hover: 'rgba(124, 58, 237, 0.9)',
    glow: 'rgba(124, 58, 237, 0.3)',
  },
  gradients: {
    primary: {
      text: 'from-[#00F0FF] via-[#00F0FF]/80 to-[#00F0FF]/60',
      background: 'from-[#0A0A0A] via-[#0A0A2A] to-[#0A0A0A]',
      glow: 'from-[#00F0FF]/10 to-transparent',
    },
    secondary: {
      text: 'from-[#7C3AED] via-[#00F0FF] to-[#7C3AED]',
      background: 'from-[#0A0A0A] via-[#1A0A2A] to-[#0A0A0A]',
      glow: 'from-[#7C3AED]/10 to-transparent',
    },
    header: {
      text: 'from-[#00F0FF] via-[#7C3AED] to-[#00F0FF]',
      hover: 'from-[#00F0FF] via-[#7C3AED]/90 to-[#00F0FF]',
    },
  },
  background: {
    dark: '#0A0A0A',
    darker: '#050505',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#CCCCCC',
    muted: '#999999',
  },
} as const;