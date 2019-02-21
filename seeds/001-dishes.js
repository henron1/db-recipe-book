
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, dish_name: 'Doughnuts'},
        {id: 2, dish_name: 'Avacado Toast'},
        {id: 3, dish_name: 'Fried Chicken'}
      ]);
    });
};
