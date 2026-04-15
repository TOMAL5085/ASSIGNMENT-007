const iconMap = {
  call: '/assets/call.png',
  text: '/assets/text.png',
  video: '/assets/video.png'
}

const InteractionIcon = ({ type, className = '' }) => {
  return (
    <img
      src={iconMap[type]}
      alt=""
      aria-hidden="true"
      className={className}
      loading="lazy"
    />
  )
}

export default InteractionIcon

