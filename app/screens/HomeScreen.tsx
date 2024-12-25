import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import {Product} from '../types';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {filterData} from '../data/mockData.ts';
import ProductCard from '../components/ProductCard.tsx';
import MyImageBg from '../components/MyImageBg.tsx';
import Animated, {FadeInDown, Layout} from 'react-native-reanimated';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {productStore} = useStore();
  const {loadProducts, filteredProducts, activeFilter, setFilter} =
    productStore;

  useEffect(() => {
    loadProducts();
  }, []);

  function navToCart() {
    props.navigation.navigate('CartStack');
  }

  function navToMenu() {
    props.navigation.navigate('Menu');
  }

  const renderItem = ({item, index}: {item: Product; index: number}) => (
    <Animated.View
      style={{flex: 1}}
      entering={FadeInDown.delay(index * 100).springify()}
      layout={Layout.springify()}>
      <ProductCard item={item} />
    </Animated.View>
  );
  const renderFilter = ({item}: {item: string}) => (
    <Filter
      title={item}
      isActive={activeFilter === item}
      onPress={() => setFilter(item)}
    />
  );

  return (
    <MyImageBg>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <ImageBackground
          source={require('../assets/shop_header_bg.png')}
          style={styles.image}>
          <Pressable onPress={navToMenu}>
            <Image source={require('../assets/menu.png')} style={styles.icon} />
          </Pressable>
          <Pressable onPress={navToCart}>
            <Image
              source={require('../assets/trash.png')}
              style={styles.icon}
            />
          </Pressable>
        </ImageBackground>
        <FlatList
          data={filterData}
          renderItem={renderFilter}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}
          showsVerticalScrollIndicator={false}
        />
        <FlatList
          data={filteredProducts}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          columnWrapperStyle={styles.columnContainer}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <Animated.View layout={Layout.springify()} />
          )}
        />
      </SafeAreaView>
    </MyImageBg>
  );
};

const Filter = ({
  title,
  isActive,
  onPress,
}: {
  title: string;
  isActive: boolean;
  onPress: () => void;
}) => {
  return (
    <Pressable style={styles.filterItemContainer} onPress={onPress}>
      <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    paddingBottom: 400,
  },
  image: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: 'gray',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#5C0DAC',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  columnContainer: {
    justifyContent: 'space-evenly',
  },
  filterText: {
    fontSize: 16,
    lineHeight: 16,
    color: COLORS.black,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  filterTextActive: {
    color: COLORS.secondary,
    borderBottomWidth: 1,
    borderColor: COLORS.secondary,
    textAlign: 'center',
  },
  filterContainer: {
    height: 80,
    width: '100%',
    paddingLeft: 8,
    justifyContent: 'space-between',
  },
  filterItemContainer: {
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerImgContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  cartBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  cartBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 6,
  },
  cartBtnWrapContainer: {
    marginRight: 8,
  },
});

export default observer(HomeScreen);
