import { useState } from 'react'
import { personal } from '../../data/portfolio'

interface ProfileImageProps {
  alt?: string
  className?: string
}

export function ProfileImage({
  alt = `${personal.name} profile`,
  className = '',
}: ProfileImageProps) {
  const [src, setSrc] = useState(personal.profileImage)

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setSrc(personal.profileImageFallback)}
    />
  )
}
