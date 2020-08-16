import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Wrapper, StyledTitle, StyledParagraph } from './styles'

const Landing: React.FC = () => {
  return (
    <Wrapper>
      <StyledTitle>Hello World</StyledTitle>
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis in enim a volutpat. Cras lacinia molestie dolor. Sed neque
        neque, venenatis et rhoncus at, eleifend sit amet lorem. Donec
        condimentum eros faucibus vehicula semper. Ut viverra in arcu sit amet
        dignissim. Vivamus auctor ligula ac diam finibus, sed lacinia purus
        congue. Vestibulum orci nibh, interdum vitae consequat non, auctor non
        neque. Curabitur ac elit ipsum.
      </StyledParagraph>
      <StatusBar style="auto" />
    </Wrapper>
  )
}

export default Landing
