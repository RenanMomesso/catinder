/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native';

export interface CardProps {
  id:string;
  breeds: {
    name:string;
    origin:string;
    affection_level:number;
  }[]
  url:string;
}

const Card = (props:CardProps) => {
  const { breeds, url } = props;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: url,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{breeds[0].name}</Text>
          <Text style={styles.bio}>{breeds[0].origin}</Text>
          <Text style={{position:'absolute', right:10, top:10}}>{breeds[0].affection_level}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fefefe',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  cardInner: {
    paddingHorizontal: 16,
    paddingVertical:8,
    backgroundColor:'white',
    marginHorizontal:16,
    borderTopRightRadius:16,
    borderTopLeftRadius:16,
  },
  name: {
    fontSize: 16,
    color: '#434141',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 12,
    color: '#BFBFC0',
    lineHeight: 25,
  },
});

export default Card;
