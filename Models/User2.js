import Sequelize from 'sequelize';
import sequelize from '../Database/Sequelize';

const User2 = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });
  
  // force: true will drop the table if it already exists
  /*
  User2.sync({force: false}).then(() => {
    // Table created
    return User2.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });
  */


export default User2;