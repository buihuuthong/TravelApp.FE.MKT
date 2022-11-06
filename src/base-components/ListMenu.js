import Text from '@base-components/Text'
import FONT_SIZE from '@constants/fontSize'
import { ScrollView, StyleSheet, View } from 'react-native'

const ListMenu = ({ title, children }) => {
    return(
        <View style={styles.container}>
            { title ? <Text fontSize={FONT_SIZE.lg} semibold>{title}</Text> : null }
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {children}
            </ScrollView>
        </View>
    )
}

export default ListMenu

const styles = StyleSheet.create({
    container: {

    },
})