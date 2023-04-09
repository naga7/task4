const validator = require("validator")
const mongoose = require("mongoose")

const taskmodel = mongoose.model(
        "TASK",
        {
                title: {
                        type: String
                        , tirm: true
                        , minLenght: 3
                        , maxLenght: 20
                }
                , content: { type: String }

                , status: {
                        type: Boolean
                        , default: false
                }
                , due_date: {}
        }
)
module.exports = taskmodel
