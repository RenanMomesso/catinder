import React from 'react';
import { Pressable, StyleSheet, Image } from 'react-native';
import GreenHeart from '../../assets/images/greenHeart.png';

interface DislikeButtonProps {
  handleLikeCat: (event: any) => void;
}

const LikeButton: React.FC<DislikeButtonProps> = ({ handleLikeCat }) => {
  return (
    <Pressable
      onPress={handleLikeCat}
      style={styles.button}>
      <Image source={GreenHeart} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 54,
    width: 54,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  image: { height: 20, width: 20 }
});

export default LikeButton;
