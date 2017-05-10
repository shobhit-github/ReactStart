import Http from '../../Http';
import {ToastAndroid, Alert} from 'react-native';


export default class Auth {

    http = new Http();

    constructor() {

    }

    toggleError(message) {

        return ToastAndroid.show(message, ToastAndroid.SHORT);
    }

    doLogin(data, callback) {

        this.http.post(data)
            .catch((err) => {
               this.toggleError("Something went Wrong");
            })
            .then((res) => {
                callback(res);
            })
    }

}
