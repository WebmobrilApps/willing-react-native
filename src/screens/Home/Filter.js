import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../../styles/colors'
import Scale, { verticalScale } from '../../styles/Scale'
import commonStyles from '../../styles/commonStyles'
import fontFamily from '../../styles/fontFamily'
import AppTextInput from '../../components/AppTextInput'
import PostInformation from '../../utility/PostInformation'
import CustomBtn from '../../components/CustomBtn'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Filter = () => {
    const [category, setCategory] = useState('')
    return (
        <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        keyboardShouldPersistTaps={'handled'}
        scrollEnabled={true}
        // contentContainerStyle={[{flex:1}]}
        style={{ flex: 1, width: '100%', height: '100%' }}
        showsVerticalScrollIndicator={false}>
            <View style={[styles.container, { padding: Scale(20) }]}>
                <View style={[commonStyles.flexView, { marginBottom: verticalScale(8) }]}>
                    <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>Filter by keyword</Text>
                    <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, color: 'rgba(138, 138, 138, 1)' }]}>Clear All</Text>
                </View>
                <AppTextInput />
                <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginBottom: verticalScale(8) }]}>Filter by City</Text>
                <AppTextInput />
                <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginBottom: verticalScale(8) }]}>Filter by Category</Text>
                <FlatList
                    numColumns={3}
                    data={PostInformation.categoryType}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => setCategory(item.name)}
                            style={[styles.categoryBubble,{backgroundColor:item.name == category ? colors.theme :colors.white,borderWidth:item.name == category ? 0 :1}]}>
                                <Text style={[commonStyles.fontSize12, { fontFamily: fontFamily.medium,color:item.name == category ? colors.white :colors.txtColor }]}>{item.text}</Text>
                            </TouchableOpacity>
                        )
                    }} />
                    <CustomBtn btnStyle={{width:'80%',alignSelf:'center',marginTop:verticalScale(150)}}
                    title={'Next'}/>
            </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }, categoryBubble: {
        height: verticalScale(32),
        borderColor: colors.txtColor,
        borderWidth: 1,
        borderRadius: Scale(30),
        paddingHorizontal: Scale(15),
        margin: Scale(5),
        justifyContent: 'center',
        alignItems: 'center'

    }
})