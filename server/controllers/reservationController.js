const Reservation = require('../models/Reservation')

exports.create = async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body)
    res.status(201).json({ success: true, data: reservation })
  } catch (err) {
    res.status(400).json({ success: false, message: err.message })
  }
}

exports.getAll = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 })
    res.json({ success: true, data: reservations })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

exports.updateStatus = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true })
    res.json({ success: true, data: reservation })
  } catch (err) {
    res.status(400).json({ success: false, message: err.message })
  }
}

exports.remove = async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id)
    res.status(200).json({ success: true, message: 'Deleted' })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}
