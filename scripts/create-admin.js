const bcrypt = require('bcryptjs')
const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

async function createAdmin() {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD
  
  const hashedPassword = await bcrypt.hash(password, 12)
  
  const { data, error } = await supabase
    .from('admin_users')
    .upsert({
      email,
      password_hash: hashedPassword
    })
  
  if (error) {
    console.error('Error creating admin:', error)
  } else {
    console.log('Admin user created successfully!')
  }
}

createAdmin()