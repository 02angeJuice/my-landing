/* eslint-disable @next/next/no-async-client-component */
'use client'

import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import moment from 'moment'

import { deleteUser, selectUsers } from '@/_actions/users-action'

const ProfileListRender = async () => {
  // const [redata, setredata] = useState(false)
  // const [users, setusers] = useState([])

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await fetch(
  //         `http://localhost:3000/api/users?time=${Date.now()}`,
  //         {
  //           next: { revalidate: 5 }, // Revalidate every 60 seconds
  //         }
  //       )

  //       const data = await res.json()
  //       setusers(data)
  //     } catch (error) {}
  //   }

  //   fetchUsers()
  // }, [redata])

  const users = await selectUsers()

  console.log(users)

  // const res = await fetch(
  //   `http://localhost:3000/api/users?time=${Date.now()}`,
  //   {
  //     next: { revalidate: 5 }, // Revalidate every 60 seconds
  //   }
  // )
  // const users = await res.json()

  return (
    <div>
      <ul>
        {users.map((user: any) => (
          <div key={user.id}>
            <li>
              {user.user_id} - {user.username} - {user.email} -{' '}
              {moment(user.create_date)?.format('DD/MM/YYYY HH:mm')}{' '}
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => deleteUser(user.id)}
              >
                ❌
              </span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ProfileListRender