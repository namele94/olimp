import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../styles/colors.ts';
import MyImageBg from '../components/MyImageBg.tsx';
import {BlurView} from '@react-native-community/blur';
import {Events} from '../data/mockData.ts';

const eventImages: any = {
  event1: require('../assets/event1.png'),
  event2: require('../assets/event2.png'),
  event3: require('../assets/event3.png'),
  event4: require('../assets/event4.png'),
};

const EventsScreen = (props: any) => {
  const handleNavigate = (event: any) => {
    props.navigation.navigate('Event', {event});
  };

  return (
    <MyImageBg>
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {Events.map(item => (
            <Pressable
              key={item.id}
              onPress={() => handleNavigate(item)}
              style={[styles.buttonContainer, styles.topButton]}>
              <View style={styles.imageWrapper}>
                <ImageBackground
                  source={eventImages[item.id.toLowerCase()]}
                  style={styles.image}>
                  <BlurView
                    style={styles.absolute}
                    blurType="dark"
                    blurAmount={5}
                  />
                  <View style={styles.cartDetailContainer}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <View style={styles.cartTimeContainer}>
                      <Image source={require('../assets/calendar.png')} />
                      <Text style={styles.cardTime}>{item.time}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </SafeAreaView>
    </MyImageBg>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 50,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  imageWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  topButton: {
    paddingTop: 30,
  },
  absolute: {
    position: 'relative',
    bottom: -width * 0.09,
    marginHorizontal: 10,
    borderRadius: 10,
    height: width * 0.16,
  },
  cartDetailContainer: {
    position: 'relative',
    bottom: width * 0.045,
    marginHorizontal: 30,
  },
  cardTitle: {
    color: COLORS.white,
    fontWeight: '700',
  },
  cardTime: {
    color: COLORS.white,
    fontWeight: '500',
    marginLeft: 8,
  },
  cartTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
  },
});

export default EventsScreen;
