const mongoose = require('mongoose');

const tradesSchema = new mongoose.Schema(
    {
        Stock : {
            type : String,
            required : true,
            trim : true
        },
        Entry : {
            type : Number,
            trim : true
        },
        Exit : {
            type : Number,
            trim : true
        },
        PnL : {
            type : Number,
            trim : true
        }
    }
)

module.exports = mongoose.model("Trades", tradesSchema);