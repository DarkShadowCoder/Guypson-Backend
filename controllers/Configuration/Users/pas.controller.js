const Pas = require('../../models/userModel/pas.model');

// Récupérer toutes les Pas
exports.getAllPass = (req, res) => {
  Pas.getAll((err, results) => { 
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Pass' });
      return;
    }
    req.session.views = (req.session.views || 0) + 1
    res.status(200).json(results);
  });
};

// Récupérer une Pas par ID
exports.getPasById = (req, res) => {
  const id = req.params.id;
  Pas.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Pas non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer une Pas par Daader
exports.getPasByDaader = (req, res) => {
    const id = req.params.id;
    Pas.getByDaader(id, (err, result) => {
      if (err || result.length === 0) {
        res.status(404).send({ message: 'Pas non trouvé' });
        return;
      }
      res.status(200).json(result[0]);
    });
  };

// Créer une nouvelle Pas
exports.createPas = (req, res) => {
  const data = req.body;
  Pas.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de la Pas' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Pas
exports.updatePas = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Pas.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de l’Pas' });
      return;
    }
    res.status(200).json({ message: 'Pas mis à jour avec succès' });
  });
};

// Supprimer une Pas
exports.deletePas = (req, res) => {
  const id = req.params.id;
  Pas.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Pas non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Pas supprimé avec succès' });
  });
};

// Récupérer une Campagne par Village
exports.getCampagnes = (req, res) => {
  const id = req.params.id;
  Pas.getCampagnes(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json(result);
  });
};