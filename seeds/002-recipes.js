
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Granny Js fried chicken'},
        {id: 2, recipe_name: 'best doughnuts ever'},
        {id: 3, recipe_name: 'avacado toast'}
      ]);
    });
};
