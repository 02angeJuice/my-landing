import axios from 'axios'
import { revalidatePath } from 'next/cache'

export const selectUsers = async () => {
  const res = await fetch(
    `http://localhost:3000/api/users?time=${Date.now()}`,
    {
      next: { revalidate: 5 }, // Revalidate every 60 seconds
    }
  )
  // revalidatePath('/profile')

  return res.json()
}

export const deleteUser = async (id: number) => {
  await axios.delete(`http://localhost:3000/api/users/${id}`)

  // setredata((value) => !value)

  return { message: 'delete success' }
}
