import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { WHATSAPP_NUMBER } from "@/data/products";

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("kds_cart")) || [];
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("kds_cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product, variant) => {
    const key = `${product.id}__${variant.label}`;
    setItems((prev) => {
      const found = prev.find((i) => i.key === key);
      if (found) return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + 1 } : i));
      return [
        ...prev,
        {
          key,
          id: product.id,
          name: product.name,
          img: product.img,
          variant: variant.label,
          price: variant.price,
          qty: 1,
        },
      ];
    });
  };

  const updateQty = (key, delta) =>
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );

  const removeItem = (key) => setItems((prev) => prev.filter((i) => i.key !== key));
  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);
  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  const checkout = () => {
    const lines = ["Hello Kali Dass & Sons! I would like to place an order:", ""];
    items.forEach((i) => lines.push(`- ${i.name} (${i.variant}) x ${i.qty} = Rs. ${i.price * i.qty}`));
    lines.push("", `Order Total: Rs. ${total}`, "", "Name:", "Delivery Address:");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, updateQty, removeItem, clear, total, count, open, setOpen, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
}
