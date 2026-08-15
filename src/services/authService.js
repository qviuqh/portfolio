import { getSupabaseClient } from '../lib/supabase.js'

let initializationPromise = null

async function initializeAnonymousUser() {
  const client = getSupabaseClient()
  const { data: sessionData, error: sessionError } = await client.auth.getSession()

  if (sessionError) throw sessionError
  if (sessionData.session?.user) return sessionData.session.user

  const { data, error } = await client.auth.signInAnonymously()

  if (error) throw error
  if (!data.user) throw new Error('Anonymous sign-in did not return a user')

  return data.user
}

export function getOrCreateAnonymousUser() {
  if (!initializationPromise) {
    initializationPromise = initializeAnonymousUser().finally(() => {
      initializationPromise = null
    })
  }

  return initializationPromise
}
