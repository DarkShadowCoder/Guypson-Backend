const Recolte = require('../../../models/recoltes.model');

// Récupérer toutes les Recoltes
exports.getAllRecoltes = (req, res) => {
  Recolte.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Recoltes' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer une Recolte par ID
exports.getRecolteById = (req, res) => {
  const id = req.params.id;
  Recolte.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Recolte non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer une Recolte par Campagnes
exports.getRecolteByCampagne = (req, res) => {
  const id = req.params.id;
  Recolte.getByCampagne(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Recolte non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};




// Créer une nouvelle Recolte
exports.createRecolte = (req, res) => {
  const data = req.body;
  Recolte.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de la Recolte' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Recolte
exports.updateRecolte = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Recolte.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de l’Recolte' });
      return;
    }
    res.status(200).json({ message: 'Recolte mis à jour avec succès' });
  });
};

// Supprimer une Recolte
exports.deleteRecolte = (req, res) => {
  const id = req.params.id;
  Recolte.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Recolte non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Recolte supprimé avec succès' });
  });
};
