import ImageLocal, { SquareImage } from '@base-components/ImageLocal'
import Item from '@base-components/Item'
import ListMenu from '@base-components/ListMenu'
import Text from '@base-components/Text'
import COLOR from '@constants/color'
import FONT_SIZE from '@constants/fontSize'
import globalStyles from '@constants/globalStyles'
import IMAGE from '@constants/image'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'

const Topic = () => {
    const { navigate, goBack } = useNavigation();
    const [tourTopic, setTourTopic] = useState();
    const [topic, setTopic] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const getTour = () => {
        firestore()
            .collection('accessToken')
            .doc(auth()?.currentUser?.uid)
            .onSnapshot(documentSnapshot => {
                axios
                    .get(`http://192.168.1.16:8080/api/tours${topic == null ? '' : `?types=${topic}`}`, {
                        headers: {
                            Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
                        },
                    })
                    .then(function (res) {
                        setTourTopic(res.data)
                        setIsLoading(false)
                    })
                    .catch(e => {
                        console.log(e);
                    })
            });
    }

    useEffect(() => {
        getTour()
    }, [topic]);

    const handleTopic = (value) => {
        setIsLoading(true)
        setTopic(value)
    }

    const renderTopic = ({ item }) => {
        return (
            <TouchableOpacity
                style={[styles.topic, globalStyles.shadow, globalStyles.flexRow]}
                onPress={() => navigate('TourScreen', { tourId: item.id })}
            >
                <SquareImage uri={`http://192.168.1.16:8080/api/tours/image?id=${item.id}`} style={styles.imgg} />
                <View style={styles.text}>
                    <View style={globalStyles.flexRow}>
                        <ImageLocal image={IMAGE.locationBlue} />
                        <Text fontSize={FONT_SIZE.default} color={COLOR.blue} > {item.tourPlace}</Text>
                    </View>
                    <Text fontSize={FONT_SIZE.default} color={COLOR.text} semibold>{item.tourName}</Text>
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
        <>
            <ListMenu
                title="Chủ đề"
            >
                <Item title="Tất cả" isActive={!topic}  onPress={() => handleTopic('')} />
                <Item title="Thiên nhiên" isActive={topic=='NATURE'} onPress={() => handleTopic('NATURE')} />
                <Item title="Núi" isActive={topic=='MOUNT'} onPress={() => handleTopic('MOUNT')} />
                <Item title="Biển" isActive={topic=='SEA'} onPress={() => handleTopic('SEA')} />
            </ListMenu>
            {isLoading ? 
                <ActivityIndicator size="large" color={COLOR.blue} /> 
                :
            <FlatList
                data={tourTopic}
                renderItem={renderTopic}
                keyExtractor={(item, index) => index.toString()}
            />
            }
        </>
    )
}

export default Topic

const styles = StyleSheet.create({
    topic: {
        backgroundColor: '#fff',
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 20,
    },
    imgg: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        overflow: 'hidden',
        height: 90
    },
    text: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 90,
        paddingVertical: 5,
        left: 10
    },
})