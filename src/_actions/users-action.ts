'use server'

import axios from 'axios'
import { revalidatePath } from 'next/cache'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

export const selectUsers = async () => {
  // const res = await fetch(
  //   `http://localhost:3000/api/users?time=${Date.now()}`,
  //   {
  //     next: { revalidate: 5 }, // Revalidate every 60 seconds
  //   }
  // )

  // return res.json()

  const users = await prisma.users.findMany()
  // return NextResponse.json(users)

  return users
}

export const deleteUser = async (id: number) => {
  // await axios.delete(`http://localhost:3000/api/users/${id}`)

  // // setredata((value) => !value)
  // return { message: 'delete success' }

  await prisma.users.delete({
    where: { id: Number(id) },
  })

  return { messagel: 'delete success' }
}

// export const createUser = async (data: any) => {
//   await axios.post(`http://localhost:3000/api/users`, {
//     email: data.email,
//     username: data.username,
//     password_hash: data.password_hash,
//   })

//   // setredata((value) => !value)
//   return { message: 'delete success' }
// }
