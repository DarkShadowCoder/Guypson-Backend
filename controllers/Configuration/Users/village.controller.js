const Village = require('../../../models/userModel/village.model');

// Récupérer toutes les Village
exports.getAllVillages = (req, res) => {
  Village.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Villages' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer une Village par ID
exports.getVillageById = (req, res) => {
  const id = req.params.id;
  Village.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Village non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer une Village par Pas
exports.getVillageByPas = (req, res) => {
  const id = req.params.id;
  Village.getByPas(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Village non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Créer une nouvelle Village
exports.createVillage = (req, res) => {
  const data = req.body;
  Village.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de la Village' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Village
exports.updateVillage = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Village.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de l’Village' });
      return;
    }
    res.status(200).json({ message: 'Village mis à jour avec succès' });
  });
};

// Supprimer une Village
exports.deleteVillage = (req, res) => {
  const id = req.params.id;
  Village.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Village non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Village supprimé avec succès' });
  });
};
