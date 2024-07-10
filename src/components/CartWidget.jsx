import { ShoppingBag } from "@phosphor-icons/react";
import React from "react";

const CartWidget = () => {
  return (
    <div className="w-20">
      <div className="relative w-fit">
        <ShoppingBag size={32} />
        <span className="absolute -top-1.5 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white text-sm">
          1
        </span>
      </div>
    </div>
  );
};

export default CartWidget;
