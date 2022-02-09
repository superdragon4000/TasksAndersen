const {Schema, model} = require('mongoose');
const TaskSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    value: {type: String, required: true},
});

module.exports = model('Task', TaskSchema);