export type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Candy Cane Twist Bracelet",
    image: "public/images/jewelry/bracelet1.png",
    description: "Handmade twist bracelet with festive color blend.",
    price: 2,
    quantity: 0,
  },
  {
    id: 2,
    name: "Midnight Twist Loom Bracelet",
    image: "public/images/jewelry/bracelet2.png",
    description: "Black and white woven bracelet with bold contrast.",
    price: 2.5,
    quantity: 0,
  },
  {
    id: 3,
    name: "Sunset Swirl Loom Bracelet",
    image: "public/images/jewelry/bracelet3.png",
    description: "Warm orange and yellow braided loom bracelet.",
    price: 3,
    quantity: 0,
  },
  {
    id: 4,
    name: "Golden Harvest Loom Bracelet",
    image: "public/images/jewelry/bracelet4.png",
    description: "Rich amber tones with a classic woven design.",
    price: 2,
    quantity: 0,
  },
  {
    id: 5,
    name: "Desert Sage Loom Bracelet",
    image: "public/images/jewelry/bracelet5.png",
    description: "Earthy green and bronze woven bracelet.",
    price: 2,
    quantity: 0,
  },
  {
    id: 6,
    name: "Midnight Charm Loom Bracelet",
    image: "public/images/jewelry/bracelet6.png",
    description: "Black woven bracelet with cute dangling charm.",
    price: 2.5,
    quantity: 0,
  },
  {
    id: 7,
    name: "Rainbow Charm Loom Necklace",
    image: "public/images/jewelry/Necklace7.png",
    description: "Colorful rainbow necklace with playful dangling charm",
    price: 3,
    quantity: 0,
  },
];
