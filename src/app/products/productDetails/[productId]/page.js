import ProductDetails from '@/app/components/templates/ProductDetails'
import React from 'react'

function page(context) {
  const id = context.params.productId;
  return (
    <div>
      <ProductDetails id={id}/>
    </div>
  )
}

export default page
