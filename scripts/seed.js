const { PrismaClient } = require('@prisma/client')
const { v4 } = require('uuid')

// const likes = 100
// // const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;
// const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`

const seedData = async () => {
  const prisma = new PrismaClient()

  await prisma.users.create({
    data: {
      user_id: v4(),
      username: '02angejuice',
      email: '1234',
    },
  })

  // CREATE TABLE users (
  //   id SERIAL PRIMARY KEY,
  //   user_id VARCHAR(100) NOT NULL,
  //   username VARCHAR(50) UNIQUE NOT NULL,
  //   email VARCHAR(100) UNIQUE NOT NULL,
  //   password_hash VARCHAR(100) NOT NULL,
  //   create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   last_update TIMESTAMP
  // )

  // console.log('seed data success')
}

seedData()
