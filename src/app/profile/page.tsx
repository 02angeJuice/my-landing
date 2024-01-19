import React from 'react'

import ProfileListRender from '@/_components/ProfileListRender'

const page = async () => {
  return (
    <div style={{ textAlign: 'center', justifyContent: 'center' }}>
      <h1>Profile</h1>
      <ProfileListRender />
    </div>
  )
}

export default page
