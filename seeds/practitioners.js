
exports.seed = function(knex, Promise) {
  var practitioners = 'practitioners'
  return Promise.join(
    // Deletes ALL existing entries
    knex(practitioners).del(),

    // Inserts seed entries
    knex(practitioners).insert({id: 1, first_name: 'Angela', last_name: 'Lai', bio: '', practice_id: 1}),
    knex(practitioners).insert({id: 2, first_name: 'Marica', last_name: 'Szeleczki', bio: '', practice_id: 2}),
    knex(practitioners).insert({id: 3, first_name: 'Rod', last_name: 'Chow', bio: '', practice_id: 3}),
    knex(practitioners).insert({id: 4, first_name: 'Rob', last_name: 'Gardiner', bio: '', practice_id: 4}),
    knex(practitioners).insert({id: 5, first_name: 'Mary', last_name: 'Campbell', bio: '', practice_id: 5}),
    knex(practitioners).insert({id: 6, first_name: 'Alisa', last_name: 'Lange', bio: '', practice_id: 6}),
    knex(practitioners).insert({id: 7, first_name: 'Keith', last_name: 'Lim', bio: '', practice_id: 7}),
    knex(practitioners).insert({id: 8, first_name: 'Parviz', last_name: 'Roshanzamir', bio: '', practice_id: 8}),
    knex(practitioners).insert({id: 9, first_name: 'R.', last_name: 'Chaudhry', bio: '', practice_id: 9}),
    knex(practitioners).insert({id: 10, first_name: 'Bonbon', last_name: 'Hu', bio: '', practice_id: 10}),
    knex(practitioners).insert({id: 11, first_name: 'Danial', last_name: 'Deheshi', bio: '', practice_id: 11}),
    knex(practitioners).insert({id: 12, first_name: 'Colin', last_name: 'Hughes', bio: '', practice_id: 12})
  );
};
