
import Link from "next/link"
import Image from "next/image"

const PRODUCTS_URL = "https://fakestoreapi.com/"

const getProducts = async () => {
  const res = await fetch(`${PRODUCTS_URL}products`)
  if (!res.ok) {
    throw new Error("Error fetching products")
  }

  return res.json();
}

const ProductList = async () => {
  const products = await getProducts();
  // console.log(products)
  return (
    <>
      {products.map((prod: any) => (
        <div key={prod.id}>
          <Link href={`/products/${prod.id}`}>
              {prod.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default ProductList;