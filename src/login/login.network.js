import Http from '../../Http';
import {ToastAndroid, Alert} from 'react-native';
import {Message} from '../../Message';


export default class Auth {

    http = new Http();

    constructor() {

    }



    doLogin(data, callback) {

        this.http.post('login', data)
            .catch((err) => {
                ToastAndroid.show(Message.SOMETHING_WRONG, ToastAndroid.SHORT);
            })
            .then((res) => {

                callback(res);
            })
    }





}
