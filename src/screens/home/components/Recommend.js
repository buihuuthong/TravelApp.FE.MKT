import ImageLocal, { SquareImage } from '@base-components/ImageLocal'
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
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'

const Recommend = () => {
    const { navigate } = useNavigation();
    const [tourRecommend, setTourRecommend] = useState();

    useEffect(() => {
        firestore()
            .collection('accessToken')
            .doc(auth()?.currentUser?.uid)
            .onSnapshot(documentSnapshot => {
                axios
                    .get(`http://192.168.1.16:8080/api/tours?types=RECOMMEND`, {
                        headers: {
                            Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
                        },
                    })
                    .then(function (res) {
                        setTourRecommend(res.data)
                    })
                    .catch(e => {
                        console.log(e);
                    })
            });
    });

    const suggestions = ({ item }) => {
        return (
            <TouchableOpacity
                style={[styles.suggestions, globalStyles.shadow]}
                onPress={() => navigate('TourScreen', { tourId: item.id })}
            >
                <SquareImage uri={`http://192.168.1.16:8080/api/tours/image?id=${item.id}`} style={styles.img} />
                <View style={[styles.textContainer, globalStyles.sbFlexRow]}>
                    <View>
                        <Text fontSize={FONT_SIZE.default} semibold >{item.tourName}</Text>
                        <Text fontSize={FONT_SIZE.default} color={COLOR.subText} >{item.tourPlace}</Text>
                    </View>
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
                title="Gợi ý cho bạn"
            />
            <FlatList
                data={tourRecommend}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={suggestions}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}

export default Recommend

const styles = StyleSheet.create({
    suggestions: {
        backgroundColor: '#fff',
        margin: 5,
        height: 170,
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
})