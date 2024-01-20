import React from 'react'

import ProfileListRender from '@/_components/ProfileListRender'
import { selectUsers } from '@/_actions/users-action'

const page = async () => {
  const users = await selectUsers()

  console.log(users)

  return (
    <div style={{ textAlign: 'center', justifyContent: 'center' }}>
      <h1>Profile</h1>
      <ProfileListRender data={users} />
    </div>
  )
}

export default page
