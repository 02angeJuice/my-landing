import React from 'react'

const products = [
  { id: 1, name: 'Cat' },
  { id: 2, name: 'Pig' },
  { id: 3, name: 'Cow' },
]

const page = () => {
  return (
    <div style={{ textAlign: 'center', justifyContent: 'center' }}>
      <h1>Product List</h1>

      <ul>
        {products?.map((item, idx) => (
          <li key={idx}>
            <a href={`/products/${item.id}`}>{`${item.name} - ${item.id}`}</a>
          </li>
        ))}
      </ul>

      <a href="/">{`<--Back`}</a>
    </div>
  )
}

export default page
