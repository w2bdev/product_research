import Sequelize from 'sequelize';
import sequelize from '../../Database/Connection/Sequelize';

const Admin = sequelize.define('admin', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });

export default Admin;