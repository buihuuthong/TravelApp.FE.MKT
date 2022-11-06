import Text from '@base-components/Text'
import FONT_SIZE from '@constants/fontSize'
import { ScrollView, StyleSheet, View } from 'react-native'

const ListMenu = ({ title, children, style }) => {
    return(
        <View style={style}>
            { title ? <Text fontSize={FONT_SIZE.lg} semibold>{title}</Text> : null }
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {children}
            </ScrollView>
        </View>
    )
}

export default ListMenu