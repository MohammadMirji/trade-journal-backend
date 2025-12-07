const Trades = require("../models/trades.model");

// Create
// made code by seeing taskify project for reference
const createTrade = async (req, res) => {
  try {
    const { stock, entry, exit, pnL } = req.body;

    if (!stock) {
      return res
        .status(400)
        .json({ sucess: false, message: "Stock name is required" });
    }
    const trades = await Trades.create({
      stock,
      entry,
      exit,
      pnL,
      // user: req.user._id,
    });
    res.status(201).json({ sucess: true, data: trades });
  } catch (err) {
    console.error("Error creating trade", err);
    res.status(500).json({ sucess: false, message: err.message });
  }
};

// Get
// made code by seeing taskify project for reference
const getTrade = async (req, res) => {
  try {
    const trades = await Trades.find();
    res.json(trades);
  } catch (err) {
    console.error("Error fetching trades", err);
    res.status(500).json({ sucess: false, message: err.message });
  }
};

// Delete
// made code by seeing taskify project for reference
const deleteTrade = async (req, res) => {
  try {
    const trades = await Trades.findByIdAndDelete(req.params.id);
    res.json({ message: "Trade deleted" });
  } catch (err) {
    console.error("Error deleting trade", err);
    res.status(500).json({ sucess: false, message: err.message });
  }
};

// Update
// made code by seeing taskify project for reference
const updateTrade = async (req, res) => {
  try {
    const trades = await Trades.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(trades);
  } catch (err) {
    console.error("Error updating trade", err);
    res.status(500).json({ sucess: false, message: err.message });
  }
};

// Get one
// made code by seeing taskify project for reference
const getoneTrade = async (req, res, next) => {
  try {
    const trades = await Trades.findById(req.params.id);
    if(!trades) return res.status(404).json({ sucess: false, message: 'Trade not found'})
    res.json(trades);
  } catch (err) {
    console.error("Error fetching trade", err);
    res.status(500).json({ sucess: false, message: err.message });
    next(err);
  }
};

module.exports = {
  createTrade,
  getTrade,
  deleteTrade,
  updateTrade,
  getoneTrade,
};
