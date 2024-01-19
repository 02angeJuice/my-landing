'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className=" bg-blue-500 rounded px-4 py-2 text-white font-semibold hover:cursor-pointer"
    >
      Submit
    </button>
  )
}
