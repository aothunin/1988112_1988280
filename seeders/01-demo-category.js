'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    let data = [
      {name: 'Nam', summary:'Bộ sưu tập nam tính', imagepath:'/img/category/c1.jpg'},
      {name: 'Nữ', summary:'Bộ sưu tập dịu dàng', imagepath:'/img/category/c2.jpg'},
      {name: 'Unisex', summary:'Bộ sưu tập cá tính', imagepath:'/img/category/c3.jpg'},
      {name: 'Trẻ em', summary:'Phong cách nhí nhảnh', imagepath:'/img/category/c4.jpg'}
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
     await queryInterface.bulkInsert('Categories', data, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Categories', null, {});
  }
};
