import styled from 'styled-components/native'

const StyledAvatar = styled.Image`
  width: ${({ size }: { size: number }) => `${size}px` || '50px'};
  height: ${({ size }) => `${size}px` || '50px'};
  border-radius: 100px;
  margin-right: 6px;
`
export default StyledAvatar
