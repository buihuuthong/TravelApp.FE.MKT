import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import Text from '@base-components/Text'
import FONT_SIZE from '@constants/fontSize'
import COLOR from '@constants/color'
import ImageLocal, { SquareImage } from '@base-components/ImageLocal'
import IMAGE from '@constants/image'
import { useNavigation } from '@react-navigation/native'
import globalStyles from '@constants/globalStyles'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
import { log } from 'react-native-reanimated'

const MenuItem = ({ data, isTopic }) => {
    const { navigate } = useNavigation();

    const topic = ({ item }) => {
        return (
            <TouchableOpacity 
                style={[styles.container, globalStyles.shadow]} 
                onPress={() => navigate('TourScreen', { tourId: item.id })}
            >
                <SquareImage uri={`http://192.168.1.16:8080/api/tours/image?id=${item.id}`} style={styles.img} />
                <View style={[styles.textContainer, globalStyles.sbFlexRow]}>
                    <Text fontSize={FONT_SIZE.md} semibold >{item.tourName}</Text>
                    <View style={globalStyles.flexRow}>
                        <ImageLocal image={IMAGE.star} />
                        <Text
                            fontSize={FONT_SIZE.default}
                            color={COLOR.yellow}
                        >
                            {item.rating}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const suggestions = ({ item }) => {
        return (
            <TouchableOpacity 
                style={[styles.suggestions, globalStyles.shadow, globalStyles.flexRow]} 
                onPress={() => navigate('TourScreen', { tourId: item.id })}
            >
                <SquareImage uri={`http://192.168.1.16:8080/api/tours/image?id=${item.id}`} style={styles.imgg} />
                <View style={styles.text}>
                    <View style={globalStyles.flexRow}>
                        <ImageLocal image={IMAGE.locationBlue} />
                        <Text fontSize={FONT_SIZE.default} color={COLOR.blue} > {item.tourPlace}</Text>
                    </View>
                    <Text fontSize={FONT_SIZE.md} color={COLOR.text} semibold>{item.tourName}</Text>
                    <View style={globalStyles.flexRow}>
                        <ImageLocal image={IMAGE.star} />
                        <Text
                            fontSize={FONT_SIZE.default}
                            color={COLOR.yellow}
                        >
                            {item.rating}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={data}
            horizontal={isTopic ? true : false}
            showsHorizontalScrollIndicator={false}
            renderItem={isTopic ? topic : suggestions}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 5,
        height: 160,
        borderRadius: 30,
    },
    textContainer: {
        paddingHorizontal: 16,
        paddingVertical: 5
    },
    img: {
        borderRadius: 30,
        width: 240,
    },
    imgg: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        overflow: 'hidden',
        height: 90
    },
    suggestions: {
        backgroundColor: '#fff',
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 20,
    },
    text: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 90,
        paddingVertical: 5,
        left: 10
    },
})