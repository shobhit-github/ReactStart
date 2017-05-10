import Config from './Config';

export default class Http {

    API_URL = Config.API_URL;
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };


    get(params) {
        return fetch(
            this.API_URL,
            {
                method: "GET",
                headers: this.headers
            }
        );
    }

    post(data) {

        return fetch(
            this.API_URL,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: this.headers
            }
        )
            .then((rawData) => rawData.json());
    }


}

