import React from 'react'

const page = () => {
  const res = async function GET() {
    return await Response.json('/users')
  }

  return (
    <div style={{ textAlign: 'center', justifyContent: 'center' }}>
      <h1>About</h1>
    </div>
  )
}

export default page
