import { PrimaryButton } from '@base-components/Buttons'
import Item from '@base-components/Item'
import ListMenu from '@base-components/ListMenu'
import Text from '@base-components/Text'
import COLOR from '@constants/color'
import FONT_SIZE from '@constants/fontSize'
import globalStyles from '@constants/globalStyles'
import { tourInfoSelector } from '@redux/TourSlice'
import { useCallback, useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import NumSelect from './NumSelect'

const Detail = () => {

    const [ showMore, setShowMore ] = useState(false);
    const [isReadMore, setIsReadMore] = useState(false);
    const [adults, setAdults] = useState();
    const [child, setChild] = useState();
    const tour = useSelector(tourInfoSelector)

    const onBook = () => {
        console.log(adults, child);
    }

    const onTextLayout = useCallback(e => {
        setShowMore(e.nativeEvent.lines.length > 4);
    }, []);

    return (
        <View style={styles.container}>
            <ListMenu style={styles.listMenu}>
                <Item title="Tổng quan" isActive />
                <Item title="Sự kiện" />
                <Item title="Đánh giá" />
            </ListMenu>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                    fontSize={FONT_SIZE.md}
                    numberOfLines={isReadMore ? null : 4}
                    onTextLayout={onTextLayout}
                >
                    {tour.introduce}
                </Text>
                {showMore ?
                    <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
                        <Text fontSize={FONT_SIZE.md} color={COLOR.blue}>
                            {isReadMore ? 'Ẩn bớt' : 'Đọc thêm'}
                        </Text>
                    </TouchableOpacity>
                    :
                    null
                }
                <View style={[styles.time, globalStyles.sbFlexRow]}>
                    <Text fontSize={FONT_SIZE.md} semibold >Thời gian tham quan</Text>
                    <Text fontSize={FONT_SIZE.md} color={COLOR.blue} semibold >Thứ 2 - Thứ 7 • 08:15 - 16:30</Text>
                </View>
                <View style={[styles.numselect, globalStyles.sbFlexRow]}>
                    <NumSelect
                        selectedValue={adults}
                        onValueChange={(itemValue, itemIndex) => setAdults(itemValue)}
                    />
                    <NumSelect
                        isChild
                        selectedValue={child}
                        onValueChange={(itemValue, itemIndex) => setChild(itemValue)}
                    />
                </View>
                <View style={[styles.price, globalStyles.sbFlexRow]}>
                    <Text fontSize={FONT_SIZE.h1} semibold>Tạm tính: </Text>
                    <Text fontSize={FONT_SIZE.h1} color={COLOR.blue} semibold price>{tour.basePrice}</Text>
                </View>
            </ScrollView>
            <PrimaryButton
                text='Đặt ngay'
                style={{
                    shadowColor: '#0192FA',
                    marginVertical: 10,
                    position: 'absolute',
                    bottom: '5%',
                }}
                bgColor={COLOR.lightBlue}
                center
                onPress={onBook}
            />
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    listMenu: {
        top: -14,
        alignItems: 'center',
    },
    time: {
        paddingVertical: 10
    },
    numselect: {
        backgroundColor: '#F2F6FE',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
    },
    price: {
        paddingVertical: 10,
        marginBottom: 100
    },
})