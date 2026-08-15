import { getSupabaseClient } from '../lib/supabase.js'

const RESPONSE_COLUMNS = 'id, full_name, email, message, attending, created_at, updated_at'

export async function getGraduationResponse(userId) {
  const { data, error } = await getSupabaseClient()
    .from('graduation_guests')
    .select(RESPONSE_COLUMNS)
    .eq('user_id', userId)
    .maybeSingle()

  if (error) throw error

  return data
}

export async function saveGraduationResponse({
  userId,
  fullName,
  email,
  message,
  attending,
}) {
  const payload = {
    user_id: userId,
    full_name: fullName.trim(),
    email: attending ? email.trim() : null,
    message: message.trim() || null,
    attending,
  }

  const { data, error } = await getSupabaseClient()
    .from('graduation_guests')
    .upsert(payload, { onConflict: 'user_id' })
    .select(RESPONSE_COLUMNS)
    .single()

  if (error) throw error

  return data
}
