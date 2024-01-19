import { PrismaClient } from '@prisma/client'
import moment from 'moment'
const { v4: uuidv4 } = require('uuid')

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic' // defaults to auto
export const fetchCache = 'auto'

export async function GET(request: Request) {
  const users = await prisma.users.findMany()
  return Response.json(users)
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const data = await request.json()

  console.log(data)

  await prisma.users.upsert({
    where: {
      email: data?.email,
    },
    update: {
      email: data.email,
      username: data.username,
      password_hash: data.password_hash,
      last_update: moment().format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z',
    },
    create: {
      user_id: data?.user_id || uuidv4(),
      email: data.email,
      username: data.username,
      password_hash: data.password_hash,
    },
  })

  console.log('dsdsd')

  const user = await prisma.users.findFirst({
    where: { email: data?.email },
  })

  return Response.json(user)
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
