
import Http from '../../Http';

export default class Dashboard {

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
