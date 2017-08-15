
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dinosaur', (table) => {
    table.increments()
    table.text('dinoName').notNullable().unique()
    table.text('period')
    table.text('origin')
    table.boolean('herbivore')
    table.integer('heightInFeet')
    table.text('funFact')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dinosaur')
};
