import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import {useStore} from '../stores/StoreContext.tsx';
import CounterButton from './CounterButton.tsx';
import FastImage from 'react-native-fast-image';
import {observer} from 'mobx-react';

const ProductCard = ({item}: {item: Product}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  const handleAddToCart = () => {
    productStore.handlePlus(item);
  };

  return (
    <View style={styles.card}>
      <FastImage source={{uri: item.image}} style={styles.image} />

      <View style={styles.header}>
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={{alignContent: 'flex-end'}}>
        {quantity > 0 ? (
          <View style={styles.counterContainer}>
            <CounterButton
              value={quantity}
              plus={() => handlePlus(item)}
              minus={() => handleMinus(item.id)}
            />
          </View>
        ) : (
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to basket</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
    flex: 1,
  },
  image: {
    width: width / 2.6,
    height: width / 2.6,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    height: width * 0.1,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
  },
  details: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  counterContainer: {
    marginTop: 10,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.white,
  },
  icon: {
    width: 18,
    height: 18,
  },
  nameContainer: {},
});

export default observer(ProductCard);
