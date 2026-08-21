import { getSupabaseClient } from '../lib/supabase.js'

let sessionPromise = null

async function initializeAnonymousSession() {
  const client = getSupabaseClient()
  const { data: sessionData, error: sessionError } = await client.auth.getSession()

  if (sessionError) throw sessionError
  if (sessionData.session?.access_token && sessionData.session.user) {
    return sessionData.session
  }

  const { data, error } = await client.auth.signInAnonymously()

  if (error) throw error
  if (!data.session?.access_token || !data.session.user) {
    throw new Error('Anonymous sign-in did not return a valid session')
  }

  return data.session
}

export function ensureAnonymousSession() {
  if (!sessionPromise) {
    sessionPromise = initializeAnonymousSession().finally(() => {
      sessionPromise = null
    })
  }

  return sessionPromise
}
