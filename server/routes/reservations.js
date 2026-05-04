const router = require('express').Router()
const { create, getAll, updateStatus, remove } = require('../controllers/reservationController')

router.post('/', create)
router.get('/', getAll)
router.patch('/:id', updateStatus)
router.delete('/:id', remove)

module.exports = router
