
exports.seed = function(knex, Promise) {
  var practices = 'practices'
  return Promise.join(
    // Deletes ALL existing entries
    knex(practices).del(),

    // Inserts seed entries
    knex(practices).insert({id: 1, name: 'Coquitlam Center Dental Clinic', address: '1244 - 2929 Barnet Highway', city: 'Vancouver'}),
    knex(practices).insert({id: 2, name: 'The Tooth Whisperer', address: '108 W. 2nd St', city: 'Vancouver'}),
    knex(practices).insert({id: 3, name: 'Victoria Park Dental', address: '103-1111 Lonsdale Ave.', city: 'Vancouver'}),
    knex(practices).insert({id: 4, name: 'Garibaldi Dental', address: '38133 Cleveland Ave', city: 'Vancouver'}),
    knex(practices).insert({id: 5, name: 'Fairmont Dentistry', address: '1008 - 750 West Broadway', city: 'Vancouver'}),
    knex(practices).insert({id: 6, name: 'Star Dental', address: '1215 - 750 W. Broadway', city: 'Vancouver'}),
    knex(practices).insert({id: 7, name: 'Abba Dental', address: '603 - 1160 Burrard St', city: 'Vancouver'}),
    knex(practices).insert({id: 8, name: 'Wall Center Dental', address: '1065 Hornby St', city: 'Vancouver'}),
    knex(practices).insert({id: 9, name: 'Dental & Implant Clinic @ Lansdowne', address: '617 - 5300 No. 3 Rd.', city: 'Vancouver'}),
    knex(practices).insert({id: 10, name: 'A Smile Dental', address: '4994A 48th Ave.', city: 'Vancouver'}),
    knex(practices).insert({id: 11, name: 'Norburn Dental', address: '3976 E. Hastings St.', city: 'Vancouver'}),
    knex(practices).insert({id: 12, name: 'Creekside Dental Clinic', address: '#5 - 757 KLO Road', city: 'Vancouver'})
  );
};
