import { useCallback, useEffect, useRef, useState } from 'react'
import { getOrCreateAnonymousUser } from '../services/authService.js'
import {
  getGraduationResponse,
  saveGraduationResponse,
} from '../services/graduationGuestService.js'

const INITIAL_FORM_DATA = {
  fullName: '',
  email: '',
  message: '',
  attending: true,
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function responseToFormData(response) {
  if (!response) return { ...INITIAL_FORM_DATA }

  return {
    fullName: response.full_name,
    email: response.email ?? '',
    message: response.message ?? '',
    attending: response.attending,
  }
}

function reportTechnicalError(stage, error) {
  if (!import.meta.env.DEV) return

  console.error(`[graduation-rsvp:${stage}]`, {
    message: error?.message,
    code: error?.code,
  })
}

function validate(formData) {
  if (!formData.fullName.trim()) {
    return { type: 'validation', field: 'fullName', message: 'Vui lòng nhập họ tên.' }
  }

  if (formData.attending && !formData.email.trim()) {
    return { type: 'validation', field: 'email', message: 'Vui lòng nhập email.' }
  }

  if (formData.attending && !EMAIL_PATTERN.test(formData.email.trim())) {
    return { type: 'validation', field: 'email', message: 'Email không hợp lệ.' }
  }

  return null
}

export function useGraduationRsvp() {
  const [user, setUser] = useState(null)
  const [response, setResponse] = useState(null)
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const initializationIdRef = useRef(0)
  const submittingRef = useRef(false)

  const initialize = useCallback(async () => {
    const initializationId = ++initializationIdRef.current
    setLoading(true)
    setError(null)

    let currentUser

    try {
      currentUser = await getOrCreateAnonymousUser()
    } catch (authError) {
      reportTechnicalError('auth', authError)
      if (initializationId === initializationIdRef.current) {
        setError({
          type: 'auth',
          message: 'Không thể khởi tạo phiên truy cập. Vui lòng tải lại trang.',
        })
        setLoading(false)
      }
      return
    }

    if (initializationId !== initializationIdRef.current) return
    setUser(currentUser)

    try {
      const savedResponse = await getGraduationResponse(currentUser.id)

      if (initializationId !== initializationIdRef.current) return
      setResponse(savedResponse)
      setFormData(responseToFormData(savedResponse))
      setIsEditing(!savedResponse)
    } catch (loadError) {
      reportTechnicalError('load', loadError)
      if (initializationId === initializationIdRef.current) {
        setError({
          type: 'load',
          message: 'Không thể tải thông tin xác nhận.',
        })
        setIsEditing(false)
      }
    } finally {
      if (initializationId === initializationIdRef.current) setLoading(false)
    }
  }, [])

  useEffect(() => {
    initialize()

    return () => {
      initializationIdRef.current += 1
    }
  }, [initialize])

  const setField = useCallback((field, value) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setError((current) => (
      current?.type === 'validation' || current?.type === 'save' ? null : current
    ))
  }, [])

  const submit = useCallback(async () => {
    if (submittingRef.current || !user) return false

    const validationError = validate(formData)
    if (validationError) {
      setError(validationError)
      return false
    }

    submittingRef.current = true
    setSubmitting(true)
    setError(null)

    try {
      const savedResponse = await saveGraduationResponse({
        userId: user.id,
        ...formData,
      })

      setResponse(savedResponse)
      setFormData(responseToFormData(savedResponse))
      setIsEditing(false)
      return true
    } catch (saveError) {
      reportTechnicalError('save', saveError)
      setError({
        type: 'save',
        message: 'Có lỗi khi lưu xác nhận. Vui lòng thử lại.',
      })
      return false
    } finally {
      submittingRef.current = false
      setSubmitting(false)
    }
  }, [formData, user])

  const startEditing = useCallback(() => {
    if (response) setFormData(responseToFormData(response))
    setError(null)
    setIsEditing(true)
  }, [response])

  const cancelEditing = useCallback(() => {
    if (response) setFormData(responseToFormData(response))
    setError(null)
    setIsEditing(false)
  }, [response])

  return {
    formData,
    response,
    loading,
    submitting,
    error,
    hasResponse: Boolean(response),
    isEditing,
    setField,
    submit,
    startEditing,
    cancelEditing,
    retry: initialize,
  }
}
