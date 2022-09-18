import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {executeCamera, executeGallery} from '../services/pill_search';

const PillSearchButton = props => {
  const {navigation, style} = props;

  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        navigation.navigate('pillSearch');
      }}>
      <Image
        style={styles.button}
        source={require('../../image/pill_search.png')}
      />
    </TouchableOpacity>
  );
};

const Header = props => {
  const {style} = props;

  return (
    <SafeAreaView style={style}>
      <Text style={styles.text}>이렇게 찍어주세요</Text>
    </SafeAreaView>
  );
};

const ExampleImage = props => {
  const {style} = props;

  return <Image style={style} source={require('../../image/sample_img.jpg')} />;
};

const GuidelineText = props => {
  const {style} = props;

  return (
    <Text style={style}>
      {'\n '}ㆍ 알약의 글자가 잘보이게 찍어주세요{'\n\n '}ㆍ 글자가 수평으로
      보이게 찍어주세요{'\n\n '}ㆍ 알약은 하나씩 올려서 찍어주세요{'\n\n '}
    </Text>
  );
};

const TakeButton = props => {
  const {style} = props;

  return (
    <TouchableOpacity style={style} onPress={() => executeCamera(props)}>
      <Image style={styles.image} source={require('../../image/camera.png')} />
    </TouchableOpacity>
  );
};

const GalleryButton = props => {
  const {style} = props;

  return (
    <TouchableOpacity style={style} onPress={() => executeGallery(props)}>
      <Image style={styles.image} source={require('../../image/gallery.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: '100%',
    width: '100%',
    margin: '2%',
  },
  text: {
    color: 'white',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
  image: {
    height: '100%',
    width: '100%',
    margin: '2%',
  },
});

export {
  PillSearchButton,
  Header,
  ExampleImage,
  GuidelineText,
  TakeButton,
  GalleryButton,
};
