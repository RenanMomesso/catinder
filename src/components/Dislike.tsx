import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface DislikeButtonProps {
  handleDeslike: (event: any) => void;
}

const DislikeButton: React.FC<DislikeButtonProps> = ({ handleDeslike }) => {
  return (
    <Pressable onPress={handleDeslike} style={styles.button}>
      <Text style={styles.text}>X</Text>
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
    elevation: 3,
    marginRight: 10,
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: '#E16359'
  }
});

export default DislikeButton;
