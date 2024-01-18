import { notFound } from 'next/navigation'
import React from 'react'

const page = ({
  params,
}: {
  params: { reviewId: string; productId: string }
}) => {
  if (Number(params?.reviewId) > 1000) {
    notFound()
  }

  return (
    <div style={{ textAlign: 'center', justifyContent: 'center' }}>
      <h1>{`Review ${params.reviewId}`}</h1>
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </div>
  )
}

export default page
