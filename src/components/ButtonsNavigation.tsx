import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import CatPaw from '../../assets/images/catPaw.png';
import Talk from '../../assets/images/talk.png';
import User from '../../assets/images/user.png';

const ButtonsNavigation: React.FC = () => {
    const navigation = useNavigation();
  return <View
  style={styles.wrapper}>
  <Pressable
    style={{ paddingVertical: 16 }}
    onPress={() => navigation.navigate('Home')}>
    <Image
      source={CatPaw}
      style={styles.image}
    />
  </Pressable>
  <Pressable
    style={{ paddingHorizontal: 15 }}
    onPress={() => navigation.navigate('Likeds')}>
    <Image
      source={Talk}
      style={styles.image}
    />
  </Pressable>
  <Pressable>
    <Image
      source={User}
      style={styles.image}
    />
  </Pressable>
</View>
}


const styles = StyleSheet.create({
    wrapper: {
        alignSelf: 'center',
        flexDirection: 'row',
        height: 30,
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 26,
        justifyContent: 'space-around',
        borderRadius: 36
      },
      image: {
        height: 20,
        width: 20,
        paddingHorizontal: 5,
        tintColor: 'black'
      },


})

export default ButtonsNavigation;