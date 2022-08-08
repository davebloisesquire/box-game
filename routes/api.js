const router = require('express').Router()
const { classicRules, altRules } = require('../seeds/seed-rules')
const { Rule } = require('../models/index')

router.get('/api/rules', (req, res) => {
    Rule.aggregate([{ $sample: { size: 1 } }])
        .then(randRule => res.json(randRule))
        .catch(error => res.status(400).json(error))
})

router.post('/api/new', ({ body }, res) => {
    Rule.create(body)
        .then(rule => res.json(rule))
        .catch(error => res.status(400).json(error))
})

router.delete('/api/clean-house', (req, res) => {
    Rule.deleteMany()
        .then(rules => res.json(rules))
        .catch(error => res.status(400).json(error))
})

router.post('/api/classic-rules', (req, res) => {
    Rule.insertMany(classicRules)
        .then(rules => res.json(rules))
        .catch(error => res.status(400).json(error))

})

router.post('/api/alt-rules', (req, res) => {
    Rule.insertMany(altRules)
        .then(rules => res.json(rules))
        .catch(error => res.status(400).json(error))

})

module.exports = router