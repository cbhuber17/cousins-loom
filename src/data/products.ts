export type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price?: string;
  quantity: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Rainbow Bracelet",
    image: "/images/products/rainbow-bracelet.jpg",
    description: "A bright and colorful handmade rainbow loom bracelet.",
    price: "$2",
    quantity: 0,
  },
  {
    id: 2,
    name: "Heart Charm Bracelet",
    image: "/images/products/heart-charm-bracelet.jpg",
    description: "A cute bracelet with a heart-themed loom design.",
    price: "$2.50",
    quantity: 0,
  },
  {
    id: 3,
    name: "Pastel Loom Necklace",
    image: "/images/products/pastel-loom-necklace.jpg",
    description: "A soft pastel necklace made with care and creativity.",
    price: "$3",
    quantity: 0,
  },
  {
    id: 4,
    name: "Flower Bracelet",
    image: "/images/products/flower-bracelet.jpg",
    description: "A fun floral-inspired rainbow loom bracelet.",
    price: "$2.50",
    quantity: 0,
  },
];
