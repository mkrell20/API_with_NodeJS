'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('users', [{
       username: 'John Doe',
       password: "potatopotato",
       email: "ILovePickles68@gmail.com"
     },
     {
      username: 'Bob Loe',
      password: "MONKE123",
      email: "IHateThe@gmail.com",
    },
    {
      username: 'Ron Moe',
      password: "yasuomain420",
      email: "yasuomainPRO@hotmail.com",
    }], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('People', null, {});
    
  }
};
