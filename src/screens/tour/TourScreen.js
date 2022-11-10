import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Detail from './components/Detail';
import ImageTour from './components/ImageTour';
import { useDispatch } from 'react-redux';
import { setTourInfo } from '@redux/TourSlice';

const TourScreen = ({ route }) => {
    const { tourId } = route.params;

    const dispatch = useDispatch();

    useEffect(() => {
        firestore()
            .collection('accessToken')
            .doc(auth()?.currentUser?.uid)
            .onSnapshot(documentSnapshot => {
                axios
                    .get(`http://192.168.1.16:8080/api/tours/${tourId}`, {
                        headers: {
                            Authorization: `Bearer ${documentSnapshot?.data()?.token}`,
                        },
                    })
                    .then(function (res) {
                        dispatch(setTourInfo(res.data))
                    })
                    .catch(e => {
                        console.log(e);
                    })
            });
    }, []);

    return (
        <View style={styles.container}>
            <ImageTour />
            <Detail />
        </View>
    )
}

export default TourScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})