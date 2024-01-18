import React from 'react'

const page = () => {
  return (
    <div style={{ textAlign: 'center', justifyContent: 'center' }}>
      <h1>Welcome</h1>

      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/docs">Documents</a>
        </li>
      </ul>
    </div>
  )
}

export default page
