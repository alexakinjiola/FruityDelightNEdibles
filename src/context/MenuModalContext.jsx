import { createContext, useContext, useState, useCallback } from "react";

const MenuModalContext = createContext(null);

export function MenuModalProvider({ children }) {
  const [activeItem, setActiveItem] = useState(null);

  const openItem = useCallback((item) => setActiveItem(item), []);
  const closeItem = useCallback(() => setActiveItem(null), []);

  return (
    <MenuModalContext.Provider value={{ activeItem, openItem, closeItem }}>
      {children}
    </MenuModalContext.Provider>
  );
}

export function useMenuModal() {
  const ctx = useContext(MenuModalContext);
  if (!ctx) throw new Error("useMenuModal must be used within MenuModalProvider");
  return ctx;
}
