import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81C147',
  },
  header: {
    height: '6%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillImage: {
    height: '61%',
    width: '100%',
    resizeMode: 'contain',
  },
  searchButton: {
    height: '14%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLayer1: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonLayer2: {
    height: '9%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  button: {
    height: '100%',
    width: '48%',
    marginLeft: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {styles};
