import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 66,
    width: 66,
    borderRadius: 33,
    borderWidth: 3,
    borderColor: '#ae22e0',
    margin: 7,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff',
  },
  storyContainer: {
    //   flex: 1,
    //   height: 100,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    padding: 10
  },
  storyName: {
    textAlign: 'center',
    fontSize: 15
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftHeaderTitle: {
    fontSize: 18
  },
  smallImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
  },
  smallContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: '#ae22e0',
    margin: 7,
  },
  Footer : {
    paddingHorizontal : 10,
    paddingBottom : 5,
    backgroundColor : "#cce6d3"
  },
});

export default styles;
