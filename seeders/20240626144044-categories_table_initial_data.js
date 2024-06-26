'use strict';

module.exports = {
  async up(queryInterface) {
    const categories = [
      { title: 'Electronics', description: 'Devices, gadgets, and accessories.' },
      { title: 'Clothing', description: 'Apparel for men, women, and children.' },
      { title: 'Home & Kitchen', description: 'Furniture, appliances, and kitchenware.' },
      { title: 'Books', description: 'Wide range of books across various genres.' },
      { title: 'Beauty & Personal Care', description: 'Cosmetics, skincare, and personal care products.' },
      { title: 'Sports & Outdoors', description: 'Equipment and clothing for sports and outdoor activities.' },
      { title: 'Toys & Games', description: 'Toys, games, and puzzles for children and adults.' },
      { title: 'Automotive', description: 'Car accessories, parts, and maintenance products.' },
      { title: 'Health & Wellness', description: 'Health products and wellness accessories.' },
      { title: 'Jewelry', description: 'Rings, necklaces, bracelets, and other jewelry.' },
      { title: 'Music & Instruments', description: 'Musical instruments and accessories.' },
      { title: 'Office Supplies', description: 'Office equipment, stationery, and supplies.' },
      { title: 'Pet Supplies', description: 'Products for pet care and accessories.' },
      { title: 'Garden & Outdoors', description: 'Gardening tools, plants, and outdoor furniture.' },
      { title: 'Baby Products', description: 'Products for babies, including clothing and toys.' },
      { title: 'Shoes', description: 'Footwear for all ages and occasions.' },
      { title: 'Video Games', description: 'Video games and gaming accessories.' },
      { title: 'Tools & Home Improvement', description: 'Tools and equipment for home improvement projects.' },
      { title: 'Grocery', description: 'Food, beverages, and household essentials.' },
      { title: 'Watches', description: 'Wristwatches and accessories.' }
    ];

    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert(
          'categories',
          categories.map((category) => ({
            title: category.title,
            description: category.description,
            created_at: new Date(),
            updated_at: new Date(),
          })),
          { transaction },
      );

      await transaction.commit();
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkDelete('categories', null, { transaction });

      await transaction.commit();
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      throw err;
    }
  },
};
