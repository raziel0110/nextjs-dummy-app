import ProductDetails from "@/components/product-detail";
import Link from "next/link";
import { Suspense } from "react";

export default function PageDetail({params}: {params: {id: number}}) {

  return (
    <>
      <Suspense fallback={<div>Loading details...</div>}>
        <ProductDetails id={params.id} />
      </Suspense>
    </>
  )
}