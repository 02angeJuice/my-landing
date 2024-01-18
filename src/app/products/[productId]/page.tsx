import React from 'react'

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <div style={{ textAlign: 'center', justifyContent: 'center' }}>
      <h1>{`Detail Product ${params.productId}`}</h1>

      <a href="/products">{`<--Back`}</a>
    </div>
  )
}

export default page
