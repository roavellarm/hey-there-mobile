import React, { useEffect, useState } from 'react'
import { Link as NavigationLink } from '@react-navigation/native'
import { darken } from 'polished'
import styled from 'styled-components/native'

const StyledLink = styled(NavigationLink)`
  padding: 25px 0px;
  color: ${({ isPressed }: { isPressed: boolean }) =>
    isPressed ? darken(0.5, '#fff') : 'white'};
  font-family: 'Lato_400Regular';
  font-size: 18px;
`

interface LinkProps {
  title: string
  to: string
}

const Link = ({ title, to }: LinkProps) => {
  const [isPressed, setIsPressed] = useState<boolean>(false)

  useEffect(() => {
    setIsPressed(false)
  }, [isPressed])

  return (
    <StyledLink
      to={to}
      isPressed={isPressed}
      onPress={() => setIsPressed(true)}
    >
      {title}
    </StyledLink>
  )
}

export default Link
