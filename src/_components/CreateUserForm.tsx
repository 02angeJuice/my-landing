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
    <div className="selection:bg-rose-500 selection:text-white">
      {/* <div className="flex min-h-screen items-center justify-center bg-rose-100"> */}
      <div className="bg-rose-100">
        <div className="flex-1 p-8">
          <div className="mx-auto w-80 overflow-hidden rounded-3xl bg-white shadow-xl">
            {/* Form Header */}
            <div className="rounded-bl-4xl relative h-44 bg-rose-500">
              <svg
                className="absolute bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>

            {/* Form Body */}
            <div className="rounded-tr-4xl bg-white px-10 pb-8 pt-4">
              <h1 className="text-2xl font-semibold text-gray-900">
                Welcome back!
              </h1>
              <form
                // className="mt-12"
                // action=""
                // method="POST"
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
                    <p className="text-red-600 text-sm">
                      {errors?.username?.message}
                    </p>
                  )}
                  <label
                    htmlFor="username"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    username
                  </label>
                </div>

                {/* Email Input */}
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
                    <p className="text-red-600 text-sm">
                      {errors?.email?.message}
                    </p>
                  )}
                  <label
                    htmlFor="email"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Email address
                  </label>
                </div>

                {/* Password Input */}
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

                {/* Submit Button */}
                {/* <button
                  type="submit"
                  className="mt-20 block w-full cursor-pointer rounded bg-rose-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-6 h-6 mr-2 text-white animate-spin fill-rose-600 opacity-100"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      </svg>
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </button> */}
              </form>

              {/* Forgot Password Link */}
              <a
                href="#"
                className="mt-4 block text-center text-sm font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const createSchema = yup.object().shape({
  email: yup.string().required('email is required'),
  username: yup.string().required('username is required'),
  password_hash: yup.string().required('password is required'),
})

export default CreateUserForm
