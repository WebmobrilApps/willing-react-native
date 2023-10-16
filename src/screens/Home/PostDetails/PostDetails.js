import { View, Text, SafeAreaView, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import commonStyles from '../../../styles/commonStyles'
import styles from './styles'
import imagePath from '../../../constants/imagePath'
import fontFamily from '../../../styles/fontFamily'
import colors from '../../../styles/colors'
import Scale, { verticalScale } from '../../../styles/Scale'
import ItemSeperator from '../../../components/ItemSeperator'
import { isRTL } from '../../../constants/constants'

const { width } = Dimensions.get('window')

const PostDetails = (props) => {
    const preData = props.route.params.item
    const screenName = props.route.params.screenName
    const [currentIndex, setCurrentIndex] = useState(0)
    const [toggle, setToggle] = useState(false)
    console.log('screen name   ++++', screenName);


    const CommonComp = ({ title, subtitle, img }) => {
        return (
            <View style={{ marginBottom: Scale(10) }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={img} style={[styles.iconStyle, { tintColor: colors.txtColor}]} />
                    <Text style={[commonStyles.fontSize12, { fontFamily: fontFamily.medium }]}>{title}</Text>
                </View>
                <Text style={[commonStyles.fontSize10, { marginLeft: Scale(25) }]}>{subtitle}</Text>
            </View>
        )
    }

    const SocialIconComp = ({
        title,
        img
    }) => {
        return (
            <View style={{ alignItems: 'center', flex: 1 }}>
                <View style={[styles.roudContainer, { marginBottom: verticalScale(5) }]}>
                    <TouchableOpacity>
                        <Image source={img} style={styles.socialIconStyle} />
                    </TouchableOpacity>
                </View>
                <Text style={commonStyles.fontSize10}>{title}</Text>
            </View>
        )
    }

    console.log('toggle++++', toggle);

    return (
        <SafeAreaView style={commonStyles.mainContainer}>
            <ScrollView>
                <View style={commonStyles.mainContainer}>
                    <View style={[commonStyles.flexView, styles.container]}>
                        <Text style={commonStyles.fontSize12}>Status: Open</Text>
                        <Text style={commonStyles.fontSize12}>Time Posted: 2 hours ago</Text>
                    </View>
                    {screenName == 'minPosts' ? <View style={[commonStyles.flexView, styles.container, { borderBottomColor: colors.white, paddingBottom: 0 }]}>
                        <TouchableOpacity style={commonStyles.flexView}>
                            <Image source={imagePath.edit} style={styles.iconStyle} />
                            <Text style={[commonStyles.fontSize12, { fontFamily: fontFamily.medium }]}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={commonStyles.flexView}>
                            <Image source={imagePath.lock} style={styles.iconStyle} />
                            <Text style={[commonStyles.fontSize12, { fontFamily: fontFamily.medium }]}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={commonStyles.flexView}>
                            <Image source={imagePath.delete} style={styles.iconStyle} />
                            <Text style={[commonStyles.fontSize12, { fontFamily: fontFamily.medium }]}>Delete</Text>
                        </TouchableOpacity>
                    </View> : null}
                    <View style={{ paddingHorizontal: Scale(20), marginTop: verticalScale(20), borderBottomColor: colors.borderColor, borderBottomWidth: 1, marginBottom: 10 }}>
                        <View style={[commonStyles.flexView, { justifyContent: 'flex-start' }]}>
                            <Image source={preData.icon} style={styles.categoryImgStyle} />
                            <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>{preData.txt}</Text>
                        </View>
                        <Text style={[commonStyles.fontSize10, { marginVertical: verticalScale(0),marginBottom:verticalScale(20) }]}>{preData.description}</Text>
                    </View>
                    <View style={[commonStyles.flexView, { paddingHorizontal: Scale(20),marginTop:verticalScale(10) }]}>
                        <View>
                            <CommonComp title={'Location'}
                                subtitle={'Israel'}
                                img={imagePath.mapIcon} />
                            <CommonComp title={'Expires in'}
                                subtitle={'2 months'}
                                img={imagePath.calender} />
                            <CommonComp title={'Mobile Number'}
                                subtitle={'xxxxxxxxxx'}
                                img={imagePath.call} />
                        </View>
                        <View>
                            <CommonComp title={'Distance from you'}
                                subtitle={'12 km'}
                                img={imagePath.distance} />
                            <CommonComp title={'Urgency Level'}
                                subtitle={'Moderate'}
                                img={imagePath.urgencyLevel} />
                            <CommonComp title={'Posting person name'}
                                subtitle={'Abc'}
                                img={imagePath.posterIcon} />
                        </View>
                    </View>
                    {!!toggle && screenName != 'minPosts' && screenName != 'otherpages' ? <ItemSeperator seperatorStyle={{ width: '100%', marginVertical: verticalScale(20) }} /> : null}
                    {!toggle && screenName !== 'minPosts' ? <>
                        <Text style={[commonStyles.fontSize10, { marginHorizontal: Scale(20), textAlign: 'center', marginVertical: Scale(10), marginBottom: verticalScale(20) }]}>You can connect with the person the person that posted this request
                            via next lorem Ipsom.
                        </Text>
                        <View style={[commonStyles.flexView, { marginVertical: verticalScale(15),marginHorizontal:Scale(70) }]}>
                            <SocialIconComp img={imagePath.whatsApp}
                                title={'WhatsApp'} />
                            <SocialIconComp img={imagePath.dialer}
                                title={'Call'} />
                            <SocialIconComp img={imagePath.message}
                                title={'SMS'} />
                        </View>
                        <Text style={[commonStyles.fontSize10, { alignSelf: 'center', marginVertical: verticalScale(20),marginBottom:verticalScale(10) }]}>Show more info</Text>
                    </> : null}
                    {!!toggle ? <>
                        {!preData.images == 0 ?
                            <View
                                style={{ width: width }}>
                                <ItemSeperator seperatorStyle={{ width: '100%', marginBottom: verticalScale(20) }} />
                                <FlatList
                                    data={preData.images}
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
                                    {preData?.images.map((item, index) => {
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
                    </> : null}
                    {screenName !== 'minPosts' ? <>
                        <ItemSeperator seperatorStyle={{ width: '100%', marginTop: verticalScale(20) }} />
                        <TouchableOpacity
                            onPress={() => setToggle(!toggle)}
                            activeOpacity={1}
                            style={[styles.roudContainer, { bottom: verticalScale(15), height: Scale(22), width: Scale(22) }]}>
                            <Image source={imagePath.backIcon} style={[styles.upArrow, { transform: [{ rotate: toggle == true ? '90deg' : '270deg' }] }]} />
                        </TouchableOpacity>
                        {!toggle ? <Text style={[commonStyles.fontSize10, { alignSelf: 'center',bottom:verticalScale(3) }]}>Report the post</Text> : null}
                    </> : null}
                    {!!toggle && screenName !== 'minPosts' ? <>
                        <Text style={[commonStyles.fontSize10, { marginHorizontal: Scale(20), textAlign: 'center', marginVertical: Scale(10), marginBottom: verticalScale(20) }]}>You can connect with the person the person that posted this request
                            via next lorem Ipsom.
                        </Text>
                        <View style={[commonStyles.flexView,{paddingHorizontal:Scale(70)}]}>
                            <SocialIconComp img={imagePath.whatsApp}
                                title={'WhatsApp'} />
                            <SocialIconComp img={imagePath.dialer}
                                title={'Call'} />
                            <SocialIconComp img={imagePath.message}
                                title={'SMS'} />
                        </View>
                    </> : null}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PostDetails