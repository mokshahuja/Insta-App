import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Greettop: {
    flex: 1,
    backgroundColor: 'green',
    borderBottomRightRadius: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  GreettopText: {
    fontSize: 50,
    fontWeight: '800',
  },
  Greetbottom: {
    width: '100%',
    backgroundColor: 'green',
    height: '50%',
  },
  info: {
    width: '100%',
    height: '25%',
    paddingHorizontal: 5,
    justifyContent: 'space-around',
  },
  info2: {
    width: '100%',
    height: '35%',
    paddingHorizontal: 5,
    justifyContent: 'space-around',
  },
  buttonPart: {
    width: '100%',
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default styles;
