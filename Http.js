import {Config} from './Config';
import {AsyncStorage} from 'react-native';
import Token from './Token';

export default class Http {

    Token = new Token();
    API_URL = Config.API_URL;
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };


    async auth() {

        this.headers.Authorization  = await AsyncStorage.getItem('_TOKEN_');

        return fetch(
            this.API_URL+'check_auth',
            {
                method: "GET",
                headers: this.headers
            }
        )
            .then( (rawData) => { return rawData.json() } )
    }


    get(url, params) {

        return fetch(
            this.API_URL+url,
            {
                method: "GET",
                headers: this.headers
            }
        )
            .then( (rawData) => { return rawData.json() } )
    }


    post(url, data) {

        return fetch(
            this.API_URL+url,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: this.headers
            }
        )
            .then( (rawData) => { return rawData.json() } )
    }





}

