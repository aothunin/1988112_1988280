'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    let data = [{
      "message": "Maecenas pulvinar lobortis est.",
      "rating": 4,
      "productId": 1,
      "userId": 1
    }, {
      "message": "Morbi non lectus.",
      "rating": 5,
      "productId": 1,
      "userId": 2
    }, {
      "message": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      "rating": 3,
      "productId": 1,
      "userId": 3
    }, {
      "message": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
      "rating": 1,
      "productId": 2,
      "userId": 2
    }, {
      "message": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
      "rating": 2,
      "productId": 3,
      "userId": 3
    }, {
      "message": "Proin risus.",
      "rating": 4,
      "productId": 4,
      "userId": 1
    }, {
      "message": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "rating": 1,
      "productId": 5,
      "userId": 2
    }]
    ;
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
     await queryInterface.bulkInsert('Reviews', data, {});
  },
  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Reviews', null, {});
  }
};
