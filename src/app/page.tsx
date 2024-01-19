// 'use client'
// import React, { useEffect, useMemo, useState } from 'react'
import { sql } from '@vercel/postgres'
import { PrismaClient } from '@prisma/client'
import moment from 'moment'
import CreateUserForm from '@/_components/CreateUserForm'

const Home = async ({
  params,
}: {
  params: { user: string }
}): Promise<JSX.Element> => {
  return (
    <div>
      <div style={{ textAlign: 'center', justifyContent: 'center' }}>
        <h1>Welcome</h1>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/docs">Documents</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>

        <br />
        <hr />

        <ul>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/forgot-password">Forgot Password</a>
          </li>
        </ul>

        <br />
        <hr />

        <CreateUserForm />
      </div>
    </div>
  )
}

export default Home
