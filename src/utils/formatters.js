export const formatDateLabel = (value) => {
  const date = new Date(value)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export const formatShortAgo = (days) => `${days}d ago`

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
  const proper = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
  return `${proper} with ${name}`
}

