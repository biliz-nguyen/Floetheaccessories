import { products } from "../../data/products.js"
import ProductCard from "./ProductCard.jsx"

export default function ProductGrid({ limit }) {
  const items = limit ? products.slice(0, limit) : products

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
