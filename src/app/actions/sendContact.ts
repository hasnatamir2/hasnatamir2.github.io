'use server'

export async function sendContact(_: unknown, formData: FormData) {
  try {
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
    }

    const res = await fetch(`http://localhost:3000/api/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const data = await res.json()
      return {
        status: 'error',
        message: data.error || 'Failed to send message',
      }
    }

    return { status: 'success' }
  } catch (error) {
    return {
      status: 'error',
      message: 'Unexpected error. Please try again.',
    }
  }
}
