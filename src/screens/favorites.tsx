import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { getAllFavorites, getFavoriteImage } from '../api';
import ButtonsNavigation from '../components/ButtonsNavigation';

const Likeds: React.FC = ({ navigation }) => {
    const [favorites, setFavorites] = React.useState([]);
    const [favoritesCatImg, setFavoritesCatImg] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            getAllFavorites().then(response => {
                setFavorites(response);
                setLoading(false);
            });
            if (favorites.length > 0) {
                favorites.map(favorite =>
                    getFavoriteImage(favorite.image_id).then(returnImg => {
                        setFavoritesCatImg(returnImg)
                    })
                );
            }
        }, [])
    );

    return (
        <View style={{ flex: 1 }}>
            {loading ? <Text>Loading</Text> : favoritesCatImg.length === 0 ? <Text>There are no votes yet</Text> : <View>
                <FlatList
                    data={favoritesCatImg}
                    renderItem={({ item }) => (
                        <Image style={{ height: 70, width: 70, borderRadius: 35, borderWidth: 1 }} source={{ uri: item.url }} />
                    )}
                />
            </View>}

            <View style={{ position: 'absolute', bottom: '5%', left: 150 }}>

                <ButtonsNavigation />
            </View>
        </View>
    );
};

export default Likeds;
