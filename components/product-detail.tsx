import Link from "next/link";

const fetchProductDetails = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  if (!res.ok) {
    throw new Error('Error fetching product details')
  }

  return res.json();
}

const ProductDetails = async ({id}: {id: number}) => {
  const details = await fetchProductDetails(id)

  return (
    <>
      <article className="mx-48 p-6">
        <div className="flex justify-between">
          <h2 className="font-bold font-mono text-2xl p-3">{details.title}</h2>
          <Link href="/products" className="text-blue-400">{`< back`}</Link>
        </div>

        <div className="p-3">
          <h5 className="font-bold">Description:</h5>
          <div>
            <p>{details.description}</p>
          </div>
        </div>

      </article>
    </>
  )
}

export default ProductDetails;