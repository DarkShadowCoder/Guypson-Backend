const Semence = require('../../models/semences.model');

// Récupérer toutes les Semences
exports.getAllSemences = (req, res) => {
  Semence.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Semences' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer une Semence par ID
exports.getSemenceById = (req, res) => {
  const id = req.params.id;
  Semence.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Semence non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer une Semence par Speculations
exports.getSemenceBySpec = (req, res) => {
    const id = req.params.id;
    Semence.getBySpeculation(id, (err, result) => {
      if (err || result.length === 0) {
        res.status(404).send({ message: 'Semence non trouvé' });
        return;
      }
      res.status(200).json(result[0]);
    });
  };

// Créer une nouvelle Semence
exports.createSemence = (req, res) => {
  const data = req.body;
  Semence.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de la Semence' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Semence
exports.updateSemence = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Semence.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de l’Semence' });
      return;
    }
    res.status(200).json({ message: 'Semence mis à jour avec succès' });
  });
};

// Supprimer une Semence
exports.deleteSemence = (req, res) => {
  const id = req.params.id;
  Semence.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Semence non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Semence supprimé avec succès' });
  });
};
