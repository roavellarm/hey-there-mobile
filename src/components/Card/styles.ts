import { StyleSheet } from 'react-native'
import { lighten } from 'polished'

export default StyleSheet.create({
  card: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: lighten(0.1, '#241b28'),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    marginBottom: 2,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 6,
  },

  textsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  texts: {
    flex: 1,
  },

  name: {
    fontFamily: 'Lato_700Bold',
    letterSpacing: 0.4,
    color: '#fff',
    fontSize: 16,
    paddingBottom: 8,
  },

  textMsg: {
    fontFamily: 'Lato_400Regular',
    letterSpacing: 0.4,
    color: lighten(0.5, '#241b28'),
    fontSize: 16,
  },

  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 65,
  },

  timeText: {
    fontFamily: 'Lato_700Bold',
    letterSpacing: 0.4,
    color: '#32A852',
    marginBottom: 8,
  },

  timeText2: {
    fontFamily: 'Lato_700Bold',
    letterSpacing: 0.4,
    color: 'grey',
  },

  newMsgsCircle: {
    backgroundColor: '#32A852',
    borderRadius: 30,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  newMsgs: {
    fontFamily: 'Lato_700Bold',
    letterSpacing: 0.4,
    fontSize: 14,
    color: '#fff',
  },
})
