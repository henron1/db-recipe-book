const db = require('../dbConfig.js');
const mappers = require('mappers');

module.exports = {
    get,

};

function getDishes() {
    return db('Dishes');
}

function getDishbyId() {
    return db('dishes')
    .where({id})
    .first();
}

function addDish(dish) {
    return db('dishes')
    .insert(dish)
    .then(ids => {
        return getDishById(ids[0]);
    });
}

