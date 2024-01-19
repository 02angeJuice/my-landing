import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const users = await prisma.users.findFirst({
    where: { id: Number(params.id) },
  })

  return NextResponse.json(users)
}

export const DELETE = async (
  request: Request,
  { params }: { params: { id: number } }
) => {
  console.log(params)
  await prisma.users.delete({
    where: { id: Number(params.id) },
  })

  return NextResponse.json({ messagel: 'delete success' })
}
