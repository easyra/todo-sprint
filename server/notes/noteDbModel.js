const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig['development']);
const table = 'notes';

module.exports = {
  get,
  getById,
  add,
  update,
  remove,
};

function get() {
  return db(table);
}

function getById(id) {
  return db(table)
    .where({ id })
    .first();
}

function add(newData) {
  return db(table).insert(newData);
}

function update(newData, id) {
  return db(table)
    .where({ id })
    .update(newData);
}

function remove(id) {
  return db(table)
    .where({ id })
    .del();
}
