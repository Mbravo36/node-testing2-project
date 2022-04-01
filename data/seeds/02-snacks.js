
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('snacks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert([
        {snack_name: 'corn dog', park_id: 1},
        {snack_name: 'Corn', park_id: 2},
        {snack_name: 'Cracker', park_id: 3},
        {snack_name: 'Cookie', park_id: 4}
      ]);
    });
};