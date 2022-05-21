import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import Card, { CardProps } from '../components/CatsCard';
import AnimatedStack from '../components/AnimatedCard';
import { favoriteCat, getAllFavorites, callApiCats } from '../api';
import Like from '../../assets/images/LIKE.png';
import Nope from '../../assets/images/nope.png';


import DislikeButton from '../components/Dislike';
import ButtonsNavigation from '../components/ButtonsNavigation';
import LikeButton from '../components/LikeButton';

const HomeScreen = () => {
    const [cats, setAllCats] = useState([]);
    const [nope, setNope] = useState(false);
    const [like, setLike] = useState(false);

    const [screenMatches, setScreenMatches] = useState(false);

    const onSwipeLeft = async () => { };

    const onSwipeRight = async (cat: CardProps) => {
        await favoriteCat(cat.id);
    };

    const handleLikeCat = async () => {
        try {
            setLike(true);
            setTimeout(() => {
                onSwipeRight(cats[0]);
                setLike(false);
            }, 1000);
        } catch (error) {
            setLike(false);
        }
    };

    const callAllCats = async () => {
        const catsResponse = await callApiCats();
        setAllCats(catsResponse);
    };

    useEffect(() => {
        callAllCats();
    }, []);

    useEffect(() => {
        getAllFavorites();
    }, []);

    const handleDeslike = () => {
        setNope(true);
        try {
            setTimeout(() => {
                callAllCats();
                setNope(false);
            }, 1000);
        } catch (error) {
            setNope(false);
        }
    };

    if (cats.length === 0) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.pageContainer}>
            {nope && (
                <Image
                    source={Nope}
                    style={{
                        width: 150,
                        height: 150,
                        top: '25%',
                        left: '10%',
                        position: 'absolute',
                        zIndex: 10
                    }}
                />
            )}
            {like && (
                <Image
                    source={Like}
                    style={{
                        width: 150,
                        height: 150,
                        top: '25%',
                        right: '10%',
                        position: 'absolute',
                        zIndex: 10
                    }}
                />
            )}
            <AnimatedStack
                data={cats}
                renderItem={({ item }) => <Card {...item} />}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
            />
            <View style={styles.wrapperLikeDislike}>
                <DislikeButton handleDeslike={handleDeslike} />
                <LikeButton handleLikeCat={handleLikeCat} />
            </View>
            <ButtonsNavigation />

        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#E5E5E5'
    },
    wrapperLikeDislike: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 60,
        alignItems: 'center'
    }
});

export default HomeScreen;
