const mongoose = require('mongoose');

const tradesSchema = new mongoose.Schema(
    {
        stock : {
            type : String,
            required : true,
            trim : true
        },
        entry : {
            type : Number,
            trim : true
        },
        exit : {
            type : Number,
            trim : true
        },
        pnl : {
            type : Number,
            trim : true
        }
    }
)

module.exports = mongoose.model("Trades", tradesSchema);