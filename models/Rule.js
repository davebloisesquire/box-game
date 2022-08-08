const { Schema, model } = require('mongoose')

const ruleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

const Rule = model('Rule', ruleSchema)

module.exports = Rule