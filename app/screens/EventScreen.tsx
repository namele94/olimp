import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../styles/colors.ts';
import CustomButton from '../components/CustomButton.tsx';
import {Events} from '../data/mockData.ts';
import {Event} from '../types';
import MyImageBg from '../components/MyImageBg.tsx';

interface EventScreenProps {
  navigation: any;
  route: {
    params: {
      event: Event;
    };
  };
}

const eventImages: any = {
  event1: require('../assets/event1.png'),
  event2: require('../assets/event2.png'),
  event3: require('../assets/event3.png'),
  event4: require('../assets/event4.png'),
};

const EventScreen: React.FC<EventScreenProps> = props => {
  const {route} = props;
  const {event} = route.params;
  const imageSource =
    eventImages[route.params.event.id] || require('../assets/event1.png');

  return (
    <MyImageBg>
      <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
        <View style={styles.container}>
          <Image source={imageSource} style={styles.image} />
          <View style={styles.topContainer}>
            <Text style={styles.title}>{event.title}</Text>
            <View style={styles.calendarContainer}>
              <Image
                source={require('../assets/calendar.png')}
                style={styles.icon}
              />
              <Text style={styles.calendarTitle}>{event.time}</Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.desc}>Description</Text>
            <Text style={styles.subText}>{event.subtitle}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title={'Back to menu'}
            onPress={() => props.navigation.navigate('Menu')}
          />
        </View>
      </SafeAreaView>
    </MyImageBg>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    color: COLORS.white,
    fontSize: 20,
  },
  subText: {
    color: COLORS.grayText,
    marginTop: 10,
  },
  topContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    position: 'relative',
    bottom: 30,
    marginHorizontal: 20,
    padding: 10,
  },
  bottomContainer: {
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    ...Platform.select({
      android: {
        paddingBottom: 20,
      },
    }),
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  icon: {
    tintColor: COLORS.gray,
  },
  calendarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  calendarTitle: {
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  desc: {
    fontSize: 16,
  },
});
