import styled from 'styled-components/native'
import { lighten } from 'polished'

export const Container = styled.View`
  padding: 8px;
  border-radius: 4;
  background-color: ${lighten(0.1, '#241b28')};
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 500;
  margin-bottom: 2;
`

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30;
  margin-right: 6px;
`

export const TextsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`

export const Texts = styled.View`
  flex: 1;
`

export const Name = styled.Text`
  font-family: 'Lato_700Bold';
  letter-spacing: 0.4px;
  color: #fff;
  font-size: 16px;
  padding-bottom: 8px;
`

export const TextMsg = styled.Text`
  font-family: 'Lato_400Regular';
  letter-spacing: 0.4px;
  color: ${lighten(0.5, '#241b28')};
  font-size: 16px;
`

export const TimeContainer = styled.View`
  align-items: center;
  justify-content: center;
  min-width: 65;
`

export const TimeText = styled.Text`
  font-family: 'Lato_700Bold';
  letter-spacing: 0.4px;
  color: ${({ hasNewMessages }: { hasNewMessages: boolean }) =>
    hasNewMessages ? '#32A852' : 'grey'};
  margin-bottom: 8px;
`

export const NewMsgsCircle = styled.View`
  background-color: #32a852;
  border-radius: 30;
  width: 20;
  height: 20;
  align-items: center;
  justify-content: center;
`

export const NewMsgs = styled.Text`
  font-family: 'Lato_700Bold';
  letter-spacing: 0.4px;
  font-size: 14px;
  color: #fff;
`
