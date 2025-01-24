const Daader = require('../../models/userModel/daader.model');

// Récupérer toutes les Daaders
exports.getAllDaaders = (req, res) => {
  Daader.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Daaders' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer une Daader par ID
exports.getDaaderById = (req, res) => {
  const id = req.params.id;
  Daader.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Daader non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer une Daader par Ddader
exports.getDaaderByDdader = (req, res) => {
  const id = req.params.id;
  Daader.getByDdader(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Daader non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Créer une nouvelle Daader
exports.createDaader = (req, res) => {
  const data = req.body;
  Daader.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de la Daader' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Daader
exports.updateDaader = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Daader.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de le Daader' });
      return;
    }
    res.status(200).json({ message: 'Daader mis à jour avec succès' });
  });
};

// Supprimer une Daader
exports.deleteDaader = (req, res) => {
  const id = req.params.id;
  Daader.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Daader non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Daader supprimé avec succès' });
  });
};

// Récupérer une Campagne par Village
exports.getCampagnes = (req, res) => {
  const id = req.params.id;
  Daader.getCampagnes(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json(result);
  });
};