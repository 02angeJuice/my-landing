import React from 'react'

const page = ({ params }: { params: { slug: string[] } }) => {
  console.log(params.slug?.[3])

  return (
    <div style={{ textAlign: 'center', justifyContent: 'center' }}>
      <h1>Docs Home Page</h1>
      <h1>{params.slug}</h1>
    </div>
  )
}

export default page
