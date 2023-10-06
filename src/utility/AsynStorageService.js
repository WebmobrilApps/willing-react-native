import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (TokenType,value, callback) => {
    try {
        await AsyncStorage.setItem(TokenType, value);
        callback ?  callback() : null
    } catch (e) {
        // console.log("error in store data", e)
    }
}


export const getData = async (tokenType) => {
    try {
        const value = await AsyncStorage.getItem(tokenType)
        if (value !== null) {
            return value
        }
    } catch (e) {
        // console.log("error in get data", e)
    }
}

export const removeData = async (tokenType) => {
    try {
        await AsyncStorage.removeItem(tokenType)
    } catch (e) {
        // console.log("error in remove local data", e)
    }
}

