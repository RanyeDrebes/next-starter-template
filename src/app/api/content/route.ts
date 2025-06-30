import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import jwt from 'jsonwebtoken'

function verifyAdmin(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  if (!token) return false

  try {
    jwt.verify(token, process.env.NEXTAUTH_SECRET!)
    return true
  } catch {
    return false
  }
}

export async function GET() {
  const { data, error } = await supabase
    .from('content')
    .select('*')
    .order('section, key')

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function PUT(request: NextRequest) {
  if (!verifyAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { section, key, value, type = 'text' } = await request.json()

    const { data, error } = await supabase
      .from('content')
      .upsert({
        section,
        key,
        value,
        type,
        updated_at: new Date().toISOString()
      })
      .select()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 })
  }
}