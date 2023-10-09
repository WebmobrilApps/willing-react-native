import { setLoaderVisibility } from ".";
import { LOGIN, RESEND_OTP, VERIFY_OTP } from "../../helper/Config";
import store from "../store";
import * as api from '../../helper/index'
import screensNames from "../../constants/screensNames";
import Toast from 'react-native-simple-toast'
import types from "../types";


const { dispatch } = store

export const logInUser = async (countryName, countryCode, number, navigation) => {
    setLoaderVisibility(true)
    const url = LOGIN
    const body = JSON.stringify({
        "mobile": number,
        "countrycode": countryCode,
        "country": countryName
    })
    const metaInfo = await api.ApiRequest(url, 'POST', {}, body)
    setLoaderVisibility(false)
    if (metaInfo.success == true) {
        Toast.show(metaInfo?.message)
        navigation.navigate(screensNames.verifyOtp, { data: metaInfo?.data })
    } else {
        Toast.show(metaInfo?.message)
    }
}

export const verifyMobileOtp = async (token, otp, navigation) => {
    setLoaderVisibility(true)
    const url = VERIFY_OTP
    const body = JSON.stringify({
        "otp": otp
    })
    const header = {
        'Authorization': `Bearer ${token}`
    }
    const metaInfo = await api.ApiRequest(url, 'POST', header, body)
    setLoaderVisibility(false)
    if (metaInfo?.success == true) {
        dispatch({
            type:types.LOGIN,
            payload:metaInfo?.data?.token
          })
        Toast.show(metaInfo?.message)
        // console.log('metaInfo+++++++',metaInfo);
    } else if (metaInfo?.success == false) {
        Toast.show(metaInfo?.message)
    }
}

export const resendOtp = async(token) => {
    setLoaderVisibility(true)
    const url = RESEND_OTP
    const header = {
        'Authorization': `Bearer ${token}`
    }
    const metaInfo = await api.ApiRequest(url, 'GET', header)
    setLoaderVisibility(false)
    if (metaInfo?.success == true) {
        Toast.show(metaInfo?.message)
        return metaInfo
    } else if (metaInfo?.success == false) {
        Toast.show(metaInfo?.message)
    }
}