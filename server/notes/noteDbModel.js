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
  db(table)
    .insert(newData)
    .then(() => {
      return db(table);
    });
}

function update(newData, id) {
  return db(table)
    .where({ id })
    .update(newData)
    .then(() => {
      return db(table);
    });
}

function remove(id) {
  return db(table)
    .where({ id })
    .del()
    .then(() => {
      return db(table);
    });
}
