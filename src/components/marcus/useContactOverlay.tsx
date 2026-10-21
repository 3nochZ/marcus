import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = { open: boolean; setOpen: (v: boolean) => void };
const ContactCtx = createContext<Ctx | null>(null);

export function ContactOverlayProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <ContactCtx.Provider value={{ open, setOpen }}>{children}</ContactCtx.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useContactOverlay() {
  const ctx = useContext(ContactCtx);
  if (!ctx) throw new Error("useContactOverlay must be used within ContactOverlayProvider");
  return ctx;
}
