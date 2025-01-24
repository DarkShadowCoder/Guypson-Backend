const Spec = require('../../models/speculations.model');

// Récupérer toutes les Speculations
exports.getAllSpecs = (req, res) => {
  Spec.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Speculations' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer une Speculation par ID
exports.getSpecById = (req, res) => {
  const id = req.params.id;
  Spec.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Speculation non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};


// Créer une nouvelle Speculation
exports.createSpec = (req, res) => {
  const data = req.body;
  Spec.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de la Speculation' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Speculation
exports.updateSpec = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  console.log(data);
  Spec.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de Speculation' , erreur: err});
      return;
    }
    res.status(200).json({ message: 'Speculation mis à jour avec succès' });
  });
};

// Supprimer une Speculation
exports.deleteSpec = (req, res) => {
  const id = req.params.id;
  Spec.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Speculation non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Speculation supprimé avec succès' });
  });
};
