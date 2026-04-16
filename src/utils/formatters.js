const toSafeDate = (value) => {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

export const formatDateLabel = (value) => {
  const date = toSafeDate(value)
  if (!date) {
    return 'Unknown date'
  }

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export const formatDateTwoLine = (value) => {
  const date = toSafeDate(value)
  if (!date) {
    return { primary: 'Unknown', secondary: 'Date' }
  }

  return {
    primary: `${date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric'
    })},`,
    secondary: date.toLocaleDateString('en-US', {
      year: 'numeric'
    })
  }
}

export const formatShortAgo = (days) => {
  const safeDays = Number.isFinite(days) ? Math.max(0, Math.round(days)) : 0
  return `${safeDays}d ago`
}

export const getStatusMeta = (status) => {
  if (status === 'on-track') {
    return { label: 'On-Track', className: 'badge-status-on-track' }
  }

  if (status === 'almost due') {
    return { label: 'Almost Due', className: 'badge-status-almost-due' }
  }

  return { label: 'Overdue', className: 'badge-status-overdue' }
}

export const normalizeInteractionType = (type) => type.toLowerCase()

export const interactionTitle = (type, name) => {
  const safeType = (type || '').trim().toLowerCase() || 'interaction'
  const safeName = (name || '').trim() || 'a friend'
  const proper = safeType.charAt(0).toUpperCase() + safeType.slice(1)
  return `${proper} with ${safeName}`
}
