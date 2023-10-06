import { View, Text, Image, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import imagePath from '../../../constants/imagePath'
import PostPage from '../../../components/PostPage'

const AllPosts = (props) => {
    const data = [
        {
            id: 1,
            icon: imagePath.itemNeeded,
            txt: 'Item Needed',
            description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.',
            images: [
                {
                    id: 1,
                    img: imagePath.image
                },
                {
                    id: 2,
                    img: imagePath.image
                },
                {
                    id: 3,
                    img: imagePath.image
                },
            ],
        },
        {
            id: 2,
            icon: imagePath.giveAwayItem,
            txt: 'Give Away Item',
            description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.',
            images: 0,
        },
        {
            id: 3,
            icon: imagePath.lostAndFound,
            txt: 'Lost And Found',
            description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.',
            images: 0
        },
        {
            id: 4,
            icon: imagePath.medical,
            txt: 'Medical',
            description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.',
            images: 0
        },
        {
            id: 5,
            icon: imagePath.medical,
            txt: 'Medical',
            description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.',
            images: 0
        },
    ]
    return (
        <View style={styles.container}>
            <PostPage data={data} 
            onPress={() => navigation.navigate(screensNames.postDetails,{item})}
            />
        </View>
    )
}

export default AllPosts