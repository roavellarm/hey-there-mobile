import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import StyledImage from './styles'

interface AvatarProps {
  src: string
  // size: string
  border: string | undefined
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const { src, size, border } = props

  return (
    <>
      {src ? (
        <StyledImage size={size} src={src} border={border} />
      ) : (
        <FaUserCircle
          size={size}
          border={border}
          style={{ border: `3px solid ${border}`, borderRadius: '100%' }}
        />
      )}
    </>
  )
}

export default Avatar
