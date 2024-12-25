import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/MyImageBg.tsx';

const trashIcon = require('../../app/assets/trash.png');

interface MenuScreenProps {
  navigation: any;
}

const MenuScreen: React.FC<MenuScreenProps> = props => {
  const {productStore} = useStore();
  const {navigation} = props;
  const {cart} = productStore;

  return (
    <MyImageBg>
      <SafeAreaView edges={['right', 'left']} style={styles.mainContainer}>
        <View style={styles.menuContainer}>
          <Text style={styles.title}>Olimp Menu</Text>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Shop')}>
            <Text style={styles.menuText}>Shop</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Reservation')}>
            <Text style={styles.menuText}>Reservation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Contacts')}>
            <Text style={styles.menuText}>Contacts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Events')}>
            <Text style={styles.menuText}>Events</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Pressable
        style={styles.iconContainer}
        onPress={() => navigation.navigate('CartStack')}>
        <Image source={trashIcon} style={styles.icon} />
        {cart.length > 0 && (
          <View style={styles.counter}>
            <Text style={styles.counterText}>{cart.length}</Text>
          </View>
        )}
      </Pressable>
    </MyImageBg>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 1,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 120,
    marginTop: 30,
  },
  menuContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    marginBottom: 40,
  },
  menuText: {
    color: COLORS.white,
    fontSize: 20,
    lineHeight: 21,
    textAlign: 'center',
  },
  icon: {
    width: 65,
    height: 65,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  counter: {
    backgroundColor: COLORS.secondary,
    padding: 3,
    paddingHorizontal: 7,
    borderRadius: 100,
    position: 'relative',
    bottom: width * 0.05,
    right: -width * 0.06,
  },
  counterText: {
    color: COLORS.black,
    fontWeight: '600',
  },
});

export default observer(MenuScreen);
