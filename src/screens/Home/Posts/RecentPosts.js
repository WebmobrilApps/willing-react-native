import { View, Text } from 'react-native'
import React from 'react'
import imagePath from '../../../constants/imagePath'
import PostPage from '../../../components/PostPage'
import styles from './styles'

const RecentPosts = () => {
  const data = [
    {
        id: 1,
        icon: imagePath.itemNeeded,
        txt: 'Item Needed',
        description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.',
        images: 0,
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
]
  return (
    <View style={styles.container}>
    <PostPage data = {data} />
    </View>
  )
}

export default RecentPosts