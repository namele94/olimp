import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../styles/colors';

interface HorizontalCounterProps {
  value: number;
  plus: () => void;
  minus: () => void;
}

const CartCounterButton: React.FC<HorizontalCounterProps> = ({
  value = 0,
  plus,
  minus,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLeft} onPress={plus}>
          <Image source={require('../assets/up.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={minus}>
          <Image source={require('../assets/down.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {},
  button: {
    paddingTop: 6,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 17,
    fontWeight: '700',
    color: COLORS.primary,
  },
  valueContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  valueText: {
    fontSize: 17,
    color: COLORS.black,
    fontWeight: '700',
  },
  buttonLeft: {},
  leftBtnText: {
    color: COLORS.black,
  },
});

export default CartCounterButton;
