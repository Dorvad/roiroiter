"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";

export interface CartLine {
  key: string;
  artworkId: string;
  title: string;
  image: string;
  kind: string;
  variantLabel: string;
  frameLabel?: string;
  unitPrice: number;
  qty: number;
}

type Action =
  | { type: "add"; line: CartLine }
  | { type: "remove"; key: string }
  | { type: "qty"; key: string; qty: number }
  | { type: "clear" }
  | { type: "hydrate"; lines: CartLine[] };

function reducer(state: CartLine[], action: Action): CartLine[] {
  switch (action.type) {
    case "add": {
      const existing = state.find((l) => l.key === action.line.key);
      if (existing) {
        return state.map((l) =>
          l.key === action.line.key ? { ...l, qty: l.qty + action.line.qty } : l,
        );
      }
      return [...state, action.line];
    }
    case "remove":
      return state.filter((l) => l.key !== action.key);
    case "qty":
      return state
        .map((l) => (l.key === action.key ? { ...l, qty: Math.max(1, action.qty) } : l))
        .filter((l) => l.qty > 0);
    case "clear":
      return [];
    case "hydrate":
      return action.lines;
    default:
      return state;
  }
}

interface CartContextValue {
  lines: CartLine[];
  count: number;
  total: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (line: CartLine) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "rr-cabinet-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, dispatch] = useReducer(reducer, []);
  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "hydrate", lines: JSON.parse(raw) as CartLine[] });
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines, ready]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const add = useCallback((line: CartLine) => {
    dispatch({ type: "add", line });
    setIsOpen(true);
  }, []);
  const remove = useCallback((key: string) => dispatch({ type: "remove", key }), []);
  const setQty = useCallback(
    (key: string, qty: number) => dispatch({ type: "qty", key, qty }),
    [],
  );
  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  const count = useMemo(() => lines.reduce((n, l) => n + l.qty, 0), [lines]);
  const total = useMemo(
    () => lines.reduce((n, l) => n + l.qty * l.unitPrice, 0),
    [lines],
  );

  const value: CartContextValue = {
    lines,
    count,
    total,
    isOpen,
    open,
    close,
    add,
    remove,
    setQty,
    clear,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
