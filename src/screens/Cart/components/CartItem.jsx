import { Image, Pressable, Text, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import styles from './CartItem.styles';

const Cartitem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: item.images[0],
            }}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{item.title}</Text>
          <Text>Cantidad: {item.quantity} unidades</Text>
          <Text>Total: ${item.price}</Text>
        </View>
      </View>
      <View>
        <Pressable style={styles.trash}>
          <Feather name="trash" size={25} color={'black'} />
        </Pressable>
      </View>
    </View>
  );
};

export default Cartitem;
