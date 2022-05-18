'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    let data = [{
      name: "Đen",
      code: "Black",
      imagepath: ""
    }, {
      name: "Trắng",
      code: "White",
      imagepath: ""
    }, {
      name: "Xanh dương",
      code: "Blue",
      imagepath: ""
    }, {
      name: "Đỏ",
      code: "Red",
      imagepath: ""
    }, {
      name: "Tím",
      code: "Violet",
      imagepath: ""
    }, {
      name: "Hồng",
      code: "Purple",
      imagepath: ""
    }, {
      name: "Màu khác",
      code: "Others",
      imagepath: ""
    }];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
     await queryInterface.bulkInsert('Colors', data, {});
  },
  async down (queryInterface, Sequelize) {

    
      await queryInterface.bulkDelete('Colors', null, {});
  }
};
