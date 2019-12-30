import { Cookies } from 'react-cookie';

const oneDay = 86400;
const cookieOption = {
    path: '/',
    maxAge: 365 * oneDay
};

class LocalDataService {
    constructor() {
        this.cookies = new Cookies();
    }
    // Access token
    set accessToken(accessToken) {
        this.cookies.set('token', accessToken, cookieOption);
    }
    get accessToken() {
        const token = this.cookies.get('token');
        return token;
    }

    clearAll = () => {
        this.cookies.remove('token', cookieOption);
    }
}

export default LocalDataService;
