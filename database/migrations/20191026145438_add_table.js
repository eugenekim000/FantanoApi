exports.up = function(knex, Promise) {
  return knex.schema.createTable("Reviews", t => {
    t.increments().index();

    t.text("ARTISTS")
      .notNullable()
      .index();

    t.text("ALBUM_TITLE")
      .notNullable()
      .index();
    t.text("SCORE")
      .notNullable()
      .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("Reviews");
};
