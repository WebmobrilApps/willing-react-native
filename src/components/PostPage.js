import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import imagePath from '../constants/imagePath'
import Scale, { verticalScale } from '../styles/Scale'
import commonStyles from '../styles/commonStyles'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import ItemSeperator from './ItemSeperator'
import screensNames from '../constants/screensNames'
import { useNavigation } from '@react-navigation/native'
const { width } = Dimensions.get('window')

const PostPage = (props) => {
    const navigation = useNavigation()
    const [currentIndex, setCurrentIndex] = useState(0)
    const { data, minePosts } = props
    console.log(data, 'data')

    return (
        <View>
            <FlatList
                ItemSeparatorComponent={() => {
                    return (
                        <ItemSeperator seperatorStyle={{marginBottom:verticalScale(15)}}/>
                    )
                }}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => minePosts ? navigation.navigate(screensNames.postDetails, { item, screenName: 'minPosts' }) : navigation.navigate(screensNames.postDetails, { item,screenName: 'otherpages' })}
                            style={styles.postContainer}>
                            <View style={[commonStyles.flexView, { justifyContent: 'flex-start', paddingHorizontal: Scale(20) }]}>
                                <Image source={item.icon} style={styles.iconStyle} />
                                <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>{item.txt}</Text>
                            </View>
                            <Text style={[commonStyles.fontSize12, { marginVertical: Scale(8), paddingHorizontal: Scale(20) }]}>{item.description}</Text>
                            {!item.images == 0 ?
                                <View style={{ width: width }}>
                                    <FlatList
                                        data={item.images}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        style={{ width: width }}
                                        onScroll={e => {
                                            const x = e.nativeEvent.contentOffset.x;
                                            setCurrentIndex((x / width).toFixed(0));
                                        }}
                                        renderItem={({ item }) =>
                                        (
                                            <TouchableWithoutFeedback>
                                                <View key={item._id}
                                                    style={{
                                                        width: width,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                    <Image source={item.img} style={styles.imgStyle} />
                                                </View>
                                            </TouchableWithoutFeedback>

                                        )
                                        } />
                                    <View style={commonStyles.indicatorView}>
                                        {item?.images.map((item, index) => {
                                            return (
                                                <View
                                                    key={index}
                                                    style={{
                                                        alignSelf: 'center',
                                                        width: Scale(8),
                                                        height: Scale(8),
                                                        borderRadius: Scale(8),
                                                        backgroundColor: currentIndex == index ? 'rgba(151, 167, 191, 1)' : colors.white,
                                                        marginLeft: 5,
                                                        borderColor: currentIndex == index ? null : 'rgba(217, 217, 217, 1)',
                                                        borderWidth: currentIndex == index ? null : 2
                                                    }}></View>
                                            );
                                        })}
                                    </View>
                                </View> : null}
                            <View style={[commonStyles.flexView, { marginTop: verticalScale(10), paddingHorizontal: Scale(20) }]}>
                                <View style={styles.infoContainer}>
                                    <Image source={imagePath.mapIcon} style={styles.infoIconStyle} />
                                    <Text style={[commonStyles.fontSize10, { color: 'rgba(129, 129, 129, 1)' }]}>Tel Aviv</Text>
                                </View>
                                <View style={styles.infoContainer}>
                                    <Image source={imagePath.distance} style={styles.infoIconStyle} />
                                    <Text style={[commonStyles.fontSize10, { color: 'rgba(129, 129, 129, 1)' }]}>6Km</Text>
                                </View>
                                <View style={styles.infoContainer}>
                                    <Image source={imagePath.time} style={styles.infoIconStyle} />
                                    <Text style={[commonStyles.fontSize10, { color: 'rgba(129, 129, 129, 1)' }]}>1 Week ago</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default PostPage

const styles = StyleSheet.create({
    postContainer: {
        marginBottom: verticalScale(10)
    }, indicatorView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(10)
    }, iconStyle: {
        height: Scale(22),
        width: Scale(22),
        resizeMode: 'contain',
        marginRight: Scale(10),
        tintColor: colors.theme
    }, imgStyle: {
        height: verticalScale(220),
        width: '90%',
        borderRadius: 7
    }, infoContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    }, infoIconStyle: {
        height: Scale(16),
        width: Scale(16),
        resizeMode: 'contain',
        marginRight: Scale(5)
    },
})