const express = require('express')
const db = require('../../data/dbConfig')
const router = express.Router()

const Dealer = require('./dealer_model')

router.get('/', async (req, res) => {
    try {
        const data = await Dealer.getAll()
        res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await Dealer.getById(id)
        res.json(data)
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const car = req.body
        const data = await Dealer.create(car)
        res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const changes = req.body
        const data = await Dealer.update(id, changes)
        res.json(data)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Dealer.delete(id)
        res.json({
            message: `Dealers car with id of ${id} has been removed.`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router