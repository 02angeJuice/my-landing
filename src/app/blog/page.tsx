import React from 'react'

const page = () => {
  return (
    <div style={{ textAlign: 'center', justifyContent: 'center' }}>
      <h1>My Blog</h1>

      <ul>
        <li>
          <a href="/blog/first">First</a>
        </li>
        <li>
          <a href="/blog/second">Second</a>
        </li>
      </ul>

      <a href="/">{`<--Back`}</a>
    </div>
  )
}

export default page
