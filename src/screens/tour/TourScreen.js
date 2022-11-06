import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import ImageTour from './components/ImageTour'
import Detail from './components/Detail'

const TourScreen = () => {
    return(
        <View style={styles.container}>
            <ImageTour/>
            <Detail/>
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