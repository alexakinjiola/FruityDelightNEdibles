// Hand-drawn-style line icons used across menu cards and value tiles.
// All use currentColor so they inherit color from their wrapper.

export function IconSmoothie(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path d="M12 8h16l-2 22a3 3 0 0 1-3 2.7h-6a3 3 0 0 1-3-2.7L12 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M13 15h14" stroke="currentColor" strokeWidth="2" />
      <path d="M24 6c0 1.5-1.2 1.8-1.2 3.2S24 12 24 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function IconMocktail(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path d="M9 9h22l-9 12v9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 34h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 21v9" stroke="currentColor" strokeWidth="2" />
      <circle cx="27" cy="11" r="1.6" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function IconMilkshake(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path d="M14 14h12v16a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V14Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 14c0-3 2-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="2" />
      <path d="M22 6v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function IconParfait(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path d="M13 15h14v15a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2V15Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M13 22h14M13 27h14" strokeWidth="1.6" stroke="currentColor" opacity="0.6" />
      <path d="M16 15c0-3 1.8-6 4-6s4 3 4 6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconJuice(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path d="M14 12h12l-1.5 20a2.5 2.5 0 0 1-2.5 2.3h-4a2.5 2.5 0 0 1-2.5-2.3L14 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 12h16" stroke="currentColor" strokeWidth="2" />
      <path d="M20 6c-2 1-2 3 0 4s2 3 0 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function IconSalad(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path d="M8 18h24a2 2 0 0 1 2 2c0 7-6.7 13-13 13S8 27 8 20a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 18c0-4 2.5-8 6-8s6 4 6 8" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <circle cx="16" cy="23" r="1.4" fill="currentColor" />
      <circle cx="24" cy="25" r="1.4" fill="currentColor" />
      <circle cx="20" cy="28" r="1.4" fill="currentColor" />
    </svg>
  );
}

export const menuIcons = {
  smoothie: IconSmoothie,
  mocktail: IconMocktail,
  milkshake: IconMilkshake,
  parfait: IconParfait,
  juice: IconJuice,
  salad: IconSalad,
};

export function IconService(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
      <path d="M15 26v-3a9 9 0 0 1 18 0v3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="12" y="25" width="6" height="9" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
      <rect x="30" y="25" width="6" height="9" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M18 34c0 3 2.5 4.5 6 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconExcellence(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="24" cy="18" r="10" stroke="currentColor" strokeWidth="2.2" />
      <path d="M18 26.5 15 40l9-5 9 5-3-13.5" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconInnovation(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M24 6c-6.6 0-12 5.4-12 12 0 4.6 2.6 7 4.6 9 1.3 1.3 2.4 2.4 2.4 4h10c0-1.6 1.1-2.7 2.4-4 2-2 4.6-4.4 4.6-9 0-6.6-5.4-12-12-12Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M19 39h10M20.5 43h7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconIntegrity(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="24" cy="24" r="8.5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
    </svg>
  );
}

export const valueIcons = {
  service: IconService,
  excellence: IconExcellence,
  innovation: IconInnovation,
  integrity: IconIntegrity,
};

export function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-1.9c1.8 1 3.9 1.6 6.1 1.6h.2c6.6 0 12-5.4 12-12S22.6 3 16 3Zm0 21.9h-.2c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.6 1.2 1.2-4.5-.3-.5C5 17.7 4.4 15.9 4.4 15c0-6.4 5.2-11.6 11.6-11.6s11.6 5.2 11.6 11.6S22.4 24.9 16 24.9Zm6.4-8.7c-.4-.2-2.1-1-2.4-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.3.1-.5 0-.7-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.7 5.9 5.1.8.3 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.1-.3-.2-.6-.4Z" />
    </svg>
  );
}
