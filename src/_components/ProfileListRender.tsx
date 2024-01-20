'use client'
import React, { useEffect, useMemo, useState } from 'react'
import moment from 'moment'

import { selectUsers, deleteUser } from '@/_actions/users-action'
// import Router from 'next/router'
import { useRouter } from 'next/navigation'

type Users = {
  id: number
  user_id: string
  username: string
  email: string
  password_hash: string
  create_date: Date | null
  last_update: Date | null
}

const ProfileListRender = ({ data }: { data: Users[] }) => {
  const router = useRouter()

  const hadnleDel = (id: any) => {
    console.log(id)
    // console.log('dsds')
    deleteUser(id)
    router.refresh()
  }

  return (
    <div>
      <ul>
        {data.map((user: any) => (
          <div key={user.id}>
            <li>
              {user.user_id} - {user.username} - {user.email} -{' '}
              {moment(user.create_date)?.format('DD/MM/YYYY HH:mm')}{' '}
              <form action={() => hadnleDel(user.id)}>
                <button type="submit">
                  <span style={{ cursor: 'pointer' }}>❌</span>
                </button>
              </form>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ProfileListRender
