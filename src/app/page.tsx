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
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>

      <br />

      <hr />

      <ul>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/forgot-password">Forgot Password</a>
        </li>
      </ul>
    </div>
  )
}

export default page
