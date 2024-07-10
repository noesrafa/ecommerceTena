import React from "react";
import { NikeIcon } from "./CustomIcons";
import CartWidget from "./CartWidget";

const categories = [
  { label: "New and featured", slug: "new" },
  { label: "Men", slug: "men" },
  { label: "Women", slug: "women" },
  { label: "Kids", slug: "kids" },
];

const NavBar = () => {
  return (
    <div className="sticky top-0 left-0">
      <div className="h-16 flex items-center px-4 bg-white">
        <a href="/" className=" [&>svg]:w-20 [&>svg]:h-20 ">
          <NikeIcon />
        </a>
        <ul className="flex items-center gap-6 w-full justify-center">
          {categories.map((category) => (
            <li key={category.slug}>
              <a
                href={`/${category.slug}`}
                className="font-semibold hover:underline"
              >
                {category.label}
              </a>
            </li>
          ))}
        </ul>
        <CartWidget />
      </div>
      <div className="bg-neutral-100/80 w-full text-center py-2 text-sm backdrop-blur-xl">
        <p>Free shipping and 60-day free returns. Join now</p>
      </div>
    </div>
  );
};

export default NavBar;
