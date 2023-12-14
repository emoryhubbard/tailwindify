import dbConnection from '../../components/dbconnect.mjs'
import {NextResponse} from 'next/server'
import { getIronSession } from 'iron-session'
import { hashSync } from 'bcryptjs'
import { cookies } from 'next/headers'
const dotenv = require('dotenv')
dotenv.config();

export async function POST(request) {
    const res = await request.json()

    let result = null

    const query = { email: res.email}
    const emailMatches =  await dbConnection.queryCollection('clients', query)
    if (!(emailMatches.length > 0) && res.name && res.email && res.password) {
      const session = await getIronSession(cookies(), { password: process.env.SESSION_PASSWORD, cookieName: "tailwindify" })
      session.name = res.name
      session.email = res.email
      session.saves = 3
      await session.save()
      
      const hash = hashSync(res.password, 8)
      result = await dbConnection.insertDocByIntId('clients', {name: res.name, email: res.email, passwordHash: hash})

    }
    
    return NextResponse.json({result: result})
}