const { update } = require('../../data/dbConfig')
const db = require('../../data/dbConfig')

module.exports = {
    getAll() {
        return db('dealers')
    },
    getById(id) {
        return db('dealers').where('id', id).first()
    },
    create(car) {
        return db('dealers').insert(car)
        .then(([id]) => {
            return db('dealers').where('id', id).first()
        })
    },
    update(id, car) {
        return db('dealers').where('id', id).update(car)
        .then(() => {
            return db('dealers').where('id', id)
        })
    },
    delete(id) {
        return db('dealers').where('id', id).del()
    }
}