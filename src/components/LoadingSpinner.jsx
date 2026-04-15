const LoadingSpinner = ({ label = 'Loading friends...' }) => {
  return (
    <div className="loading-wrap" role="status" aria-live="polite">
      <div className="loading-spinner" aria-hidden="true" />
      <p>{label}</p>
    </div>
  )
}

export default LoadingSpinner

