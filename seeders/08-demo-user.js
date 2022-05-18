'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    let data = [{
      "username": "nguyenvana@gmail.com",
      "password": "aaa",
      "fullname": "Nguyen Van A",
      "avatarPath": "http://dummyimage.com/30x30.png/dddddd/000000",
      "isAdmin": true
    }, {
      "username": "lethanhb@gamil.com",
      "password": "bbb",
      "fullname": "Le Thanh B",
      "avatarPath": "http://dummyimage.com/30x30.png/cc0000/ffffff",
      "isAdmin": false
    }, {
      "username": "lythic@gmail.com",
      "password": "ccc",
      "fullname": "Ly Thi C",
      "avatarPath": "http://dummyimage.com/30x30.png/5fa2dd/ffffff",
      "isAdmin": false
    }];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
     await queryInterface.bulkInsert('Users', data, {});
  },
  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
