'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addIndex(
      'Reviews',
      ['userId', 'spotId'],
      {
        unique: true,
        ...options
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex(
      'Reviews',
      ['userId', 'spotId'],
      options
    )
  }
};
