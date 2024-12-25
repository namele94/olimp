import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import FastImage from 'react-native-fast-image';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import CartCounterButton from './CartCounterButton.tsx';

interface ItemViewProps {
  item: Product;
}

const CartItemView: React.FC<ItemViewProps> = ({item}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus, removeFromCart} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <CartCounterButton
            value={quantity}
            plus={() => handlePlus(item)}
            minus={() => handleMinus(item.id)}
          />
        </View>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.subTotal}>${quantity * item.price}</Text>
      </View>
      <Pressable
        onPress={() => removeFromCart(item.id)}
        style={styles.removeContainer}>
        <Image source={require('../assets/remove.png')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 8,
    paddingVertical: 4,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  imageContainer: {
    width: '33%',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 16,
  },
  contentContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 4,
  },
  subTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 4,
    textAlign: 'center',
  },
  icon: {
    width: 18,
    height: 18,
  },
  nameContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonContainer: {
    paddingHorizontal: 4,
  },
  removeContainer: {
    width: '6%',
    alignItems: 'center',
  },
});

export default observer(CartItemView);
