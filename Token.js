import {AsyncStorage, ToastAndroid} from 'react-native';
import {Message} from './Message';

export default class Token {


    async set(key) {

        try {
            await AsyncStorage.setItem('_TOKEN_', key);
        } catch (error) {
            return ToastAndroid.show(Message.TOKEN_NOT_SAVED, ToastAndroid.SHORT);
        }
    }

    async get() {

        try {
            const value = await AsyncStorage.getItem('_TOKEN_');
            return (value !== null) ? value : false;
        } catch (error) {
            return ToastAndroid.show(Message.TOKEN_FAILED, ToastAndroid.SHORT);
        }
    }

}

