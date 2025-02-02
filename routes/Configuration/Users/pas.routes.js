const express = require('express');
const router = express.Router();
const PasController = require('../../../controllers/Configuration/Users/pas.controller');

// Routes Producteurs
router.get('/', PasController.getAllPass);
router.get('/:id', PasController.getPasById);
router.get('/daader/:id', PasController.getPasByDaader);
router.get('/campagnes/:id', PasController.getCampagnes);
router.post('/', PasController.createPas);
router.put('/:id', PasController.updatePas);
router.delete('/:id', PasController.deletePas);

// Routes de listing
router.get('/villages/:id', PasController.getVillages);

module.exports = router;