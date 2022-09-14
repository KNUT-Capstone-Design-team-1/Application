import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81C147',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '30%',
    width: '100%',
    marginTop: '-15%',
    resizeMode: 'contain',
  },
  loadingImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  opacity: {
    height: '20%',
    width: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2%',
  },
  button: {
    height: '100%',
    width: '100%',
    margin: '2%',
  },
});

export {styles};
