import React from 'react'
import ProductItem from './product-item'
import { Shop } from '@/.velite'

export default function ProductList({products}: any) {
  return (
    <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {products.map((product: any) => (
            <ProductItem
              key={product.slnumber}
              slnumber={product.slnumber}
              slug={product.slug}
              images={product.images}
              category={product.category}
              productName={product.productName}
              description={product.description}
              total={product.total}
              published={false}
              body={""}
              slugAsParams={""}
            />
          ))}
        </div>
    </>
  )
}
