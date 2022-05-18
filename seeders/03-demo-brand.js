'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    let data = [{
      "name": "Nike",
      "summary": "Giầy Nike",
      "imagepath": "http://dummyimage.com/30x31.png/cc0000/ffffff"
    }, {
      "name": "Adidas",
      "summary": "Giầy Adidas",
      "imagepath": "http://dummyimage.com/30x35.png/dddddd/000000"
    }, {
      "name": "Skechers",
      "summary": "Giầy Skechers",
      "imagepath": "http://dummyimage.com/30x60.png/dddddd/000000"
    }, {
      "name": "Biti's",
      "summary": "Giầy Biti's",
      "imagepath": "http://dummyimage.com/30x42.png/5fa2dd/ffffff"
    }];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
     await queryInterface.bulkInsert('Brands', data, {});
  },
  async down (queryInterface, Sequelize) {

    
      await queryInterface.bulkDelete('Brands', null, {});
  }
};
