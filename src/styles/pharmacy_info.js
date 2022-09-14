import {RFValue} from 'react-native-responsive-fontsize';
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
    flexDirection: 'row',
  },
  opacity: {
    height: '100%',
    width: '15%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  button: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
  webView: {
    height: '100%',
    width: '100%',
  },
});

export {styles};
