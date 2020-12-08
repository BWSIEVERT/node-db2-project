
exports.up = function(knex) {
    return knex.schema.createTable('dealers', table => {
        table.increments()
        table.text('VIN', 128).unique().notNullable()
        table.text('Car_Make', 128).notNullable()
        table.integer('Car_Model', 128).notNullable()
        table.integer('Car_Milage', 128).notNullable()
        table.text('Transmission_Info')
        table.text('Title_Status')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dealers')
};
