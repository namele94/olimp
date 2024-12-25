import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

interface MyImageBgProps {
  children?: React.ReactNode;
}

const MyImageBg = (props: MyImageBgProps) => {
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      {props.children}
    </ImageBackground>
  );
};

export default MyImageBg;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
