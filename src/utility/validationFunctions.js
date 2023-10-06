import Toast from 'react-native-simple-toast';
import strings from '../constants/lng/LocalizedString'

const VALIDATE = {
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ALPHABET_ONLY: /^[a-zA-Z \s]*$/,
    NUMBER: /[0-9]$/,
    MOBILE: /^[0-]9{1,20}$/,
    STREET: /^[a-zA-Z0-9 '-.~!@#$%^&*()_+={}[];':"<>,.\s]*$/,
    PASSWORD:/[d\-_\s]+$/,
    INSTAGRAM: /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/,
    LINKEDIN: /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im
}

export const validators = {
    checkAlphabet: (name, min, max, value) => {
        var min = min || 2;
        var max = max || 30;
        if (value) {
            if (!VALIDATE.ALPHABET_ONLY.test(value)) { Toast.show(`${strings.ENTER_VALID} ${name}`); return false }
            else if (value.length < min || value.length > max) { Toast.show(`${name} ${strings.MUST_CONTAIN_3_CHAR}.`,); return false }
            return true
        }
        else { Toast.show(`${strings.PLEASE_ENTER} ${name}`,); return false }
    },

    checkEmail: (name, value) => {
        if (value) {
            if (!VALIDATE.EMAIL.test(value)) { Toast.show(`${strings.ENTER_VALID} ${name}`); return false }
        } else { Toast.show(`${strings.PLEASE_ENTER} ${name}`,); return false }
        return true
    },
    checkFacebook: (name, value) => {
        if (value) {
            if (!VALIDATE.FACEBOOK.test(value)) { Toast.show(`${name} ${strings.IS_INVALID}.`,); return false }
        }
        return true
    },
    checkInstagram: (name, value) => {
        if (value) {
            if (!VALIDATE.INSTAGRAM.test(value)) { Toast.show(`${name} ${strings.IS_INVALID}.`,); return false }
        }
        return true
    },
    checkLinkedIn: (name, value) => {
        if (value) {
            if (!VALIDATE.LINKEDIN.test(value)) { Toast.show(`${name} ${strings.IS_INVALID}.`,); return false }
        }
        return true
    },

    checkNumber: (name, min, max, value) => {
        var min = min || 6;
        var max = max || 15;
        if (value) {
            if (!VALIDATE.NUMBER.test(value)) { Toast.show(`Please enter valid ${name}`,); return false }
            else if (value.length < min || value.length > max) { Toast.show(`Please enter valid ${name}.`,); return false }
            return true
        }
        else { Toast.show(`Please enter ${name}`,); return false }
    },

    checkPhoneNumberWithFixLength: (name, max, value) => {
        var max = max || 10;
        if (value) {
            if (!VALIDATE.MOBILE.test(value)) { Toast.show(`${name} ${strings.IS_INVALID}.`,); return false }
            else if (value.length != max) { Toast.show(`${name} ${strings.SHOULD_BE} ${max} ${strings.DIGITS}.`,); return false }
            return true
        }
        else { Toast.show(`${name} ${strings.IS_REQUIRED}.`,); return false }
    },

    checkOptionalPhoneNumberWithFixLength: (name, max, value) => {
        var max = max || 10;
        if (value) {
            if (!VALIDATE.MOBILE.test(value)) { Toast.show(`${name} ${strings.IS_INVALID}.`,); return false }
            else if (value.length != max) { Toast.show(`${name} ${strings.SHOULD_BE} ${max} ${strings.DIGITS}.`,); return false }
            return true
        }
        else { return true }
    },

    checkPhoneNumber: (name, min, max, value) => {
        var min = min || 7;
        var max = max || 15;
        if (value) {
            if (!VALIDATE.MOBILE.test(value)) { Toast.show(`${name} ${strings.IS_INVALID}.`,); return false }
            else if (value.length < min || value.length > max) { Toast.show(`${strings.PLEASE_ENTER_VALID}${name}.`,); return false }
            return true
        }
        else { Toast.show(`${name} ${strings.IS_REQUIRED}.`,); return false }
    },

    checkNotNull: (name, min, max, value) => {
        var min = min || 6;
        var max = max || 6;
        if (value) {
            if (value.length < min || value.length > max) { Toast.show(`${name} ${strings.ENTERED_MUST_BE_BW} ${min} ${strings.TO} ${max} ${strings.CHAR}.`,); return false }
            return true
        }
        else { Toast.show(`${name} ${strings.IS_REQUIRED}.`,); return false }
    },
    checkEmpty: (name,value) => {
        var min = 1;
        var max = max || 6;
        if (value) {
            if (value.length < min) { Toast.show(`${strings.PLEASE_ENTER} ${name}`,); return false }
            return true
        }
        else { Toast.show(`${strings.PLEASE_ENTER} ${name}`,); return false }
    },
    checkOtp: (name, min, max, value) => {
        var min = min || 4;
        var max = max || 10;
        if (value) {
            if (value.length < min || value.length > max) { Toast.show(`${name} ${strings.MUST_BET_BTW} ${min} ${strings.TO} ${max} ${strings.CHAR}.`,); return false }
            return true
        }
        else { Toast.show(`${name} ${strings.IS_REQUIRED}.`,); return false }
    },

    checkRequire: (name, value) => {
        if (value) {
            return true
        }
        else { Toast.show(`Please enter ${name}`,); return false }
    },

    checkRequireSelect: (name, value) => {
        if (value) {
            return true
        }
        else {
            Toast.show(`${strings.PLEASE_SELECT} ${name}`,);
            return false
        }
    },
    checkAccept: (name, value) => {
        if (value) {
            return true
        }
        else {
            Toast.show(`please accept' ${name}`,);
            return false
        }
    },

    checkPassword: (name, min, max, value) => {
        var min = min || 6;
        var max = max || 15;
        if (value) {
            if (VALIDATE.PASSWORD.test(value)) { Toast.show(`${name} ${strings.IS_INVALID}.`,); return false }
            else if (value.length < min || value.length > max) { Toast.show(`${name} ${strings.SHOULD_BE_BW} ${min} to ${max} ${strings.CHAR}`,); return false }
            return true
        }
        else { Toast.show(`${strings.PLEASE_ENTER} ${name}`,); return false }
    },

    checkMatch: (name, value, name2, value2) => {
        var min = min || 5;
        var max = max || 40;
        if (value == value2) {
            return true
        }
        else { Toast.show(`${strings.PASSWORD_NOT_MATCHED}.`,); return false }
    },

    checkStreet: (name, min, max, value) => {
        var min = min || 7;
        var max = max || 15;
        if (value) {
            if (VALIDATE.STREET.test(value)) { Toast.show(`${name} ${strings.IS_INVALID}.`,); return false }
            else if (value.length < min || value.length > max) { Toast.show(`${name} ${strings.MUST_BET_BTW} ${min} ${strings.TO} ${max} ${strings.CHAR}.`,); return false }
            return true
        }
        else { Toast.show(`${name} ${strings.IS_REQUIRED}.`,); return false }
    },
}