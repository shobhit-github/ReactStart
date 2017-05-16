import Http from '../../Http';
import {ToastAndroid, Alert} from 'react-native';
import {Message} from '../../Message';

export class Home {

    http = new Http();



    constructor() {

    }

    checkAuth(callback) {

        this.http.auth()
            .catch((err) => {
                ToastAndroid.show(Message.SOMETHING_WRONG, ToastAndroid.SHORT);
            })
            .then((res) => {
                callback(res);
            })

    }





}
