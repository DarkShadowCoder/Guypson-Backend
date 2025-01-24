const express = require('express');
const router = express.Router();
const DraderController = require('../../../controllers/Configuration/Users/draders.controller');

// Routes Producteurs
router.get('/', DraderController.getAllDraders);
router.get('/:id', DraderController.getDraderById);
router.post('/', DraderController.createDrader);
router.put('/:id', DraderController.updateDrader);
router.delete('/:id', DraderController.deleteDrader);

// Routes de listing
router.get('/ddaders/:id', DraderController.getDdaders);

module.exports = router;