import Sequelize from 'sequelize';
import Admin from '../Model/Admin';


Admin.sync({force: false}).then(() => {
    return Admin.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});

