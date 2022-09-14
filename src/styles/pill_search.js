import {RFValue} from 'react-native-responsive-fontsize';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81C147',
    alignItems: 'center',
  },
  header: {
    height: '6%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '50%',
    width: '100%',
    marginVertical: '2%',
    resizeMode: 'contain',
  },
  guideline: {
    height: '30%',
    width: '90%',
    color: 'black',
    fontSize: RFValue(21, 720),
    fontWeight: 'bold',
    fontFamily: 'NanumSquareEB',
    borderWidth: RFValue(2, 720),
    borderRadius: RFValue(8, 720),
    backgroundColor: '#BDECB6',
  },
  buttonContainer: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-15%',
    flexDirection: 'row',
  },
  opacity: {
    height: '25%',
    width: '45%',
    margin: '2%',
    borderRadius: RFValue(5, 720),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {styles};
