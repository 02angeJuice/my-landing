// app/components/LoginForm.tsx
'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { PrismaClient } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { useForm } from 'react-hook-form'

import * as yup from 'yup'
import { SubmitButton } from './SubmitButton'
import axios from 'axios'
// import { loginSchema } from "../zodSchema/login";

// type FormData = yup.InferType<typeof createSchema>

const CreateUserForm = () => {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(createSchema),
  })

  const onSubmit = async (data: any) => {
    try {
      await axios.post('http://localhost:3000/api/users', {
        email: data.email,
        username: data.username,
        password_hash: data.password_hash,
      })
    } catch (error) {
      console.log(error)
    }

    reset()

    // const prisma = new PrismaClient()
    // const users = await prisma.users.findMany()
    // Replace this with a server action or fetch an API endpoint to authenticate
    // await new Promise<void>((resolve) => {
    //   setTimeout(() => {
    //     resolve()
    //   }, 2000) // 2 seconds in milliseconds
    // })

    router.push('/profile')
  }

  return (
    <div>
      <form
        className="flex flex-col w-[300px] my-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative">
          <input
            {...register('username', { required: true })}
            id="username"
            name="username"
            type="text"
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
            placeholder="john@doe.com"
            autoComplete="off"
          />
          {errors?.username && (
            <p className="text-red-600 text-sm">{errors?.username?.message}</p>
          )}
          <label
            htmlFor="username"
            className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
          >
            username
          </label>
        </div>

        <div className="relative">
          <input
            {...register('email', { required: true })}
            id="email"
            name="email"
            type="text"
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
            placeholder="john@doe.com"
            autoComplete="off"
          />
          {errors?.email && (
            <p className="text-red-600 text-sm">{errors?.email?.message}</p>
          )}
          <label
            htmlFor="email"
            className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
          >
            Email address
          </label>
        </div>

        <div className="relative mt-10">
          <input
            {...register('password_hash', { required: true })}
            id="password_hash"
            type="password"
            name="password_hash"
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
            placeholder="Password"
            autoComplete="off"
          />
          {errors?.password_hash && (
            <p className="text-red-600 text-sm">
              {errors?.password_hash?.message}
            </p>
          )}
          <label
            htmlFor="password_hash"
            className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
          >
            Password
          </label>
        </div>

        <SubmitButton />
      </form>
    </div>
  )
}

const createSchema = yup.object().shape({
  email: yup.string().required('email is required'),
  username: yup.string().required('username is required'),
  password_hash: yup.string().required('password is required'),
})

export default CreateUserForm
