
import Http from '../../Http';

export default class Auth {

    http = Http;

    constructor() {

    }

    doLogin(data) {

        this.http.post(data)
            .catch((err)=>{
                console.error(err);
            })
    }

}
