import ProductList from "@/components/products-list";
import { Suspense } from "react";

export default function ProductsPage() {
  return (
    <div>
      <h1>Products List</h1>
      <ProductList />
    </div>
  )
}