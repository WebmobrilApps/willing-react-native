import Toast from "react-native-simple-toast";
import store from "../redux/store";

getCommonHeaders = () => {
  let lang = store.getState().langInfo.language
  const userToken = store.getState().userInfo.loginInfo

  let commonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  };
  if(lang){
    commonHeaders['Accept-Language'] = lang
  }
  if(userToken){
    commonHeaders['Authorization'] = `Bearer ${userToken}`
  }
  return commonHeaders;
};


export async function ApiRequest(endUrl, method, headers, body) {
  try {
    let requestHeaders = getCommonHeaders();
    if (headers) {
      requestHeaders = { ...requestHeaders, ...headers };
    }
    const options = {
      method: method,
      headers: requestHeaders,
      body: body
    };
      const response = await fetch(endUrl, options)
      if (response?.status == 200) {
        const responseJson = await response.json()
        return responseJson
      }
  } catch (e) {
    Toast.show('Something went wrong')
  }
}