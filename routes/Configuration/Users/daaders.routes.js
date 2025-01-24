const express = require('express');
const router = express.Router();
const DaaderController = require('../../../controllers/Configuration/Users/daader.controller');

// Routes Producteurs
router.get('/', DaaderController.getAllDaaders);
router.get('/:id', DaaderController.getDaaderById);
router.get('/ddader/:id', DaaderController.getDaaderByDdader);
router.get('/campagnes/:id', DaaderController.getCampagnes);
router.post('/', DaaderController.createDaader);
router.put('/:id', DaaderController.updateDaader);
router.delete('/:id', DaaderController.deleteDaader);

module.exports = router;
