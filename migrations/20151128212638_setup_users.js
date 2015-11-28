
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('email').index().unique();
      table.string('password');
      table.integer('phone');
      table.integer('user_details_id').references('id').inTable('user_details');
      table.timestamps();
    }),
    knex.schema.createTable('user_details', function (table) {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users');
      table.date('date_of_birth')
      table.string('first_name');
      table.string('last_name');
      table.timestamps();
    })])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('user_details')
  ])
};
