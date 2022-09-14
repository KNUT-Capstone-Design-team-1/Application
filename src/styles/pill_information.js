import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81C147',
  },
  header: {
    height: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillImage: {
    height: '30%',
    width: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    height: '8%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  opacity: {
    height: '100%',
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: RFValue(2, 720),
    borderRadius: RFValue(8, 720),
  },
});

export {styles};
