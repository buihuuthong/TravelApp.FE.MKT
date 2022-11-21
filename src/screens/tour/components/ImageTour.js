import ImageLocal from '@base-components/ImageLocal'
import Text from '@base-components/Text'
import COLOR from '@constants/color'
import FONT_SIZE from '@constants/fontSize'
import IMAGE from '@constants/image'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { tourInfoSelector } from '@redux/TourSlice'
import { userInfoSelector } from '@redux/UserSlice'
import { saveTourSelector } from '@redux/TourSlice'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import axios from 'axios'

const ImageTour = () => {
    const { navigate, goBack } = useNavigation()
    const tour = useSelector(tourInfoSelector)
    const user = useSelector(userInfoSelector)

    const saveTour = () => {
        firestore()
            .collection('accessToken')
            .doc(auth()?.currentUser?.uid)
            .onSnapshot(documentSnapshot => {
                axios
                    .post(`http://192.168.1.16:8080/api/saveTour`, {}, {
                        headers: {
                            Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
                        },
                        params: {
                          tourId: tour.id,
                          userId: user.id
                        }
                    })
                    .then(function (res) {
                        navigate('Loading')
                        try {
                            ToastAndroid.show("Tour đã được lưu vào danh sách !", ToastAndroid.SHORT);
                            goBack()
                        } catch (error) {}
                    })
                    .catch(e => {
                        console.log(e.response?.data?.code);
                        navigate('Alert',{
                            title: e.response?.data?.code === 'TOUR_ALREADY_SAVE' ? 'Tour đã được lưu trước đó' : e.response?.data?.code
                        })
                    })
            });
    }

    return (
        <ImageBackground source={{ uri: `http://192.168.1.16:8080/api/tours/image?id=${tour.id}`}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => goBack()}>
                    <ImageLocal image={IMAGE.goback} />
                </TouchableOpacity>
                <View>
                    <Text fontSize={FONT_SIZE.h2} color={COLOR.white} semibold >{tour.tourName}</Text>
                    <View style={styles.text}>
                        <View style={styles.textItem}>
                            <View style={styles.location}>
                                <ImageLocal image={IMAGE.location} />
                                <Text fontSize={FONT_SIZE.default} color={COLOR.white}> {tour.tourPlace}</Text>
                            </View>
                            <View style={styles.location}>
                                <ImageLocal image={IMAGE.star} />
                                <Text fontSize={FONT_SIZE.default} color={COLOR.yellow}> {tour.rating}</Text>
                            </View>
                        </View>
                        <View style={[styles.textItem, { width: '20%' }]}>
                            <TouchableOpacity onPress={saveTour}>
                                <ImageLocal image={IMAGE.love} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ImageLocal image={IMAGE.share} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                backgroundColor: 'white',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                height: 30
            }} />
        </ImageBackground>
    )
}

export default ImageTour

const styles = StyleSheet.create({
    container: {
        height: 240,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%'
    },
})