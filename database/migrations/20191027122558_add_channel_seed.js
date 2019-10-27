exports.up = function(knex, promise) {
  data = [];
  return knex("Channel").insert(data);
};

exports.down = function(knex, promise) {
  return knex("Channel").del();
};
