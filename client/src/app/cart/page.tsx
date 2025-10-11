"use client";

import { CartItemsType } from "@/components/types";
import { ArrowRight, RecycleIcon } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

// TEMP
const cartItems: CartItemsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeStep = parseInt(searchParams.get("step") || "1");

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-8">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>

      {/* STEPS */}
      <div className="flex flex-col lg:flex-row gap-12">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center justify-start lg:justify-center gap-4 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-400"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center font-medium text-gray-200 text-sm ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      {/* CART ITEMS & DETAILS */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* CART ITEMS */}
        <div className="w-full lg:w-7/12 shadow-lg border-2 border-gray-100 rounded-lg flex flex-col gap-8">
          <h2>Cart Items</h2>

          {cartItems.map((item) => (
            <div className="flex items-center justify-between" key={item.id}>
              <Image
                src={item.images.gray}
                alt={item.name}
                width={64}
                height={64}
              />

              <div className="flex flex-col">
                <h3>{item.name}</h3>
                <span>{item.quantity}</span>
                <span>{item.selectedSize}</span>
                <span>{item.selectedColor}</span>
                <span>{item.price}</span>
              </div>

              <RecycleIcon />
            </div>
          ))}
        </div>

        {/* CART DETAILS */}
        <div className="w-full lg:w-5/12 shadow-lg border-2 border-gray-100 rounded-lg flex flex-col gap-8 p-8">
          <h2>Cart Details</h2>
          <div className="flex justify-between text-sm">
            <p className="text-gray-500">Subtotal</p>
            <p className="font-medium">
              $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
          <button className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300">
            Continue <ArrowRight id="arrow-right" className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
