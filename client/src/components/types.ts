import { JSX } from "react";

export type ProductType = {
    map(arg0: (product: ProductsType) => JSX.Element): import("react").ReactNode;
    id: string | number;
    name: string;
    description: string;
    shortDescription: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
}

export type ProductsType = ProductType;