import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future world",
  description: "Welcome to the future world, an ecommerce from other century",
  keywords: ["ecommerce", "world"]
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
