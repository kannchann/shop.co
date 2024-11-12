import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextType {
  cartItemCount: number;
  setCartItemCount: React.Dispatch<React.SetStateAction<number>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <CartContext.Provider
      value={{
        cartItemCount,
        setCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
