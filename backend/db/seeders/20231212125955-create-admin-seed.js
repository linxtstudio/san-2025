const crypto = require('crypto');
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      id: crypto.randomUUID(),
      name: 'Super Admin',
      username: 'superadmin',
      password: await bcrypt
          .genSalt(8)
          .then(salt => {
            return bcrypt.hash('superadmin', salt);
          })
          .then(hash => {
            return hash
          })
          .catch(err => console.error(err.message))
    }]);
  },

  async down (queryInterface, Sequelize) {
    //
  }
};
