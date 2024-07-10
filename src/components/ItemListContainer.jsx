import React from "react";

const ItemListContainer = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-3 mt-2 grid grid-cols-3 gap-4">
      {[...Array(9)].map((_, index) => (
        <div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8caf5d7b-f44e-48e2-82f6-ad62978a6e14/dunk-low-retro-mens-shoes-5FQWGR.png"
            alt="tenis"
          />
          <h4 className="mt-2">Nike Dunk Low Retro</h4>
          <p className="opacity-50">Men's shoes</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
