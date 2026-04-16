import { Check } from 'lucide-react'

const Toast = ({ toasts }) => {
  if (!toasts?.length) {
    return null
  }

  return (
    <div className="toast-stack" role="region" aria-label="Notifications">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast" role="status" aria-live="polite" aria-atomic="true">
          <span className="toast-icon" aria-hidden="true">
            <Check size={13} strokeWidth={3} />
          </span>
          <span className="toast-text">{toast.message}</span>
        </div>
      ))}
    </div>
  )
}

export default Toast
