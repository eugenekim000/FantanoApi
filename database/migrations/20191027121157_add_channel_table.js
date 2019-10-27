exports.up = function(knex, Promise) {
  return knex.schema.createTable("Channel", t => {
    t.increments().index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("Channel");
};
