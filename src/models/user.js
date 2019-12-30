import { Base } from 'models';

class User extends Base {
    static toModel = jsonData => {
        return new User(jsonData);
    }

    constructor(jsonData) {
        super();

        if (!jsonData) return;

        this.id = jsonData.id;
        this.email = jsonData.email || '';
        this.firstName = jsonData.firstName || '';
        this.lastName = jsonData.lastName || '';
        this.isAdmin = jsonData.isAdmin || false;
        this.name = jsonData.name || '';
    }

    get fullName() {
        return [ this.firstName, this.lastName ].join(' ');
    }

    /** Override */
    toJSON = () => {
        return {};
    };
}

export default User;
