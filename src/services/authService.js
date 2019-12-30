import { User } from 'models';
import { Constants } from 'utils';

class AuthService {
    /**
     * @returns { User }
     */
    static getUserInfo = async() => {
        return await Promise.resolve(
            new User({ id: '1', name: 'mba-admin', isAdmin: true })
        );
    }

    /**
     * @param { User} user
     * @returns { Object }
     */
    static getPermission = user => {
        const { PERMISSIONS } = Constants;
        return user.isAdmin ? PERMISSIONS.ADMIN : PERMISSIONS.USER;
    }
}

export default AuthService;
