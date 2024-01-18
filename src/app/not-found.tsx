import React from 'react'

const notfound = () => {
  return (
    <div style={{ textAlign: 'center', justifyContent: 'center' }}>
      <h1>Page not found</h1>

      <a href="/">{`<--Back`}</a>
    </div>
  )
}

export default notfound
