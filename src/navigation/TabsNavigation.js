import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllPosts from '../screens/Home/Posts/AllPosts';
import MinePosts from '../screens/Home/Posts/MinePosts';
import RecentPosts from '../screens/Home/Posts/RecentPosts';
import colors from '../styles/colors';
import Scale from '../styles/Scale';
import fontFamily from '../styles/fontFamily';
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import commonStyles from '../styles/commonStyles';
import screensNames from '../constants/screensNames';

const Tab = createMaterialTopTabNavigator();

function TabsNavigation(props) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => props.navigation.navigate(screensNames.newRequestMain)}
                    style={styles.newPostRequest}>
                    <Text style={[commonStyles.fontSize14, styles.plusIconText]}>+</Text>
                </TouchableOpacity>
                <Tab.Navigator
                    initialRouteName='Location'
                    tabBarPosition='top'
                    screenOptions={{
                        swipeEnabled:false,
                        tabBarActiveTintColor: colors.tabBarActiveColor,
                        tabBarInactiveTintColor: colors.tabBarInActiveColor,
                        tabBarLabelStyle: { fontSize: Scale(12), fontFamily: fontFamily.medium },
                        tabBarStyle: { shadowColor: colors.white },
                        tabBarIndicatorStyle: { borderWidth: 1, borderColor: colors.theme },
                        tabBarItemStyle: {
                            shadowOpacity: 0,
                            shadowRadius: 0,
                        },
                    }}
                    sceneContainerStyle={{ backgroundColor: colors.white }}
                >
                <Tab.Screen name="Recent" component={RecentPosts} />
                <Tab.Screen name="Location" component={AllPosts} />
                <Tab.Screen name="Mine" component={MinePosts} />
                </Tab.Navigator>
            </View>
        </SafeAreaView>

    );
}

export default TabsNavigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    }, newPostRequest: {
        height: Scale(41),
        width: Scale(41),
        borderRadius: Scale(41),
        backgroundColor: colors.theme,
        position: 'absolute',
        bottom: '7%',
        right: '7%',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, plusIconText: {
        color: colors.white,
        fontSize: Scale(27),
        textAlign: 'center'
    }
})