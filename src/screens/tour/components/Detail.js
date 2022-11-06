import { PrimaryButton } from '@base-components/Buttons'
import Item from '@base-components/Item'
import ListMenu from '@base-components/ListMenu'
import Text from '@base-components/Text'
import COLOR from '@constants/color'
import FONT_SIZE from '@constants/fontSize'
import { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import NumSelect from './NumSelect'

const Detail = () => {

    const [isReadMore, setIsReadMore] = useState(false);
    const [adults, setAdults] = useState();
    const [child, setChild] = useState();

    return (
        <View style={styles.container}>
            <ListMenu>
                <Item title="Tổng quan" isActive />
                <Item title="Sự kiện" />
                <Item title="Đánh giá" />
            </ListMenu>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                    fontSize={FONT_SIZE.md}
                    numberOfLines={isReadMore ? null : 4}
                >
                    Langbiang - hay núi Langbiang, hay khu du lịch núi Langbiang là hai ngọn núi: Núi Ông và Núi Bà nằm cách thành phố Đà Lạt 12 km thuộc địa phận huyện Lạc Dương. Núi Bà cao 2.167 m so với mặt nước biển, núi Ông cao 2.124 m so với mặt nước biển. Ngoài ra trong khu du lịch còn có ngọn đồi Ra-đa cao 1.929 m, ngọn đồi này cũng là một địa điểm quen thuộc đối với du khách. Nhìn từ trung tâm thành phố Đà Lạt Núi Bà nằm bên trái, núi Ông nằm bên phải. Langbiang được ví như"nóc nhà"của Đà Lạt, và là điểm tham quan du lịch hấp dẫn của thành phố Đà Lạt.
                </Text>
                {isReadMore ?
                    <TouchableOpacity onPress={() => setIsReadMore(false)}>
                        <Text fontSize={FONT_SIZE.md} color={COLOR.blue}>Ẩn bớt</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => setIsReadMore(true)}>
                        <Text fontSize={FONT_SIZE.md} color={COLOR.blue}>Đọc thêm</Text>
                    </TouchableOpacity>}
                <View style={styles.time}>
                    <Text fontSize={FONT_SIZE.md} semibold >Thời gian tham quan</Text>
                    <Text fontSize={FONT_SIZE.md} color={COLOR.blue} semibold >Thứ 2 - Thứ 7 • 08:15 - 16:30</Text>
                </View>
                <View style={styles.numselect}>
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
                <View style={styles.price}>
                    <Text fontSize={FONT_SIZE.h1} semibold>Tạm tính: </Text>
                    <Text fontSize={FONT_SIZE.h1} color={COLOR.blue} semibold price>1000000</Text>
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
            />
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 10,
        top: -30
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    },
    numselect: {
        backgroundColor: '#F2F6FE',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 100
    },
})