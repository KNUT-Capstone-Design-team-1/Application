import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: '7%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#81C147',
  },
  container: {
    flex: 1,
    backgroundColor: '#BDECB6',
  },
  scrollView: {
    backgroundColor: 'red',
  },
  buttonContainer: {
    height: '15%',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export {styles};
