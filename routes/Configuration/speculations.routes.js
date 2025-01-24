const express = require('express');
const router = express.Router();
const SpecController = require('../../controllers/Configuration/speculations.controller');

// Routes Speculations
router.get('/', SpecController.getAllSpecs);
router.get('/:id', SpecController.getSpecById);
router.post('/', SpecController.createSpec);
router.put('/:id', SpecController.updateSpec);
router.delete('/:id', SpecController.deleteSpec);

module.exports = router;
